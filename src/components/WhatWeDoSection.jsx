import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const FEATURES = [
  {
    title: 'Detail-Oriented Craftsmanship',
    body: 'Every edge, corner, and surface is treated with precision. We never cut corners — your home deserves perfection.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e8833a" strokeWidth="1.8">
        <circle cx="12" cy="12" r="3" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
      </svg>
    ),
  },
  {
    title: 'High-Quality Materials',
    body: 'We exclusively use Sherwin-Williams Duration and Emerald products — the gold standard for lasting, beautiful results.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e8833a" strokeWidth="1.8">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    title: 'FREE Customized Color Consultations',
    body: 'Our signature 30-minute consultation shows you exactly how your home looks in your chosen colors — before we paint.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e8833a" strokeWidth="1.8">
        <circle cx="12" cy="12" r="3" /><line x1="18" y1="2" x2="18" y2="8" /><line x1="21" y1="5" x2="15" y2="5" />
      </svg>
    ),
  },
  {
    title: 'Luxury Transformation',
    body: 'We transform your home into a beautiful, relaxing retreat that reflects your personality and elevates your neighborhood.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e8833a" strokeWidth="1.8">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: '1-Year Warranty — Peace of Mind',
    body: 'Every project is backed by our insane 1-Year Satisfaction Warranty. If anything goes wrong, we fix it. No questions asked.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e8833a" strokeWidth="1.8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    title: 'Stress-Free Experience',
    body: 'From first consultation to final walkthrough, we handle everything. You enjoy the transformation, we handle the details.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e8833a" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
  },
]

export default function WhatWeDoSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="section" style={styles.section}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={styles.header}
        >
          <div style={styles.labelRow}>
            <div style={styles.labelLine} />
            <span className="overline">What We Do</span>
          </div>
          <h2 className="headline headline-lg" style={styles.headline}>
            We Paint To<br />
            <em style={{ color: '#e8833a', fontStyle: 'italic' }}>Transform Lives</em>
          </h2>
          <p className="body-text" style={styles.sub}>
            Transform your home into a beautiful and relaxing retreat that you will never want to leave. Don&apos;t let a dull or outdated exterior hold you back.
          </p>
        </motion.div>

        <div style={styles.grid}>
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              style={styles.card}
            >
              <div style={styles.iconBox}>{f.icon}</div>
              <h3 className="headline headline-sm" style={styles.cardTitle}>{f.title}</h3>
              <p className="body-text" style={styles.cardBody}>{f.body}</p>
              <div style={styles.accent} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const styles = {
  section: { background: '#FFFFFF' },
  header: { marginBottom: '64px', maxWidth: '680px' },
  labelRow: { display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' },
  labelLine: { width: '32px', height: '2px', background: '#e8833a' },
  headline: { color: '#1a1f4e', marginBottom: '16px' },
  sub: { maxWidth: '560px' },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '2px',
  },
  card: {
    background: '#F8F7F4',
    padding: '40px 36px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    transition: 'background 200ms',
  },
  iconBox: {
    width: '52px',
    height: '52px',
    background: 'rgba(232,131,58,0.08)',
    border: '1px solid rgba(232,131,58,0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTitle: { color: '#1a1f4e', fontSize: '1.25rem', lineHeight: 1.25 },
  cardBody: { flex: 1, fontSize: '0.88rem', lineHeight: 1.75 },
  accent: { width: '32px', height: '2px', background: '#e8833a', marginTop: '8px' },
}
