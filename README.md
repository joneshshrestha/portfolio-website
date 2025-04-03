# Personal Portfolio Website

A modern, responsive portfolio website built with Gatsby, React, and Tailwind CSS. Features include dark mode support, blog functionality with MDX, and a clean, minimalist design.

## Technologies Used

- [Gatsby](https://www.gatsbyjs.com/) - React-based static site generator
- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [MDX](https://mdxjs.com/) - Markdown with JSX

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/portfolio-website.git
cd portfolio-website
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run develop
```

4. Open your browser and navigate to `http://localhost:8000`

## Project Structure

```
portfolio-website/
├── content/
│   └── blog/           # MDX blog posts
├── src/
│   ├── components/     # React components
│   ├── context/        # React context (theme)
│   ├── images/         # Static images
│   ├── pages/          # Gatsby pages
│   ├── styles/         # Global styles
│   └── templates/      # Page templates
├── gatsby-config.js    # Gatsby configuration
├── gatsby-node.js      # Gatsby Node API
├── tailwind.config.js  # Tailwind CSS configuration
└── package.json        # Project dependencies
```

## Deployment

This site can be deployed to any static hosting service. For GitHub Pages:

```bash
npm run deploy
```
