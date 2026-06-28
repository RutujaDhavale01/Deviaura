# Atelier - Premium Craft Store

A beautiful, fully responsive React website for artisanal crafts: pipe cleaners, candles, and Jesmonite vessels.

## Features

- ✨ Minimalist, premium design
- 📱 Fully responsive (mobile & desktop)
- 🎨 Beautiful product showcase with SVG images
- 🔍 Category filtering
- 🚀 Ready to deploy (zero cost)
- 🌙 Dark mode support

## Project Structure

```
atelier-site/
├── App.jsx              # Main React component
├── App.css              # Application styles
├── index.js             # React entry point
├── index.css            # Global styles
├── package.json         # Dependencies
├── public/
│   ├── index.html       # HTML template
│   └── images/          # Product SVG images
└── README.md            # This file
```

## Quick Start (Local Development)

### 1. Install dependencies
```bash
npm install
```

### 2. Run development server
```bash
npm start
```

The site will open at `http://localhost:3000`

### 3. Build for production
```bash
npm run build
```

## Deploy to Vercel (Free)

### Step 1: Create GitHub Account
- Go to github.com
- Sign up and verify email

### Step 2: Push Code to GitHub
1. Create new GitHub repository named `atelier-site`
2. Clone the repo locally
3. Copy all project files into the repo folder
4. Push to GitHub:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

### Step 3: Deploy with Vercel
1. Go to vercel.com
2. Sign up with GitHub
3. Click "Import Project"
4. Select your `atelier-site` repository
5. Click "Deploy"
6. **Done!** Your site is live at `yourusername.vercel.app`

### Step 4 (Optional): Connect Custom Domain
1. Buy a domain (Namecheap, GoDaddy - ₹500-1500/year)
2. In Vercel dashboard → Settings → Domains
3. Add your domain and follow DNS setup instructions
4. Wait 5 minutes to 24 hours for DNS propagation

## Customize the Site

### Change Product Names/Prices
Edit the `products` array in `App.jsx`:
```javascript
const products = [
  { 
    id: 1, 
    name: 'Your Product Name', 
    price: '₹999', 
    // ... more fields
  }
]
```

### Update Colors
Edit CSS variables in `App.css`:
```css
:root {
  --accent: #378add;  /* Change this blue */
  --text-primary: #3d3d3a;
  /* ... more variables */
}
```

### Replace Product Images
1. Create your own SVG images or use external images
2. Place them in `public/images/`
3. Update image paths in `App.jsx`

### Edit Brand Name
1. Change "Atelier" in `App.jsx` (hero, header, footer)
2. Update `<title>` in `public/index.html`

## Built With

- **React 18** - UI framework
- **Lucide React** - Icons
- **CSS3** - Styling with CSS variables
- **SVG** - Product images

## License

Free to use and modify for personal/commercial projects.

## Support

Questions? Issues?
- Check Vercel docs: vercel.com/docs
- React docs: react.dev
- GitHub guides: github.com/skills
