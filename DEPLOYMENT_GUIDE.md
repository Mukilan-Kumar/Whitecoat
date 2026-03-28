# WhiteCoat Deployment Guide

## 🚀 Deploy to Vercel (Recommended)

### Prerequisites Checklist
- [x] Code pushed to GitHub: https://github.com/Mukilan-Kumar/Whitecoat
- [ ] Supabase account created
- [ ] Supabase tables created (run supabase-setup.sql)
- [ ] Gmail app password generated
- [ ] Vercel account created

### Step-by-Step Deployment

#### 1. Deploy to Vercel

**A. Sign Up/Login to Vercel**
1. Go to https://vercel.com
2. Click "Sign Up" or "Login"
3. Choose "Continue with GitHub"
4. Authorize Vercel to access your GitHub

**B. Import Your Project**
1. Click "Add New..." → "Project"
2. Search for "Whitecoat" repository
3. Click "Import" next to `Mukilan-Kumar/Whitecoat`

**C. Configure Build Settings**
- Framework Preset: **Next.js** (auto-detected)
- Root Directory: `./` (default)
- Build Command: `npm run build` (default)
- Output Directory: `.next` (default)

**D. Add Environment Variables**

Click "Environment Variables" and add these **5 variables**:

| Name | Value | Where to Get |
|------|-------|--------------|
| `NEXT_PUBLIC_SUPABASE_URL` | `https://xeokvkqdgsmaoylypuhq.supabase.co` | Supabase Dashboard → Settings → API |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | `sb_publishable_jRPFQw...` | Supabase Dashboard → Settings → API |
| `EMAIL_USER` | `mukilan021@gmail.com` | Your Gmail address |
| `EMAIL_PASSWORD` | `xxxx xxxx xxxx xxxx` | Gmail App Password (16 chars) |
| `EMAIL_TO` | `mukilan021@gmail.com` | Where to receive contact forms |

**E. Deploy**
1. Click "Deploy"
2. Wait 2-3 minutes for build
3. ✅ Your site is live!

#### 2. Get Your Supabase Credentials

**A. Get Supabase URL & Key**
1. Go to https://supabase.com/dashboard
2. Select your project
3. Click "Settings" (⚙️) → "API"
4. Copy:
   - **Project URL**: `https://xeokvkqdgsmaoylypuhq.supabase.co`
   - **anon public key**: Long string starting with `sb_publishable_...`

**B. Create Database Tables**
1. In Supabase dashboard, click "SQL Editor"
2. Click "New Query"
3. Copy contents of `supabase-setup.sql` file
4. Paste and click "Run"
5. Should see "Success. No rows returned"

#### 3. Set Up Gmail App Password

**A. Enable 2-Step Verification**
1. Go to https://myaccount.google.com/security
2. Find "2-Step Verification"
3. Click "Get Started" and follow steps

**B. Generate App Password**
1. Go to https://myaccount.google.com/apppasswords
2. Select app: "Mail"
3. Select device: "Other (Custom name)"
4. Enter: "WhiteCoat Website"
5. Click "Generate"
6. Copy the 16-character password (format: xxxx xxxx xxxx xxxx)
7. Add to Vercel environment variables

#### 4. Verify Deployment

**A. Test Your Live Site**
1. Visit your Vercel URL (e.g., `whitecoat-xyz.vercel.app`)
2. Navigate to Contact page
3. Fill out and submit the form
4. Check:
   - [ ] Form submits successfully
   - [ ] You receive email notification
   - [ ] User receives confirmation email
   - [ ] Data appears in Supabase dashboard

**B. Check Supabase Data**
1. Go to Supabase → Table Editor
2. Click "contacts" table
3. You should see the test submission

**C. Test All Pages**
- [ ] Home page loads
- [ ] Partners page shows all partners
- [ ] About page loads
- [ ] Contact page works
- [ ] Loan Eligibility page loads
- [ ] All images load correctly

### 5. Custom Domain (Optional)

**A. Add Custom Domain in Vercel**
1. Go to your project in Vercel
2. Click "Settings" → "Domains"
3. Add your domain (e.g., `whitecoat.com`)
4. Follow DNS configuration instructions

**B. Update DNS Records**
Add these records in your domain registrar:
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### 6. Post-Deployment Checklist

- [ ] Site is live and accessible
- [ ] Contact form works and sends emails
- [ ] All pages load correctly
- [ ] Images display properly
- [ ] Mobile responsive works
- [ ] WhatsApp button works
- [ ] Call button works
- [ ] Email links work
- [ ] Partner logos display
- [ ] Supabase database receives data

### 🔧 Troubleshooting

**Build Failed**
- Check build logs in Vercel
- Ensure all dependencies are in package.json
- Verify environment variables are set

**Contact Form Not Working**
- Check Vercel logs: Project → Deployments → Click deployment → Functions
- Verify EMAIL_PASSWORD is correct (16-char app password)
- Check Supabase connection (verify URL and key)

**Images Not Loading**
- Ensure images are in `/public` folder
- Check image paths are correct
- Verify images are pushed to GitHub

**Database Errors**
- Verify Supabase tables are created
- Check RLS policies are enabled
- Ensure environment variables are correct

### 📊 Monitor Your Site

**Vercel Analytics**
1. Go to your project in Vercel
2. Click "Analytics" tab
3. View traffic, performance, and errors

**Supabase Dashboard**
1. Monitor database usage
2. View contact submissions
3. Check API logs

### 🔄 Update Your Site

**To Deploy Updates:**
1. Make changes locally
2. Commit: `git add . && git commit -m "Your message"`
3. Push: `git push`
4. Vercel automatically rebuilds and deploys!

### 🎯 Your Live URLs

After deployment, you'll have:
- **Production URL**: `https://whitecoat-xyz.vercel.app`
- **Preview URLs**: Generated for each push
- **Custom Domain**: (if configured)

### 📞 Support

**Vercel Issues:**
- Docs: https://vercel.com/docs
- Support: https://vercel.com/support

**Supabase Issues:**
- Docs: https://supabase.com/docs
- Support: https://supabase.com/support

**Gmail Issues:**
- App Passwords: https://support.google.com/accounts/answer/185833

### 🎉 Success!

Your WhiteCoat website is now live and ready to:
- ✅ Capture leads from NRI doctors
- ✅ Send automated email notifications
- ✅ Store all inquiries in database
- ✅ Showcase your developer partners
- ✅ Provide professional real estate services

**Next Steps:**
1. Share your live URL with potential customers
2. Test all functionality thoroughly
3. Monitor contact form submissions
4. Follow up with leads promptly
5. Update partners as needed

---

**Need Help?** Check the troubleshooting section or review the logs in Vercel dashboard.
