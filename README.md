# Expense Control

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

## Packages

```bash
npm i @headlessui/react  -->Window Modal
npm i @heroicons/react --> Icons
npm i uuid --> UUID UNICOS
npm i --save-dev @types/uuid --> Evitar ANY
```
### React Date Picker
```bash
https://www.npmjs.com/package/react-date-picker
```

#### npm Install
```bash
npm i react-date-picker
npm i react-calendar
```

#### Import Dependencies Calendar
```bash
import DatePicker from 'react-date-picker';
import 'react-calendar/dist/Calendar.css'
import 'react-date-picker/dist/DatePicker.css'
```

### react-swipeable-list
```bash
https://www.npmjs.com/package/react-swipeable-list
npm i react-swipeable-list
```

#### Import dependencies
```bash
import{
  LeadingActions,
  SwipeableList,
  SwipeanleListItem,
  SwipeAction,
  TrailingActions
} from 'react-swipeable-list'

import "react-swipeable-list/dist/styles.css"
```


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.


