# LeadCRM.IO Landing Page

A pixel-perfect, responsive landing page implementation for LeadCRM.IO - LinkedIn CRM Integration service.

## Features

- ✅ Pixel-perfect design matching the Figma design
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Modern React + Vite setup
- ✅ Clean, semantic HTML structure
- ✅ Reusable SCSS modules
- ✅ Cross-browser compatible (Chrome, Firefox, Safari, Edge)

## Project Structure

```
practical-task-desgin/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation header
│   │   ├── Hero.jsx            # Hero section with CTAs
│   │   ├── KeyFeatures.jsx     # Feature icons section
│   │   ├── Comparison.jsx      # Without/With LeadCRM comparison
│   │   └── BottomCTA.jsx       # Final call-to-action
│   ├── styles/
│   │   ├── main.scss           # Global styles
│   │   ├── App.scss            # App component styles
│   │   ├── Header.scss         # Header styles
│   │   ├── Hero.scss           # Hero section styles
│   │   ├── KeyFeatures.scss    # Features section styles
│   │   ├── Comparison.scss     # Comparison section styles
│   │   └── BottomCTA.scss      # Bottom CTA styles
│   ├── App.jsx                 # Main app component
│   └── main.jsx                # Entry point
├── index.html                  # HTML template
├── package.json                # Dependencies
├── vite.config.js             # Vite configuration
└── README.md                  # This file
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to the URL shown in the terminal (usually `http://localhost:5173`)

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Design Details

### Color Palette
- Primary Blue: `#2563eb`
- Success Green: `#10b981`
- Error Red: `#dc2626`
- Neutral Grays: Various shades for text and backgrounds

### Typography
- Font Family: Inter (Google Fonts)
- Headings: 700-800 weight
- Body: 400-500 weight

### Responsive Breakpoints
- Mobile: < 480px
- Tablet: 480px - 768px
- Desktop: > 768px
- Large Desktop: > 1024px

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Notes

- All components are modular and reusable
- Styles use SCSS for better organization
- The design is fully responsive with mobile-first approach
- Semantic HTML5 elements are used throughout
- Clean code structure with proper comments

