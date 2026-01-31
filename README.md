# Cedarside Concept Limited Website

Static website for Cedarside Concept Limited (CCL) showcasing engineering services across electrical systems, fire safety, and telecommunications.

## Features
- **Modern UI** with responsive layout and accessible navigation
- **Hero slider** and scoped project slideshows
- **Sector pages** for Banks and DisCos with KPIs
- **Contact section** with compact form
- **SEO & social** meta tags and JSON‑LD schema (Organization, Service, WebSite, Breadcrumbs)

## Tech Stack
- HTML5
- CSS3 (`css/modern-style.css` and a few additional CSS files if present)
- Vanilla JavaScript (`js/custom.js`, `js/navbar.js`)
- jQuery (CDN) for light DOM utilities
- Font Awesome (icons) and Google Fonts

## Project Structure
```
cclproject/
├─ index.html            # Home
├─ about.html            # About CCL
├─ services.html         # Core services
├─ experience.html       # Experience & capabilities
├─ banks.html            # Banking solutions
├─ discos.html           # DisCo solutions
├─ blog.html             # Blog & resources
├─ contact.html          # Contact page
├─ css/
│  └─ modern-style.css   # Main stylesheet
├─ js/
│  ├─ custom.js          # Interactions (sliders, reveals)
│  └─ navbar.js          # Menu behaviours
└─ img/                  # Images & logos
```

## Getting Started (Local)
1. Clone or download this repository.
2. Open `index.html` in your browser.
   - No build step required; this is a static site.

## Development Notes
- Keep all image assets under `img/` and optimize for web.
- Update copy and links in the HTML files directly.
- Styles live primarily in `css/modern-style.css`. Prefer utility classes and existing patterns.
- JS for slideshows is scoped within each page to avoid cross‑page conflicts.

## Deployment
This is a static site. You can host it on:
- GitHub Pages
- Netlify / Vercel
- Any static file server (Apache/Nginx/S3/CloudFront)

Basic steps (example: Netlify):
1. Drag‑and‑drop the project folder onto app.netlify.com or connect your repo.
2. Build command: none
3. Publish directory: root of the project

## SEO & Social
- Each page includes descriptive `<title>` and `<meta name="description">`.
- Open Graph and Twitter meta tags are present for rich link previews.
- JSON‑LD schema improves search visibility (`Organization`, `Service`, `WebSite`, and `BreadcrumbList`).

## Accessibility
- Focus outlines enabled for interactive elements.
- Buttons and controls have adequate sizes and hover/focus states.
- Slideshows include ARIA attributes and keyboard‑friendly controls.

## Contact
Cedarside Concept Limited

Plot 61 Airport Road, Warri, Delta State, Nigeria

Email: contact@cedarsideltd.com

Phone: +234 (0)816-637-3114, +234 (0)805-190-6588

## License
Proprietary. All rights reserved unless otherwise stated by the owner.
