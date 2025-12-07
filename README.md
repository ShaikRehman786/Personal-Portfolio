# Fresher Developer Portfolio

A beautiful, responsive portfolio website designed for fresh graduates and entry-level developers. Built with React and Vite.

## Features

- 🎨 Modern, clean design with smooth animations
- 📱 Fully responsive across all devices
- ⚡ Fast performance with Vite
- 🎯 Smooth scrolling navigation
- 💼 Sections: Hero, About, Skills, Projects, Education & Journey, Contact
- 🎓 Fresher-friendly content focusing on learning and growth
- 🎭 Dynamic typewriter effect
- 📊 Animated skill bars
- 🎨 Gradient color scheme
- 📧 Contact form

## Tech Stack

- React 19
- Vite
- React Icons
- React Simple Typewriter
- CSS3 with modern features

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Customization

### Personal Information

Update the following files with your information:

1. **Hero Section** (`src/components/Hero.jsx`):
   - Change name, titles, and description
   - Update social media links
   - Replace profile image path

2. **About Section** (`src/components/About.jsx`):
   - Update bio text
   - Customize highlight cards

3. **Skills Section** (`src/components/Skills.jsx`):
   - Add/remove skills
   - Adjust skill levels
   - Update icons

4. **Projects Section** (`src/components/Projects.jsx`):
   - Add your projects
   - Update images, descriptions, and links
   - Modify tech stack tags

5. **Experience Section** (`src/components/Experience.jsx`):
   - Add your work experience
   - Update education details
   - Modify achievements

6. **Contact Section** (`src/components/Contact.jsx`):
   - Update email, phone, and location
   - Modify social media links
   - Configure form submission

### Colors

The color scheme uses CSS variables in `src/index.css`:

```css
:root {
  --primary: #667eea;
  --secondary: #764ba2;
  --dark: #2d3748;
  --gray: #718096;
  --light: #f7fafc;
}
```

### Images

Place your images in the `public` folder:
- Profile picture: `/public/PortPic.png`
- Resume: `/public/resume.pdf`
- Project images: Update URLs in Projects component

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Experience.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   └── styles/
│       ├── Navbar.css
│       ├── Hero.css
│       ├── About.css
│       ├── Skills.css
│       ├── Projects.css
│       ├── Experience.css
│       ├── Contact.css
│       └── Footer.css
├── App.jsx
├── App.css
├── main.jsx
└── index.css
```

## License

MIT License - feel free to use this for your own portfolio!

## Support

For issues or questions, please open an issue on GitHub.
