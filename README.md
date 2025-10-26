# Hirmatic.com - AI-Powered HR Tech Website

Complete production-ready website for Hirmatic, an AI-powered HR tech consulting firm specializing in precision hiring for companies building breakthrough technology.

## 🎯 Overview

**Tech Stack:**
- Frontend: React 19 + React Router + TailwindCSS + Shadcn UI
- Backend: FastAPI (Python) + Motor (Async MongoDB)
- Database: MongoDB
- Styling: Custom CSS with Google Fonts (Montserrat + Open Sans)

**Brand Identity:**
- Primary: Obsidian Black (#0A0A0A)
- Accent: Carnelian (#b31b1b)
- Hover: Soft Teal (#A8DADC)

## ✨ Features Implemented

### 12 Complete Pages
1. **Homepage**: Hero with rotating industries, live stats, services overview
2. **About**: Results dashboard with performance metrics
3. **Employers**: B2B page with interactive qualification quiz & pricing
4. **Candidates**: B2C career services and resources
5. **Contact**: Full contact form with AI lead scoring
6. **Upload Resume**: Free resume review with PDF upload
7. **Careers**: Join Hirmatic page
8. **Blog**: Talent Intelligence Hub with 6 full articles
9-12. **Service Pages**: Recruiting, Fractional CHRO, Resume Building, Layoff Support

### Interactive Tools
- **Salary Calculator**: Real-time data for 5 roles × 5 locations
- **Employer Quiz**: 3-question qualification with smart scoring
- **Lead Scoring**: Automatic HIGH/MEDIUM/LOW intent classification

### 6 Blog Posts (2000+ words each)
**B2B:** AI Recruiting Precision, HR Tech AI Workforce, Hybrid Hiring Systems, Employer Brand AEO  
**B2C:** ATS-Proof Resume Guide, 30-Day Layoff Comeback Plan

## 🚀 Quick Start (Local Development)

**Backend:**
```bash
cd /app/backend
# Already running via supervisor
curl http://localhost:8001/api/
```

**Frontend:**
```bash
cd /app/frontend  
# Already running via supervisor
# Visit: http://localhost:3000
```

## 📦 Deployment Instructions

**See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for complete FREE deployment to:**
- Frontend: Vercel (free)
- Backend: Render (free)
- Database: MongoDB Atlas (free 512MB)

**Estimated deployment time:** 30-45 minutes  
**Monthly cost:** $0 with free tiers

## 📊 API Endpoints

- `GET /api/` - Health check
- `GET /api/stats` - Platform statistics
- `POST /api/contact` - Submit contact (with lead scoring)
- `POST /api/upload-resume` - Upload resume
- `POST /api/quiz/calculate` - Calculate quiz result

## 🎨 Design Highlights

- Professional dark hero sections with gradient overlays
- Modern card-based layouts with smooth hover effects
- Mobile-responsive (breakpoint: 768px)
- Sticky navigation with hamburger menu
- Touch-friendly buttons (44x44px minimum)
- Google Fonts: Montserrat (headings) + Open Sans (body)

## 📁 Project Structure

```
/app/
├── backend/
│   ├── server.py              # FastAPI with all endpoints
│   ├── requirements.txt       # Python deps
│   └── uploads/               # Resume storage
├── frontend/
│   ├── src/
│   │   ├── App.js            # Main app routing
│   │   ├── components/       # Header, Footer, UI
│   │   ├── pages/            # 12 pages + tools + blog
│   │   └── index.js
│   └── package.json
└── DEPLOYMENT_GUIDE.md       # Full deployment steps
```

## 🧪 Testing Status

✅ All 12 pages loading correctly  
✅ Navigation working (mobile + desktop)  
✅ Forms submitting with validation  
✅ Quiz calculating correct scores  
✅ Salary calculator functional  
✅ Resume upload with PDF validation  
✅ Backend API responding  
✅ MongoDB operations working  

## 📧 Email Configuration

**Displayed emails:** contact@hirmatic.com, sales@hirmatic.com  
**Actual submissions:** Stored in MongoDB  

To receive email notifications, add SendGrid/Mailgun (instructions in DEPLOYMENT_GUIDE.md)

## 🎯 Ready to Deploy!

Your website is **production-ready** and tested. Follow the [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) to deploy to free hosting in under 1 hour.

---

**Hirmatic (A KSA INC Company)** © 2025
