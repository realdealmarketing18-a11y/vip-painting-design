import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const SERVICES = [
  {
    id: 'exterior',
    title: 'Home Exterior Painting',
    sub: 'Curb Appeal That Commands Attention',
    body: 'Your home\'s exterior is the first thing people see. We use Sherwin-Williams Duration and Emerald exterior products to deliver a flawless, long-lasting finish that elevates your entire neighborhood.',
    features: [
      'Full exterior surface preparation',
      'Sherwin-Williams Duration & Emerald',
      'HOA color compliance guaranteed',
      'FREE photorealistic color visualization',
      '1-Year warranty included',
    ],
    videoTitle: 'Home Exterior Painting Transformation',
    videoSub: 'Inland Empire, Southern California',
    thumb: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    accent: '#e8833a',
  },
  {
    id: 'interior',
    title: 'Home Interior Painting',
    sub: 'The Living Spaces You Never Want To Leave',
    body: 'Transform every room into a refined retreat. Our interior specialists execute flawless wall-to-ceiling transformations with precision masking, premium Sherwin-Williams products, and zero mess left behind.',
    features: [
      'Full furniture protection & prep',
      'Sherwin-Williams Emerald interior',
      'Precise trim & detail work',
      'Custom accent walls & features',
      'Post-project deep clean',
    ],
    videoTitle: 'Interior Painting Transformation',
    videoSub: 'Luxury Home Interior — Inland Empire',
    thumb: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop',
    accent: '#1a1f4e',
  },
  {
    id: 'cabinets',
    title: 'Kitchen Cabinet Painting',
    sub: 'Luxury Kitchen Refresh Without The Remodel Cost',
    body: 'A painted kitchen transforms your home\'s most-used space for a fraction of replacement cost. We use factory-grade spray application for a flawless, durable finish that looks brand new.',
    features: [
      'Full cabinet degloss & sand',
      'Factory-grade spray application',
      'Thermofoil & laminate capable',
      'Hardware refresh included',
      'Durable, washable finish',
    ],
    videoTitle: 'Kitchen Cabinet Transformation',
    videoSub: 'Inland Empire Kitchen Refresh',
    thumb: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1200&auto=format&fit=crop',
    accent: '#e8833a',
  },
]

function ServiceVideoThumb({ service }) {
  return (
    <div style={vStyles.wrap}>
      <img src={service.thumb} alt={service.title} style={vStyles.thumb} />
      <div style={vStyles.overlay} />
      <div style={vStyles.center}>
        <div style={vStyles.playCircle}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#FFFFFF">
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
        </div>
        <span style={vStyles.watchLabel}>WATCH THE TRANSFORMATION</span>
      </div>
      <div style={vStyles.badge}>
        <p style={vStyles.badgeTitle}>{service.videoTitle}</p>
        <p style={vStyles.badgeSub}>{service.videoSub}</p>
      </div>
    </div>
  )
}

export default function ServicesSection({ onBookClick }) {
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
            <span className="overline">Our Services</span>
          </div>
          <h2 className="headline headline-lg" style={styles.headline}>
            Premium Painting Services<br />
            <em style={{ color: '#e8833a', fontStyle: 'italic' }}>Built For Discerning Homeowners</em>
          </h2>
          <p className="body-text" style={styles.sub}>
            Every service backed by our 1-Year Warranty and Sherwin-Williams premium materials
          </p>
        </motion.div>

        <div style={styles.servicesCol}>
          {SERVICES.map((svc, i) => (
            <motion.div
              key={svc.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              style={{
                ...styles.serviceRow,
                flexDirection: i % 2 === 0 ? 'row' : 'row-reverse',
              }}
            >
              {/* Video side */}
              <div style={styles.videoCol}>
                <ServiceVideoThumb service={svc} />
              </div>

              {/* Content side */}
              <div style={styles.contentCol}>
                <p style={{ ...styles.serviceNum, color: svc.accent }}>0{i + 1}</p>
                <p style={styles.serviceSub}>{svc.sub}</p>
                <h3 className="headline headline-md" style={styles.serviceTitle}>{svc.title}</h3>
                <p className="body-text" style={styles.serviceBody}>{svc.body}</p>
                <ul style={styles.featureList}>
                  {svc.features.map((f) => (
                    <li key={f} style={styles.featureItem}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#e8833a" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span style={styles.featureText}>{f}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className="btn-primary"
                  onClick={onBookClick}
                  style={{ fontSize: '0.68rem', padding: '14px 28px', alignSelf: 'flex-start', marginTop: '8px' }}
                >
                  Get Free Estimate
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

const vStyles = {
  wrap: {
    position: 'relative',
    width: '100%',
    aspectRatio: '16/10',
    background: '#1a1f4e',
    overflow: 'hidden',
  },
  thumb: { width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 },
  overlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to top, rgba(26,31,78,0.9) 0%, rgba(26,31,78,0.2) 55%)',
  },
  center: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -60%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '12px',
    zIndex: 5,
    cursor: 'pointer',
  },
  playCircle: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    background: '#e8833a',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: '3px',
    boxShadow: '0 6px 24px rgba(232,131,58,0.45)',
  },
  watchLabel: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '0.52rem',
    fontWeight: 700,
    letterSpacing: '0.2em',
    color: '#FFFFFF',
    textShadow: '0 1px 4px rgba(0,0,0,0.5)',
  },
  badge: {
    position: 'absolute',
    bottom: '16px',
    left: '16px',
    zIndex: 5,
  },
  badgeTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '0.95rem',
    color: '#FFFFFF',
    margin: '0 0 3px',
    fontWeight: 500,
  },
  badgeSub: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '0.5rem',
    letterSpacing: '0.15em',
    color: 'rgba(255,255,255,0.5)',
    textTransform: 'uppercase',
    margin: 0,
  },
}

const styles = {
  section: { background: '#F8F7F4' },
  header: { marginBottom: '64px', maxWidth: '700px' },
  labelRow: { display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' },
  labelLine: { width: '32px', height: '2px', background: '#e8833a' },
  headline: { color: '#1a1f4e', marginBottom: '16px' },
  sub: { fontSize: '1rem' },
  servicesCol: { display: 'flex', flexDirection: 'column', gap: '80px' },
  serviceRow: {
    display: 'flex',
    gap: '64px',
    alignItems: 'center',
  },
  videoCol: { flex: '1.1', minWidth: 0 },
  contentCol: {
    flex: 1,
    minWidth: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  serviceNum: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '4rem',
    fontWeight: 300,
    lineHeight: 1,
    margin: 0,
  },
  serviceSub: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '0.6rem',
    fontWeight: 700,
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color: '#9a9a9a',
    margin: 0,
  },
  serviceTitle: { color: '#1a1f4e', margin: 0, lineHeight: 1.2 },
  serviceBody: { fontSize: '0.9rem', lineHeight: 1.75 },
  featureList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  featureItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  featureText: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: '0.82rem',
    color: '#4a4a4a',
    fontWeight: 400,
  },
}
