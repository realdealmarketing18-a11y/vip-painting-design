import { motion } from 'framer-motion'

const BEFORE_IMG = 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&q=80&auto=format&fit=crop'
const AFTER_IMG  = 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80&auto=format&fit=crop'
const COUPLE_IMG = 'https://images.unsplash.com/photo-1522556189639-b150ed9c4330?w=300&q=80&auto=format&fit=crop'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero({ onBookClick }) {
  return (
    <section style={s.section}>
      <div className="container" style={s.inner}>

        {/* ── Left column ── */}
        <div style={s.left}>
          <motion.p {...fadeUp(0.08)} style={s.lookWhat}>LOOK WHAT HAPPENED TO</motion.p>

          <motion.div {...fadeUp(0.16)}>
            <h1 style={s.transformed}>Transformed</h1>
            <h1 style={s.names}>Miguel &amp; Karla's</h1>
            <h1 style={s.home}>Home</h1>
          </motion.div>

          <motion.p {...fadeUp(0.26)} style={s.subhead}>
            From Dull to Jaw-Droppingly Beautiful
          </motion.p>

          <motion.p {...fadeUp(0.32)} style={s.body}>
            We don’t just paint homes, we transform them. See how we took their
            outdated exterior and created a stunning masterpiece that became the
            envy of the neighborhood.
          </motion.p>

          <motion.div {...fadeUp(0.42)}>
            <button className="btn-gold" onClick={onBookClick} style={s.ctaBtn}>
              GET MY FREE QUOTE &nbsp;&rarr;
            </button>
            <div style={s.trustRow}>
              <span style={s.trustItem}>✓ No Pressure</span>
              <span style={s.trustItem}>✓ No Obligation</span>
              <span style={s.trustItem}>✓ 100% Free</span>
            </div>
          </motion.div>
        </div>

        {/* ── Right column ── */}
        <motion.div {...fadeUp(0.2)} style={s.right}>
          <div style={s.frame}>
            <div style={s.split}>
              <div style={s.halfBefore}>
                <img src={BEFORE_IMG} alt="Before" style={s.halfImg} />
                <span style={{ ...s.badge, left: '12px' }}>BEFORE</span>
              </div>
              <div style={s.halfAfter}>
                <img src={AFTER_IMG} alt="After" style={s.halfImg} />
                <span style={{ ...s.badge, right: '12px' }}>AFTER</span>
              </div>
              <div style={s.divider} />
              <button style={s.playWrap} onClick={onBookClick} aria-label="Watch transformation">
                <div style={s.playCircle}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
              </button>
            </div>
            <div style={s.strip}>
              <img src={COUPLE_IMG} alt="Miguel and Karla" style={s.coupleImg} />
              <p style={s.quote}>
                “We couldn’t believe it was the same house. VIP Home Painting
                exceeded every expectation we had!” – <em>Miguel &amp; Karla</em>
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

const GOLD = '#C4973C'
const NAVY = '#0F1B3D'

const s = {
  section: { paddingTop: '72px', background: '#F7F4EF', minHeight: '100vh', display: 'flex', alignItems: 'center' },
  inner: { display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '56px', alignItems: 'center', paddingTop: '32px', paddingBottom: '40px' },
  left: {},
  lookWhat: { fontFamily: "'Montserrat', sans-serif", fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase', color: NAVY, marginBottom: '12px' },
  transformed: { fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, fontSize: 'clamp(2.6rem, 5vw, 4.2rem)', color: NAVY, lineHeight: 1.0, margin: 0 },
  names: { fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: 'italic', fontWeight: 600, fontSize: 'clamp(2.6rem, 5vw, 4.2rem)', color: GOLD, lineHeight: 1.0, margin: 0 },
  home: { fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, fontSize: 'clamp(2.6rem, 5vw, 4.2rem)', color: NAVY, lineHeight: 1.05, margin: '0 0 18px' },
  subhead: { fontFamily: "'Playfair Display', Georgia, serif", fontStyle: 'italic', fontSize: 'clamp(0.9rem, 1.4vw, 1.05rem)', color: '#5A5A5A', marginBottom: '14px' },
  body: { fontFamily: "'Montserrat', sans-serif", fontSize: '0.85rem', lineHeight: 1.75, color: '#5A5A5A', marginBottom: '28px', maxWidth: '400px' },
  ctaBtn: { marginBottom: '14px', display: 'block' },
  trustRow: { display: 'flex', gap: '18px', flexWrap: 'wrap' },
  trustItem: { fontFamily: "'Montserrat', sans-serif", fontSize: '0.65rem', fontWeight: 600, color: '#7A7A7A' },
  right: {},
  frame: { border: `3px solid ${GOLD}`, overflow: 'hidden', boxShadow: '0 16px 48px rgba(15,27,61,0.18)' },
  split: { position: 'relative', width: '100%', aspectRatio: '16/11', display: 'flex', overflow: 'hidden' },
  halfBefore: { position: 'relative', width: '50%', overflow: 'hidden', flexShrink: 0 },
  halfAfter:  { position: 'relative', width: '50%', overflow: 'hidden', flexShrink: 0 },
  halfImg: { width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' },
  badge: { position: 'absolute', top: '12px', background: 'rgba(15,27,61,0.65)', color: '#fff', fontFamily: "'Montserrat', sans-serif", fontSize: '0.55rem', fontWeight: 700, letterSpacing: '0.14em', padding: '4px 12px', textTransform: 'uppercase' },
  divider: { position: 'absolute', top: 0, bottom: 0, left: '50%', width: '3px', background: GOLD, transform: 'translateX(-50%)', zIndex: 5 },
  playWrap: { position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'none', border: 'none', cursor: 'pointer', zIndex: 10, padding: 0 },
  playCircle: { width: '64px', height: '64px', borderRadius: '50%', background: GOLD, display: 'flex', alignItems: 'center', justifyContent: 'center', paddingLeft: '4px', boxShadow: '0 4px 22px rgba(196,151,60,0.55)' },
  strip: { background: NAVY, padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '14px' },
  coupleImg: { width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover', border: `2px solid ${GOLD}`, flexShrink: 0 },
  quote: { fontFamily: "'Montserrat', sans-serif", fontSize: '0.78rem', fontWeight: 400, color: 'rgba(255,255,255,0.9)', lineHeight: 1.55, margin: 0 },
}
