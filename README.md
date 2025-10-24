# Five-Star AudioVisual Services - Recall ERS Landing Page

A modern, responsive landing page featuring professional event recording and streaming services with video-on-demand capabilities.

## ?? Features

- **Fully Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean, dark theme with smooth animations and transitions
- **Modular Structure** - Easy to customize and extend
- **Performance Optimized** - Lazy loading, smooth scrolling, and efficient animations
- **Accessibility Ready** - Semantic HTML and ARIA labels

## ?? Project Structure

```
studious-palm-tree3/
??? index.html # Main HTML file
??? css/
?   ??? styles.css      # All stylesheet definitions
??? js/
?   ??? script.js       # JavaScript functionality
??? images/          # Image assets folder
?   ??? hero-car.jpg
?   ??? case-study-1.jpg
?   ??? case-study-2.jpg
?   ??? architecture-demo.jpg
?   ??? building-showcase.jpg
?   ??? starter-1.jpg
?   ??? starter-2.jpg
?   ??? starter-3.jpg
??? README.md
```

## ?? Sections Included

### 1. **Navigation Bar**
- Fixed header with blur effect
- Responsive mobile menu
- Call-to-action buttons

### 2. **Hero Section**
- Large, impactful headline
- Feature description
- Primary and secondary CTAs
- Hero image showcase

### 3. **Featured Case Studies**
- Video card grid
- Hover effects
- Play button overlays

### 4. **Architecture & Real Estate**
- Split-screen layout
- Image and content side-by-side
- Industry-specific messaging

### 5. **Tools Section**
- Feature highlights
- Icon-based presentation
- Grid layout

### 6. **Large Image Showcase**
- Full-width image display
- High-impact visual

### 7. **Get Started**
- Starter resource cards
- Hover animations
- Grid layout

### 8. **Community Section**
- Community features
- Call-to-action
- Icon-based layout

### 9. **Pricing Section**
- Three-tier pricing cards
- Feature comparison
- Highlighted popular option

### 10. **Footer**
- Multi-column layout
- Social media links
- Legal links and copyright

## ?? Image Placeholders

You need to add the following images to the `images/` folder:

1. **hero-car.jpg** - Main hero image (recommended: 1920x1080px)
2. **case-study-1.jpg** - Event visualization (16:9 aspect ratio)
3. **case-study-2.jpg** - Webinar or presentation visualization (16:9 aspect ratio)
4. **architecture-demo.jpg** - Operations section image (landscape)
5. **building-showcase.jpg** - Large showcase image (1920x1080px minimum)
6. **starter-1.jpg** - Getting started thumbnail (16:9 aspect ratio)
7. **starter-2.jpg** - Advanced tutorials thumbnail (16:9 aspect ratio)
8. **starter-3.jpg** - Community showcase thumbnail (16:9 aspect ratio)

### Where to Find Images:

- **Unsplash**: https://unsplash.com/ (search: professional events, webinars, presentations, conference)
- **Pexels**: https://pexels.com/ (search: business events, live streaming, video production)

## ?? Customization Guide

### Colors
Edit the CSS variables in `css/styles.css`:

```css
:root {
    --color-primary: #0066ff;          /* Primary brand color */
    --color-primary-hover: #0052cc;    /* Hover state */
    --color-text-primary: #ffffff;     /* Main text color */
    --color-text-secondary: #b8b8b8;   /* Secondary text */
    --color-bg-dark: #0a0a0a;    /* Dark background */
    --color-bg-darker: #000000;        /* Darker background */
    --color-bg-card: #1a1a1a;   /* Card background */
    --color-border: #2a2a2a;      /* Border color */
}
```

### Typography
The site uses **Inter** font from Google Fonts. To change:
1. Update the Google Fonts link in `index.html`
2. Update `--font-primary` in CSS

### Sections
Each section can be easily edited:
- **Content**: Edit text in `index.html`
- **Styling**: Modify section classes in `css/styles.css`
- **Behavior**: Adjust interactions in `js/script.js`

## ??? Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Grid, Flexbox, and Custom Properties
- **JavaScript (ES6+)** - Interactive features and animations
- **Google Fonts** - Inter font family

## ?? Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: Below 768px

## ? Performance Features

- **Intersection Observer** - Scroll-triggered animations
- **Lazy Loading** - Images load as needed
- **Smooth Scrolling** - Native CSS smooth scroll
- **Optimized Transitions** - Hardware-accelerated animations
- **Minimal JavaScript** - Vanilla JS, no heavy frameworks

## ?? Getting Started

1. **Clone or download** this repository
2. **Add images** to the `images/` folder
3. **Open** `index.html` in your browser
4. **Customize** content, colors, and styling as needed

### For Development:

```bash
# If using a local server (recommended)
# Python 3
python -m http.server 8000

# Node.js (with http-server)
npx http-server

# Then open: http://localhost:8000
```

## ?? Customization Checklist

- [ ] Replace placeholder images with your own
- [ ] Update company name and branding
- [ ] Customize color scheme in CSS variables
- [ ] Update navigation links and menu items
- [ ] Modify section content and copy
- [ ] Add your logo and favicon
- [ ] Update social media links in footer
- [ ] Add analytics tracking (Google Analytics, etc.)
- [ ] Configure contact forms if needed
- [ ] Update meta tags for SEO

## ?? Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ?? License

This template is free to use for personal and commercial projects.

---

**Built with ?? using modern web technologies**
