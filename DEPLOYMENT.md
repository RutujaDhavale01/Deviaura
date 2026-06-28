# DEPLOYMENT QUICKSTART (5 Minutes)

## Option 1: Vercel (Recommended for React)

### Step 1: Create GitHub Account (Free) - 2 min
```
1. Go to github.com
2. Click "Sign up"
3. Enter email, password, username
4. Verify email
5. Done!
```

### Step 2: Upload Your Code to GitHub - 2 min
```
1. Go to github.com → Click "New repository"
2. Name it: "atelier-site"
3. Click "Create repository"
4. You'll see instructions like:
   - git init
   - git add .
   - git commit -m "Initial commit"
   - git push origin main
5. Copy-paste those commands in your terminal
```

### Step 3: Deploy with Vercel - 1 min
```
1. Go to vercel.com
2. Click "Sign up"
3. Choose "Continue with GitHub"
4. Authorize Vercel
5. Click "Import Project"
6. Select "atelier-site" repository
7. Keep all settings default
8. Click "Deploy"
9. Wait 2 minutes... ✓ LIVE!
```

Your site is now live at:
→ https://yourusername.vercel.app/

---

## Option 2: Netlify (Also Free, Super Easy)

### Step 1: Create GitHub account (same as above)

### Step 2: Upload code to GitHub (same as above)

### Step 3: Deploy with Netlify
```
1. Go to netlify.com
2. Click "Sign up"
3. Choose "Continue with GitHub"
4. Authorize Netlify
5. Click "New site from Git"
6. Select your "atelier-site" repository
7. Click "Deploy site"
8. Wait 2 minutes... ✓ LIVE!
```

Your site is now live at:
→ https://yourusername.netlify.app/

---

## Next: Add Your Domain (₹500-1500/year)

### Buy a domain
```
1. Go to namecheap.com (cheapest for India)
2. Search "yoursite.com"
3. Add to cart and pay
4. Go to "Manage" → DNS
5. Copy Vercel's nameservers from dashboard
6. Paste into Namecheap DNS settings
7. Wait 1-24 hours
8. Type yoursite.com in browser ✓
```

---

## Make Changes to Your Site

### Update product names, prices, or images
```
1. Download your code from GitHub (or edit directly)
2. Change App.jsx (products, colors, text)
3. Save and push to GitHub:
   git add .
   git commit -m "Updated products"
   git push
4. Vercel automatically redeploys in ~1 minute
5. Changes live! ✓
```

---

## Helpful Commands

```bash
# Install dependencies (first time only)
npm install

# Test locally
npm start

# Build for production
npm run build

# Push changes to GitHub
git add .
git commit -m "Your message"
git push origin main
```

---

## Troubleshooting

**Site not loading?**
- Wait 2-3 minutes after deploy
- Check build logs in Vercel dashboard
- Refresh browser (Ctrl+Shift+R on Windows, Cmd+Shift+R on Mac)

**Images not showing?**
- Make sure SVG files are in public/images/ folder
- Check image paths in App.jsx match file names

**Domain not working?**
- DNS can take 1-24 hours to propagate
- Check Vercel domain settings match DNS records

**Help needed?**
- Vercel docs: vercel.com/docs
- GitHub guides: docs.github.com
- Ask Claude!

---

Good luck! Your site will be live soon. 🎉
