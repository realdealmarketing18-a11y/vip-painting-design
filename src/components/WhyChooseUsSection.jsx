import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const PILLARS = [
  {
    num: '01',
    title: 'FREE Custom Color Consultation',
    body: 'Choosing the right colors can be overwhelming. We offer a free color consultation with photorealistic visualization — so you can make the perfect decision in 30 minutes.',
  },
  {
    num: '02',
    title: 'Insane 1-Year Warranty',
    body: 'We stand behind every project with our 1-Year Warranty. If anything goes wrong after we leave, we come back and fix it. No questions asked. Period.',
  },
  {
    num: '03',
    title: 'Competitive Prices, Top Quality',
    body: 'We believe every home deserves a beautiful exterior without compromise. Our pricing is competitive while delivering the craftsmanship your investment deserves.',
  },
  {
    num: '04',
    title: 'Experienced & Professional',
    body: 'Our licensed painters have the skills and expertise to tackle any project. We take pride in our work and always strive to exceed expectations — every time.',
  },
]

export default function WhyChooseUsSection({ onBookClick }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="section" style={styles.section}>
      <div className="container">
        <div style={styles.grid}>

          {/* Left — sticky headline + warranty badge */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={styles.leftCol}
          >
            <div style={styles.labelRow}>
              <div style={styles.labelLine} />
              <span className="overline">Why Choose Us</span>
            </div>
            <h2 className="headline headline-lg" style={styles.headline}>
              Our Home Painting Work Is Backed By A Solid
              <em style={{ color: '#e8833a', fontStyle: 'italic' }}> 1 Year Warranty!</em>
            </h2>
            <p className="body-text" style={styles.sub}>
              When you use VIP Home Painting, you can invest with confidence because you will be backed by a 1-Year Warranty. No questions asked.
            </p>

            {/* Warranty badge */}
            <div style={styles.warrantyBadge}>
              <div style={styles.warrantyCircle}>
                <div style={styles.warrantyInner}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#e8833a" strokeWidth="1.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <polyline points="9 12 11 14 15 10" />
                  </svg>
                  <p style={styles.badgeNum}>1</p>
                  <p style={styles.badgeWord}>YEAR</p>
                  <p style={styles.badgeWord2}>WARRANTY</p>
                </div>
              </div>
              <div>
                <p style={styles.badgeTagline}>Satisfaction Guaranteed</p>
                <p style={styles.badgeNote}>Licensed &amp; Insured — State of California</p>
              </div>
            </div>

            <button className="btn-primary" onClick={onBookClick} style={{ fontSize: '0.68rem', padding: '16px 32px', marginTop: '8px' }}>
              Claim Free Color Consult
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </motion.div>

          {/* Right — 4 pillars */}
          <div style={styles.rightCol}>
            {PILLARS.map((p, i) => (
              <motion.div
                key={p.num}
                initial={{ opacity: 0, x: 32 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                style={styles.pillar}
              >
                <div style={styles.pillarNum}>{p.num}</div>
                <div style={styles.pillarContent}>
                  <h3 className="headline headline-sm" style={styles.pillarTitle}>{p.title}</h3>
                  <p className="body-text" style={styles.pillarBody}>{p.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const styles = {
  section: { background: '#F0EBE3' },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1.1fr',
    gap: '80px',
    alignItems: 'start',
  },
  leftCol: { position: 'sticky', top: '120px', display: 'flex', flexDirection: 'column', gap: '32px' },
  labelRow: { display: 'flex', alignItems: 'center', gap: '16px' },
  labelLine: { width: '32px', height: '2px', background: '#e8833a' },
  headline: { color: '#1a1f4e', lineHeight: 1.2 },
  sub: { fontSize: '0.95rem' },
  warrantyBadge: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    background: '#FFFFFF',
    border: '1px solid rgba(232,131,58,0.2)',
    padding: '20px 24px',
  },
  warrantyCircle: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    background: 'rgba(232,131,58,0.08)',
    border: '2px solid #e8833a',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  warrantyInner: { textAlign: 'center' },
  badgeNum: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '1.6rem',
    fontWeight: 400,
    color: '#e8833a',
    lineHeight: 1,
    margin: 0,
  },
  badgeWord: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '0.42rem',
    fontWeight: 700,
    letterSpacing: '0.15em',
    color: '#e8833a',
    margin: 0,
    textTransform: 'uppercase',
  },
  badgeWord2: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '0.4rem',
    fontWeight: 700,
    letterSpacing: '0.12em',
    color: '#1a1f4e',
    margin: 0,
    textTransform: 'uppercase',
  },
  badgeTagline: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '1rem',
    color: '#1a1f4e',
    margin: '0 0 4px',
    fontWeight: 500,
  },
  badgeNote: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: '0.65rem',
    color: '#9a9a9a',
    fontWeight: 300,
    margin: 0,
  },
  rightCol: { display: 'flex', flexDirection: 'column', gap: '2px' },
  pillar: {
    display: 'flex',
    gap: '24px',
    alignItems: 'flex-start',
    background: '#FFFFFF',
    padding: '32px',
    borderLeft: '3px solid transparent',
    transition: 'border-color 200ms',
  },
  pillarNum: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '2.8rem',
    fontWeight: 300,
    color: 'rgba(232,131,58,0.2)',
    lineHeight: 1,
    flexShrink: 0,
    minWidth: '48px',
  },
  pillarContent: {},
  pillarTitle: { color: '#1a1f4e', marginBottom: '10px', fontSize: '1.2rem' },
  pillarBody: { fontSize: '0.88rem', lineHeight: 1.75 },
}
