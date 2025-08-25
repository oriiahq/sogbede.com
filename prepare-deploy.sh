#!/bin/bash

# ṢOGBÉDÈ Deployment Preparation Script
# This script prepares your files for secure deployment to Namecheap

echo "🚀 Preparing ṢOGBÉDÈ for secure deployment..."

# Create deployment directory
mkdir -p deploy

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}📋 Security Checklist:${NC}"

# Check for sensitive files
if [ -f ".env" ]; then
    echo -e "${RED}❌ .env file found - this should NOT be deployed${NC}"
    echo "   Move sensitive data to server environment variables"
else
    echo -e "${GREEN}✅ No .env file found${NC}"
fi

if grep -r "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9" . --exclude-dir=deploy --exclude="prepare-deploy.sh" >/dev/null 2>&1; then
    echo -e "${RED}❌ Hardcoded Supabase key found in files${NC}"
    echo "   Please remove hardcoded credentials before deployment"
else
    echo -e "${GREEN}✅ No hardcoded credentials found${NC}"
fi

# Copy files for deployment (excluding sensitive ones)
echo -e "${BLUE}📦 Copying files for deployment...${NC}"

# Copy all HTML, CSS, JS files
cp *.html deploy/ 2>/dev/null || true
cp *.css deploy/ 2>/dev/null || true
cp *.js deploy/ 2>/dev/null || true
cp *.php deploy/ 2>/dev/null || true

# Copy images directory if it exists
if [ -d "images" ]; then
    cp -r images deploy/
    echo -e "${GREEN}✅ Images copied${NC}"
fi

# Copy mobile header image
cp "website header mobile.jpg" deploy/ 2>/dev/null || echo -e "${YELLOW}⚠️  Mobile header image not found${NC}"

# Create production config
if [ -f "config.secure.js" ]; then
    cp config.secure.js deploy/config.js
    echo -e "${GREEN}✅ Secure config prepared${NC}"
else
    echo -e "${YELLOW}⚠️  config.secure.js not found - using existing config${NC}"
fi

# Exclude sensitive files
echo -e "${BLUE}🚫 Excluding sensitive files:${NC}"
echo "   .env files, .git directory, node_modules, etc."

# Create upload instructions
cat > deploy/UPLOAD_INSTRUCTIONS.md << EOF
# 🚀 ṢOGBÉDÈ Deployment Instructions

## Files in this directory are ready for upload to Namecheap

### 1. Set Environment Variables First
In your Namecheap hosting control panel:
- SUPABASE_URL = your_supabase_project_url
- SUPABASE_ANON_KEY = your_supabase_anon_key

### 2. Upload These Files
Upload ALL files in this deploy folder to your public_html directory

### 3. Test Your Deployment
1. Visit your website
2. Open browser dev tools (F12)
3. Check console for "🔧 ṢOGBÉDÈ Config loaded" message
4. Test form submission to ensure Supabase connection works

### 4. Security Verification
- Ensure HTTPS is working
- Test that environment variables are loading
- Verify form submissions reach your Supabase database
- Check admin panel login functionality

### 🚨 IMPORTANT
- Never upload .env files
- Ensure environment variables are set on server
- Test thoroughly before going live
EOF

echo -e "${GREEN}✅ Deployment package created in ./deploy/ directory${NC}"
echo -e "${BLUE}📁 Contents of deploy directory:${NC}"
ls -la deploy/

echo ""
echo -e "${YELLOW}📋 Next Steps:${NC}"
echo "1. Set environment variables in Namecheap hosting panel"
echo "2. Upload contents of ./deploy/ directory to your web root"
echo "3. Test your deployment thoroughly"
echo "4. Read UPLOAD_INSTRUCTIONS.md in the deploy folder"

echo ""
echo -e "${GREEN}🎉 Ready for secure deployment!${NC}"