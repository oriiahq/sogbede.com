# ṢOGBÉDÈ - Official Website & Application System

**Where Culture Meets Laughter. Where You Shine as the Art.**

ṢOGBÉDÈ is a Yoruba culture and comedy game show celebrating heritage through entertainment. This repository contains the complete website and application management system.

## 🎭 Features

### 🌐 Website
- **Responsive Design**: Perfect on desktop, tablet, and mobile
- **Image Carousel**: Rotating showcase of show highlights
- **Professional Branding**: Elegant ṢOGBÉDÈ design throughout

### 📝 Application System  
- **Smart Forms**: Multi-step application with validation
- **Partner Support**: Optional partner registration
- **Date Management**: Flexible filming date selection
- **File Uploads**: Secure selfie upload via Supabase

### 📧 Email Automation
- **Welcome Emails**: Branded emails with KÍLOWÍ game promotion
- **Admin Notifications**: Instant alerts for new applications
- **Professional Templates**: HTML emails with ṢOGBÉDÈ styling

### 🛠️ Admin Panel
- **Application Management**: View, filter, and manage all submissions
- **Date Management**: Add/remove filming dates and capacity
- **Real-time Stats**: Track applications and availability
- **Export Features**: Download application data

## 🚀 Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Supabase (PostgreSQL, Auth, Storage, Edge Functions)
- **Email**: Resend API with verified domain
- **Hosting**: Namecheap cPanel
- **Security**: Environment variables, RLS policies

## 📁 File Structure

### Production Files (Deploy to Namecheap)
```
📄 index.html          # Main homepage
📄 signup.html         # Application form  
📄 admin.html          # Admin management panel
📄 config.js           # Supabase configuration
📄 sw.js              # Service worker for caching
📁 images/             # All website images (10 files)
   ├── header.jpg           # Desktop header (1920x600)
   ├── mobile header.jpg    # Mobile header (1080x560)
   ├── signup_pc.jpg        # Desktop signup background
   ├── signup_mobile.jpg    # Mobile signup background
   └── carousel images (6)  # Rotating show images
```

## 🌟 Current Status: PRODUCTION READY

- ✅ **Website**: Optimized and responsive
- ✅ **Applications**: Saving to database successfully  
- ✅ **Email System**: Automated notifications working
- ✅ **Admin Panel**: Full management capabilities
- ✅ **Security**: No exposed secrets, proper authentication
- ✅ **Performance**: Optimized images, service worker caching

## 🚀 Deployment

### Quick Deploy to Namecheap

1. **Upload Core Files** (5 files):
   - `index.html`, `signup.html`, `admin.html`, `config.js`, `sw.js`

2. **Upload Images Folder** (10 files):  
   - Complete `images/` directory with all photos

3. **Total Size**: ~5.3MB (optimized for fast loading)

### Email System (Already Deployed)
- ✅ **Supabase Edge Function**: `send-application-emails` 
- ✅ **Resend Domain**: `sogbede.com` verified
- ✅ **Environment Variables**: Set in Supabase dashboard

## 📊 Performance

- **Load Time**: 2-3 seconds average
- **Mobile Optimized**: All responsive breakpoints tested
- **Image Optimization**: Compressed for web delivery
- **Caching**: Service worker for repeat visits

## 🔐 Security Features

- **Environment Variables**: API keys secured in Supabase
- **No Hardcoded Secrets**: Clean codebase
- **Authentication**: Secure admin login
- **Verified Domain**: Professional email delivery
- **RLS Policies**: Database security enabled

## 🎯 What Users Experience

### Applicants
1. **Beautiful Homepage**: Elegant design with rotating carousel
2. **Smooth Application**: Step-by-step form with validation
3. **Instant Confirmation**: Welcome email with KÍLOWÍ promotion
4. **Professional Communication**: Branded emails from `@sogbede.com`

### Admin
1. **Real-time Notifications**: New application alerts
2. **Complete Management**: View, filter, export applications
3. **Date Management**: Control filming schedules and capacity
4. **Mobile Admin**: Full functionality on any device

## 🎮 KÍLOWÍ Integration

The email system promotes KÍLOWÍ, the game played on ṢOGBÉDÈ:
- **Amazon Link**: https://a.co/d/bdfZUBs
- **Strategic Placement**: Welcome emails encourage practice
- **Show Connection**: "Master the game, master the show!"

## 📈 Next Steps

Website is production-ready! Future enhancements could include:
- **Analytics**: Visitor and application tracking
- **A/B Testing**: Form optimization
- **API Integration**: Third-party services
- **Multi-language**: Yoruba/English toggle

---

**🎉 ṢOGBÉDÈ Website - Celebrating Culture Through Technology**

Built with ❤️ for the ṢOGBÉDÈ community