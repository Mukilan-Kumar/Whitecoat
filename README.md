# 🏥 WhiteCoat - Premium Real Estate for NRI Doctors

A luxury, production-ready full-stack website for NRI doctors investing in Indian properties. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

### Pages
- **Landing Page** - Premium hero with animations, featured properties, testimonials
- **Properties Listing** - Filterable grid of luxury properties
- **Property Detail** - Comprehensive property information with virtual tour options
- **About Page** - Company story, values, team, and statistics
- **Contact Page** - Inquiry form with email integration

### Design & UX
- 🎨 Luxury medical + real estate branding
- 🌈 Color palette: White, Gold (#eab308), Soft Blue (#0ea5e9)
- 💎 Glassmorphism cards and smooth gradients
- 📱 Fully responsive (mobile, tablet, desktop)
- ✨ Smooth animations with Framer Motion
- 🎬 Scroll-based reveal animations
- 🔄 Page transitions and hover effects
- 🎯 Sticky transparent navbar with blur effect

### Technical Features
- ⚡ Next.js 14 with App Router
- 📘 TypeScript for type safety
- 🎨 Tailwind CSS for styling
- 🎭 Framer Motion for animations
- 📧 Nodemailer for contact form emails
- 🔍 SEO optimized with metadata API
- 🚀 Performance optimized
- ♿ Accessible UI with ARIA support

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- Gmail account for email functionality

### Installation

1. **Navigate to the project directory:**
   ```bash
   cd whitecoat
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   
   Create a `.env.local` file in the root directory:
   ```env
   EMAIL_USER=your-email@gmail.come 
   EMAIL_PASSWORD=your-gmail-app-password
   EMAIL_TO=info@whitecoat.com
   ```

   **To get Gmail App Password:**
   - Go to your Google Account settings
   - Enable 2-Step Verification
   - Generate an App Password: https://support.google.com/accounts/answer/185833
   - Use this password in EMAIL_PASSWORD

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📂 Project Structure

```
whitecoat/
├── app/
│   ├── api/
│   │   └── contact/          # Contact form API route
│   ├── properties/           # Properties pages
│   ├── about/               # About page
│   ├── contact/             # Contact page
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles
│   └── sitemap.ts           # SEO sitemap
├── components/
│   ├── layout/              # Navbar, Footer
│   ├── home/                # Home page sections
│   ├── properties/          # Property components
│   ├── about/               # About page sections
│   └── contact/             # Contact page components
├── public/
│   └── robots.txt           # SEO robots file
├── tailwind.config.ts       # Tailwind configuration
├── next.config.mjs          # Next.js configuration
└── package.json
```

## 🎨 Design System

### Colors
- **Primary Blue**: `#0ea5e9` (Soft Blue)
- **Gold**: `#eab308` (Luxury accent)
- **White**: `#ffffff` (Clean background)
- **Gray**: Various shades for text and backgrounds

### Typography
- **Display Font**: Playfair Display (headings)
- **Body Font**: Inter (content)

### Components
- Glass cards with backdrop blur
- Gradient buttons with hover effects
- Smooth animations and transitions
- Responsive grid layouts

## 📧 Email Configuration

The contact form uses Nodemailer to send emails via Gmail. To set it up:

1. Create a Gmail account or use an existing one
2. Enable 2-Step Verification
3. Generate an App Password
4. Add credentials to `.env.local`

The email template includes:
- Professional HTML formatting
- All form field data
- Branded styling
- Responsive design

## 🔍 SEO Features

- Dynamic metadata for each page
- Open Graph tags for social sharing
- Structured semantic HTML
- Sitemap generation
- Robots.txt configuration
- Image alt tags
- Fast loading times

## ⚡ Performance Optimizations

- Next.js Image component for optimized images
- Code splitting and lazy loading
- Minimal bundle size
- Font optimization with next/font
- Static generation where possible
- Efficient animations with Framer Motion

## 🛠️ Available Scripts

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm start

# Linting
npm run lint
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Key Features by Page

### Landing Page
- Hero with background image and animated headline
- Trusted badge section with icons
- Featured properties carousel
- Why WhiteCoat USP section
- Virtual tour section with parallax
- Doctor testimonials
- CTA banner with gradient glow

### Properties Page
- Advanced filtering system
- Property grid with hover effects
- Favorite functionality
- Responsive cards

### Property Detail Page
- Image gallery
- Comprehensive property info
- Investment potential metrics
- Virtual tour button
- Contact sidebar

### About Page
- Company story
- Core values
- Team profiles
- Impact statistics

### Contact Page
- Professional inquiry form
- Contact information
- Quick response indicators
- Consultation booking

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Other Platforms
The app can be deployed to any platform supporting Next.js:
- Netlify
- AWS Amplify
- Digital Ocean
- Railway

## 🔐 Environment Variables

Required variables:
- `EMAIL_USER` - Gmail address
- `EMAIL_PASSWORD` - Gmail app password
- `EMAIL_TO` - Recipient email address

## 📄 License

This project is created for WhiteCoat - Premium Real Estate Platform.

## 🤝 Support

For support or inquiries:
- Email: info@whitecoat.com
- Phone: +91 98765 43210

---

Built with ❤️ for NRI Doctors investing in India
