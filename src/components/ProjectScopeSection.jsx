import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const COL1 = ['Full Exterior Painting','Interior Wall Painting','Cabinet Painting & Refinishing','Garage Floor Coatings']
const COL2 = ['Stucco Repair & Painting','Wood Trim Replacement','Color Consultation','Pressure Washing']
const COL3 = ['Surface Preparation','Premium Paints Only','Clean Worksites','Final Inspection']

export default function ProjectScopeSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <section ref={ref} style={s.section}>
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
          <p style={s.label}>OUR COMPLETE SCOPE OF WORK</p>
          <div style={s.grid}>
            <ul className="check-list">{COL1.map((item) => <li key={item}>{item}</li>)}</ul>
            <ul className="check-list">{COL2.map((item) => <li key={item}>{item}</li>)}</ul>
            <ul className="check-list">{COL3.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const s = {
  section: { background: '#F7F4EF', padding: '48px 0', borderTop: '1px solid rgba(15,27,61,0.08)' },
  label: { fontFamily: "'Montserrat', sans-serif", fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.26em', textTransform: 'uppercase', color: '#0F1B3D', marginBottom: '22px' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' },
}
