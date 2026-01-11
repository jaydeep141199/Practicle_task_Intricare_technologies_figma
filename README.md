# LeadCRM.IO Landing Page

A modern, responsive landing page for LeadCRM.IO - a LinkedIn CRM integration tool that helps professionals sync LinkedIn prospects to their CRM systems.

## 🚀 Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Modern React + Vite setup
- ✅ SCSS for styling with modular architecture
- ✅ Pixel-perfect design implementation
- ✅ Smooth animations and transitions
- ✅ Cross-browser compatible
- ✅ SEO-friendly semantic HTML structure

## 📋 Project Structure

```
practical-task-desgin/
├── src/
│   ├── components/
│   │   ├── Header.jsx                    # Navigation header with logo and menu
│   │   ├── Hero.jsx                      # Hero section with headline and CTAs
│   │   ├── KeyFeatures.jsx               # Scrolling features showcase
│   │   ├── Comparison.jsx                # Without/With LeadCRM comparison
│   │   ├── BottomCTA.jsx                 # Call-to-action section
│   │   ├── HowItWorks.jsx                # Step-by-step process guide
│   │   ├── Testimonials.jsx              # Customer testimonials carousel
│   │   ├── LinkedInSalesSolutions.jsx    # Solutions with tabs
│   │   ├── SupportedLeadCRM.jsx         # CRM integration flow diagram
│   │   ├── LeadManagementBanner.jsx      # Lead management banner
│   │   └── Footer.jsx                    # Footer with links and contact info
│   ├── assets/
│   │   ├── images/                      # All image assets
│   │   └── styles/
│   │       ├── main.scss                 # Global styles and imports
│   │       ├── App.scss                  # App component styles
│   │       ├── Header.scss               # Header styles
│   │       ├── Hero.scss                 # Hero section styles
│   │       ├── KeyFeatures.scss          # Features section styles
│   │       ├── Comparison.scss           # Comparison section styles
│   │       ├── BottomCTA.scss            # Bottom CTA styles
│   │       ├── HowItWorks.scss           # How it works styles
│   │       ├── Testimonials.scss         # Testimonials styles
│   │       ├── LinkedInSalesSolutions.scss # Solutions styles
│   │       ├── SupportedLeadCRM.scss     # CRM integration styles
│   │       ├── LeadManagementBanner.scss # Banner styles
│   │       └── Footer.scss               # Footer styles
│   ├── App.jsx                           # Main app component
│   └── main.jsx                          # Application entry point
├── index.html                            # HTML template
├── package.json                          # Dependencies and scripts
├── vite.config.js                        # Vite configuration
└── README.md                             # This file
```

## 🛠️ Technologies Used

- **React 18.2.0** - UI library
- **Vite 5.0.0** - Build tool and dev server
- **SCSS/Sass** - CSS preprocessor
- **Google Fonts** - Typography (Exo 2, Sriracha)

## 📦 Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Setup Steps

1. **Clone the repository** (if applicable) or navigate to the project directory

2. **Install dependencies:**
```bash
npm install
```

3. **Start the development server:**
```bash
npm run dev
```

4. **Open your browser** and navigate to the URL shown in the terminal (usually `http://localhost:5173`)

## 🏗️ Build Commands

### Development
```bash
npm run dev
```
Starts the Vite development server with hot module replacement.

### Production Build
```bash
npm run build
```
Creates an optimized production build in the `dist` directory.

### Preview Production Build
```bash
npm run preview
```
Previews the production build locally before deployment.

## 🎨 Design Details

### Color Palette
- **Primary Blue**: `#2D96BC`
- **Light Blue**: `#B3E5FC`, `#E3F2FD`
- **Success Green**: `#10b981`, `#B3FC6A`
- **Error Red**: `#FF4C51`
- **Dark Text**: `#1f2937`, `#090F4E`
- **Light Gray**: `#6b7280`, `#9ca3af`

### Typography
- **Primary Font**: Exo 2 (Google Fonts)
- **Decorative Font**: Sriracha (for special text)
- **Headings**: 700-800 weight
- **Body Text**: 400-600 weight

### Responsive Breakpoints
- **Small Mobile**: < 480px
- **Mobile**: 480px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px
- **Large Desktop**: > 1400px

## 📱 Components Overview

### Header
- Navigation bar with logo
- Menu items and call-to-action button
- Sticky positioning on scroll

### Hero
- Main headline with highlighted text
- "Works with" CRM logos section
- Rating badges
- Dual CTA buttons (Chrome Web Store & Free Trial)

### Key Features
- Continuous scrolling animation
- Four key features with icons
- Responsive marquee effect

### Comparison
- Side-by-side comparison (Without vs With LeadCRM)
- Challenge and solution cards
- Visual comparison with images

### Bottom CTA
- Green CTA button
- Benefit text with decorative arrow

### How It Works
- Four-step process guide
- Wavy connecting line
- Step cards with icons

### Testimonials
- Carousel slider with navigation
- Customer reviews with ratings
- Responsive card layout

### LinkedIn Sales Solutions
- Tabbed interface
- Solution cards with images
- Problem-solution layout

### Supported LeadCRM
- Data flow diagram
- LinkedIn sources → Processing → CRM outputs
- Visual integration flow

### Lead Management Banner
- Full-width banner
- Header and CTA button
- Banner image

### Footer
- Brand information
- Integration links
- Alternative links
- Legal links
- Contact information
- Chrome Web Store button
- Disclaimer and copyright

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Key Features Implementation

### Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Adaptive typography
- Touch-friendly interactions

### Animations
- Smooth transitions
- Hover effects
- Continuous scrolling (Key Features)
- Carousel transitions (Testimonials)

### Accessibility
- Semantic HTML5 elements
- ARIA labels where needed
- Keyboard navigation support
- Alt text for images

## 🔧 Development Notes

- All components are modular and reusable
- SCSS modules for better style organization
- Component-based architecture
- Clean code structure with comments
- Image assets organized in `/assets/images/`
- Styles organized by component

## 📄 License

This project is part of a practical task/design implementation.

## 👥 Contact

For questions or support, visit the LeadCRM website or contact support@leadcrm.io

---

**Note**: This is a frontend implementation project. Make sure all image assets are properly placed in the `/src/assets/images/` directory before running the project.
