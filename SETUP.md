# 🚀 WhiteCoat Setup Guide

Complete guide to set up and run the WhiteCoat website locally and in production.

## 📋 Prerequisites

Before you begin, ensure you have:
- **Node.js 18+** installed ([Download](https://nodejs.org/))
- **npm** or **yarn** package manager
- **Gmail account** for email functionality
- **Code editor** (VS Code recommended)
- **Git** installed

## 🔧 Local Development Setup

### Step 1: Navigate to Project
```bash
cd whitecoat
```

### Step 2: Install Dependencies
```bash
npm install
```

This will install:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React (icons)
- Nodemailer

### Step 3: Configure Email Service

#### Option A: Gmail Setup (Recommended)

1. **Enable 2-Step Verification:**
   - Go to [Google Account Security](https://myaccount.google.com/security)
   - Enable 2-Step Verification

2. **Generate App Password:**
   - Visit [App Passwords](https://myaccount.google.com/apppasswords)
   - Select "Mail" and "Other (Custom name)"
   - Name it "WhiteCoat Website"
   - Copy the 16-character password

3. **Create Environment File:**
   ```bash
   # Copy the example file
   cp .env.local.example .env.local
   ```

4. **Edit `.env.local`:**
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-16-char-app-password
   EMAIL_TO=info@whitecoat.com
   ```

#### Option B: Other Email Services

For other email providers, modify `app/api/contact/route.ts`:

**Outlook/Hotmail:**
```typescript
const transporter = nodemailer.createTransport({
  host: 'smtp-mail.outlook.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});
```

**Custom SMTP:**
```typescript
const transporter = nodemailer.createTransport({
  host: 'smtp.yourdomain.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});
```

### Step 4: Run Development Server
```bash
npm run dev
```

The website will be available at: **http://localhost:3000**

### Step 5: Test the Website

1. **Homepage:** http://localhost:3000
2. **Properties:** http://localhost:3000/properties
3. **About:** http://localhost:3000/about
4. **Contact:** http://localhost:3000/contact

## 🧪 Testing Contact Form

1. Navigate to the Contact page
2. Fill in all required fields:
   - Doctor Name
   - Email
   - Country
   - Budget Range
   - Message
3. Click "Send Message"
4. Check the recipient email inbox

## 🏗️ Production Build

### Build for Production
```bash
npm run build
```

This creates an optimized production build in the `.next` folder.

### Test Production Build Locally
```bash
npm start
```

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin your-repo-url
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   - Visit [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Add environment variables:
     - `EMAIL_USER`
     - `EMAIL_PASSWORD`
     - `EMAIL_TO`
   - Click "Deploy"

3. **Custom Domain (Optional):**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

### Option 2: Netlify

1. **Build Command:** `npm run build`
2. **Publish Directory:** `.next`
3. **Add environment variables in Netlify dashboard**

### Option 3: Self-Hosted (VPS/Cloud)

```bash
# On your server
git clone your-repo-url
cd whitecoat
npm install
npm run build

# Use PM2 for process management
npm install -g pm2
pm2 start npm --name "whitecoat" -- start
pm2 save
pm2 startup
```

## 🔒 Security Best Practices

### Environment Variables
- **Never commit** `.env.local` to Git
- Use different credentials for development and production
- Rotate passwords regularly

### Email Security
- Use App Passwords, not your main Gmail password
- Enable 2FA on your email account
- Monitor email sending limits (Gmail: 500/day)

### Production Checklist
- [ ] Environment variables configured
- [ ] Email service tested
- [ ] Custom domain configured (if applicable)
- [ ] SSL certificate active
- [ ] Analytics added (optional)
- [ ] Error monitoring setup (optional)

## 🎨 Customization Guide

### Change Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: { /* Your blue shades */ },
  gold: { /* Your gold shades */ },
}
```

### Update Content
- **Properties:** Edit `components/properties/PropertiesGrid.tsx`
- **Testimonials:** Edit `components/home/Testimonials.tsx`
- **Team:** Edit `components/about/Team.tsx`
- **Contact Info:** Edit `components/contact/ContactInfo.tsx`

### Add New Pages
```bash
# Create new page
mkdir app/new-page
touch app/new-page/page.tsx
```

### Modify Email Template
Edit `app/api/contact/route.ts` - look for the `mailOptions.html` section

## 📊 Performance Optimization

### Image Optimization
- Use Next.js Image component (already implemented)
- Compress images before uploading
- Use WebP format when possible

### Font Optimization
- Fonts are already optimized with `next/font`
- Preloaded automatically

### Bundle Size
```bash
# Analyze bundle size
npm run build
```

## 🐛 Troubleshooting

### Email Not Sending
1. Check `.env.local` file exists and has correct values
2. Verify Gmail App Password is correct
3. Check Gmail account has 2FA enabled
4. Look at server logs for error messages

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Port Already in Use
```bash
# Use different port
npm run dev -- -p 3001
```

### Images Not Loading
- Check `next.config.mjs` has correct image domains
- Verify image URLs are accessible

## 📱 Mobile Testing

### Local Network Testing
```bash
# Find your local IP
ipconfig  # Windows
ifconfig  # Mac/Linux

# Access from mobile
http://YOUR-IP:3000
```

### Browser DevTools
- Chrome DevTools → Toggle Device Toolbar (Ctrl+Shift+M)
- Test different screen sizes

## 🔄 Updates & Maintenance

### Update Dependencies
```bash
npm update
npm audit fix
```

### Check for Security Issues
```bash
npm audit
```

## 📞 Support

If you encounter issues:
1. Check this guide thoroughly
2. Review error messages in console
3. Check Next.js documentation
4. Verify environment variables

## 🎉 Launch Checklist

Before going live:
- [ ] All pages load correctly
- [ ] Contact form sends emails
- [ ] Mobile responsive on all pages
- [ ] Images load properly
- [ ] Navigation works smoothly
- [ ] SEO metadata is correct
- [ ] Analytics configured (if needed)
- [ ] Custom domain connected
- [ ] SSL certificate active
- [ ] Performance tested (Lighthouse)
- [ ] Cross-browser tested

---

**Congratulations!** Your WhiteCoat website is ready to help NRI doctors invest in premium Indian real estate! 🏥🏠
