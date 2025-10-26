# Hirmatic.com - Complete Deployment Guide

## 🎉 Your Website is Ready!

I've built the complete Hirmatic website with React + FastAPI + MongoDB. Everything is working perfectly in the development environment. Now let's deploy it to free hosting platforms.

---

## 📋 What You Have

### Complete Website Features:
✅ **12 Pages**: Home, About, Employers, Candidates, Contact, Resume Upload, Careers, Blog, 4 Service Pages, Salary Calculator  
✅ **6 Blog Posts**: Full 2000+ word articles (4 B2B, 2 B2C)  
✅ **Interactive Features**: Employer quiz, salary calculator, contact forms, resume upload  
✅ **Modern Design**: Professional UI with your brand colors (Obsidian Black, Crimson Red, Soft Teal)  
✅ **Mobile Responsive**: Works beautifully on all devices  
✅ **Lead Scoring**: Automatic intent scoring for contact submissions  
✅ **Form Handling**: Contact forms and resume uploads with backend processing  

---

## 🚀 FREE Deployment Strategy

### Architecture Overview:
- **Frontend (React)**: Deploy on Vercel (FREE)
- **Backend (FastAPI)**: Deploy on Render (FREE)
- **Database (MongoDB)**: Use MongoDB Atlas (FREE 512MB)
- **Domain**: Point your Hostinger domain to Vercel

---

## 📦 Step 1: Prepare Your Code

All your code is in `/app` directory:
- `/app/frontend` - React application
- `/app/backend` - FastAPI backend
- Both are ready to deploy!

**Download/Git Clone Your Code:**
You'll need to push this code to GitHub first. If you need help with that, I can guide you.

---

## 🗄️ Step 2: MongoDB Atlas Setup (5 minutes)

1. **Sign up at MongoDB Atlas**: https://www.mongodb.com/cloud/atlas/register
   - Use your Google account for quick signup
   - Select "Shared" (FREE tier - 512MB storage)
   - Choose AWS and nearest region to your users

2. **Create a Cluster**:
   - Wait 3-5 minutes for cluster creation
   - Click "Connect" → "Connect your application"
   - Copy the connection string (looks like: `mongodb+srv://username:password@cluster.mongodb.net/`)
   - Save this - you'll need it for backend deployment

3. **Set up Security**:
   - Add IP address: `0.0.0.0/0` (allows access from anywhere)
   - Create database user with username/password
   - Remember these credentials!

---

## ⚙️ Step 3: Backend Deployment on Render (10 minutes)

1. **Sign up at Render**: https://render.com (use GitHub account)

2. **Create New Web Service**:
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Select `/app/backend` as root directory

3. **Configure Service**:
   ```
   Name: hirmatic-api
   Environment: Python 3
   Build Command: pip install -r requirements.txt
   Start Command: uvicorn server:app --host 0.0.0.0 --port $PORT
   ```

4. **Add Environment Variables**:
   ```
   MONGO_URL = [Your MongoDB Atlas connection string]
   DB_NAME = hirmatic
   CORS_ORIGINS = *
   ```

5. **Deploy**: Click "Create Web Service"
   - Wait 5-10 minutes for first deployment
   - You'll get a URL like: `https://hirmatic-api.onrender.com`
   - **Save this URL - you need it for frontend!**

6. **Test Backend**:
   - Visit: `https://hirmatic-api.onrender.com/api/`
   - You should see: `{"message":"Hirmatic API v1.0","status":"active"}`

---

## 🌐 Step 4: Frontend Deployment on Vercel (10 minutes)

1. **Sign up at Vercel**: https://vercel.com (use GitHub account)

2. **Import Project**:
   - Click "Add New" → "Project"
   - Import your GitHub repository
   - Vercel will auto-detect it's a React app

3. **Configure Build Settings**:
   ```
   Root Directory: frontend
   Framework Preset: Create React App
   Build Command: npm run build
   Output Directory: build
   Install Command: yarn install
   ```

4. **Environment Variables** (CRITICAL):
   ```
   REACT_APP_BACKEND_URL = [Your Render backend URL]
   ```
   Example: `REACT_APP_BACKEND_URL=https://hirmatic-api.onrender.com`

5. **Deploy**: Click "Deploy"
   - Takes 2-3 minutes
   - You'll get a URL like: `https://hirmatic.vercel.app`

6. **Test Frontend**:
   - Visit your Vercel URL
   - Website should load completely!
   - Test a form submission to verify backend connection

---

## 🌍 Step 5: Connect Your Domain (Hostinger)

### Option A: Point Domain to Vercel (Recommended)

1. **In Vercel Dashboard**:
   - Go to your project → Settings → Domains
   - Add your domain: `hirmatic.com`
   - Vercel will give you DNS records

2. **In Hostinger**:
   - Go to Domain → DNS Settings
   - Add the DNS records Vercel provided
   - Usually it's:
     ```
     Type: CNAME
     Name: www
     Value: cname.vercel-dns.com
     
     Type: A
     Name: @
     Value: 76.76.21.21
     ```

3. **Wait**: DNS propagation takes 1-48 hours (usually < 2 hours)

### Option B: Use Hostinger for Static Files

If you prefer using your Hostinger hosting:
1. Build the frontend: `cd /app/frontend && npm run build`
2. Upload the `build` folder contents to Hostinger via FTP
3. Update environment variables in Hostinger to point to Render backend
4. Note: This is more manual and harder to update

---

## 🔧 Step 6: Post-Deployment Configuration

### Update Contact Form Email:
Currently all forms save to database. To get email notifications:

1. **Add Email Service** (Free options):
   - SendGrid (100 emails/day free)
   - Mailgun (5000 emails/month free)
   - AWS SES (62,000 emails/month free)

2. **Update Backend Code**:
   - Add email service credentials to Render environment variables
   - Uncomment email sending code in `/app/backend/server.py`

### Test Everything:
- ✅ Homepage loads
- ✅ All navigation links work
- ✅ Contact form submits (check MongoDB)
- ✅ Resume upload works (check MongoDB)
- ✅ Employer quiz calculates results
- ✅ Salary calculator displays results
- ✅ Blog posts load correctly

---

## 📊 Monitoring & Maintenance

### Free Tier Limitations:
- **Render Free Tier**: Spins down after 15 min inactivity (first request takes ~30s)
- **MongoDB Atlas**: 512MB storage (plenty for thousands of leads)
- **Vercel**: Unlimited bandwidth, 100GB/month
  
### Recommended Upgrades (When Needed):
- Render: $7/month (always-on, no spin down)
- MongoDB: $9/month (2GB storage)
- Vercel: Usually stays free

---

## 🐛 Troubleshooting

### Frontend shows blank page:
- Check browser console for errors
- Verify `REACT_APP_BACKEND_URL` is set correctly
- Make sure it includes `https://` and NO trailing slash

### Forms don't submit:
- Check Render backend logs
- Verify CORS is configured correctly
- Check MongoDB connection string

### 500 errors from backend:
- Check Render logs: Dashboard → Logs
- Usually database connection issues
- Verify all environment variables are set

---

## 📝 Important Notes

1. **All form submissions go to MongoDB** - You need to check your database or set up email notifications
2. **The displayed emails** (contact@hirmatic.com, sales@hirmatic.com) are for show only - actual submissions are stored in DB
3. **Lead scoring is automatic** - Check the `intent_level` field in your database
4. **Resume files** are stored on Render's filesystem (not persistent) - Consider adding S3 storage later

---

## 🎯 Next Steps

1. Deploy following the steps above
2. Test everything thoroughly
3. Set up email notifications (optional)
4. Add Google Analytics (optional)
5. Set up monitoring (UptimeRobot - free)

---

## 💡 Need Help?

If you run into issues:
1. Check Render/Vercel deployment logs
2. Verify all environment variables
3. Test API endpoint directly in browser
4. Check browser console for frontend errors

---

## 🎊 You're All Set!

Your website is production-ready. The code is clean, tested, and follows best practices. Deploy it and start getting leads!

**Estimated Total Deployment Time**: 30-45 minutes  
**Monthly Cost**: $0 (with free tiers)  
**Upgrade Cost**: ~$16/month when you need it
