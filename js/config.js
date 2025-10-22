/**
 * CONFIGURATION FILE
 * 
 * This file contains customizable settings for your landing page.
 * Edit these values to quickly customize your site without diving into the code.
 */

const siteConfig = {
  // Company Information
  company: {
name: "Twinmotion",
        tagline: "Real-time 3D visualization made easy",
description: "Quick, easy-to-use tool that uses an intuitive icon-based interface to create high-quality images, panoramas, standard or 360° VR videos in seconds.",
    logo: "images/logo.png" // Optional: path to your logo
  },

  // Contact Information
  contact: {
        email: "contact@yourcompany.com",
        phone: "+1 (555) 123-4567",
        address: "123 Main Street, City, State 12345"
  },

  // Social Media Links
    social: {
 twitter: "https://twitter.com/yourcompany",
        youtube: "https://youtube.com/yourcompany",
        linkedin: "https://linkedin.com/company/yourcompany",
        github: "https://github.com/yourcompany",
        facebook: "https://facebook.com/yourcompany"
  },

    // Navigation Menu Items
    navigation: [
    { text: "Features", link: "#features" },
        { text: "Industries", link: "#industries" },
    { text: "Pricing", link: "#pricing" },
    { text: "Learn", link: "#learn" },
        { text: "Community", link: "#community" }
  ],

  // Call-to-Action Buttons
    cta: {
    primary: {
      text: "Download for free",
  link: "#download"
      },
      secondary: {
            text: "Watch video",
    link: "#video"
    }
  },

  // Featured Videos / Case Studies
  caseStudies: [
    {
      title: "How we visualize interior spaces in real-time",
      description: "Explore the workflow behind stunning interior visualization",
      image: "images/case-study-1.jpg",
      videoUrl: "https://youtube.com/watch?v=example1"
     },
    {
    title: "Creating photorealistic environments",
      description: "Learn how professionals create stunning visualizations",
            image: "images/case-study-2.jpg",
    videoUrl: "https://youtube.com/watch?v=example2"
    }
    ],

    // Pricing Plans
    pricing: [
      {
      name: "Free",
      price: "$0",
 description: "Perfect for students and learning",
      features: [
     "Full feature access",
        "Community support",
        "Regular updates",
     "Educational license"
      ],
      buttonText: "Download free",
            buttonLink: "#download",
      featured: false
   },
    {
      name: "Professional",
    price: "Custom",
    description: "For professional visualization work",
      features: [
     "Everything in Free",
      "Commercial license",
    "Priority support",
    "Advanced features",
    "Enterprise deployment"
            ],
      buttonText: "Contact sales",
      buttonLink: "#contact",
     featured: true
    },
 {
      name: "Enterprise",
            price: "Custom",
      description: "For large teams and organizations",
      features: [
     "Everything in Professional",
   "Volume licensing",
        "Dedicated support",
        "Custom training",
      "SLA guarantee"
    ],
      buttonText: "Contact sales",
      buttonLink: "#contact",
featured: false
    }
  ],

  // Features/Tools
  features: [
   {
            icon: "shield",
  title: "One-click rendering",
      description: "Generate high-quality images and videos with a single click"
   },
        {
      icon: "circle",
      title: "Real-time updates",
     description: "See changes instantly as you work on your project"
        },
   {
      icon: "square",
            title: "VR ready",
 description: "Explore your designs in immersive virtual reality"
        }
  ],

  // Community Features
    community: {
        title: "Need help, inspiration, or advice?",
        subtitle: "Join the Epic Developer Community.",
    description: "Connect with other creators, share your work, and get expert advice from the community.",
    buttonText: "Join community",
    buttonLink: "#community",
        features: [
      {
    icon: "chat",
   title: "Community forums",
        description: "Ask questions and share knowledge"
  },
      {
        icon: "check",
                title: "Documentation",
            description: "Comprehensive guides and tutorials"
      },
      {
        icon: "users",
        title: "Events & webinars",
  description: "Learn from experts and network"
            }
    ]
  },

  // Footer Links
  footer: {
        columns: [
    {
 title: "Product",
      links: [
          { text: "Features", url: "#features" },
         { text: "Pricing", url: "#pricing" },
   { text: "System requirements", url: "#system" },
          { text: "What's new", url: "#news" },
         { text: "Download", url: "#download" }
        ]
      },
      {
                title: "Resources",
 links: [
          { text: "Documentation", url: "#docs" },
         { text: "Tutorials", url: "#tutorials" },
                 { text: "Blog", url: "#blog" },
 { text: "Case studies", url: "#cases" },
 { text: "Support", url: "#support" }
    ]
      },
      {
   title: "Company",
        links: [
  { text: "About us", url: "#about" },
          { text: "Careers", url: "#careers" },
         { text: "Press", url: "#press" },
   { text: "Partners", url: "#partners" },
     { text: "Contact", url: "#contact" }
    ]
      },
     {
        title: "Legal",
        links: [
  { text: "Privacy policy", url: "#privacy" },
          { text: "Terms of service", url: "#terms" },
        { text: "Cookie policy", url: "#cookies" },
          { text: "Licenses", url: "#licenses" }
        ]
      }
    ],
    copyright: "Epic Games, Inc. All rights reserved."
    },

  // Analytics
  analytics: {
        googleAnalyticsId: "", // Add your GA4 ID: G-XXXXXXXXXX
        facebookPixelId: "",   // Add your Facebook Pixel ID
    hotjarId: ""        // Add your Hotjar ID
  },

    // SEO Settings
  seo: {
        title: "Real-time 3D Visualization Software | Twinmotion",
    description: "Twinmotion is a quick, easy-to-use tool that uses an intuitive icon-based interface to create high-quality images, panoramas, standard or 360° VR videos in seconds.",
      keywords: "3D visualization, real-time rendering, architectural visualization, VR, 3D rendering software",
    author: "Your Company",
    ogImage: "images/og-image.jpg" // Open Graph image for social sharing
  },

  // Theme Colors (override CSS variables)
    theme: {
    primaryColor: "#0066ff",
    primaryHover: "#0052cc",
    textPrimary: "#ffffff",
    textSecondary: "#b8b8b8",
   bgDark: "#0a0a0a",
    bgDarker: "#000000",
    bgCard: "#1a1a1a",
  border: "#2a2a2a"
  }
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = siteConfig;
}

/**
 * USAGE EXAMPLES:
 * 
 * // Access company name
 * console.log(siteConfig.company.name);
 * 
 * // Get primary CTA text
 * console.log(siteConfig.cta.primary.text);
 * 
 * // Loop through pricing plans
 * siteConfig.pricing.forEach(plan => {
 *   console.log(plan.name, plan.price);
 * });
 * 
 * // Update page title
 * document.title = siteConfig.seo.title;
 */
