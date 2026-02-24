# 🚀 WhiteCoat Deployment Guide

Complete guide for deploying WhiteCoat to production.

## 📋 Pre-Deployment Checklist

- [ ] All features tested locally
- [ ] Contact form working with email
- [ ] Environment variables documented
- [ ] Images optimized
- [ ] SEO metadata verified
- [ ] Mobile responsiveness checked
- [ ] Cross-browser compatibility tested
- [ ] Performance optimized (Lighthouse score)

## 🌐 Deployment Platforms

### 1. Vercel (Recommended) ⭐

**Why Vercel?**
- Built by Next.js creators
- Zero configuration
- Automatic HTTPS
- Global CDN
- Serverless functions support
- Free tier available

**Steps:**

1. **Prepare Repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial WhiteCoat deployment"
   git branch -M main
   git remote add origin https://github.com/yourusername/whitecoat.git
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "Add New Project"
   - Import your GitHub repository
   - Configure project:
     - Framework Preset: Next.js
     - Root Directory: ./
     - Build Command: `npm run build`
     - Output Directory: `.next`

3. **Add Environment Variables:**
   In Vercel dashboard → Settings → Environment Variables:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-app-password
   EMAIL_TO=info@whitecoat.com
   ```

4. **Deploy:**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Your site is live! 🎉

5. **Custom Domain (Optional):**
   - Go to Settings → Domains
   - Add your domain (e.g., whitecoat.com)
   - Update DNS records:
     ```
     Type: A
     Name: @
     Value: 76.76.21.21

     Type: CNAME
     Name: www
     Value: cname.vercel-dns.com
     ```

### 2. Netlify

**Steps:**

1. **Build Settings:**
   ```
   Build command: npm run build
   Publish directory: .next
   ```

2. **netlify.toml Configuration:**
   Create `netlify.toml` in root:
   ```toml
   [build]
     command = "npm run build"
     publish = ".next"

   [[plugins]]
     package = "@netlify/plugin-nextjs"
   ```

3. **Environment Variables:**
   Add in Netlify dashboard → Site settings → Environment variables

4. **Deploy:**
   - Connect GitHub repository
   - Click "Deploy site"

### 3. AWS Amplify

**Steps:**

1. **Connect Repository:**
   - Open AWS Amplify Console
   - Choose "Host web app"
   - Connect GitHub repository

2. **Build Settings:**
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm install
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```

3. **Environment Variables:**
   Add in Amplify Console → Environment variables

### 4. Self-Hosted (VPS/Cloud Server)

**Requirements:**
- Ubuntu 20.04+ or similar
- Node.js 18+
- Nginx
- PM2

**Steps:**

1. **Server Setup:**
   ```bash
   # Update system
   sudo apt update && sudo apt upgrade -y

   # Install Node.js
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt install -y nodejs

   # Install PM2
   sudo npm install -g pm2

   # Install Nginx
   sudo apt install -y nginx
   ```

2. **Deploy Application:**
   ```bash
   # Clone repository
   cd /var/www
   git clone https://github.com/yourusername/whitecoat.git
   cd whitecoat

   # Install dependencies
   npm install

   # Create .env.local
   nano .env.local
   # Add your environment variables

   # Build application
   npm run build

   # Start with PM2
   pm2 start npm --name "whitecoat" -- start
   pm2 save
   pm2 startup
   ```

3. **Configure Nginx:**
   ```bash
   sudo nano /etc/nginx/sites-available/whitecoat
   ```

   Add configuration:
   ```nginx
   server {
       listen 80;
       server_name whitecoat.com www.whitecoat.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

   Enable site:
   ```bash
   sudo ln -s /etc/nginx/sites-available/whitecoat /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

4. **SSL Certificate (Let's Encrypt):**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d whitecoat.com -d www.whitecoat.com
   ```

## 🔐 Environment Variables Setup

### Production Variables

Create these in your deployment platform:

```env
# Email Configuration
EMAIL_USER=your-production-email@gmail.com
EMAIL_PASSWORD=your-production-app-password
EMAIL_TO=info@whitecoat.com

# Optional: Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Optional: Error Tracking
SENTRY_DSN=your-sentry-dsn
```

### Security Notes
- Use different credentials for production
- Never commit `.env.local` to Git
- Rotate passwords regularly
- Use strong, unique passwords

## 📊 Post-Deployment Setup

### 1. Google Analytics (Optional)

1. Create GA4 property at [analytics.google.com](https://analytics.google.com)
2. Get Measurement ID (G-XXXXXXXXXX)
3. Add to environment variables
4. Create `app/analytics.tsx`:
   ```typescript
   import Script from 'next/script';

   export default function Analytics() {
     return (
       <>
         <Script
           src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
           strategy="afterInteractive"
         />
         <Script id="google-analytics" strategy="afterInteractive">
           {`
             window.dataLayer = window.dataLayer || [];
             function gtag(){dataLayer.push(arguments);}
             gtag('js', new Date());
             gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
           `}
         </Script>
       </>
     );
   }
   ```

### 2. Search Console

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property (your domain)
3. Verify ownership
4. Submit sitemap: `https://whitecoat.com/sitemap.xml`

### 3. Performance Monitoring

**Lighthouse Audit:**
```bash
# Install Lighthouse
npm install -g lighthouse

# Run audit
lighthouse https://whitecoat.com --view
```

**Target Scores:**
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

### 4. Error Monitoring (Optional)

**Sentry Setup:**
```bash
npm install @sentry/nextjs
npx @sentry/wizard -i nextjs
```

## 🔄 Continuous Deployment

### GitHub Actions (Vercel)

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## 🧪 Testing Production

### Checklist
- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Properties page displays correctly
- [ ] Property detail pages load
- [ ] About page renders properly
- [ ] Contact form submits successfully
- [ ] Email received in inbox
- [ ] Mobile responsive on all pages
- [ ] Images load properly
- [ ] Animations work smoothly
- [ ] No console errors
- [ ] SSL certificate active
- [ ] Custom domain working (if applicable)

### Testing Tools
- **Mobile:** Chrome DevTools Device Mode
- **Performance:** Google Lighthouse
- **SEO:** Google Search Console
- **Uptime:** UptimeRobot or Pingdom
- **Speed:** GTmetrix or WebPageTest

## 🐛 Troubleshooting

### Build Fails
```bash
# Clear cache
rm -rf .next node_modules
npm install
npm run build
```

### Email Not Working
1. Verify environment variables are set
2. Check Gmail App Password is correct
3. Test with a simple email client
4. Check server logs for errors

### Images Not Loading
1. Verify `next.config.mjs` has correct domains
2. Check image URLs are accessible
3. Ensure images are optimized

### Slow Performance
1. Run Lighthouse audit
2. Optimize images
3. Enable caching
4. Use CDN (Vercel includes this)

## 📈 Monitoring & Maintenance

### Regular Tasks
- **Weekly:** Check error logs
- **Monthly:** Review analytics
- **Quarterly:** Update dependencies
- **Yearly:** Renew SSL certificates (auto with Let's Encrypt)

### Update Dependencies
```bash
npm update
npm audit fix
```

### Backup Strategy
- Code: Git repository (GitHub)
- Database: Not applicable (no database)
- Environment variables: Documented securely

## 🎉 Launch Announcement

Once deployed:
1. Test all functionality
2. Share with stakeholders
3. Announce on social media
4. Monitor for issues
5. Collect feedback

## 📞 Support Resources

- **Next.js Docs:** [nextjs.org/docs](https://nextjs.org/docs)
- **Vercel Support:** [vercel.com/support](https://vercel.com/support)
- **Deployment Issues:** Check platform-specific documentation

---

**Your WhiteCoat website is now live and ready to serve NRI doctors worldwide!** 🏥✨
