# Backend Quick Start Guide

## 🚀 Get Your Backend Running in 5 Minutes

### Step 1: Install Dependencies (Already Done)
```bash
npm install
# mongoose is already installed
```

### Step 2: Set Up MongoDB

**Quick Option - MongoDB Atlas (Free):**

1. Go to https://www.mongodb.com/cloud/atlas/register
2. Sign up for free account
3. Create a FREE cluster (M0 Sandbox)
4. Click "Connect" → "Connect your application"
5. Copy the connection string

### Step 3: Configure Environment

1. Open `.env.local` file (already created)
2. Replace with your actual values:

```env
MONGODB_URI=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/whitecoat?retryWrites=true&w=majority
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-gmail-app-password
EMAIL_TO=info@whitecoat.com
```

**Get Gmail App Password:**
1. Go to https://myaccount.google.com/security
2. Enable 2-Step Verification
3. Go to "App passwords"
4. Generate password for "Mail"
5. Use this in EMAIL_PASSWORD

### Step 4: Start the Server

```bash
npm run dev
```

Server will start at http://localhost:3000

### Step 5: Test the Backend

Open a new terminal and run:

```bash
node scripts/testBackend.js
```

Or test manually:

**Test Contact Form:**
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Dr. John Doe",
    "email": "john@example.com",
    "message": "Test message"
  }'
```

**Test Partners API:**
```bash
curl http://localhost:3000/api/partners
```

## 📊 View Your Data

### Option 1: MongoDB Compass (GUI)
1. Download: https://www.mongodb.com/products/compass
2. Connect using your MONGODB_URI
3. Browse collections visually

### Option 2: MongoDB Atlas Dashboard
1. Go to your cluster in Atlas
2. Click "Browse Collections"
3. View data in web interface

## 🎯 What's Working Now

✅ **Contact Form** - Saves to database + sends email
✅ **Partners API** - Ready to fetch/create partners
✅ **Email Notifications** - Sends to both admin and user
✅ **Data Persistence** - All data saved to MongoDB

## 📝 API Endpoints

### Contact API
- **POST** `/api/contact` - Submit contact form
- **GET** `/api/contact` - Get all contacts (admin)
- **GET** `/api/contact?status=new` - Filter by status

### Partners API
- **GET** `/api/partners` - Get all partners
- **GET** `/api/partners?featured=true` - Get featured partners
- **POST** `/api/partners` - Create new partner (admin)

## 🔧 Troubleshooting

**"Cannot connect to MongoDB"**
- Check MONGODB_URI is correct
- Verify network access in MongoDB Atlas
- Whitelist your IP address (0.0.0.0/0 for all IPs)

**"Email not sending"**
- Verify Gmail app password
- Check 2-Step Verification is enabled
- Try with different email

**"Module not found"**
- Run `npm install` again
- Delete `node_modules` and `package-lock.json`, then `npm install`

## 🚀 Deploy to Production

### Vercel Deployment

1. Push code to GitHub (already done!)
2. Go to https://vercel.com
3. Import your repository
4. Add environment variables:
   - `MONGODB_URI`
   - `EMAIL_USER`
   - `EMAIL_PASSWORD`
   - `EMAIL_TO`
5. Deploy!

Your backend will work automatically on Vercel.

## 📚 Next Steps

- [ ] Test contact form on website
- [ ] View submitted contacts in MongoDB
- [ ] Add more partners via API
- [ ] Set up admin dashboard (future)
- [ ] Add authentication (future)

## 💡 Tips

- Keep `.env.local` secret (never commit it)
- Use MongoDB Atlas free tier for development
- Monitor your database usage in Atlas dashboard
- Set up email alerts for new contacts

## Need Help?

Check `BACKEND_SETUP.md` for detailed documentation.
