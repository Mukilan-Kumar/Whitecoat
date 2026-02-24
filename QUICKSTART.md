# ⚡ WhiteCoat Quick Start

Get WhiteCoat running in 5 minutes!

## 🚀 Fast Setup

### 1. Install Dependencies (1 min)
```bash
cd whitecoat
npm install
```

### 2. Configure Email (2 min)

**Get Gmail App Password:**
1. Go to [Google Account](https://myaccount.google.com/security)
2. Enable 2-Step Verification
3. Visit [App Passwords](https://myaccount.google.com/apppasswords)
4. Create password for "Mail" → "Other (WhiteCoat)"
5. Copy the 16-character password

**Create `.env.local` file:**
```bash
# Copy example
cp .env.local.example .env.local

# Edit with your details
# EMAIL_USER=your-email@gmail.com
# EMAIL_PASSWORD=your-16-char-password
# EMAIL_TO=info@whitecoat.com
```

### 3. Run Development Server (30 sec)
```bash
npm run dev
```

### 4. Open Browser (30 sec)
Visit: **http://localhost:3000**

## ✅ Test It

1. Navigate to Contact page
2. Fill and submit the form
3. Check your email inbox

## 🎉 You're Done!

The website is now running locally with:
- ✨ Premium animations
- 📱 Fully responsive design
- 📧 Working contact form
- 🎨 Luxury UI/UX

## 📚 Next Steps

- Read [README.md](./README.md) for full documentation
- Check [SETUP.md](./SETUP.md) for detailed setup
- See [DEPLOYMENT.md](./DEPLOYMENT.md) for going live

## 🆘 Quick Troubleshooting

**Port 3000 in use?**
```bash
npm run dev -- -p 3001
```

**Email not working?**
- Verify `.env.local` exists
- Check Gmail App Password is correct
- Ensure 2FA is enabled on Gmail

**Build errors?**
```bash
rm -rf .next node_modules
npm install
npm run dev
```

---

Need help? Check the full documentation files! 📖
