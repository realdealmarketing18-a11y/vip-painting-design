import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function CTASection({ onBookClick }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} style={s.section}>
      <div className="container" style={s.inner}>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={s.content}
        >
          <p style={s.overline}>READY TO TRANSFORM YOUR HOME?</p>
          <h2 style={s.headline}>
            Let’s Make Your Home the<br />Envy of the Neighborhood
          </h2>
          <button className="btn-gold" onClick={onBookClick} style={s.btn}>
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

const s = {
  section: {
    background: '#0F1B3D',
    padding: '80px 0',
  },
  inner: {
    display: 'flex',
    justifyContent: 'center',
  },
  content: {
    textAlign: 'center',
    maxWidth: '580px',
  },
  overline: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '0.6rem',
    fontWeight: 700,
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.55)',
    marginBottom: '16px',
  },
  headline: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontWeight: 700,
    fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
    color: '#FFFFFF',
    lineHeight: 1.2,
    marginBottom: '30px',
  },
  btn: {
    fontSize: '0.72rem',
    padding: '16px 40px',
    marginBottom: '18px',
  },
  trustRow: {
    display: 'flex',
    justifyContent: 'center',
    gap: '22px',
    flexWrap: 'wrap',
  },
  trust: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '0.62rem',
    color: 'rgba(255,255,255,0.55)',
    fontWeight: 500,
  },
}
