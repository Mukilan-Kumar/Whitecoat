# Supabase Setup Guide

## 🚀 Quick Setup (5 Minutes)

### Step 1: Get Your Supabase Credentials

1. Go to https://supabase.com/dashboard
2. Select your project
3. Go to **Settings** → **API**
4. Copy these two values:
   - **Project URL**: `https://xeokvkqdgsmaoylypuhq.supabase.co`
   - **anon public key**: Long string starting with `eyJ...`

### Step 2: Create Database Tables

1. In Supabase dashboard, go to **SQL Editor**
2. Click **New Query**
3. Copy and paste the contents of `supabase-setup.sql`
4. Click **Run** or press `Ctrl+Enter`
5. You should see "Success. No rows returned"

### Step 3: Update Environment Variables

Open `.env.local` and add your credentials:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://xeokvkqdgsmaoylypuhq.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here

# Email Configuration
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-gmail-app-password
EMAIL_TO=wcrealtyproperties@gmail.com
```

### Step 4: Restart Your Server

```bash
# Stop current server (Ctrl+C)
# Then restart:
npm run dev
```

### Step 5: Test It!

Visit http://localhost:3000/contact and submit a test form.

Then check your Supabase dashboard:
1. Go to **Table Editor**
2. Select **contacts** table
3. You should see your test submission!

## 📊 View Your Data

### In Supabase Dashboard:
1. Go to **Table Editor**
2. Click on **contacts** or **partners** table
3. View, edit, or delete data directly

### Using API:
```bash
# Get all contacts
curl http://localhost:3000/api/contact

# Get only new contacts
curl http://localhost:3000/api/contact?status=new

# Get all partners
curl http://localhost:3000/api/partners

# Get only featured partners
curl http://localhost:3000/api/partners?featured=true
```

## 🎯 What Each Table Stores

### Contacts Table
Every person who fills out your contact form:
- Name, email, phone
- Property interest
- Message
- Status (new/contacted/closed)
- Timestamps

### Partners Table
All your developer partners:
- Name, logo
- Location, description
- Contact info (website, email, phone)
- Featured status
- Active status
- Timestamps

## 🔒 Security (Row Level Security)

The tables are set up with RLS policies that:
- ✅ Allow anyone to INSERT contacts (public form)
- ✅ Allow anyone to READ contacts (for admin dashboard)
- ✅ Allow anyone to READ partners (public display)
- ✅ Allow authenticated users to INSERT partners

You can make these more restrictive later by:
1. Going to **Authentication** → **Policies**
2. Editing the policies for each table
3. Adding authentication requirements

## 📝 Adding Partners to Database

### Option 1: Via Supabase Dashboard
1. Go to **Table Editor** → **partners**
2. Click **Insert row**
3. Fill in the details
4. Click **Save**

### Option 2: Via API
```bash
curl -X POST http://localhost:3000/api/partners \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Prestige Estates",
    "logo": "prestige_estates_projects_limited.webp",
    "location": "Chennai, India",
    "description": "Premium luxury developments",
    "featured": true,
    "active": true
  }'
```

### Option 3: Bulk Import (SQL)
1. Go to **SQL Editor**
2. Run INSERT statements:
```sql
INSERT INTO partners (name, logo, location, featured, active) VALUES
  ('Prestige Estates', 'prestige_estates_projects_limited.webp', 'Chennai, India', true, true),
  ('Brigade Enterprises', 'brigade_enterprises_limited.webp', 'Chennai, India', true, true);
```

## 🚀 Deploy to Production

When deploying to Vercel:

1. Go to Vercel Dashboard
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Add these variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `EMAIL_USER`
   - `EMAIL_PASSWORD`
   - `EMAIL_TO`
5. Redeploy your app

## 🔧 Troubleshooting

**"Missing Supabase environment variables"**
- Check `.env.local` file exists
- Verify variable names are correct
- Restart dev server

**"Failed to save contact"**
- Check if tables are created (run SQL setup)
- Verify RLS policies are enabled
- Check Supabase dashboard logs

**"Cannot read from table"**
- Ensure RLS policies allow SELECT
- Check if tables exist in Table Editor

## 💡 Next Steps

- [ ] Test contact form submission
- [ ] View data in Supabase dashboard
- [ ] Add your partners to database
- [ ] Set up email notifications
- [ ] Deploy to production

## 📚 Resources

- Supabase Docs: https://supabase.com/docs
- Supabase Dashboard: https://supabase.com/dashboard
- Next.js + Supabase: https://supabase.com/docs/guides/getting-started/quickstarts/nextjs
