from fastapi import FastAPI, APIRouter, UploadFile, File, Form, HTTPException
from fastapi.responses import JSONResponse
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone
import aiofiles
import shutil

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create uploads directory
UPLOADS_DIR = ROOT_DIR / 'uploads'
UPLOADS_DIR.mkdir(exist_ok=True)

# Create the main app
app = FastAPI()
api_router = APIRouter(prefix="/api")

# Models
class ContactLead(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    phone: Optional[str] = None
    interest: str
    budget: Optional[str] = None
    message: str
    intent_score: int = 0
    intent_level: str = "LOW"
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class ContactLeadCreate(BaseModel):
    name: str
    email: EmailStr
    phone: Optional[str] = None
    interest: str
    budget: Optional[str] = None
    message: str
    consent: bool = True

class ResumeSubmission(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    phone: Optional[str] = None
    filename: str
    filepath: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class QuizResult(BaseModel):
    timeline: str
    domain: str
    stage: str
    score: int
    level: str
    recommendation: str

# Lead Scoring Algorithm
def calculate_lead_score(interest: str, budget: Optional[str], message: str) -> tuple[int, str]:
    score = 0
    
    # Interest-based scoring
    if interest in ["Recruiting Help", "Fractional CHRO"]:
        score += 30
    elif interest in ["Resume Building", "Layoff Support"]:
        score += 20
    else:
        score += 10
    
    # Budget mention
    if budget and len(budget.strip()) > 0:
        score += 25
        if any(word in budget.lower() for word in ["urgent", "asap", "immediate"]):
            score += 15
    
    # Message analysis
    message_lower = message.lower()
    urgency_keywords = ["urgent", "asap", "immediately", "quickly", "soon", "deadline"]
    high_intent_keywords = ["hire", "hiring", "recruiting", "engineer", "team", "grow", "scale"]
    budget_keywords = ["budget", "$", "cost", "price", "investment"]
    
    if any(word in message_lower for word in urgency_keywords):
        score += 20
    if any(word in message_lower for word in high_intent_keywords):
        score += 15
    if any(word in message_lower for word in budget_keywords):
        score += 10
    
    # Determine level
    if score >= 70:
        level = "HIGH"
    elif score >= 40:
        level = "MEDIUM"
    else:
        level = "LOW"
    
    return score, level

# Routes
@api_router.get("/")
async def root():
    return {"message": "Hirmatic API v1.0", "status": "active"}

@api_router.post("/contact", response_model=ContactLead)
async def submit_contact(lead: ContactLeadCreate):
    try:
        # Calculate lead score
        score, level = calculate_lead_score(lead.interest, lead.budget, lead.message)
        
        # Create lead object
        lead_dict = lead.model_dump()
        lead_obj = ContactLead(
            **lead_dict,
            intent_score=score,
            intent_level=level
        )
        
        # Save to database
        doc = lead_obj.model_dump()
        doc['timestamp'] = doc['timestamp'].isoformat()
        await db.contact_leads.insert_one(doc)
        
        # In production, send email here using SMTP or email service
        # For now, just log it
        logging.info(f"New lead: {level} intent - {lead.name} ({lead.email})")
        
        return lead_obj
    except Exception as e:
        logging.error(f"Error submitting contact: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to submit contact form")

@api_router.post("/upload-resume")
async def upload_resume(
    name: str = Form(...),
    email: EmailStr = Form(...),
    phone: Optional[str] = Form(None),
    resume: UploadFile = File(...)
):
    try:
        # Validate file type
        if not resume.filename.lower().endswith('.pdf'):
            raise HTTPException(status_code=400, detail="Only PDF files are allowed")
        
        # Validate file size (5MB max)
        content = await resume.read()
        if len(content) > 5 * 1024 * 1024:
            raise HTTPException(status_code=400, detail="File size must be less than 5MB")
        
        # Generate unique filename
        file_ext = Path(resume.filename).suffix
        unique_filename = f"{uuid.uuid4()}{file_ext}"
        filepath = UPLOADS_DIR / unique_filename
        
        # Save file
        async with aiofiles.open(filepath, 'wb') as f:
            await f.write(content)
        
        # Save to database
        submission = ResumeSubmission(
            name=name,
            email=email,
            phone=phone,
            filename=resume.filename,
            filepath=str(filepath)
        )
        
        doc = submission.model_dump()
        doc['timestamp'] = doc['timestamp'].isoformat()
        await db.resume_submissions.insert_one(doc)
        
        logging.info(f"Resume uploaded: {name} ({email})")
        
        return JSONResponse(
            content={
                "message": "Resume uploaded successfully! We'll review it within 24 hours.",
                "id": submission.id
            },
            status_code=200
        )
    except HTTPException:
        raise
    except Exception as e:
        logging.error(f"Error uploading resume: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to upload resume")

@api_router.post("/quiz/calculate")
async def calculate_quiz(result: QuizResult):
    try:
        score = 0
        
        # Timeline scoring
        timeline_scores = {
            "urgent": 40,
            "planned": 25,
            "strategic": 10
        }
        score += timeline_scores.get(result.timeline.lower(), 0)
        
        # Domain scoring
        if result.domain.lower() == "multiple":
            score += 20
        else:
            score += 15
        
        # Stage scoring
        stage_scores = {
            "seed": 10,
            "series a": 20,
            "series b+": 30,
            "scale-up": 35
        }
        score += stage_scores.get(result.stage.lower(), 0)
        
        # Determine level and recommendation
        if score >= 70:
            level = "HIGH"
            recommendation = "Perfect Timing! Book Premium Tier"
        elif score >= 40:
            level = "MEDIUM"
            recommendation = "You're on track. Explore Growth Tier"
        else:
            level = "LOW"
            recommendation = "Let's build strategy. Download playbook"
        
        return {
            "score": score,
            "level": level,
            "recommendation": recommendation
        }
    except Exception as e:
        logging.error(f"Error calculating quiz: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to calculate quiz result")

@api_router.get("/stats")
async def get_stats():
    """Get platform statistics"""
    return {
        "engineers_placed": 142,
        "avg_time_to_offer": 6,
        "offer_acceptance_rate": 94,
        "client_retention": 87,
        "total_placements": 500
    }

# Include router
app.include_router(api_router)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()