import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const FOUNDER_IMG = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=700&q=80&auto=format&fit=crop'

const EDU_BULLETS = [
  "Protects Against Arizona's Harsh Climate",
  'Increases Property Value Instantly',
  'Makes Your Home the Envy of the Neighborhood',
  'Lasts for Years with Proper Preparation',
]

const TRUST_BULLETS = [
  '1-Year Warranty on Labor & Materials',
  'Licensed, Bonded & Insured',
  '100% Satisfaction Guaranteed',
  'Local Family-Owned Business',
]

export default function EducationSection({ onBookClick }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const fade = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  })

  return (
    <section ref={ref} style={s.section}>
      <div className="container" style={s.grid}>

        <motion.div {...fade(0)} style={s.panel}>
          <p style={s.overline}>THE EDUCATION</p>
          <h2 style={s.panelHeadline}>Here’s Why You Need This</h2>
          <p style={s.panelBody}>
            A professional paint job is one of the highest ROI home improvements
            you can make. It protects your biggest investment while making your
            home the standout on the street.
          </p>
          <ul className="check-list" style={{ marginBottom: '28px' }}>
            {EDU_BULLETS.map((b) => <li key={b}>{b}</li>)}
          </ul>
          <button className="btn-outline-gold" onClick={onBookClick} style={s.panelBtn}>
            WATCH &amp; LEARN MORE &nbsp;&rarr;
          </button>
        </motion.div>

        <motion.div {...fade(0.15)} style={s.videoCol}>
          <div style={s.videoWrap}>
            <img src={FOUNDER_IMG} alt="Michael, Founder" style={s.videoImg} />
            <div style={s.videoOverlay} />
            <button style={s.playBtn} onClick={onBookClick} aria-label="Play video">
              <div style={s.playCircle}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><polygon points="5 3 19 12 5 21 5 3" /></svg>
              </div>
            </button>
          </div>
          <div style={s.founderStrip}>
            <img src={FOUNDER_IMG} alt="Michael, Founder" style={s.founderAvatar} />
            <p style={s.founderText}>
              “I’ll show you exactly why our process and materials make all the difference.”
              <span style={s.founderName}>&nbsp;– Michael, Founder</span>
            </p>
          </div>
        </motion.div>

        <motion.div {...fade(0.3)} style={s.panel}>
          <p style={s.overline}>THE TRUST</p>
          <h2 style={s.panelHeadline}>Here’s Why You’re Completely Safe</h2>
          <p style={s.panelBody}>
            We stand behind our work with an INSANE 1-year warranty. If anything
            fails, we fix it. No questions asked.
          </p>
          <div style={s.badgeWrap}>
            <div style={s.badgeRing}>
              <div style={s.badgeInner}>
                <p style={s.bTop}>OUR</p>
                <p style={s.bMid}>INSANE</p>
                <p style={s.bYear}>1-YEAR</p>
                <p style={s.bBot}>WARRANTY</p>
                <p style={s.bStars}>&#9733;&#9733;&#9733;&#9733;&#9733;</p>
              </div>
            </div>
          </div>
          <ul className="check-list">
            {TRUST_BULLETS.map((b) => <li key={b}>{b}</li>)}
          </ul>
        </motion.div>

      </div>
    </section>
  )
}

const GOLD = '#C4973C'
const NAVY = '#0F1B3D'

const s = {
  section: { background: '#EDE8DF', padding: '72px 0' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px', alignItems: 'start' },
  panel: { background: '#F7F4EF', padding: '36px 28px' },
  overline: { fontFamily: "'Montserrat', sans-serif", fontSize: '0.55rem', fontWeight: 700, letterSpacing: '0.26em', textTransform: 'uppercase', color: GOLD, marginBottom: '10px' },
  panelHeadline: { fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, fontSize: 'clamp(1.25rem, 2.2vw, 1.65rem)', color: NAVY, lineHeight: 1.2, marginBottom: '14px' },
  panelBody: { fontFamily: "'Montserrat', sans-serif", fontSize: '0.82rem', lineHeight: 1.75, color: '#5A5A5A', marginBottom: '20px' },
  panelBtn: { fontSize: '0.6rem', padding: '11px 18px' },
  videoCol: {},
  videoWrap: { position: 'relative', width: '100%', aspectRatio: '4/3', overflow: 'hidden', background: NAVY },
  videoImg: { width: '100%', height: '100%', objectFit: 'cover', opacity: 0.72, display: 'block' },
  videoOverlay: { position: 'absolute', inset: 0, background: `linear-gradient(to top, ${NAVY}CC 0%, transparent 55%)` },
  playBtn: { position: 'absolute', inset: 0, margin: 'auto', width: '60px', height: '60px', background: 'none', border: 'none', cursor: 'pointer', zIndex: 5, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0 },
  playCircle: { width: '60px', height: '60px', borderRadius: '50%', background: GOLD, display: 'flex', alignItems: 'center', justifyContent: 'center', paddingLeft: '3px', boxShadow: '0 4px 18px rgba(196,151,60,0.5)' },
  founderStrip: { background: NAVY, padding: '14px 18px', display: 'flex', alignItems: 'center', gap: '12px' },
  founderAvatar: { width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover', border: `2px solid ${GOLD}`, flexShrink: 0 },
  founderText: { fontFamily: "'Montserrat', sans-serif", fontSize: '0.7rem', color: 'rgba(255,255,255,0.88)', lineHeight: 1.55, margin: 0, fontStyle: 'italic' },
  founderName: { fontStyle: 'normal', fontWeight: 700, color: GOLD },
  badgeWrap: { display: 'flex', justifyContent: 'center', marginBottom: '24px' },
  badgeRing: { width: '130px', height: '130px', borderRadius: '50%', background: `conic-gradient(${GOLD} 0deg, #E8C870 180deg, ${GOLD} 360deg)`, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 6px 24px rgba(196,151,60,0.4)' },
  badgeInner: { width: '108px', height: '108px', borderRadius: '50%', background: NAVY, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1px' },
  bTop:  { fontFamily: "'Montserrat',sans-serif", fontSize: '0.42rem', fontWeight: 700, letterSpacing: '0.2em',  color: GOLD,   margin: 0, textTransform: 'uppercase' },
  bMid:  { fontFamily: "'Montserrat',sans-serif", fontSize: '0.48rem', fontWeight: 700, letterSpacing: '0.1em',  color: '#fff', margin: 0, textTransform: 'uppercase' },
  bYear: { fontFamily: "'Playfair Display',Georgia,serif", fontSize: '1.5rem', fontWeight: 700, color: GOLD, margin: 0, lineHeight: 1 },
  bBot:  { fontFamily: "'Montserrat',sans-serif", fontSize: '0.42rem', fontWeight: 700, letterSpacing: '0.15em', color: '#fff', margin: 0, textTransform: 'uppercase' },
  bStars:{ fontSize: '0.55rem', color: GOLD, letterSpacing: '0.06em', margin: 0 },
}
