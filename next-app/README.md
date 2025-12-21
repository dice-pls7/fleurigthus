# Fleurig Thús - Next.js 16

A beautiful website for Fleurig Thús, a household help service with heart and warmth.

## Tech Stack

- **Framework**: Next.js 16.0.10 with App Router
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Language**: TypeScript

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout with navigation & footer
│   ├── page.tsx         # Home page
│   ├── home.css         # Home page styles
│   ├── globals.css      # Global styles & Tailwind v4 theme
│   ├── prijzen/         # Prices page
│   ├── contact/         # Contact page
│   └── blog/            # Blog page
├── components/
│   ├── Navigation.tsx   # Navigation with mobile menu
│   ├── Footer.tsx       # Footer component
│   ├── CustomCursor.tsx # Custom cursor effect
│   ├── MagneticButton.tsx # Magnetic hover button
│   ├── PageTransition.tsx # Page transition animations
│   ├── ParallaxSection.tsx # Parallax scroll effect
│   └── RevealText.tsx   # Text reveal animation
```

## Features

- Beautiful animations with Framer Motion
- Custom cursor effect
- Magnetic button interactions
- Page transitions
- Parallax scrolling
- Text reveal animations
- Responsive design
- Warm, elegant color palette

## Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
