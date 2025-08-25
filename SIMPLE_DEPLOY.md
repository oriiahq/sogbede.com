# 🚀 ṢOGBÉDÈ Simple Deployment Guide

## Copy-Paste Deployment to Namecheap cPanel

### 📁 Files to Upload

Upload these files to your `public_html` folder in cPanel:

**Required Files:**
- `index.html` (main website - renamed from home.html)
- `admin.html` (admin panel)
- `signup.html` (application form)
- `config.js` (configuration file)
- `images/` folder (all website images including mobile header)

**Optional Files (for reference):**
- `DEPLOYMENT.md` (deployment instructions)
- `README.md` (project documentation)

### 🚫 Files NOT to Upload

**Do NOT upload these files:**
- `.env*` (environment files)
- `.git/` (Git repository folder)
- `config.secure.js` (development file)
- `deploy.php` (not needed for simple deployment)
- `prepare-deploy.sh` (deployment script)
- `node_modules/` (if present)

### 🔧 Step-by-Step Instructions

1. **Log into Namecheap cPanel**
2. **Open File Manager**
3. **Navigate to `public_html` folder**
4. **Upload all required files** (drag and drop or use upload button)
5. **Set `index.html` as your homepage** (usually automatic)
6. **Visit your domain** to test

### ✅ Testing Checklist

After uploading, test these:

- [ ] Website loads at your domain
- [ ] Navigation menu works
- [ ] Form submission works on `/signup.html`
- [ ] Admin login works on `/admin.html`
- [ ] Images display correctly (including mobile header)
- [ ] Mobile responsive design works

### 🚨 If Something Doesn't Work

**Website won't load:**
- Make sure `index.html` is in the root `public_html` folder
- Check file permissions (should be 644 for files, 755 for folders)

**Form not working:**
- Check browser console (F12) for error messages
- Verify Supabase project is active and accessible
- Ensure config.js uploaded correctly

**Images not showing:**
- Make sure `images/` folder uploaded completely
- Check image file paths and names match exactly
- Verify mobile header image is inside the `images/` folder

### 📱 Mobile Header Setup

The mobile header is already configured to show the mobile image on phones. Just make sure the `images/` folder with the mobile header image is uploaded completely.

### 🎉 That's It!

Your ṢOGBÉDÈ website should now be live and fully functional with:
- ✅ Responsive design (desktop + mobile)
- ✅ Working application form
- ✅ Admin panel access  
- ✅ Secure Supabase integration
- ✅ Mobile-optimized header image