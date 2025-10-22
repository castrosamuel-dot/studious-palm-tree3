# Quick Start Guide

## ?? Getting Your Landing Page Running

### Step 1: Open the Page
Simply open `index.html` in your web browser. Double-click the file or drag it into your browser.

### Step 2: Add Images (Recommended)
1. Download or create 8 images (see `images/README.md` for requirements)
2. Place them in the `images/` folder
3. Name them exactly as specified:
   - hero-car.jpg
   - case-study-1.jpg
   - case-study-2.jpg
   - architecture-demo.jpg
   - building-showcase.jpg
   - starter-1.jpg
   - starter-2.jpg
   - starter-3.jpg

### Step 3: Customize Content

#### Update Text Content
Open `index.html` and search for these sections to edit:

- **Hero Title**: Look for `<h1 class="hero-title">`
- **Hero Description**: Look for `<p class="hero-description">`
- **Section Headlines**: Look for `<h2>` tags
- **Button Text**: Look for `<button>` elements

#### Update Colors
Open `css/styles.css` and modify the CSS variables at the top:

```css
:root {
    --color-primary: #0066ff;  /* Change this to your brand color */
}
```

#### Update Links
In `index.html`, update:
- Navigation menu links
- Footer links
- Social media links
- Call-to-action button links

### Step 4: Test Responsiveness
1. Resize your browser window to see mobile/tablet views
2. Test on actual mobile devices if possible
3. Use browser DevTools (F12) ? Toggle Device Toolbar

### Step 5: Deploy

#### Option 1: GitHub Pages (Free)
1. Create a GitHub repository
2. Push your files
3. Go to Settings ? Pages
4. Select main branch
5. Your site will be live at: `https://yourusername.github.io/repo-name`

#### Option 2: Netlify (Free)
1. Go to https://netlify.com
2. Drag and drop your folder
3. Instant deployment!

#### Option 3: Traditional Hosting
Upload all files to your web hosting via FTP:
- index.html (root)
- css/ folder
- js/ folder
- images/ folder

## ?? Common Customizations

### Change Logo
In `index.html`, find the `<div class="logo">` section and replace the SVG or add an image:
```html
<div class="logo">
    <img src="images/your-logo.png" alt="Your Company">
    <span>Your Company</span>
</div>
```

### Add Favicon
Add to `<head>` in index.html:
```html
<link rel="icon" type="image/png" href="images/favicon.png">
```

### Change Font
1. Visit https://fonts.google.com
2. Select your font
3. Copy the `<link>` code to `<head>` in index.html
4. Update `--font-primary` in css/styles.css

### Add Google Analytics
Add before closing `</head>` tag in index.html:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-ID');
</script>
```

## ?? Troubleshooting

### Images Not Showing?
- Check file paths are correct
- Ensure images are in the `images/` folder
- Check file names match exactly (case-sensitive)

### Styles Not Applying?
- Clear browser cache (Ctrl+F5 or Cmd+Shift+R)
- Check css/styles.css exists
- Verify file path in index.html

### JavaScript Not Working?
- Check browser console for errors (F12)
- Ensure js/script.js exists
- Verify file path in index.html

## ?? Tips

1. **Start Small**: Customize one section at a time
2. **Save Often**: Make backups before major changes
3. **Test Browsers**: Check Chrome, Firefox, Safari, Edge
4. **Mobile First**: Always test on mobile devices
5. **Optimize Images**: Compress images before uploading (use TinyPNG.com)
6. **Use Version Control**: Consider using Git to track changes

## ?? Next Steps

- [ ] Replace all placeholder content
- [ ] Add your branding and logo
- [ ] Optimize images for web
- [ ] Set up analytics tracking
- [ ] Add meta tags for SEO
- [ ] Create a custom 404 page
- [ ] Add a contact form
- [ ] Implement video modals for case studies
- [ ] Add more sections as needed

## ?? Need Help?

- Review the main README.md for detailed documentation
- Check browser console (F12) for error messages
- Validate HTML: https://validator.w3.org/
- Validate CSS: https://jigsaw.w3.org/css-validator/

## ?? You're All Set!

Your landing page is now ready to customize and deploy. Have fun building!
