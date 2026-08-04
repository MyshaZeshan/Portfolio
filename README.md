# 3D Portfolio Website

An interactive personal portfolio website built with React, React Three Fiber, and Three.js, featuring a 3D scene, custom particle effects, and a fully responsive layout.

## Live Demo

🔗 [View Live Site](https://mysha-portfolio.vercel.app)

## Features

- Interactive 3D model rendered with React Three Fiber / Three.js
- Custom `InteractiveStars` particle background system
- Fully responsive design across breakpoints, with dynamic 3D models
- Smooth pointer-based interactions
- Styled with Tailwind CSS

## Tech Stack

- **Frontend:** React, Vite
- **3D Graphics:** React Three Fiber, Three.js, drei
- **Styling:** Tailwind CSS
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/MyshaZeshan/<repo-name>.git
cd <repo-name>

# Install dependencies
npm install

# Run the development server
npm run dev
```

The app will be available at `http://localhost:5173` (or the port Vite assigns).

### Build for Production

```bash
npm run build
```

## Project Structure

```
portfolio/
├── public/
├── src/
│   ├── components/       # Reusable UI and 3D components
│   ├── constants/         # Site content/config
│   ├── sections/           # Page sections (Hero, About, etc.)
│   ├── utils/               # Helper functions (e.g. calculateSizes)
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
└── vite.config.js
```

## Deployment

This project is deployed on [Vercel](https://vercel.com). If deploying from a subfolder, make sure to set the correct **Root Directory** in your Vercel project settings.

## Acknowledgements
- **3D Model:** ["Smol Ame in an Upcycled Terrarium [HololiveEn]"](https://sketchfab.com/3d-models/smol-ame-in-an-upcycled-terrarium-hololiveen-490cecc249d242188fda5ad3160a4b24) by [Seafoam](https://sketchfab.com/seafoam), licensed under [CC-BY-4.0](http://creativecommons.org/licenses/by/4.0/). Converted to JSX via [gltfjsx](https://github.com/pmndrs/gltfjsx).

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

**Mysha**
GitHub: [@MyshaZeshan](https://github.com/MyshaZeshan)
