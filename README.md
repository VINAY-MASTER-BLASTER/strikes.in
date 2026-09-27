# STRIKE - Premium EdTech Platform 🚀

**STRIKE** is a modern, high-conversion, dark-themed educational platform built for career transformation. It offers structured bootcamps in DSA, Web Development, and System Design, backed by FAANG mentorship and a 100% job-ready guarantee. 

This project was built focusing on premium aesthetics, micro-interactions, and conversion-optimized user flows.

## ✨ Key Features

- **Dynamic Interactive Hero**: Features an HTML5 Canvas particle background, floating gradient orbs, and an animated trust marquee of top tech companies.
- **STRIKE DROP (Flash Sale Engine)**: A fully functional, state-persistent flash sale popup. It features a precise countdown timer, local storage memory (so it remembers if you dismissed it), and automatic expiration fallback states.
- **Interactive Checkout Simulation**: A complete mock checkout flow for course enrollment. Features a glassmorphic modal, HTML5 form validation for credit cards, and immersive processing/success states.
- **Advanced Animations**: Powered by `framer-motion` for smooth, GPU-friendly reveals, scroll-triggers, and layout transitions.
- **Infinite Testimonials Marquee**: A seamless, auto-scrolling horizontal marquee of success stories that gracefully pauses on hover.
- **Interactive Curriculum Roadmap**: A step-by-step interactive timeline that expands to reveal detailed course descriptions, topics, and duration.
- **Custom Iconography System**: A centralized, scalable SVG library (`Icons.jsx`) replacing heavy images with crisp, performant vector graphics featuring custom hover states.
- **100% Mobile Responsive Design**: Engineered with robust fluid typography (`clamp()`), adaptive CSS Grids, and intelligent flexbox layouts. Features a mobile-friendly hamburger navigation, responsive timeline steppers, and tightly constrained checkout modals to ensure perfect rendering on everything from ultra-wide monitors to the smallest smartphone screens.

## 🛠️ Tech Stack

- **Framework**: React 18 (Bootstrapped with Vite)
- **Styling**: Vanilla CSS (Modern CSS variables, Flexbox/Grid, native keyframes, glassmorphism)
- **Animations**: Framer Motion & native CSS transitions
- **Architecture**: Component-driven design with centralized data models (`src/data`) and custom hooks (`useCountdown.js`, `useInView.js`).

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository and navigate into the project directory:
   ```bash
   cd "THUNDER HACKATHON 6.0"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit:
   ```
   http://localhost:5173
   ```

### Building for Production

To create an optimized production build:
```bash
npm run build
```
The bundled files will be generated in the `dist` folder.

## 🎨 Design Philosophy

The application was built under the directive: *"This shouldn't look like a template. It should feel like a premium product."*
We achieved this by avoiding generic UI libraries and instead implementing custom CSS styling tailored for depth (shadows/glows), motion (hover states, parallax), and clarity (typography, contrast).

## 📄 License
This project is created for **THUNDER HACKATHON 6.0**.
