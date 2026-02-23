# Farmcart UI (React + TypeScript + Tailwind)

Production-ready website scaffold with reusable sections:
- Navbar
- Hero
- About
- Services
- Projects/Portfolio
- Contact
- Footer

## Tech Stack
- React (functional components)
- TypeScript
- Vite
- Tailwind CSS

## Folder Structure

```text
src/
  assets/
  components/
    AboutSection.tsx
    ContactSection.tsx
    Footer.tsx
    HeroSection.tsx
    Navbar.tsx
    ProjectsSection.tsx
    SectionHeading.tsx
    ServicesSection.tsx
  styles/
    globals.css
    theme.css
  App.tsx
  main.tsx
```

## Run Locally

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Important: Figma Parity

This scaffold is responsive and production-ready, but exact pixel matching requires final Figma Inspect values and assets (spacing, text sizes/weights, exact colors, image exports, and section copy).

Update design tokens in `src/styles/theme.css` and component content/layout values in `src/components/*` to achieve exact parity.
# farmcart
