import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const SWATCHES = [
  'radial-gradient(circle at 35% 32%, #D9C9A6, #B5A37A 50%, #8A7050 100%)',
  'radial-gradient(circle at 35% 32%, #FFFFFF, #EDE9DF 50%, #D0CBBD 100%)',
  'radial-gradient(circle at 35% 32%, #99A87D, #6B7556 50%, #4A5238 100%)',
  'radial-gradient(circle at 35% 32%, #922E42, #6B2737 50%, #4A1A25 100%)',
]

const CASES = [
  {
    title: "DOUGLAS & SHERI'S TRANSFORMATION",
    beforeImg: 'https://images.unsplash.com/photo-1560184897-ae75f418493e?w=900&q=80&auto=format&fit=crop',
    afterImg:  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=80&auto=format&fit=crop',
    dropCap: 'W',
    body: "e took Douglas & Sheri’s dated, faded exterior and transformed it into a stunning masterpiece. The new colors, combined with our meticulous preparation, completely changed the look and feel of their home.",
  },
  {
    title: "CEASAR & JULIE'S TRANSFORMATION",
    beforeImg: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=900&q=80&auto=format&fit=crop',
    afterImg:  'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=900&q=80&auto=format&fit=crop',
    dropCap: 'C',
    body: "easar & Julie wanted a modern update that would make their home stand out. We delivered beyond their expectations with a color combination that’s both timeless and breathtaking.",
  },
]

function Slider({ beforeImg, afterImg }) {
  const [pos, setPos] = useState(50)
  const containerRef = useRef(null)
  const isDragging = useRef(false)

  const move = (clientX) => {
    if (!containerRef.current || !isDragging.current) return
    const rect = containerRef.current.getBoundingClientRect()
    setPos(Math.min(92, Math.max(8, ((clientX - rect.left) / rect.width) * 100)))
  }

  return (
    <div
      ref={containerRef}
      style={sl.wrap}
      onMouseMove={(e) => move(e.clientX)}
      onMouseUp={() => { isDragging.current = false }}
      onMouseLeave={() => { isDragging.current = false }}
      onTouchMove={(e) => { e.preventDefault(); move(e.touches[0].clientX) }}
      onTouchEnd={() => { isDragging.current = false }}
    >
      <img src={beforeImg} alt="Before" style={sl.imgFull} />
      <div style={{ position: 'absolute', inset: 0, clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <img src={afterImg} alt="After" style={sl.imgFull} />
      </div>
      <div style={{ ...sl.divLine, left: `${pos}%` }}>
        <div
          style={sl.handle}
          onMouseDown={() => { isDragging.current = true }}
          onTouchStart={() => { isDragging.current = true }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
            <path d="M11 17l-5-5 5-5M13 17l5-5-5-5" />
          </svg>
        </div>
      </div>
      <span style={{ ...sl.label, left: '10px' }}>BEFORE</span>
      <span style={{ ...sl.label, right: '10px' }}>AFTER</span>
    </div>
  )
}

function CaseCard({ c, delay, inView, onBookClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      style={cs.card}
    >
      {/* Title bar */}
      <p style={cs.cardTitle}>{c.title}</p>

      {/* 2-column body */}
      <div style={cs.cardBody}>
        {/* Left: slider */}
        <div style={cs.sliderCol}>
          <Slider beforeImg={c.beforeImg} afterImg={c.afterImg} />
        </div>

        {/* Right: drop-cap text + swatches + CTA */}
        <div style={cs.textCol}>
          <p style={cs.bodyText}>
            <span style={cs.dropCap}>{c.dropCap}</span>
            {c.body}
          </p>
          <div style={cs.swatchRow}>
            {SWATCHES.map((g, i) => (
              <div key={i} style={{ ...cs.swatch, background: g }} />
            ))}
          </div>
          <button style={cs.watchBtn} onClick={onBookClick}>
            WATCH THEIR STORY &nbsp;&rarr;
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default function CaseStudiesSection({ onBookClick }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} style={cs.section}>
      <div className="container">
        <div style={cs.grid}>
          {CASES.map((c, i) => (
            <CaseCard key={c.title} c={c} delay={i * 0.15} inView={inView} onBookClick={onBookClick} />
          ))}
        </div>
      </div>
    </section>
  )
}

const GOLD = '#C4973C'
const NAVY = '#0F1B3D'

const sl = {
  wrap: { position: 'relative', width: '100%', aspectRatio: '4/3', overflow: 'hidden', userSelect: 'none', background: '#ccc', cursor: 'ew-resize' },
  imgFull: { position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' },
  divLine: { position: 'absolute', top: 0, bottom: 0, width: '3px', background: GOLD, transform: 'translateX(-50%)', zIndex: 10 },
  handle: { position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '36px', height: '36px', borderRadius: '50%', background: GOLD, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.35)', cursor: 'ew-resize' },
  label: { position: 'absolute', top: '10px', background: 'rgba(15,27,61,0.7)', color: '#fff', fontFamily: "'Montserrat', sans-serif", fontSize: '0.52rem', fontWeight: 700, letterSpacing: '0.12em', padding: '3px 10px', textTransform: 'uppercase', zIndex: 5, borderRadius: '20px' },
}

const cs = {
  section: {
    background: '#1B2B5E',
    padding: '56px 0',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '28px',
  },
  card: {
    background: '#FFFFFF',
    overflow: 'hidden',
    boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
  },
  cardTitle: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '0.58rem',
    fontWeight: 700,
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    color: NAVY,
    textAlign: 'center',
    padding: '12px 20px',
    borderBottom: '1px solid rgba(15,27,61,0.1)',
    margin: 0,
    background: '#FAFAF8',
  },
  cardBody: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    minHeight: '260px',
  },
  sliderCol: {
    overflow: 'hidden',
  },
  textCol: {
    padding: '20px 18px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  dropCap: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: '3.2rem',
    fontWeight: 700,
    color: NAVY,
    lineHeight: 0.75,
    float: 'left',
    marginRight: '6px',
    marginTop: '6px',
  },
  bodyText: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '0.76rem',
    lineHeight: 1.7,
    color: '#4A4A4A',
    marginBottom: '16px',
    overflow: 'hidden',
  },
  swatchRow: {
    display: 'flex',
    gap: '8px',
    marginBottom: '16px',
    alignItems: 'center',
  },
  swatch: {
    width: '28px',
    height: '28px',
    borderRadius: '50%',
    boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
    flexShrink: 0,
  },
  watchBtn: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '0.58rem',
    fontWeight: 700,
    letterSpacing: '0.14em',
    color: GOLD,
    background: 'none',
    border: `1.5px solid ${GOLD}`,
    padding: '9px 16px',
    cursor: 'pointer',
    textTransform: 'uppercase',
    borderRadius: '2px',
    alignSelf: 'flex-start',
  },
}
