# 🚀 ṢOGBÉDÈ Deployment Guide for Namecheap

## 📋 Pre-Deployment Setup

### 1. Supabase Setup (Complete First)
1. **Complete Supabase setup** from README.md
2. **Run the RLS SQL policies** provided
3. **Create your admin user** in the SQL (update the email/password)
4. **Get your credentials**: Project URL + Anon key

### 2. Update Configuration
**Update `config.js`** with your actual credentials:
```javascript
const SUPABASE_CONFIG = {
    url: 'https://your-actual-project-id.supabase.co',
    anon_key: 'eyJhbGciOi...' // Your actual anon key
};
```

## 🌍 Deploying to Namecheap

### Option 1: Simple Deployment (Fastest)
1. **Upload all files** to your Namecheap hosting via File Manager or FTP
2. **Set index file** to `home.html` in your hosting control panel
3. **Test immediately** - everything should work

### Option 2: Environment Variables (More Secure)
If your Namecheap hosting supports environment variables:

1. **Set environment variables** in hosting control panel:
   ```
   SUPABASE_URL=https://your-project.supabase.co
   SUPABASE_ANON_KEY=eyJhbGciOi...
   ```

2. **Keep `config.js`** as-is - it will automatically use env vars in production

3. **Upload files** and test

## 🔐 Security Checklist

### Before Going Live:
- ✅ RLS policies created in Supabase
- ✅ Admin authentication set up
- ✅ Admin user created with strong password
- ✅ Environment variables configured (if using)
- ✅ Test file uploads work
- ✅ Test admin login works
- ✅ Test form submissions appear in admin

### After Going Live:
- 🔒 **Change default passwords** if any
- 🔒 **Monitor Supabase dashboard** for unusual activity
- 🔒 **Enable 2FA** on your Supabase account
- 🔒 **Regular backups** via Supabase dashboard

## 🧪 Testing Your Deployment

### 1. Public Form Test:
1. Go to `your-domain.com/signup.html`
2. Fill out complete application with photo/video
3. Submit form
4. Should see success message

### 2. Admin Panel Test:
1. Go to `your-domain.com/admin.html`
2. Should see login screen
3. Login with your admin credentials
4. Should see the submitted application
5. Click photo thumbnail - should display properly
6. Test connection button should show success

### 3. Security Test:
1. Open browser dev tools on signup page
2. Try to access admin functions in console
3. Should be blocked by RLS policies

## 🎯 Domain Setup

### Custom Domain (Optional):
1. **Point your domain** to Namecheap hosting
2. **Update CNAME records** if needed
3. **Enable HTTPS** in Namecheap panel
4. **Test all functionality** after DNS propagation

## 📞 Troubleshooting

### Common Issues:

**"Connection failed"**:
- Check Supabase URL and anon key in `config.js`
- Verify Supabase project is active
- Check browser console for specific errors

**"Login failed" in admin**:
- Verify admin user was created in Supabase
- Check email/password in SQL command
- Try password reset in Supabase dashboard

**"File upload failed"**:
- Check Supabase Storage bucket exists
- Verify storage policies are applied
- Check file size limits

**"No applications showing"**:
- Verify RLS policies allow authenticated reads
- Check admin is properly authenticated
- Look for errors in browser console

## 🎬 You're Live!

Once deployed, your ṢOGBÉDÈ application will have:
- ✅ **Secure form submissions** with real file uploads
- ✅ **Protected admin panel** with authentication
- ✅ **Real-time data sync** between form and admin
- ✅ **Complete CRUD operations** for managing applications
- ✅ **Professional security** with RLS policies

**Your game show application system is ready for contestants!** 🎉