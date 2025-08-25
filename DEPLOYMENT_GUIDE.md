# 🚀 ṢOGBÉDÈ Secure Deployment Guide

## 🔒 Security-First Deployment to Namecheap

### 📋 Pre-Deployment Security Checklist

- [ ] ✅ Hardcoded credentials removed from all files
- [ ] ✅ `.gitignore` configured to exclude sensitive files
- [ ] ✅ Secure configuration system implemented
- [ ] ✅ Environment variables ready for server setup
- [ ] ✅ Production deployment files prepared

---

## 🛡️ CRITICAL: What NOT to Upload

**NEVER upload these files to your web server:**
- `.env` (or any `.env.*` files)
- Files with hardcoded API keys or passwords
- Development configuration files
- `.git` directory
- `node_modules/` (if present)
- Backup files (`.bak`, `.backup`)

---

## 🚀 Step-by-Step Deployment Process

### Step 1: Prepare Your Files
```bash
# Run the deployment preparation script
./prepare-deploy.sh
```

This creates a `deploy/` folder with clean, production-ready files.

### Step 2: Set Environment Variables on Namecheap

**In your Namecheap hosting control panel:**

1. **Navigate to**: Advanced → Environment Variables (or similar)
2. **Add these variables**:
   ```
   SUPABASE_URL = https://xshbjfajdlxyyedemhsz.supabase.co
   SUPABASE_ANON_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhzaGJqZmFqZGx4eXllZGVtaHN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYwODY4OTEsImV4cCI6MjA3MTY2Mjg5MX0.dsLCeifYQTn0t6NxN7eE1kbcIpK1osB0yj_FOW4njvQ
   NODE_ENV = production
   ```

### Step 3: Choose Your Deployment Method

#### **Method A: PHP-Based Config (Recommended)**
1. Upload ALL files from `deploy/` folder to `public_html/`
2. In `home.html`, change:
   ```html
   <script src="config.js"></script>
   ```
   to:
   ```html
   <script src="deploy.php"></script>
   ```

#### **Method B: Manual Config Replacement (Simpler)**
1. Edit `deploy/config.js` and replace placeholders:
   ```javascript
   // Replace {{SUPABASE_URL}} with actual URL
   // Replace {{SUPABASE_ANON_KEY}} with actual key
   ```
2. Upload modified files to `public_html/`

### Step 4: Upload Files

**Via File Manager:**
1. Log into Namecheap hosting panel
2. Go to File Manager
3. Navigate to `public_html/`
4. Upload ALL files from the `deploy/` folder

**Via FTP:**
```bash
# Upload contents of deploy/ folder
ftp your-domain.com
# Upload all files to public_html/
```

### Step 5: Test Your Deployment

1. **Visit your website** at `https://your-domain.com`
2. **Open browser dev tools** (F12 → Console)
3. **Look for**: `🔧 ṢOGBÉDÈ Config loaded: production`
4. **Test form submission** on `/signup.html`
5. **Test admin login** on `/admin.html`

---

## 🔍 Security Verification

### Immediate Checks:
- [ ] Website loads via HTTPS (not HTTP)
- [ ] No error messages in browser console
- [ ] Form submissions work and appear in Supabase
- [ ] Admin login functions correctly
- [ ] No sensitive data visible in page source

### Supabase Security:
- [ ] Row Level Security (RLS) policies enabled
- [ ] Admin user created and functional
- [ ] File uploads working and secure
- [ ] Database permissions properly configured

---

## 🚨 If Something Goes Wrong

### Common Issues & Solutions:

**"Config not loading"**
- Check environment variables are set correctly
- Verify file uploads completed successfully
- Check browser console for error messages

**"Form submissions not working"**
- Verify Supabase URL and key in environment variables
- Check Supabase project status and quotas
- Ensure RLS policies allow form submissions

**"Admin login failing"**
- Confirm admin user exists in Supabase Auth
- Verify admin credentials
- Check Supabase authentication settings

**"Images not displaying"**
- Ensure image files uploaded correctly
- Check file paths and permissions
- Verify mobile header image uploaded

### Emergency Actions:
1. **Take site offline** if security issue suspected
2. **Rotate API keys** in Supabase dashboard
3. **Check access logs** in hosting panel
4. **Review Supabase project logs**

---

## 📞 Support Resources

- **Namecheap Hosting Support**: Via hosting panel
- **Supabase Documentation**: https://supabase.com/docs
- **Security Best Practices**: Review `SECURITY.md`

---

## 🎉 Post-Deployment

Once deployed successfully:

1. **Test thoroughly** with real data
2. **Monitor** initial performance
3. **Set up backups** (Supabase handles database backups)
4. **Monitor** Supabase usage and quotas
5. **Document** any custom configurations

---

## 📋 Maintenance Checklist

**Monthly:**
- [ ] Review Supabase usage and quotas
- [ ] Check for any security updates
- [ ] Test admin functionality
- [ ] Verify SSL certificate status

**Quarterly:**
- [ ] Review and rotate API keys if needed
- [ ] Update any dependencies
- [ ] Check hosting resource usage
- [ ] Review access logs for anomalies

---

**🚀 Your ṢOGBÉDÈ website is now ready for secure, professional deployment!**