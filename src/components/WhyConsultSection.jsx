import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const BULLETS = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e8833a" strokeWidth="1.8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    headline: 'Unlock $1,000 Value in 30 Minutes',
    body: 'Discover how our free consultation saves you thousands in costly repainting by getting it right the first time — no guesswork, no regret.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e8833a" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    headline: 'Fast-Track Your Home Transformation',
    body: 'Get expert color advice in just 30 minutes, designed to fit your busy schedule and elevate your home\'s curb appeal instantly.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e8833a" strokeWidth="1.8">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
    headline: 'Why Waste Money on Guesswork?',
    body: 'Our free color consultation ensures you avoid expensive mistakes and achieve a timeless look that increases your home\'s value — all at no cost to you.',
  },
]

export default function WhyConsultSection({ onBookClick }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="section" style={styles.section}>
      <div className="container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={styles.header}
        >
          <div style={styles.labelRow}>
            <div style={styles.labelLine} />
            <span className="overline">Free Consultation</span>
          </div>
          <h2 className="headline headline-lg" style={styles.headline}>
            Why Get A FREE Custom<br />
            <em style={{ color: '#e8833a', fontStyle: 'italic' }}>Color Consultation?</em>
          </h2>
          <p className="body-text" style={styles.subheadline}>
            Avoid Costly Mistakes — Our Free Consultation Ensures Your Home Stands Out For The Right Reasons
          </p>
        </motion.div>

        {/* Grid */}
        <div style={styles.grid}>

          {/* Left — bullets */}
          <div style={styles.bulletsCol}>
            {BULLETS.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -32 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                style={styles.bulletCard}
              >
                <div style={styles.iconBox}>{b.icon}</div>
                <div>
                  <h3 className="headline headline-sm" style={styles.bulletHeadline}>{b.headline}</h3>
                  <p className="body-text" style={styles.bulletBody}>{b.body}</p>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              <button className="btn-primary" onClick={onBookClick} style={styles.cta}>
                Claim Free Color Consultation
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              <p style={styles.ctaNote}>Irresistible Painting Estimates Included</p>
            </motion.div>
          </div>

          {/* Right — video */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            style={styles.videoCol}
          >
            <div style={styles.videoWrap}>
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop"
                alt="Home Painting Project"
                style={styles.videoThumb}
              />
              <div style={styles.videoOverlay} />
              <div style={styles.playBtn}>
                <div style={styles.playCircle}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="#FFFFFF">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
                <span style={styles.playLabel}>WATCH THE CONSULTATION</span>
              </div>
              <div style={styles.videoBadge}>
                <p style={styles.videoBadgeTitle}>Home Painting Project — Save &amp; Transform</p>
                <p style={styles.videoBadgeSub}>Client Consultation Walkthrough</p>
              </div>
            </div>

            {/* Floating trust card */}
            <div style={styles.trustCard}>
              <div style={styles.trustStar}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#e8833a" stroke="none">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <p style={styles.trustQuote}>"I was completely satisfied — they got it right the first time."</p>
              <p style={styles.trustAuthor}>— Linda Q., Rancho Cucamonga</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const styles = {
  section: { background: '#F8F7F4' },
  header: { marginBottom: '64px', maxWidth: '700px' },
  labelRow: { display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' },
  labelLine: { width: '32px', height: '2px', background: '#e8833a' },
  headline: { marginBottom: '16px' },
  subheadline: { fontSize: '1.05rem', color: '#6b6b6b' },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1.1fr',
    gap: '64px',
    alignItems: 'start',
  },
  bulletsCol: { display: 'flex', flexDirection: 'column', gap: '32px' },
  bulletCard: {
    display: 'flex',
    gap: '20px',
    alignItems: 'flex-start',
    background: '#FFFFFF',
    border: '1px solid rgba(26,31,78,0.07)',
    padding: '28px',
  },
  iconBox: {
    width: '48px',
    height: '48px',
    background: 'rgba(232,131,58,0.08)',
    border: '1px solid rgba(232,131,58,0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  bulletHeadline: { color: '#1a1f4e', marginBottom: '8px', fontSize: '1.2rem' },
  bulletBody: { fontSize: '0.9rem', lineHeight: '1.7' },
  cta: { fontSize: '0.7rem', padding: '16px 32px' },
  ctaNote: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '0.58rem',
    fontWeight: 600,
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    color: '#9a9a9a',
    marginTop: '10px',
  },
  videoCol: { display: 'flex', flexDirection: 'column', gap: '0' },
  videoWrap: {
    position: 'relative',
    width: '100%',
    aspectRatio: '16/10',
    background: '#1a1f4e',
    overflow: 'hidden',
  },
  videoThumb: { width: '100%', height: '100%', objectFit: 'cover', opacity: 0.65 },
  videoOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to top, rgba(26,31,78,0.85) 0%, rgba(26,31,78,0.15) 60%)',
  },
  playBtn: {
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
    width: '72px',
    height: '72px',
    borderRadius: '50%',
    background: '#e8833a',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: '4px',
    boxShadow: '0 8px 28px rgba(232,131,58,0.45)',
  },
  playLabel: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '0.58rem',
    fontWeight: 700,
    letterSpacing: '0.2em',
    color: '#FFFFFF',
    textShadow: '0 1px 6px rgba(0,0,0,0.4)',
  },
  videoBadge: {
    position: 'absolute',
    bottom: '20px',
    left: '20px',
    zIndex: 5,
  },
  videoBadgeTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '1rem',
    color: '#FFFFFF',
    margin: '0 0 4px',
    fontWeight: 500,
  },
  videoBadgeSub: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '0.55rem',
    letterSpacing: '0.18em',
    color: 'rgba(255,255,255,0.6)',
    textTransform: 'uppercase',
    margin: 0,
  },
  trustCard: {
    background: '#FFFFFF',
    border: '1px solid rgba(26,31,78,0.08)',
    borderTop: '3px solid #e8833a',
    padding: '24px 28px',
  },
  trustStar: { display: 'flex', gap: '3px', marginBottom: '10px' },
  trustQuote: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '1.05rem',
    fontStyle: 'italic',
    color: '#1a1f4e',
    margin: '0 0 8px',
    lineHeight: 1.5,
  },
  trustAuthor: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '0.6rem',
    fontWeight: 600,
    letterSpacing: '0.1em',
    color: '#9a9a9a',
    margin: 0,
  },
}
