import { motion } from 'framer-motion'

const BEFORE_IMG = 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1400&q=80&auto=format&fit=crop'
const AFTER_IMG  = 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1400&q=80&auto=format&fit=crop'
const COUPLE_IMG = 'https://images.unsplash.com/photo-1522556189639-b150ed9c4330?w=300&q=80&auto=format&fit=crop'

const GOLD = '#C4973C'
const NAVY = '#0F1B3D'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero({ onBookClick }) {
  return (
    <section style={s.section}>
      <div className="container" style={s.inner}>

        {/* ── Headline block ── */}
        <motion.div {...fade(0.08)} style={s.headlineBlock}>
          <p style={s.overline}>LOOK WHAT HAPPENED TO</p>
          <h1 style={s.h1Wrap}>
            <span style={s.transformed}>Transformed</span>
            <span style={s.names}>Miguel &amp; Karla&rsquo;s</span>
            <span style={s.home}>Home</span>
          </h1>
          <p style={s.subhead}>From Dull to Jaw-Droppingly Beautiful</p>
          <p style={s.body}>
            We don&rsquo;t just paint homes, we transform them. See how we took their
            outdated exterior and created a stunning masterpiece that became the
            envy of the neighborhood.
          </p>
        </motion.div>

        {/* ── Video / Before-After — underneath the headline ── */}
        <motion.div {...fade(0.2)} style={s.videoWrap}>
          <div style={s.frame}>

            {/* Split image */}
            <div style={s.split}>
              <div style={s.half}>
                <img src={BEFORE_IMG} alt="Before" style={s.img} />
                <span style={{ ...s.badge, left: '14px' }}>BEFORE</span>
              </div>
              <div style={s.half}>
                <img src={AFTER_IMG} alt="After" style={s.img} />
                <span style={{ ...s.badge, right: '14px' }}>AFTER</span>
              </div>

              {/* Gold divider */}
              <div style={s.divider} />

              {/* Play button */}
              <button style={s.playBtn} onClick={onBookClick} aria-label="Watch transformation video">
                <div style={s.playCircle}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                    <polygon points="6 3 20 12 6 21 6 3" />
                  </svg>
                </div>
                <span style={s.playLabel}>WATCH THE TRANSFORMATION</span>
              </button>
            </div>

            {/* Testimonial strip */}
            <div style={s.strip}>
              <img src={COUPLE_IMG} alt="Miguel and Karla" style={s.coupleImg} />
              <p style={s.quote}>
                &ldquo;We couldn&rsquo;t believe it was the same house. VIP Home Painting
                exceeded every expectation we had!&rdquo;
                &nbsp;<em>– Miguel &amp; Karla, Scottsdale AZ</em>
              </p>
            </div>

          </div>
        </motion.div>

        {/* ── CTA block — below the video ── */}
        <motion.div {...fade(0.34)} style={s.ctaBlock}>
          <button className="btn-gold" onClick={onBookClick} style={s.ctaBtn}>
            GET MY FREE QUOTE &nbsp;&rarr;
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
    paddingTop: '88px',
    paddingBottom: '64px',
    background: '#F7F4EF',
  },
  inner: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '36px',
    maxWidth: '860px',
  },

  /* Headline */
  headlineBlock: {
    textAlign: 'center',
    width: '100%',
  },
  overline: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '0.62rem',
    fontWeight: 700,
    letterSpacing: '0.3em',
    textTransform: 'uppercase',
    color: NAVY,
    marginBottom: '14px',
  },
  h1Wrap: {
    display: 'flex',
    flexDirection: 'column',
    lineHeight: 1.0,
    marginBottom: '16px',
  },
  transformed: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontWeight: 700,
    fontSize: 'clamp(2.8rem, 6vw, 4.8rem)',
    color: NAVY,
  },
  names: {
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontStyle: 'italic',
    fontWeight: 600,
    fontSize: 'clamp(2.8rem, 6vw, 4.8rem)',
    color: GOLD,
  },
  home: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontWeight: 700,
    fontSize: 'clamp(2.8rem, 6vw, 4.8rem)',
    color: NAVY,
    marginBottom: '4px',
  },
  subhead: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontStyle: 'italic',
    fontSize: 'clamp(1rem, 1.6vw, 1.15rem)',
    color: '#5A5A5A',
    marginBottom: '12px',
  },
  body: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '0.88rem',
    lineHeight: 1.75,
    color: '#5A5A5A',
    maxWidth: '580px',
    margin: '0 auto',
  },

  /* Video/Before-After */
  videoWrap: {
    width: '100%',
  },
  frame: {
    border: `3px solid ${GOLD}`,
    overflow: 'hidden',
    boxShadow: '0 20px 56px rgba(15,27,61,0.18)',
  },
  split: {
    position: 'relative',
    width: '100%',
    aspectRatio: '16/9',
    display: 'flex',
    overflow: 'hidden',
  },
  half: {
    position: 'relative',
    width: '50%',
    flexShrink: 0,
    overflow: 'hidden',
  },
  img: {
    width: '200%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  badge: {
    position: 'absolute',
    top: '14px',
    background: 'rgba(15,27,61,0.7)',
    color: '#fff',
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '0.55rem',
    fontWeight: 700,
    letterSpacing: '0.16em',
    padding: '4px 14px',
    textTransform: 'uppercase',
    borderRadius: '20px',
  },
  divider: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: '50%',
    width: '3px',
    background: GOLD,
    transform: 'translateX(-50%)',
    zIndex: 5,
  },
  playBtn: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    zIndex: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
    padding: 0,
  },
  playCircle: {
    width: '72px',
    height: '72px',
    borderRadius: '50%',
    background: GOLD,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: '4px',
    boxShadow: '0 6px 28px rgba(196,151,60,0.55)',
  },
  playLabel: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '0.52rem',
    fontWeight: 700,
    letterSpacing: '0.18em',
    color: '#fff',
    textTransform: 'uppercase',
    textShadow: '0 1px 6px rgba(0,0,0,0.6)',
    whiteSpace: 'nowrap',
  },
  strip: {
    background: NAVY,
    padding: '18px 24px',
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  coupleImg: {
    width: '52px',
    height: '52px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: `2px solid ${GOLD}`,
    flexShrink: 0,
  },
  quote: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '0.8rem',
    fontWeight: 400,
    color: 'rgba(255,255,255,0.92)',
    lineHeight: 1.55,
    margin: 0,
  },

  /* CTA */
  ctaBlock: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '14px',
  },
  ctaBtn: {
    fontSize: '0.8rem',
    padding: '17px 40px',
    letterSpacing: '0.14em',
  },
  trustRow: {
    display: 'flex',
    gap: '24px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  trust: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '0.68rem',
    fontWeight: 600,
    color: '#7A7A7A',
  },
}
