import { useState, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'


const HOUSE_IMAGE =
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1600&auto=format&fit=crop'

/* radial-gradient helper for 3D sphere look */
const sphere = (light, base, dark) =>
  `radial-gradient(circle at 36% 30%, ${light}, ${base} 52%, ${dark})`

const SCHEMES = [
  {
    id: 'coastal-classic',
    name: 'Coastal Classic',
    tagline: 'Crisp authority meets coastal calm',
    body:   { name: 'Nonchalant White', sw: 'SW 9108', hex: '#F0EDE4', g: sphere('#FAFAF7','#F0EDE4','#CFC9BC') },
    trim:   { name: 'Naval',            sw: 'SW 6244', hex: '#2B3D6B', g: sphere('#4E639A','#2B3D6B','#131C38') },
    accent: { name: 'Tricorn Black',    sw: 'SW 6258', hex: '#2C2C2D', g: sphere('#585859','#2C2C2D','#080808') },
    overlay: '#2B3D6B',
  },
  {
    id: 'mediterranean',
    name: 'Mediterranean',
    tagline: 'Sun-baked stucco with sculptural bronze',
    body:   { name: 'Antique White', sw: 'SW 6119', hex: '#F2E8D5', g: sphere('#FFF5E8','#F2E8D5','#D1C09E') },
    trim:   { name: 'Urbane Bronze', sw: 'SW 7048', hex: '#5B4F47', g: sphere('#8C7B70','#5B4F47','#2A211C') },
    accent: { name: 'Caviar',        sw: 'SW 6990', hex: '#1A1A1A', g: sphere('#3C3C3C','#1A1A1A','#000000') },
    overlay: '#7A6A5A',
  },
  {
    id: 'contemporary-dark',
    name: 'Contemporary Dark',
    tagline: 'Bold iron with architectural edge',
    body:   { name: 'Iron Ore',    sw: 'SW 7069', hex: '#3D3D3D', g: sphere('#686868','#3D3D3D','#101010') },
    trim:   { name: 'Pure White',  sw: 'SW 7005', hex: '#F4F4EE', g: sphere('#FFFFFF','#F4F4EE','#D4D4CE') },
    accent: { name: 'Repose Gray', sw: 'SW 7015', hex: '#B8B5AC', g: sphere('#D6D3CA','#B8B5AC','#888580') },
    overlay: '#3D3D3D',
  },
  {
    id: 'desert-modern',
    name: 'Desert Modern',
    tagline: 'Warm Inland Empire sand and earth tones',
    body:   { name: 'Accessible Beige', sw: 'SW 7036', hex: '#C9B99A', g: sphere('#DED0BA','#C9B99A','#9E8B6E') },
    trim:   { name: 'Cardboard',        sw: 'SW 6119', hex: '#C19A6B', g: sphere('#D9B888','#C19A6B','#8C6B44') },
    accent: { name: 'Creamy',           sw: 'SW 7012', hex: '#F0E6C8', g: sphere('#FFF6E0','#F0E6C8','#D0C298') },
    overlay: '#B8946A',
  },
  {
    id: 'classic-navy',
    name: 'Classic Navy Estate',
    tagline: 'Deep navy prestige with warm cream trim',
    body:   { name: 'Naval',  sw: 'SW 6244', hex: '#2B3D6B', g: sphere('#4E639A','#2B3D6B','#131C38') },
    trim:   { name: 'Creamy', sw: 'SW 7012', hex: '#F0E6C8', g: sphere('#FFF6E0','#F0E6C8','#D0C298') },
    accent: { name: 'Tango',  sw: 'SW 6891', hex: '#D4622A', g: sphere('#E88050','#D4622A','#9E3C10') },
    overlay: '#1E2D5A',
  },
  {
    id: 'organic-earth',
    name: 'Organic Earth',
    tagline: 'Rich Urbane Bronze and alabaster harmony',
    body:   { name: 'Urbane Bronze', sw: 'SW 7048', hex: '#595047', g: sphere('#8C7B70','#595047','#2A211C') },
    trim:   { name: 'Alabaster',    sw: 'SW 7008', hex: '#EDEBE0', g: sphere('#FFFEFB','#EDEBE0','#CCCAB8') },
    accent: { name: 'Repose Gray',  sw: 'SW 7015', hex: '#B8B5AC', g: sphere('#D6D3CA','#B8B5AC','#888580') },
    overlay: '#595047',
  },
]

/* ── 3D Bubble Swatch ── */
function Bubble({ scheme, part, size = 52, ring = false }) {
  const color = scheme[part]
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
      <motion.div
        whileHover={{ scale: 1.15, y: -3 }}
        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        style={{
          width: size,
          height: size,
          borderRadius: '50%',
          background: color.g,
          boxShadow: ring
            ? `inset -5px -5px 10px rgba(0,0,0,0.22), inset 3px 3px 7px rgba(255,255,255,0.32), 0 0 0 3px #e8833a, 0 10px 28px ${color.hex}60`
            : `inset -5px -5px 10px rgba(0,0,0,0.22), inset 3px 3px 7px rgba(255,255,255,0.32), 0 8px 22px ${color.hex}50`,
          cursor: 'default',
          flexShrink: 0,
          transition: 'box-shadow 300ms',
        }}
      />
      <div style={{ textAlign: 'center' }}>
        <p style={bubbleLabel}>{color.name}</p>
        <p style={bubbleSW}>{color.sw}</p>
      </div>
    </div>
  )
}

/* ── Scheme Carousel Card ── */
function SchemeCard({ scheme, active, onClick }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.25 }}
      style={{
        ...cardBase,
        borderColor: active ? '#e8833a' : 'rgba(26,31,78,0.08)',
        boxShadow: active
          ? '0 0 0 1px #e8833a, 0 8px 28px rgba(232,131,58,0.15)'
          : '0 2px 12px rgba(26,31,78,0.04)',
        background: active ? '#FFFAF7' : '#FFFFFF',
      }}
    >
      {/* Scheme name */}
      <p style={cardName}>{scheme.name}</p>
      <p style={cardTagline}>{scheme.tagline}</p>

      {/* Mini bubbles */}
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginTop: '16px' }}>
        {['body', 'trim', 'accent'].map((part) => (
          <div
            key={part}
            title={`${scheme[part].name} ${scheme[part].sw}`}
            style={{
              width: 36,
              height: 36,
              borderRadius: '50%',
              background: scheme[part].g,
              boxShadow: `inset -3px -3px 6px rgba(0,0,0,0.2), inset 2px 2px 5px rgba(255,255,255,0.3), 0 4px 12px ${scheme[part].hex}50`,
              flexShrink: 0,
            }}
          />
        ))}
        {active && (
          <motion.div
            layoutId="active-chip"
            style={{
              marginLeft: 'auto',
              background: '#e8833a',
              borderRadius: '2px',
              padding: '3px 8px',
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '0.5rem',
              fontWeight: 700,
              letterSpacing: '0.15em',
              color: '#FFFFFF',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
            }}
          >
            Active
          </motion.div>
        )}
      </div>
    </motion.button>
  )
}

/* ── Main Section ── */
export default function ColorVisualizer({ onBookClick }) {
  const [activeId, setActiveId] = useState(SCHEMES[0].id)
  const [showBefore, setShowBefore] = useState(false)
  const carouselRef = useRef(null)

  const active = SCHEMES.find((s) => s.id === activeId)
  const activeIndex = SCHEMES.findIndex((s) => s.id === activeId)

  const scroll = useCallback((dir) => {
    if (!carouselRef.current) return
    const card = carouselRef.current.querySelector('[data-scheme-card]')
    const w = card ? card.offsetWidth + 16 : 220
    carouselRef.current.scrollBy({ left: dir * w * 2, behavior: 'smooth' })
  }, [])

  return (
    <section id="visualization" className="section" style={styles.section}>
      <div className="container">

        {/* Header */}
        <div style={styles.header}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
            <div style={{ width: '32px', height: '2px', background: '#e8833a' }} />
            <span className="overline">Step 2 — Live Color Visualizer</span>
          </div>
          <h2 className="headline headline-lg" style={{ color: '#1a1f4e', maxWidth: '680px' }}>
            See Your Estate&rsquo;s New Identity<br />
            <em style={{ color: '#e8833a', fontStyle: 'italic' }}>Before We Touch a Wall.</em>
          </h2>
        </div>

        {/* Main grid */}
        <div style={styles.grid}>

          {/* ── LEFT — House Image ── */}
          <div style={styles.imageCol}>
            <div style={styles.imageWrap}>
              {/* Base image — partially desaturated */}
              <img
                src={HOUSE_IMAGE}
                alt="Luxury estate color preview"
                style={styles.houseImg}
              />

              {/* Color overlay — mix-blend-mode: color transforms the image */}
              <AnimatePresence mode="wait">
                {!showBefore && (
                  <motion.div
                    key={activeId}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    style={{ ...styles.colorOverlay, background: active.overlay }}
                  />
                )}
              </AnimatePresence>

              {/* Dark gradient — bottom readability */}
              <div style={styles.imageGradient} />

              {/* Before / After toggle badge */}
              <div style={styles.beforeBadge}>
                <button
                  onClick={() => setShowBefore((v) => !v)}
                  style={beforeToggleBtn}
                  aria-label="Toggle before/after"
                >
                  <span style={{ ...badgeText, color: showBefore ? '#e8833a' : '#1a1f4e' }}>
                    {showBefore ? 'BEFORE' : 'AFTER'}
                  </span>
                  <span style={toggleDivider}>|</span>
                  <span style={{ ...badgeText, color: showBefore ? '#9a9a9a' : '#9a9a9a' }}>
                    {showBefore ? 'AFTER' : 'BEFORE'}
                  </span>
                </button>
              </div>

              {/* Active scheme name badge — bottom left */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeId + '-badge'}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.4 }}
                  style={styles.schemeBadge}
                >
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '6px' }}>
                    {['body', 'trim', 'accent'].map((part) => (
                      <div
                        key={part}
                        style={{
                          width: 14,
                          height: 14,
                          borderRadius: '50%',
                          background: active[part].g,
                          boxShadow: `inset -2px -2px 4px rgba(0,0,0,0.3), 0 2px 6px ${active[part].hex}60`,
                        }}
                      />
                    ))}
                  </div>
                  <p style={schemeNameText}>{active.name}</p>
                  <p style={schemeTaglineText}>{active.tagline}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* ── RIGHT — Controls ── */}
          <div style={styles.controlsCol}>
            <p className="headline headline-sm" style={{ color: '#1a1f4e', marginBottom: '8px' }}>
              Choose Your Color Story
            </p>
            <p className="body-text" style={{ marginBottom: '28px', fontSize: '0.9rem' }}>
              Select a Sherwin-Williams palette. Watch your estate transform instantly.
            </p>

            {/* Carousel with arrows */}
            <div style={styles.carouselOuter}>
              <button style={arrowBtn} onClick={() => scroll(-1)} aria-label="Previous">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1a1f4e" strokeWidth="2.5">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              <div ref={carouselRef} style={styles.carouselTrack}>
                {SCHEMES.map((scheme) => (
                  <div key={scheme.id} data-scheme-card style={{ flexShrink: 0, width: '200px' }}>
                    <SchemeCard
                      scheme={scheme}
                      active={scheme.id === activeId}
                      onClick={() => setActiveId(scheme.id)}
                    />
                  </div>
                ))}
              </div>

              <button style={arrowBtn} onClick={() => scroll(1)} aria-label="Next">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1a1f4e" strokeWidth="2.5">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>

            {/* Scroll dots */}
            <div style={dotsRow}>
              {SCHEMES.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => setActiveId(s.id)}
                  aria-label={s.name}
                  style={{
                    ...dot,
                    background: i === activeIndex ? '#e8833a' : 'rgba(26,31,78,0.15)',
                    width: i === activeIndex ? '24px' : '8px',
                  }}
                />
              ))}
            </div>

            {/* Active scheme detail — 3 large bubbles */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId + '-detail'}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={styles.activeDetail}
              >
                <p style={detailLabel}>Selected Palette</p>
                <div style={styles.bubblesRow}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'center' }}>
                    <p style={roleLabel}>BODY</p>
                    <Bubble scheme={active} part="body" size={60} ring />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'center' }}>
                    <p style={roleLabel}>TRIM</p>
                    <Bubble scheme={active} part="trim" size={60} ring />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'center' }}>
                    <p style={roleLabel}>ACCENT</p>
                    <Bubble scheme={active} part="accent" size={60} ring />
                  </div>
                </div>

                <div style={styles.ctaBlock}>
                  <button className="btn-primary" onClick={onBookClick} style={{ fontSize: '0.68rem', padding: '14px 28px', width: '100%' }}>
                    Get My Free Visualization
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                  <p style={ctaDisclaimer}>Complimentary. Delivered within 48 hours.</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom info strip */}
        <div style={styles.infoStrip}>
          {[
            { value: '6', label: 'Curated Sherwin-Williams Schemes' },
            { value: '48h', label: 'Visualization Delivery' },
            { value: '100%', label: 'HOA Compliant Palettes' },
            { value: 'Free', label: 'No Obligation Required' },
          ].map((item) => (
            <div key={item.label} style={styles.infoItem}>
              <span style={infoValue}>{item.value}</span>
              <span style={infoItemLabel}>{item.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

/* ── Styles ── */
const styles = {
  section: {
    background: '#FFFFFF',
    borderTop: '1px solid rgba(26,31,78,0.05)',
  },
  header: { marginBottom: '48px' },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1.15fr 1fr',
    gap: '48px',
    alignItems: 'start',
    marginBottom: '64px',
  },

  /* Image column */
  imageCol: { position: 'sticky', top: '100px' },
  imageWrap: {
    position: 'relative',
    width: '100%',
    aspectRatio: '4/3',
    overflow: 'hidden',
    isolation: 'isolate',
    background: '#1a1f4e',
  },
  houseImg: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    filter: 'grayscale(0.65) brightness(1.06)',
  },
  colorOverlay: {
    position: 'absolute',
    inset: 0,
    mixBlendMode: 'color',
    opacity: 0.72,
    pointerEvents: 'none',
    zIndex: 1,
  },
  imageGradient: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to top, rgba(10,14,38,0.65) 0%, transparent 55%)',
    zIndex: 2,
    pointerEvents: 'none',
  },
  beforeBadge: {
    position: 'absolute',
    top: '16px',
    left: '16px',
    background: 'rgba(255,255,255,0.95)',
    padding: '5px 12px',
    zIndex: 4,
  },
  schemeBadge: {
    position: 'absolute',
    bottom: '20px',
    left: '20px',
    zIndex: 4,
    background: 'rgba(10,14,38,0.75)',
    backdropFilter: 'blur(8px)',
    padding: '14px 18px',
    border: '1px solid rgba(232,131,58,0.3)',
    maxWidth: '260px',
  },

  /* Controls column */
  controlsCol: { display: 'flex', flexDirection: 'column' },

  /* Carousel */
  carouselOuter: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '28px',
  },
  carouselTrack: {
    display: 'flex',
    gap: '16px',
    overflowX: 'auto',
    scrollSnapType: 'x mandatory',
    scrollBehavior: 'smooth',
    flex: 1,
    paddingBottom: '4px',
    msOverflowStyle: 'none',
    scrollbarWidth: 'none',
  },

  /* Active detail */
  activeDetail: {
    background: '#F8F7F4',
    border: '1px solid rgba(26,31,78,0.08)',
    padding: '28px',
  },
  bubblesRow: {
    display: 'flex',
    gap: '24px',
    marginBottom: '24px',
    flexWrap: 'wrap',
  },
  ctaBlock: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },

  /* Info strip */
  infoStrip: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '2px',
    borderTop: '1px solid rgba(26,31,78,0.06)',
  },
  infoItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '28px 16px',
    background: '#F8F7F4',
    gap: '4px',
  },
}

/* ── Inline text styles ── */
const badgeText = {
  fontFamily: "'Montserrat', sans-serif",
  fontSize: '0.55rem',
  fontWeight: 700,
  letterSpacing: '0.2em',
  color: '#1a1f4e',
}
const schemeNameText = {
  fontFamily: "'Cormorant Garamond', serif",
  fontSize: '1rem',
  fontWeight: 500,
  color: '#FFFFFF',
  letterSpacing: '0.02em',
  margin: 0,
}
const schemeTaglineText = {
  fontFamily: "'Poppins', sans-serif",
  fontSize: '0.65rem',
  fontWeight: 300,
  color: 'rgba(255,255,255,0.6)',
  margin: '3px 0 0',
}
const cardBase = {
  background: '#FFFFFF',
  border: '2px solid',
  padding: '18px 16px',
  cursor: 'pointer',
  textAlign: 'left',
  width: '100%',
  scrollSnapAlign: 'start',
  transition: 'border-color 200ms, box-shadow 200ms, background 200ms',
}
const cardName = {
  fontFamily: "'Cormorant Garamond', serif",
  fontSize: '1rem',
  fontWeight: 500,
  color: '#1a1f4e',
  margin: 0,
  lineHeight: 1.2,
}
const cardTagline = {
  fontFamily: "'Poppins', sans-serif",
  fontSize: '0.65rem',
  fontWeight: 300,
  color: '#9a9a9a',
  margin: '4px 0 0',
  lineHeight: 1.4,
}
const bubbleLabel = {
  fontFamily: "'Poppins', sans-serif",
  fontSize: '0.6rem',
  fontWeight: 500,
  color: '#1a1f4e',
  margin: 0,
  textAlign: 'center',
  whiteSpace: 'nowrap',
  maxWidth: '80px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
}
const bubbleSW = {
  fontFamily: "'Montserrat', sans-serif",
  fontSize: '0.52rem',
  fontWeight: 600,
  color: '#e8833a',
  margin: 0,
  textAlign: 'center',
  letterSpacing: '0.05em',
}
const detailLabel = {
  fontFamily: "'Montserrat', sans-serif",
  fontSize: '0.58rem',
  fontWeight: 600,
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  color: '#e8833a',
  margin: '0 0 16px',
}
const roleLabel = {
  fontFamily: "'Montserrat', sans-serif",
  fontSize: '0.5rem',
  fontWeight: 700,
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
  color: '#9a9a9a',
  margin: '0 0 4px',
}
const ctaDisclaimer = {
  fontFamily: "'Poppins', sans-serif",
  fontSize: '0.65rem',
  fontWeight: 300,
  color: '#9a9a9a',
  margin: 0,
  textAlign: 'center',
}
const infoValue = {
  fontFamily: "'Cormorant Garamond', serif",
  fontSize: '2rem',
  fontWeight: 400,
  color: '#e8833a',
  lineHeight: 1,
}
const infoItemLabel = {
  fontFamily: "'Montserrat', sans-serif",
  fontSize: '0.58rem',
  fontWeight: 600,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: '#9a9a9a',
  textAlign: 'center',
}
const arrowBtn = {
  background: '#F8F7F4',
  border: '1px solid rgba(26,31,78,0.1)',
  width: '36px',
  height: '36px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  flexShrink: 0,
  transition: 'background 150ms',
  borderRadius: 0,
  padding: 0,
}
const beforeToggleBtn = {
  background: 'rgba(255,255,255,0.95)',
  border: 'none',
  padding: '5px 12px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
}
const toggleDivider = {
  fontFamily: "'Montserrat', sans-serif",
  fontSize: '0.55rem',
  color: 'rgba(26,31,78,0.2)',
  fontWeight: 400,
}
const dotsRow = {
  display: 'flex',
  gap: '6px',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '20px',
}
const dot = {
  height: '8px',
  borderRadius: '4px',
  border: 'none',
  cursor: 'pointer',
  padding: 0,
  transition: 'background 200ms, width 200ms',
  flexShrink: 0,
}
