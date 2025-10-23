// ==================== 
// MOBILE MENU FUNCTIONALITY 
// ==================== 

const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navActions = document.querySelector('.nav-actions');

if (mobileMenuToggle) {
  mobileMenuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        navActions.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });
}

// ==================== 
// SMOOTH SCROLLING 
// ==================== 

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
    if (href !== '#' && href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
    if (target) {
target.scrollIntoView({
 behavior: 'smooth',
       block: 'start'
       });
            // Close mobile menu if open
             if (navLinks.classList.contains('active')) {
    navLinks.classList.remove('active');
      navActions.classList.remove('active');
  mobileMenuToggle.classList.remove('active');
              document.body.classList.remove('menu-open');
            }
  }
     }
    });
});

// ==================== 
// NAVBAR SCROLL EFFECT 
// ==================== 

let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.boxShadow = 'none';
  } else {
        navbar.style.boxShadow = '0 2px 16px rgba(0, 0, 0, 0.5)';
    }
    
    lastScroll = currentScroll;
});

// ==================== 
// INTERSECTION OBSERVER FOR ANIMATIONS 
// ==================== 

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
 entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.querySelectorAll('.video-card, .starter-card, .pricing-card, .tool-item, .feature-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// ==================== 
// VIDEO CARD CLICK HANDLERS 
// ==================== 

document.querySelectorAll('.video-card').forEach(card => {
 card.addEventListener('click', () => {
        console.log('Video card clicked - implement video modal here');
        // You can implement a video modal here
    });
});

// ==================== 
// DYNAMIC YEAR FOR COPYRIGHT 
// ==================== 

const copyrightYear = document.querySelector('.footer-copyright p');
if (copyrightYear) {
    const currentYear = new Date().getFullYear();
    copyrightYear.textContent = `© ${currentYear} Epic Games, Inc. All rights reserved.`;
}

// ==================== 
// PRICING CARD INTERACTIONS 
// ==================== 

document.querySelectorAll('.pricing-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-12px)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
    });
});

// ==================== 
// FORM VALIDATION (if needed) 
// ==================== 

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

// ==================== 
// LAZY LOADING IMAGES 
// ==================== 

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
      const img = entry.target;
                if (img.dataset.src) {
    img.src = img.dataset.src;
    img.removeAttribute('data-src');
           imageObserver.unobserve(img);
       }
     }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ==================== 
// PARALLAX EFFECT (optional enhancement) 
// ==================== 

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-image img');
    
    parallaxElements.forEach(element => {
      const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ==================== 
// HERO IMAGE SCROLL EFFECTS (blur and fade)
// ==================== 

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.hero-image');
    
    if (heroImage) {
  // Calculate scroll progress (0 to 1 over first 600px of scroll)
    const maxScroll = 600;
     const scrollProgress = Math.min(scrolled / maxScroll, 1);
        
        // Calculate blur amount (0 to 10px)
        const blurAmount = scrollProgress * 10;
        
        // Calculate opacity (1 to 0.2)
        const opacity = 1 - (scrollProgress * 0.8);
        
        // Apply effects
    heroImage.style.filter = `blur(${blurAmount}px) brightness(${1 - scrollProgress * 0.5})`;
        heroImage.style.opacity = opacity;
    }
});

// ==================== 
// HANDLE EXTERNAL LINKS 
// ==================== 

document.querySelectorAll('a[href^="http"]').forEach(link => {
    if (!link.href.includes(window.location.hostname)) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    }
});

// ==================== 
// CONSOLE MESSAGE 
// ==================== 

console.log('%c?? Twinmotion Landing Page', 'font-size: 20px; font-weight: bold; color: #0066ff;');
console.log('%cBuilt with modern web technologies', 'font-size: 12px; color: #666;');

// ==================== 
// LARGE SHOWCASE BLUR/UNBLUR ON SCROLL
// ==================== 

const largeShowcaseObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const img = entry.target.querySelector('img');
      if (img) {
          if (entry.isIntersecting) {
     // When section is in view, unblur the image
      img.classList.add('unblurred');
 } else {
        // When scrolling past, blur again
     img.classList.remove('unblurred');
}
    }
    });
}, {
    threshold: 0.3, // Trigger when 30% of the section is visible
    rootMargin: '-10% 0px -10% 0px' // Add some margin for smoother transition
});

// Observe the large showcase section
const largeShowcaseSection = document.querySelector('.large-showcase');
if (largeShowcaseSection) {
    largeShowcaseObserver.observe(largeShowcaseSection);
}

// ==================== 
// PERFORMANCE MONITORING 
// ==================== 

window.addEventListener('load', () => {
    const loadTime = performance.now();
    console.log(`Page loaded in ${loadTime.toFixed(2)}ms`);
});
