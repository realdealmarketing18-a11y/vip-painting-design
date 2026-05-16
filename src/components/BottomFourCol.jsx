import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const SERVICES = [
  { name: 'Exterior House Painting', sub: 'Premium paints and expert application' },
  { name: 'Interior Painting',       sub: 'Beautiful, long-lasting interior finishes' },
  { name: 'Cabinet Refinishing',     sub: 'Transform your kitchen and bathrooms' },
  { name: 'Garage Floor Coatings',   sub: 'Durable, beautiful epoxy finishes' },
]

export default function BottomFourCol({ onBookClick }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const fade = (d) => ({
    initial: { opacity: 0, y: 20 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.65, delay: d, ease: [0.22, 1, 0.36, 1] },
  })

  return (
    <section ref={ref} style={s.section}>
      <div className="container" style={s.grid}>

        {/* 1. Exclusive Offers */}
        <motion.div {...fade(0)}>
          <p style={s.colLabel}>EXCLUSIVE OFFERS</p>
          <p style={s.colSub}>Take advantage of these limited-time offers when you book your project today!</p>
          <div style={s.offerRow}>
            <div style={s.offerBox}>
              <p style={s.offerAmt}>$750 <span style={s.offTag}>OFF</span></p>
              <p style={s.offerDesc}>Any Full Exterior<br />Paint Job</p>
            </div>
            <div style={s.offerBox}>
              <p style={s.offerFree}>FREE</p>
              <p style={s.offerDesc}>Color Consultation<br />($250 Value)</p>
            </div>
            <div style={s.offerBox}>
              <p style={s.offerFree}>FREE</p>
              <p style={s.offerDesc}>Pressure Wash<br />($300 Value)</p>
            </div>
          </div>
          <button className="btn-gold" onClick={onBookClick} style={s.claimBtn}>
            CLAIM YOUR OFFERS &rarr;
          </button>
          <p style={s.limitedNote}>Limited Time Only &middot; Limited Spots Available</p>
        </motion.div>

        {/* 2. What We Do */}
        <motion.div {...fade(0.1)}>
          <p style={s.colLabel}>WHAT WE DO</p>
          <div style={s.serviceList}>
            {SERVICES.map((sv) => (
              <div key={sv.name} style={s.serviceItem}>
                <div style={s.svcIcon}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#C4973C" strokeWidth="2">
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                  </svg>
                </div>
                <div>
                  <p style={s.svName}>{sv.name}</p>
                  <p style={s.svSub}>{sv.sub}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="btn-outline-gold" onClick={onBookClick} style={s.seeAll}>
            SEE ALL SERVICES &rarr;
          </button>
        </motion.div>

        {/* 3. Testimonial */}
        <motion.div {...fade(0.2)}>
          <p style={s.colLabel}>WHAT OUR CLIENTS SAY</p>
          <div style={s.testimonialBox}>
            <p style={s.bigQuote}>&ldquo;</p>
            <p style={s.testimonialText}>
              VIP Home Painting transformed our home beyond our wildest dreams.
              The attention to detail, communication, and final results were
              absolutely incredible. We get compliments every single day!!
            </p>
            <p style={s.tAuthor}>&ndash; Sarah &amp; Mike R.</p>
            <p style={s.stars}>&#9733;&#9733;&#9733;&#9733;&#9733;</p>
            <p style={s.verified}>Verified Customer</p>
          </div>
        </motion.div>

        {/* 4. By the Numbers */}
        <motion.div {...fade(0.3)}>
          <p style={s.colLabel}>BY THE NUMBERS</p>
          <div style={s.statsList}>
            {[
              { num: '500+',   label: 'Happy Families' },
              { num: '5+',     label: 'Years of Excellence' },
              { num: '100%',   label: 'Satisfaction Rate' },
              { num: '1-YEAR', label: 'Insane Warranty' },
            ].map((st) => (
              <div key={st.num} style={s.statItem}>
                <p style={s.statNum}>{st.num}</p>
                <p style={s.statLabel}>{st.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}

const GOLD = '#C4973C'
const NAVY = '#0F1B3D'

const s = {
  section: {
    background: '#F7F4EF',
    padding: '64px 0',
    borderTop: '1px solid rgba(15,27,61,0.08)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '36px',
    alignItems: 'start',
  },
  colLabel: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '0.55rem',
    fontWeight: 700,
    letterSpacing: '0.24em',
    textTransform: 'uppercase',
    color: GOLD,
    marginBottom: '12px',
  },
  colSub: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '0.75rem',
    color: '#5A5A5A',
    lineHeight: 1.6,
    marginBottom: '16px',
  },
  offerRow: {
    display: 'flex',
    gap: '8px',
    marginBottom: '16px',
    flexWrap: 'wrap',
  },
  offerBox: {
    flex: '1 1 56px',
    textAlign: 'center',
    padding: '12px 6px',
    border: `1px solid ${GOLD}`,
    background: '#fff',
  },
  offerAmt: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontWeight: 700,
    fontSize: '1.05rem',
    color: NAVY,
    margin: '0 0 5px',
    lineHeight: 1,
  },
  offTag: {
    fontSize: '0.55rem',
    fontWeight: 700,
    fontFamily: "'Montserrat', sans-serif",
    letterSpacing: '0.1em',
    color: GOLD,
    verticalAlign: 'middle',
  },
  offerFree: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontWeight: 700,
    fontSize: '1.05rem',
    color: GOLD,
    margin: '0 0 5px',
    lineHeight: 1,
  },
  offerDesc: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '0.56rem',
    color: '#5A5A5A',
    lineHeight: 1.4,
    margin: 0,
  },
  claimBtn: {
    fontSize: '0.58rem',
    padding: '12px 14px',
    width: '100%',
    marginBottom: '8px',
  },
  limitedNote: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '0.55rem',
    color: '#9A9A9A',
    fontStyle: 'italic',
  },
  serviceList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
    marginBottom: '18px',
  },
  serviceItem: {
    display: 'flex',
    gap: '10px',
    alignItems: 'flex-start',
  },
  svcIcon: {
    width: '26px',
    height: '26px',
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(196,151,60,0.08)',
    border: '1px solid rgba(196,151,60,0.22)',
    borderRadius: '50%',
    marginTop: '2px',
  },
  svName: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '0.76rem',
    fontWeight: 600,
    color: NAVY,
    margin: '0 0 2px',
  },
  svSub: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '0.65rem',
    color: '#9A9A9A',
    margin: 0,
    fontStyle: 'italic',
  },
  seeAll: { fontSize: '0.58rem', padding: '10px 14px' },
  testimonialBox: { position: 'relative' },
  bigQuote: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: '4rem',
    color: GOLD,
    lineHeight: 0.8,
    margin: '0 0 -8px',
  },
  testimonialText: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '0.76rem',
    lineHeight: 1.72,
    color: '#4A4A4A',
    marginBottom: '10px',
    fontStyle: 'italic',
  },
  tAuthor: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '0.68rem',
    fontWeight: 700,
    color: NAVY,
    marginBottom: '6px',
  },
  stars: {
    fontSize: '0.9rem',
    color: GOLD,
    letterSpacing: '0.08em',
    marginBottom: '4px',
  },
  verified: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '0.58rem',
    color: '#9A9A9A',
    fontStyle: 'italic',
  },
  statsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '18px',
  },
  statItem: {},
  statNum: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontWeight: 700,
    fontSize: '2rem',
    color: NAVY,
    lineHeight: 1,
    margin: '0 0 4px',
  },
  statLabel: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '0.68rem',
    color: '#6A6A6A',
    margin: 0,
  },
}
