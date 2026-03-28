# Backend & Database Setup Guide

## Overview
This project uses MongoDB as the database and Next.js API routes for the backend.

## Database Models

### 1. Contact Model
Stores all contact form submissions from the website.

**Fields:**
- `name` (String, required): Contact's name
- `email` (String, required): Contact's email
- `phone` (String, optional): Contact's phone number
- `propertyInterest` (String, optional): Property they're interested in
- `message` (String, required): Their message
- `status` (Enum: 'new', 'contacted', 'closed'): Status of the inquiry
- `createdAt` (Date): Auto-generated timestamp
- `updatedAt` (Date): Auto-generated timestamp

### 2. Partner Model
Stores information about developer partners.

**Fields:**
- `name` (String, required): Partner name
- `logo` (String, required): Logo filename
- `location` (String, optional): Partner location
- `description` (String, optional): Partner description
- `website` (String, optional): Partner website URL
- `email` (String, optional): Partner email
- `phone` (String, optional): Partner phone
- `featured` (Boolean): Whether to show on homepage
- `active` (Boolean): Whether partner is active
- `createdAt` (Date): Auto-generated timestamp
- `updatedAt` (Date): Auto-generated timestamp

## API Endpoints

### Contact API (`/api/contact`)

**POST** - Submit a new contact form
```json
{
  "name": "Dr. John Doe",
  "email": "john@example.com",
  "phone": "+91 9876543210",
  "propertyInterest": "Luxury Villa",
  "message": "I'm interested in..."
}
```

**GET** - Retrieve contacts (Admin)
- Query params: `?status=new&limit=50`
- Returns list of contacts

### Partners API (`/api/partners`)

**GET** - Get all partners
- Query params: `?featured=true&active=true`
- Returns list of partners

**POST** - Create new partner (Admin)
```json
{
  "name": "Prestige Estates",
  "logo": "prestige_estates.webp",
  "location": "Chennai, India",
  "description": "Premium luxury developments",
  "featured": true,
  "active": true
}
```

## Setup Instructions

### 1. Install MongoDB

**Option A: MongoDB Atlas (Cloud - Recommended)**
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account
3. Create a new cluster
4. Click "Connect" and get your connection string
5. Replace `<password>` with your database password

**Option B: Local MongoDB**
1. Download and install MongoDB Community Edition
2. Start MongoDB service
3. Use connection string: `mongodb://localhost:27017/whitecoat`

### 2. Configure Environment Variables

1. Copy `.env.local.example` to `.env.local`:
```bash
cp .env.local.example .env.local
```

2. Update `.env.local` with your credentials:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/whitecoat?retryWrites=true&w=majority
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-gmail-app-password
EMAIL_TO=info@whitecoat.com
```

### 3. Gmail App Password Setup

1. Go to your Google Account settings
2. Enable 2-Step Verification
3. Go to Security > 2-Step Verification > App passwords
4. Generate a new app password for "Mail"
5. Use this password in `EMAIL_PASSWORD`

### 4. Test the Setup

**Test Contact Form:**
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "Test message"
  }'
```

**Test Partners API:**
```bash
curl http://localhost:3000/api/partners
```

## Database Management

### Using MongoDB Compass (GUI)
1. Download [MongoDB Compass](https://www.mongodb.com/products/compass)
2. Connect using your MONGODB_URI
3. Browse and manage your data visually

### Using MongoDB Shell
```bash
# Connect to your database
mongosh "mongodb+srv://cluster.mongodb.net/whitecoat" --username your-username

# View collections
show collections

# Query contacts
db.contacts.find()

# Query partners
db.partners.find()
```

## Adding Initial Partner Data

You can seed your database with the existing partner data by creating a seed script:

```typescript
// scripts/seedPartners.ts
import connectDB from '../lib/mongodb';
import Partner from '../models/Partner';

const partners = [
  { name: 'Prestige Estates', logo: 'prestige_estates_projects_limited.webp', featured: true },
  { name: 'Brigade Enterprises', logo: 'brigade_enterprises_limited.webp', featured: true },
  // ... add more partners
];

async function seed() {
  await connectDB();
  await Partner.insertMany(partners);
  console.log('Partners seeded successfully!');
}

seed();
```

## Security Best Practices

1. **Never commit `.env.local`** - It's already in `.gitignore`
2. **Use strong passwords** for MongoDB
3. **Restrict MongoDB network access** to your IP addresses
4. **Use environment variables** for all sensitive data
5. **Implement authentication** for admin endpoints (future enhancement)

## Future Enhancements

- [ ] Add authentication for admin endpoints
- [ ] Create admin dashboard for managing contacts and partners
- [ ] Add analytics and reporting
- [ ] Implement rate limiting
- [ ] Add data validation middleware
- [ ] Create backup and restore scripts

## Troubleshooting

**Connection Issues:**
- Check if MongoDB URI is correct
- Verify network access in MongoDB Atlas
- Ensure your IP is whitelisted

**Email Not Sending:**
- Verify Gmail app password is correct
- Check if 2-Step Verification is enabled
- Try with a different email service

**API Errors:**
- Check server logs in terminal
- Verify environment variables are loaded
- Test database connection separately

## Support

For issues or questions, check:
- MongoDB Atlas Documentation
- Next.js API Routes Documentation
- Mongoose Documentation
