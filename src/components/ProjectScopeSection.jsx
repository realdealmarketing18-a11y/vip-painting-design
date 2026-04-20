import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const SCOPES = [
  {
    num: '01',
    category: 'Residential',
    title: 'Luxury Home Exterior & Interior Painting',
    body: 'We specialize in transforming single-family homes, estates, and luxury residences throughout the Inland Empire. From curb appeal upgrades to complete interior overhauls — delivered with white-glove precision.',
    tags: ['Single Family Homes', 'Estates', 'HOA Communities', 'New Construction'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#e8833a" strokeWidth="1.6">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    num: '02',
    category: 'Commercial',
    title: 'Commercial & Multi-Family Painting',
    body: 'Professional painting services for commercial properties, office buildings, retail spaces, and multi-family complexes. Minimal disruption. Exceptional results. Always on schedule.',
    tags: ['Office Buildings', 'Retail Spaces', 'Apartment Complexes', 'Shopping Centers'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#e8833a" strokeWidth="1.6">
        <rect x="2" y="3" width="20" height="18" rx="1" />
        <line x1="8" y1="21" x2="8" y2="3" />
        <line x1="16" y1="21" x2="16" y2="3" />
        <line x1="2" y1="9" x2="22" y2="9" />
        <line x1="2" y1="15" x2="22" y2="15" />
      </svg>
    ),
  },
  {
    num: '03',
    category: 'Government',
    title: 'Government & Municipal Contracts',
    body: 'Licensed and bonded for government contracts. We deliver the same premium craftsmanship to municipal buildings, public facilities, and government-owned properties with full compliance and documentation.',
    tags: ['Municipal Buildings', 'Public Facilities', 'Schools', 'Government Contracts'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#e8833a" strokeWidth="1.6">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
]

export default function ProjectScopeSection() {
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
            <span className="overline" style={{ color: 'rgba(255,255,255,0.55)' }}>Project Scope</span>
          </div>
          <h2 className="headline headline-lg" style={styles.headline}>
            Home Painting Project Scope
          </h2>
          <p style={styles.sub}>
            Providing The Best Specialty Inland Empire Home Painting Services
          </p>
        </motion.div>

        <div style={styles.grid}>
          {SCOPES.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.13, ease: [0.22, 1, 0.36, 1] }}
              style={styles.card}
            >
              <div style={styles.cardTop}>
                <div style={styles.iconBox}>{s.icon}</div>
                <span style={styles.num}>{s.num}</span>
              </div>
              <p style={styles.category}>{s.category}</p>
              <h3 className="headline headline-sm" style={styles.title}>{s.title}</h3>
              <p style={styles.body}>{s.body}</p>
              <div style={styles.tags}>
                {s.tags.map((tag) => (
                  <span key={tag} style={styles.tag}>{tag}</span>
                ))}
              </div>
              <div style={styles.accentBar} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
          style={styles.trustRow}
        >
          {['Licensed & Insured', 'State of California', 'Bonded & Compliant', 'Free Estimates'].map((item) => (
            <div key={item} style={styles.trustItem}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e8833a" strokeWidth="2">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span style={styles.trustLabel}>{item}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

const styles = {
  section: { background: '#1a1f4e' },
  header: { marginBottom: '56px', maxWidth: '720px' },
  labelRow: { display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' },
  labelLine: { width: '32px', height: '2px', background: '#e8833a' },
  headline: { color: '#FFFFFF', marginBottom: '12px' },
  sub: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: '1rem',
    color: 'rgba(255,255,255,0.5)',
    fontWeight: 300,
    lineHeight: 1.7,
    margin: 0,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '2px',
    marginBottom: '48px',
  },
  card: {
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.07)',
    padding: '40px 36px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    transition: 'background 200ms',
  },
  cardTop: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '4px',
  },
  iconBox: {
    width: '56px',
    height: '56px',
    background: 'rgba(232,131,58,0.1)',
    border: '1px solid rgba(232,131,58,0.25)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  num: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '3.5rem',
    fontWeight: 300,
    color: 'rgba(255,255,255,0.06)',
    lineHeight: 1,
  },
  category: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '0.55rem',
    fontWeight: 700,
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    color: '#e8833a',
    margin: 0,
  },
  title: {
    color: '#FFFFFF',
    lineHeight: 1.25,
    margin: 0,
  },
  body: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: '0.85rem',
    color: 'rgba(255,255,255,0.5)',
    fontWeight: 300,
    lineHeight: 1.75,
    flex: 1,
    margin: 0,
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginTop: '4px',
  },
  tag: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '0.5rem',
    fontWeight: 600,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.4)',
    background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.1)',
    padding: '4px 10px',
  },
  accentBar: { width: '32px', height: '2px', background: '#e8833a', marginTop: '4px' },
  trustRow: {
    display: 'flex',
    gap: '40px',
    flexWrap: 'wrap',
    borderTop: '1px solid rgba(255,255,255,0.08)',
    paddingTop: '32px',
  },
  trustItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  trustLabel: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '0.62rem',
    fontWeight: 600,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.5)',
  },
}
