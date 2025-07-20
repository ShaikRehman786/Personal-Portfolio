import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import About from './components copy/About.jsx'
import Contact from './components copy/Contact.jsx'
import Education from './components copy/Education.jsx'
import Experience from './components copy/Experience.jsx'
import Footer from './components copy/Footer.jsx'
import Header from './components copy/Header.jsx'
import Hero from './components copy/Hero.jsx'
import Skills from './components copy/Skillls.jsx'
import Projects from './components copy/Projects.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Header />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Education />
    <Experience />
    <Contact />
    <Footer />

  </StrictMode>,
)
