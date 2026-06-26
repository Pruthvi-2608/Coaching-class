# Dhananjay Tutorials Website

A modern, responsive React website for Dhananjay Tutorials coaching institute built with React, Tailwind CSS, and Framer Motion.

## Features

- **Home/Hero Section** - Stunning hero with animations and statistics
- **Courses** - IIT-JEE, NEET, and Foundation courses with pricing
- **About** - Institute information with feature highlights
- **Results** - Achievement statistics and recent toppers
- **Gallery** - Filterable image gallery with lightbox
- **Testimonials** - Student success stories
- **Enrollment** - Full enrollment form with course selection
- **Payment** - Complete payment gateway (UPI, Card, Net Banking, QR, Wallets)
- **Contact** - Contact form and institute details
- **Footer** - Complete footer with links and social media

## Tech Stack

- React 18
- Tailwind CSS 3
- Framer Motion (animations)
- Lucide React (icons)
- Vite (build tool)

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Extract the zip file
2. Navigate to the project directory:
   ```bash
   cd dhananjay-tutorials
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## Project Structure

```
dhananjay-tutorials/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Courses.jsx
│   │   ├── About.jsx
│   │   ├── Results.jsx
│   │   ├── Gallery.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Enrollment.jsx
│   │   ├── Payment.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── ScrollToTop.jsx
│   ├── lib/
│   │   └── utils.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Customization

### Colors
Edit `tailwind.config.js` to change the color scheme:
- `primary`: Main brand color (maroon/burgundy)
- `accent`: Gold accent color

### Content
Update the content in each component file to match your institute's details:
- Contact information
- Course prices
- Student testimonials
- Images (replace Unsplash URLs)

### Images
Replace the placeholder Unsplash image URLs in each component with your actual images.

## License

This project is created for Dhananjay Tutorials.
