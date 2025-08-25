# ṢOGBÉDÈ - Yoruba Game Show Website

Welcome to the official website for ṢOGBÉDÈ, a Yoruba game show celebrating excellence in Yoruba language and culture.

## 🌟 Overview

This website provides:
- **Landing Page** (`home.html`) - Information about the show
- **Application Form** (`signup.html`) - Contestant registration system
- **Admin Panel** (`admin.html`) - Application management and filming date coordination

## 🚀 Features

### For Contestants
- **Multi-language Support** - English and Yoruba
- **Responsive Design** - Works on mobile and desktop
- **File Upload** - Photo/video submissions
- **Partner Registration** - Team application support
- **Date Selection** - Choose preferred filming dates
- **Real-time Validation** - Form validation with helpful feedback

### For Administrators
- **Application Management** - View and manage submissions
- **Filming Date Control** - Add/remove available dates
- **Capacity Management** - Track bookings per date
- **Media Preview** - View submitted photos/videos
- **Export/Contact** - Email applicants directly

## 📁 Project Structure

```
sogbede.com/
├── home.html          # Landing page
├── signup.html        # Application form
├── admin.html         # Admin panel
├── images/           # Assets and thank you images
├── .github/workflows/ # CI/CD configuration
└── README.md         # This file
```

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Styling**: CSS Grid, Flexbox, Custom CSS
- **Database**: Airtable (with localStorage backup)
- **Deployment**: GitHub Pages
- **Form Handling**: Native form validation + custom validation

## 🔧 Setup & Development

### Prerequisites
- Web browser with JavaScript enabled
- Internet connection (for Airtable integration)

### Local Development
1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/sogbede.com.git
   cd sogbede.com
   ```

2. **Start a local server**:
   ```bash
   # Using Python
   python -m http.server 8080
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8080
   ```

3. **Open in browser**:
   ```
   http://localhost:8080/home.html
   ```

### Airtable Configuration

The application uses Airtable as the backend database. To set up:

1. **Create an Airtable Base** with these fields:
   - First Name (Single line text)
   - Last Name (Single line text)  
   - Email (Email)
   - Phone (Phone number)
   - City, State, Country (Single line text)
   - Age (Number)
   - Occupation (Single line text)
   - Business/Social (Single line text)
   - Interests (Long text)
   - Filming Date (Date)
   - Partner First Name, Partner Last Name, Partner Phone (Single line text)
   - Submission Date (Date & time)
   - Status (Single select: Pending Review, Approved, Rejected)
   - Media Info (Long text)

2. **Get API credentials**:
   - Go to [Airtable Developer Hub](https://airtable.com/developers/web)
   - Create a Personal Access Token
   - Get your Base ID from the API documentation

3. **Update configuration** in both `signup.html` and `admin.html`:
   ```javascript
   const AIRTABLE_CONFIG = {
       baseId: 'your_base_id',
       tableId: 'your_table_id', 
       apiKey: 'your_api_key'
   };
   ```

## 🔐 Security Considerations

### Current Limitations
- **API Key Exposure**: Airtable API key is client-side (consider backend proxy)
- **File Upload**: Only metadata saved (requires proper file storage service)
- **Client Validation**: Can be bypassed (server-side validation recommended)

### Production Recommendations
1. **Backend Service** - Implement server-side API proxy
2. **File Storage** - AWS S3, Cloudinary, or similar service
3. **Server Validation** - Validate files using magic numbers/headers
4. **Rate Limiting** - Prevent spam submissions
5. **HTTPS** - Ensure secure data transmission

## 📱 Browser Support

- ✅ Chrome/Edge 88+
- ✅ Firefox 85+
- ✅ Safari 14+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🎨 Design Features

- **Glassmorphism UI** - Modern frosted glass effects
- **Responsive Layout** - Mobile-first design
- **Accessibility** - ARIA labels and keyboard navigation
- **Loading States** - Visual feedback for form submission
- **Error Handling** - User-friendly error messages

## 🔧 Development Scripts

### Testing Airtable Connection
Both signup and admin pages include debug buttons to test the Airtable connection.

### Form Validation
The signup form includes comprehensive validation:
- **Phone Numbers**: Supports various formats (spaces, hyphens, parentheses)
- **File Types**: Images and videos with size limits
- **Required Fields**: Clear indication and error messages
- **Real-time Feedback**: Validation as user types

### Admin Features
- **Bulk Operations**: Select multiple dates for batch actions
- **Filter Applications**: View by filming date
- **Media Preview**: Click thumbnails to view full media
- **Export Data**: Download application details

## 📊 Analytics & Monitoring

The application logs various events to the browser console:
- Form submissions
- Airtable API calls
- File upload attempts
- Validation errors
- Connection status

## 🚀 Deployment

### GitHub Pages
1. Push changes to the `main` branch
2. Enable GitHub Pages in repository settings
3. Set source to "Deploy from a branch"
4. Select `main` branch and `/ (root)` folder

### Custom Domain
1. Add `CNAME` file with your domain
2. Update DNS records to point to GitHub Pages
3. Enable HTTPS in GitHub Pages settings

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/new-feature`
3. **Commit changes**: `git commit -m 'Add new feature'`
4. **Push to branch**: `git push origin feature/new-feature`
5. **Open a Pull Request**

### Development Guidelines
- Follow existing code style
- Test on multiple devices/browsers
- Update documentation for new features
- Consider accessibility in UI changes

## 📞 Support & Contact

- **Email**: iwadi@sogbede.com
- **Issues**: [GitHub Issues](https://github.com/your-username/sogbede.com/issues)

## 📄 License

This project is proprietary and confidential. All rights reserved by ṢOGBÉDÈ production team.

## 🎬 About ṢOGBÉDÈ

ṢOGBÉDÈ is a celebration of Yoruba excellence, bringing together contestants to showcase their knowledge, wit, and cultural pride. The show promotes Yoruba language and traditions while providing entertainment and education.

---

**Built with ❤️ for the Yoruba community**
