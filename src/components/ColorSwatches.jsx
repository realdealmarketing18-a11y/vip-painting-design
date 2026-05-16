const SWATCHES = [
  { code: 'SW 2017', name: 'Main Body',  grad: 'radial-gradient(circle at 35% 32%, #D9C9A6, #B5A37A 50%, #8A7050 100%)' },
  { code: 'SW 2068', name: 'Trim',       grad: 'radial-gradient(circle at 35% 32%, #FFFFFF, #EDE9DF 50%, #D0CBBD 100%)' },
  { code: 'SW 2019', name: 'Gable',      grad: 'radial-gradient(circle at 35% 32%, #99A87D, #6B7556 50%, #4A5238 100%)' },
  { code: 'SW 2016', name: 'Front Door', grad: 'radial-gradient(circle at 35% 32%, #922E42, #6B2737 50%, #4A1A25 100%)' },
]

export default function ColorSwatches() {
  return (
    <section style={s.section}>
      <div className="container" style={s.inner}>
        <p style={s.label}>OUR COLOR SELECTION</p>
        <div style={s.row}>
          {SWATCHES.map((sw) => (
            <div key={sw.code} style={s.item}>
              <div style={{ ...s.sphere, background: sw.grad }} />
              <p style={s.code}>{sw.code}</p>
              <p style={s.name}>{sw.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const s = {
  section: { background: '#F7F4EF', borderTop: '1px solid rgba(15,27,61,0.07)', borderBottom: '1px solid rgba(15,27,61,0.07)', padding: '28px 0' },
  inner: { display: 'flex', alignItems: 'center', gap: '48px', flexWrap: 'wrap' },
  label: { fontFamily: "'Montserrat', sans-serif", fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.26em', textTransform: 'uppercase', color: '#0F1B3D', whiteSpace: 'nowrap' },
  row: { display: 'flex', gap: '36px', alignItems: 'center', flexWrap: 'wrap' },
  item: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '7px' },
  sphere: { width: '56px', height: '56px', borderRadius: '50%', boxShadow: '0 4px 14px rgba(0,0,0,0.22), inset 0 -4px 8px rgba(0,0,0,0.18)' },
  code: { fontFamily: "'Montserrat', sans-serif", fontSize: '0.58rem', fontWeight: 700, color: '#0F1B3D', margin: 0, letterSpacing: '0.04em' },
  name: { fontFamily: "'Montserrat', sans-serif", fontSize: '0.55rem', fontWeight: 400, color: '#7A7A7A', margin: 0 },
}
