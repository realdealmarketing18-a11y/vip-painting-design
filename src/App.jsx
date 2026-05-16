import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import Hero            from './components/Hero'
import ColorSwatches  from './components/ColorSwatches'
import EducationSection from './components/EducationSection'
import CaseStudiesSection from './components/CaseStudiesSection'
import BottomFourCol  from './components/BottomFourCol'
import ProjectScopeSection from './components/ProjectScopeSection'
import CTASection     from './components/CTASection'
import Footer         from './components/Footer'
import FloatingForm   from './components/FloatingForm'

function Nav({ onBookClick }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <a href="/" className="nav-logo">
        <span className="nav-logo-crown">&#9819;</span>
        <div style={{ lineHeight: 1.1 }}>
          <div style={{ fontSize: '1.1rem', fontWeight: 800 }}>VIP</div>
          <div style={{ fontSize: '0.45rem', fontWeight: 700, letterSpacing: '0.22em', color: '#C4973C', fontFamily: "'Montserrat',sans-serif" }}>HOME PAINTING</div>
        </div>
      </a>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#process">Our Process</a></li>
        <li><a href="#work">Our Work</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#about">About Us</a></li>
      </ul>
      <button
        className="btn-gold"
        onClick={onBookClick}
        style={{ padding: '11px 22px', fontSize: '0.6rem', letterSpacing: '0.12em' }}
      >
        Get My Free Quote
      </button>
    </nav>
  )
}

function ScrollTop() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const h = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])
  if (!visible) return null
  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      style={{ position:'fixed', bottom:'28px', right:'28px', width:'40px', height:'40px', background:'#C4973C', border:'none', color:'#fff', display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer', zIndex:50, borderRadius:'2px' }}
      aria-label="Scroll to top"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </motion.button>
  )
}

export default function App() {
  const [formOpen, setFormOpen] = useState(false)

  return (
    <>
      <Nav onBookClick={() => setFormOpen(true)} />
      <main id="home">
        <Hero onBookClick={() => setFormOpen(true)} />
        <ColorSwatches />
        <EducationSection onBookClick={() => setFormOpen(true)} />
        <CaseStudiesSection onBookClick={() => setFormOpen(true)} />
        <BottomFourCol onBookClick={() => setFormOpen(true)} />
        <ProjectScopeSection />
        <CTASection onBookClick={() => setFormOpen(true)} />
      </main>
      <Footer onBookClick={() => setFormOpen(true)} />
      <FloatingForm isOpen={formOpen} onClose={() => setFormOpen(false)} />
      <ScrollTop />
    </>
  )
}
