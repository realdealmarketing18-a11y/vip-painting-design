import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import Hero from './components/Hero'
import WhyConsultSection from './components/WhyConsultSection'
import CaseStudiesSection from './components/CaseStudiesSection'
import StatsSection from './components/StatsSection'
import ProjectScopeSection from './components/ProjectScopeSection'
import ColorVisualizer from './components/ColorVisualizer'
import TimelineSection from './components/TimelineSection'
import WhatWeDoSection from './components/WhatWeDoSection'
import WhyChooseUsSection from './components/WhyChooseUsSection'
import TestimonialsSection from './components/TestimonialsSection'
import ServicesSection from './components/ServicesSection'
import FAQSection from './components/FAQSection'
import CTASection from './components/CTASection'
import ContactModal from './components/ContactModal'
import Footer from './components/Footer'

/* ── Sticky Nav ── */
function Nav({ onBookClick }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <a href="/" className="nav-logo">
        VIP<span> Premier</span> Painting
      </a>
      <ul className="nav-links">
        <li><a href="#visualization">Visualization</a></li>
        <li><a href="#process">Process</a></li>
        <li><a href="#testimonials">Clients</a></li>
        <li><a href="#contact">Service Areas</a></li>
      </ul>
      <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
        <a href="tel:9093125400" className="nav-phone">(909) 312-5400</a>
        <button className="btn-primary" onClick={onBookClick} style={{ padding: '10px 20px', fontSize: '0.65rem' }}>
          Free Visualization
        </button>
      </div>
    </nav>
  )
}

/* ── Scroll-to-top ── */
function ScrollTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <motion.button
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      style={scrollTopStyles}
      aria-label="Scroll to top"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </motion.button>
  )
}

const scrollTopStyles = {
  position: 'fixed',
  bottom: '32px',
  right: '32px',
  width: '44px',
  height: '44px',
  background: '#e8833a',
  border: 'none',
  color: '#FFFFFF',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  zIndex: 50,
  transition: 'background 400ms',
  borderRadius: 0,
}

/* ── App ── */
export default function App() {
  const [modalOpen, setModalOpen] = useState(false)

  const openModal  = () => setModalOpen(true)
  const closeModal = () => setModalOpen(false)

  return (
    <>
      <Nav onBookClick={openModal} />

      <main>
        {/* 1 — Hero */}
        <Hero onBookClick={openModal} />

        {/* 2 — Why Get a FREE Color Consultation */}
        <WhyConsultSection onBookClick={openModal} />

        {/* 3 — Client Transformations (Case Studies) */}
        <CaseStudiesSection onBookClick={openModal} />

        {/* 4 — Stats / Track Record */}
        <StatsSection />

        {/* 5 — Project Scope (Residential / Commercial / Government) */}
        <ProjectScopeSection />

        {/* 6 — Live Color Visualizer */}
        <ColorVisualizer onBookClick={openModal} />

        {/* 7 — 3-Phase Process Timeline */}
        <TimelineSection />

        {/* 8 — What We Do */}
        <WhatWeDoSection />

        {/* 9 — Why Choose Us */}
        <WhyChooseUsSection onBookClick={openModal} />

        {/* 10 — Testimonials */}
        <TestimonialsSection />

        {/* 11 — Services (Exterior / Interior / Cabinets) */}
        <ServicesSection onBookClick={openModal} />

        {/* 12 — FAQ */}
        <FAQSection />

        {/* 13 — CTA */}
        <CTASection onBookClick={openModal} />
      </main>

      <Footer onBookClick={openModal} />

      <ContactModal isOpen={modalOpen} onClose={closeModal} />

      <ScrollTop />

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        @media (max-width: 900px) {
          .section { padding: 64px 0 !important; }
          .headline-xl { font-size: clamp(2.4rem, 10vw, 4rem) !important; }
        }
        @media (max-width: 768px) {
          [style*="grid-template-columns: repeat(3, 1fr)"] { grid-template-columns: 1fr !important; }
          [style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
          [style*="grid-template-columns: 1.1fr 1fr"] { grid-template-columns: 1fr !important; }
          [style*="grid-template-columns: 1.4fr 1fr"] { grid-template-columns: 1fr !important; }
          [style*="grid-template-columns: 1.3fr 1fr"] { grid-template-columns: 1fr !important; }
          [style*="grid-template-columns: 1.5fr 1fr 1fr 1fr"] { grid-template-columns: 1fr 1fr !important; }
          [style*="grid-template-columns: 1fr 1.6fr"] { grid-template-columns: 1fr !important; }
          [style*="grid-template-columns: 1.15fr 1fr"] { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .services-row { flex-direction: column !important; }
        }
      `}</style>
    </>
  )
}
