# Easy Tip Calculator

This project is a easy expense control simulation created with Typescript, React and Vite.


## Project Setup

The project was created using Vite with the following configuration:

Configuration
```bash
npm create vite@latest
√ Project name: ... name
√ Select a framework: » React
√ Select a variant: » Typescript + SWC
```

## Package Tailwind CSS

[![Tailwind Docs](https://img.shields.io/badge/Docs-TailwindCSS-38B2AC?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/docs/installation)


```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Change configuration on tailwind.config.js
```bash
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Add next lines on index.css
```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.


