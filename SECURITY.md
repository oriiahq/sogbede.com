# 🔒 ṢOGBÉDÈ Security Guide

## 🚨 CRITICAL: Before Deployment

### 1. Environment Variables Setup
Never commit these to version control:

```bash
# Create .env file (DO NOT COMMIT THIS)
SUPABASE_URL=your_actual_supabase_url
SUPABASE_ANON_KEY=your_actual_anon_key
NODE_ENV=production
```

### 2. Files to NEVER Commit
- `.env` (any environment files)
- `config.js` (if it contains secrets)
- Any files with hardcoded credentials
- Database connection strings
- API keys or tokens

## 🛡️ Secure Deployment Options

### Option A: Server-Side Environment Variables (Recommended)
1. **Set environment variables** in Namecheap hosting panel
2. **Use `deploy.php`** to inject variables into config
3. **Load config** via `<script src="deploy.php"></script>`

### Option B: Secure File Upload (Alternative)
1. **Create production config** in private folder on server
2. **Upload via FTP** to `/private/config.js` (outside web root)
3. **Use server-side includes** to load config

### Option C: Manual Config Replacement (Simple)
1. **Replace placeholders** in `config.secure.js` manually
2. **Upload to server** after credential injection
3. **Remove development credentials** before upload

## 🚀 Deployment Steps for Namecheap

### Step 1: Prepare Files
```bash
# Remove sensitive files
rm -f .env
rm -f config.js  # (if it has hardcoded secrets)

# Use secure config
cp config.secure.js config.js
```

### Step 2: Set Environment Variables on Namecheap
In your hosting control panel, set:
- `SUPABASE_URL` = your_supabase_url
- `SUPABASE_ANON_KEY` = your_anon_key

### Step 3: Upload Files
Upload all files EXCEPT:
- `.env*` files
- Any backup files
- Development configs with secrets

### Step 4: Update HTML References
Change in your HTML:
```html
<!-- From -->
<script src="config.js"></script>

<!-- To (if using PHP method) -->
<script src="deploy.php"></script>
```

## 🔍 Security Checklist

- [ ] No hardcoded credentials in any committed files
- [ ] Environment variables set on server
- [ ] `.gitignore` properly configured
- [ ] All sensitive files excluded from upload
- [ ] Supabase RLS policies enabled
- [ ] HTTPS enforced on production
- [ ] Regular security updates scheduled

## ⚠️ Important Notes

1. **Supabase Anon Key**: While called "anon", it should still be protected
2. **RLS Policies**: Ensure Supabase Row Level Security is properly configured
3. **HTTPS Only**: Never use HTTP in production
4. **Regular Updates**: Monitor for security updates
5. **Backup Strategy**: Regular secure backups of your data

## 🚨 If Credentials Are Compromised

1. **Immediately rotate** all API keys in Supabase dashboard
2. **Update environment variables** on server
3. **Clear any cached configs**
4. **Review access logs** for suspicious activity
5. **Update RLS policies** if needed

## 📞 Emergency Contact

If you suspect a security breach:
1. Disable the application immediately
2. Rotate all credentials
3. Review Supabase logs
4. Contact your hosting provider if needed