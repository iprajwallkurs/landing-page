# Prajwal L K Urs — Personal Portfolio

Personal portfolio for Prajwal L K Urs, a software engineer focused on native mobile development, AI/ML systems, and quantitative computing.

## Overview

The site is a responsive, single-page portfolio with:

- Liquid Glass-inspired dark interface with frosted panels and ambient background motion
- Native iOS and Android, AI/ML, and quantitative computing focus
- Integrated profile portrait with AVIF, WebP, and JPG fallbacks
- Four featured projects:
  - **Raitha Nambike** — Android agriculture platform built during the MindMatrix internship
  - **NutriSnap** — Native iOS recipe discovery application
  - **NEXA** — Multimodal AI voice and task automation platform
  - **Deep Learning Dermatoscopic Image Classifier** — Hack a City 2.0 first-place project
- About, experience, recognition, community, technical stack, résumé, and contact sections
- Separate AI/ML and Mobile Engineering résumé links
- Responsive layout and visible keyboard focus states
- Reduced-motion support for users who prefer less animation

## Tech Stack

- HTML5
- Tailwind CSS compiled locally with PostCSS and Autoprefixer
- Custom CSS for glass surfaces, gradients, responsive behavior, and motion
- Vanilla JavaScript for small page interactions and the dynamic copyright year
- Sharp for optimized image and social preview asset generation

## Project Structure

```text
.
├── index.html
├── dist/output.css
├── src/input.css
├── tailwind.config.js
├── postcss.config.js
├── favicon.png
├── favicon.svg
├── og-image.jpg
├── og-image.svg
├── prajwal-avatar.avif
├── prajwal-avatar.webp
├── IMG_5135.jpg
├── Prajwal L K Urs AI & ML Engg Resume.pdf
└── Prajwal L K Urs Mobile Engineering (iOS & Android) Resume.pdf
```

## Run Locally

Install dependencies and compile the stylesheet:

```bash
npm install
npm run build
```

Serve the static site:

```bash
python3 -m http.server 4173
```

Open [http://127.0.0.1:4173](http://127.0.0.1:4173) in a browser.

## Build

The production stylesheet is generated with:

```bash
npm run build
```

This writes the minified Tailwind output to `dist/output.css`. The site does not use the Tailwind CDN.

## Deployment

The project can be deployed as a static site on Vercel.

- Framework preset: **Other**
- Build command: `npm run build`
- Production branch: `main`
- Output directory: project root

If the Vercel project is connected to this GitHub repository, pushing to `main` triggers a new deployment automatically.

## Contact

- Email: [prajwallkursu@gmail.com](mailto:prajwallkursu@gmail.com)
- LinkedIn: [prajwallkurs](https://www.linkedin.com/in/prajwallkurs/)
- X: [@prajwallkurs](https://x.com/prajwallkurs)
- Instagram: [@prajwallkurs](https://www.instagram.com/prajwallkurs/)

## License

This project is for personal use and demonstration purposes.
