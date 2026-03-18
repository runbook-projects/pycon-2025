# PyCon 2025

The annual Python programming conference website.

## 🚀 Project Structure

This is an Astro static site with the following structure:

```
/
├── public/
│   ├── assets/
│   │   └── event-image-1.png
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── About.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── Register.astro
│   │   ├── Schedule.astro
│   │   └── Venue.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |

## 🌐 Deployment

This site is configured for GitHub Pages deployment:

- **Site URL**: https://runbook-projects.github.io/pycon-2025
- **Base Path**: /pycon-2025

The site builds to the `dist/` directory and is ready for static hosting.

## 📝 Features

- Responsive design with mobile-first approach
- Semantic HTML5 structure
- Accessible navigation and content
- Hero section with event branding
- About, Schedule, Venue, and Registration sections
- Modern CSS with custom properties
- No external dependencies (pure static site)

## 🎨 Customization

The site uses CSS custom properties defined in `src/styles/global.css` for easy theming:

- Primary color: Python blue (#306998)
- Secondary color: Python yellow (#FFD43B)
- Accent color: Light blue (#4B8BBE)

## 📄 License

MIT License - feel free to use this template for your own events!