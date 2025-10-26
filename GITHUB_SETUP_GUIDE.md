# 🎯 SUPER EASY: Create GitHub Repository (15 Minutes)

Follow these steps EXACTLY. Don't skip any!

---

## ✅ STEP 1: Create GitHub Account (5 minutes)

1. Open browser → Go to: **https://github.com/signup**
2. Enter your **email address** → Click "Continue"
3. Create a **password** (must be strong) → Click "Continue"  
4. Choose a **username** (like "yourname-hirmatic") → Click "Continue"
5. Solve the puzzle to verify you're human
6. Click "Create account"
7. Check your email → Click the verification link
8. ✅ Your GitHub account is ready!

---

## ✅ STEP 2: Create New Repository (3 minutes)

1. After login, click the **"+"** button (top right corner)
2. Click **"New repository"**
3. Fill in these details:

   ```
   Repository name: hirmatic-website
   
   Description: Hirmatic.com - AI-powered HR tech website
   
   ✅ Public (keep it checked)
   
   ❌ DO NOT check "Add a README file"
   ❌ DO NOT check "Add .gitignore"
   ❌ DO NOT check "Choose a license"
   ```

4. Click **"Create repository"** (green button)
5. You'll see a page with commands - **KEEP THIS PAGE OPEN!**

---

## ✅ STEP 3: Copy These Commands (2 minutes)

On the GitHub page you just saw, look for a section that says:
**"…or push an existing repository from the command line"**

You'll see something like:
```
git remote add origin https://github.com/YOUR-USERNAME/hirmatic-website.git
git branch -M main
git push -u origin main
```

**Copy these 3 lines!** (They have YOUR username in them)

---

## ✅ STEP 4: Upload Your Code (5 minutes)

Now, I need you to run commands in your terminal/command prompt.

### Option A: If you're in this workspace terminal

Run these commands ONE BY ONE:

```bash
# 1. Go to your project folder
cd /app

# 2. Add all your files
git add .

# 3. Save your files with a message
git commit -m "Initial commit: Complete Hirmatic website"

# 4. Connect to GitHub (paste YOUR commands from Step 3)
git remote add origin https://github.com/YOUR-USERNAME/hirmatic-website.git

# 5. Upload to GitHub
git branch -M main
git push -u origin main
```

**IMPORTANT:** Replace `YOUR-USERNAME` with your actual GitHub username!

### When asked for credentials:
- Username: `your-github-username`
- Password: You need a **Personal Access Token** (see below)

---

## 🔑 STEP 5: Create Personal Access Token (If Needed)

If GitHub asks for password and it doesn't work:

1. Go to: **https://github.com/settings/tokens**
2. Click **"Generate new token"** → **"Generate new token (classic)"**
3. Name: `hirmatic-deploy`
4. Expiration: Choose "90 days"
5. Check these boxes:
   - ✅ **repo** (all checkboxes under it)
   - ✅ **workflow**
6. Scroll down → Click **"Generate token"**
7. **COPY THE TOKEN!** (You won't see it again!)
8. Use this token as your password when git asks

---

## ✅ STEP 6: Verify It Worked! (1 minute)

1. Go to: `https://github.com/YOUR-USERNAME/hirmatic-website`
2. You should see all your files!
3. You should see folders: `frontend`, `backend`, `README.md`, etc.
4. ✅ Success! Your code is on GitHub!

---

## 🎉 What's Next?

Now that your code is on GitHub, you can:
1. Deploy to Vercel (for frontend)
2. Deploy to Render (for backend)

**Tell me when you're done with this step, and I'll guide you through the next one!**

---

## 😰 Stuck? Common Issues:

**"Permission denied"**
→ You need a Personal Access Token (see Step 5)

**"Repository not found"**
→ Check your username is correct in the URL

**"Nothing to commit"**
→ Files are already added, skip to git push command

**Can't run git commands**
→ Make sure you're in the `/app` directory: `cd /app`

---

## 📞 Need Help?

Just tell me:
- "Git is asking for password"
- "Commands not working"
- "Don't know how to run terminal commands"

And I'll help you! 😊
