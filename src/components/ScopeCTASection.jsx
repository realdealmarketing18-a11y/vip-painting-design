import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const COL1 = ['Full Exterior Painting', 'Interior Wall Painting', 'Cabinet Painting & Refinishing', 'Garage Floor Coatings']
const COL2 = ['Stucco Repair & Painting', 'Wood Trim Replacement', 'Color Consultation', 'Pressure Washing']
const COL3 = ['Surface Preparation', 'Premium Paints Only', 'Clean Worksites', 'Final Inspection']

export default function ScopeCTASection({ onBookClick }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} style={s.section}>
      <div className="container" style={s.inner}>

        {/* Left: Scope checklist */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={s.scopeCol}
        >
          <p style={s.scopeLabel}>OUR COMPLETE SCOPE OF WORK</p>
          <div style={s.checkGrid}>
            <ul className="check-list">{COL1.map((i) => <li key={i}>{i}</li>)}</ul>
            <ul className="check-list">{COL2.map((i) => <li key={i}>{i}</li>)}</ul>
            <ul className="check-list">{COL3.map((i) => <li key={i}>{i}</li>)}</ul>
          </div>
        </motion.div>

        {/* Right: CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          style={s.ctaCol}
        >
          <p style={s.ctaOverline}>READY TO TRANSFORM YOUR HOME?</p>
          <h2 style={s.ctaHeadline}>
            Let&rsquo;s Make Your Home the<br />Envy of the Neighborhood
          </h2>
          <button className="btn-gold" onClick={onBookClick} style={s.ctaBtn}>
            GET MY FREE QUOTE NOW &nbsp;&rarr;
          </button>
          <div style={s.trustRow}>
            <span style={s.trust}>✓ No Pressure</span>
            <span style={s.trust}>✓ No Obligation</span>
            <span style={s.trust}>✓ 100% Free</span>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

const GOLD = '#C4973C'
const NAVY = '#0F1B3D'

const s = {
  section: {
    background: '#F7F4EF',
    padding: '56px 0',
    borderTop: '1px solid rgba(15,27,61,0.08)',
  },
  inner: {
    display: 'grid',
    gridTemplateColumns: '1.4fr 1fr',
    gap: '64px',
    alignItems: 'center',
  },
  scopeCol: {},
  scopeLabel: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '0.58rem',
    fontWeight: 700,
    letterSpacing: '0.26em',
    textTransform: 'uppercase',
    color: NAVY,
    marginBottom: '22px',
  },
  checkGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '16px 24px',
  },
  ctaCol: {
    textAlign: 'center',
  },
  ctaOverline: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '0.58rem',
    fontWeight: 700,
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
    color: 'rgba(15,27,61,0.5)',
    marginBottom: '14px',
  },
  ctaHeadline: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontWeight: 700,
    fontSize: 'clamp(1.5rem, 2.8vw, 2.1rem)',
    color: NAVY,
    lineHeight: 1.2,
    marginBottom: '24px',
  },
  ctaBtn: {
    fontSize: '0.68rem',
    padding: '15px 28px',
    marginBottom: '16px',
  },
  trustRow: {
    display: 'flex',
    justifyContent: 'center',
    gap: '16px',
    flexWrap: 'wrap',
  },
  trust: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '0.6rem',
    color: 'rgba(15,27,61,0.5)',
    fontWeight: 500,
  },
}
