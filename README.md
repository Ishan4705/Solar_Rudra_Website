# Rudra Solar Solutions Landing Page

A premium, modern, fully responsive, and modular single-page React landing page built for **Rudra Solar Solutions Pvt. Ltd.** The project utilizes Vite for fast development and HMR, styled with clean vanilla CSS following design tokens for colors, typography, and spacing.

## Features

- **Modular React Architecture**: Scalable folder structure with isolated components for easy maintenance.
- **Glassmorphic Floating Navbar**: Automatically transitions from transparent to blur/glass on scroll. Highly optimized spacing for core links (Home, Benefits, PM Surya Ghar, Contact Us).
- **Responsive Navigation**: Smooth mobile slide-over overlay menu with interactive animations.
- **Hero Section**: 60/40 visual split with custom assets, entrance animations, and a prominent PM Surya Ghar Yojana subsidy badge.
- **Benefits Grid**: A structured 4+3 card grid featuring custom SVG icons and animated hover micro-interactions.
- **Process Timeline**: A 6-step workflow timeline indicating the seamless transition from consultation to net metering installation.
- **PM Surya Ghar Subsidy section**: Built-in support for Hindi typography, interactive check-list, and a custom SVG energy flow diagram illustrating solar generation, house distribution, storage, and grid feedback.
- **Customized Contact Footer**: Balanced footer containing direct call links, email, brand logo, quick links, and social connections (direct Instagram handles and Email link).

---

## Technology Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vite.dev/)
- **Styling**: Vanilla CSS (CSS variables, Custom flex/grid, and fluid typography)
- **Typography**: Google Fonts (Montserrat for headings, Poppins for Hindi, and Open Sans for body copy)

---

## Project Structure

```text
Solar_Rudra_Website/
├── index.html              # Core HTML entry, SEO meta, Google Fonts
├── src/
│   ├── main.jsx            # React mounting script
│   ├── index.css           # Global design system (CSS variables, resets, helpers)
│   ├── App.jsx             # Main container composing page sections
│   ├── App.css             # Main container layout overrides
│   ├── assets/             # Logo and hero image assets
│   └── components/         # Modular components and stylesheets
│       ├── Navbar.jsx / Navbar.css
│       ├── Hero.jsx / Hero.css
│       ├── Benefits.jsx / Benefits.css
│       ├── Process.jsx / Process.css
│       ├── Subsidy.jsx / Subsidy.css
│       └── Footer.jsx / Footer.css
```

---

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone or navigate into the project directory:
   ```bash
   cd Solar_Rudra_Website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser to view the site.
