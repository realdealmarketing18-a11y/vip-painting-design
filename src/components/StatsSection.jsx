import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const STATS = [
  {
    value: '5★',
    label: 'Star Reviews',
    body: 'We take pride in making sure every client is happy with the end result.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="#e8833a" stroke="none">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    value: '100%',
    label: 'Client Satisfied',
    body: 'Our team of skilled painters have the expertise and experience to make your home stunning.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#e8833a" strokeWidth="1.8">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    value: '120+',
    label: 'Projects Done',
    body: 'With over 120 successful projects under our belt, you can trust us to get the job done right.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#e8833a" strokeWidth="1.8">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
]

export default function StatsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} style={styles.section}>
      <div className="container">
        <div style={styles.inner}>
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={styles.labelCol}
          >
            <div style={styles.labelRow}>
              <div style={styles.labelLine} />
              <span className="overline" style={{ color: 'rgba(255,255,255,0.6)' }}>Our Track Record</span>
            </div>
            <h2 className="headline headline-lg" style={styles.headline}>
              Our Inland Empire<br />
              <em style={{ color: '#e8833a', fontStyle: 'italic' }}>Home Painting Service</em>
            </h2>
            <p style={styles.sub}>We Paint Exceptional Living Spaces — All Home Painting Services</p>
          </motion.div>

          <div style={styles.statsGrid}>
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                style={styles.statCard}
              >
                <div style={styles.iconBox}>{s.icon}</div>
                <div style={styles.statValue}>{s.value}</div>
                <div style={styles.statLabel}>{s.label}</div>
                <p style={styles.statBody}>{s.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const styles = {
  section: {
    background: '#1a1f4e',
    padding: '96px 0',
  },
  inner: {
    display: 'grid',
    gridTemplateColumns: '1fr 1.6fr',
    gap: '80px',
    alignItems: 'center',
  },
  labelCol: {},
  labelRow: { display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' },
  labelLine: { width: '32px', height: '2px', background: '#e8833a' },
  headline: { color: '#FFFFFF', marginBottom: '16px' },
  sub: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: '0.9rem',
    color: 'rgba(255,255,255,0.5)',
    fontWeight: 300,
    lineHeight: 1.7,
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '2px',
  },
  statCard: {
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.08)',
    padding: '36px 24px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: '8px',
  },
  iconBox: {
    width: '52px',
    height: '52px',
    background: 'rgba(232,131,58,0.1)',
    border: '1px solid rgba(232,131,58,0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '8px',
  },
  statValue: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '2.8rem',
    fontWeight: 400,
    color: '#e8833a',
    lineHeight: 1,
  },
  statLabel: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '0.6rem',
    fontWeight: 700,
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color: '#FFFFFF',
  },
  statBody: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: '0.78rem',
    color: 'rgba(255,255,255,0.45)',
    fontWeight: 300,
    lineHeight: 1.6,
    margin: '4px 0 0',
  },
}
