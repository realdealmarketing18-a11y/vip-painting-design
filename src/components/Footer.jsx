const GOLD = '#C4973C'

export default function Footer() {
  return (
    <footer style={s.footer}>
      <div className="container" style={s.inner}>
        <div style={s.logoCol}>
          <div style={s.logoWrap}>
            <span style={s.crown}>&#9819;</span>
            <div><div style={s.vip}>VIP</div><div style={s.hp}>HOME PAINTING</div></div>
          </div>
        </div>
        <div style={s.napCol}>
          <p style={s.napBadge}>NAP</p>
          <p style={s.napLine}>Proudly Serving Arizona</p>
          <p style={s.napLine}>Licensed &middot; Bonded &middot; Insured</p>
        </div>
        <div style={s.rightCol}>
          <p style={s.tagline}>We don’t just paint homes,<br /><em>we transform lives.</em></p>
          <div style={s.socials}>
            {['f','in','G','▶'].map((ic) => (
              <div key={ic} style={s.socialIcon}><span style={s.socialIc}>{ic}</span></div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

const s = {
  footer: { background: '#070D1E', padding: '44px 0', borderTop: `3px solid ${GOLD}` },
  inner: { display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '40px', alignItems: 'center' },
  logoCol: {},
  logoWrap: { display: 'flex', alignItems: 'center', gap: '10px' },
  crown: { fontSize: '2rem', color: GOLD, lineHeight: 1 },
  vip: { fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, fontSize: '1.5rem', color: '#FFFFFF', lineHeight: 1 },
  hp: { fontFamily: "'Montserrat', sans-serif", fontSize: '0.45rem', fontWeight: 700, letterSpacing: '0.24em', color: GOLD, textTransform: 'uppercase', lineHeight: 1.2 },
  napCol: { textAlign: 'center' },
  napBadge: { fontFamily: "'Montserrat', sans-serif", fontSize: '0.52rem', fontWeight: 700, letterSpacing: '0.22em', color: GOLD, marginBottom: '6px', textTransform: 'uppercase' },
  napLine: { fontFamily: "'Montserrat', sans-serif", fontSize: '0.72rem', color: 'rgba(255,255,255,0.6)', margin: '3px 0' },
  rightCol: { textAlign: 'right' },
  tagline: { fontFamily: "'Playfair Display', Georgia, serif", fontSize: '0.88rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.65, marginBottom: '16px' },
  socials: { display: 'flex', gap: '10px', justifyContent: 'flex-end' },
  socialIcon: { width: '32px', height: '32px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' },
  socialIc: { color: 'rgba(255,255,255,0.6)', fontSize: '0.65rem', fontFamily: "'Montserrat', sans-serif", fontWeight: 700 },
}
