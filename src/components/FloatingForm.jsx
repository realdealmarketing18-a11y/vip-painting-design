import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function FloatingForm({ isOpen, onClose }) {
  const [form, setForm] = useState({ name: '', phone: '', email: '', address: '', services: '' })

  const onChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const onSubmit = (e) => {
    e.preventDefault()
    alert('Thank you! We\'ll respond within 24 hours.')
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={s.backdrop}
          />
          <motion.div
            key="panel"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={s.panel}
          >
            {/* Header */}
            <div style={s.header}>
              <div style={{ flex: 1 }}>
                <p style={s.hLabel}>GET YOUR FREE QUOTE</p>
                <p style={s.hTitle}>Let’s Transform Your Home</p>
                <p style={s.hSub}>Tell us about your project and we’ll get back to you within 24 hours!</p>
              </div>
              <button onClick={onClose} style={s.closeBtn} aria-label="Close">&times;</button>
            </div>

            {/* Form */}
            <form onSubmit={onSubmit} style={s.form}>
              <Field label="Full Name" req>
                <input type="text" name="name" value={form.name} onChange={onChange} placeholder="Your full name" required />
              </Field>
              <Field label="Phone Number" req>
                <input type="tel" name="phone" value={form.phone} onChange={onChange} placeholder="(000) 555-1234" required />
              </Field>
              <Field label="Email Address" req>
                <input type="email" name="email" value={form.email} onChange={onChange} placeholder="your@email.com" required />
              </Field>
              <Field label="Project Address" req>
                <input type="text" name="address" value={form.address} onChange={onChange} placeholder="Your full address" required />
              </Field>
              <Field label="What services are you interested in?">
                <select name="services" value={form.services} onChange={onChange}>
                  <option value="">Select services</option>
                  <option value="exterior">Exterior House Painting</option>
                  <option value="interior">Interior Painting</option>
                  <option value="cabinet">Cabinet Refinishing</option>
                  <option value="garage">Garage Floor Coatings</option>
                  <option value="multiple">Multiple Services</option>
                </select>
              </Field>
              <Field label="Upload Photos (Optional)">
                <div style={s.uploadBox}>
                  <p style={s.uploadText}>Drag & drop photos here or click to browse</p>
                  <p style={s.uploadHint}>PNG, JPG up to 10MB</p>
                </div>
              </Field>
              <button type="submit" className="btn-gold" style={s.submitBtn}>
                SUBMIT REQUEST
              </button>
              <p style={s.footNote}>✓ We’ll respond within 24 hours!</p>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

function Field({ label, req, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
      <label style={fStyle.label}>
        {label} {req && <span style={{ color: '#C04040' }}>*</span>}
      </label>
      {children}
    </div>
  )
}

const fStyle = {
  label: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '0.63rem',
    fontWeight: 600,
    color: '#0F1B3D',
    letterSpacing: '0.02em',
  },
}

const GOLD = '#C4973C'
const NAVY = '#0F1B3D'

const s = {
  backdrop: {
    position: 'fixed',
    inset: 0,
    background: 'rgba(15,27,61,0.45)',
    zIndex: 200,
    backdropFilter: 'blur(2px)',
  },
  panel: {
    position: 'fixed',
    top: '68px',
    right: 0,
    bottom: 0,
    width: '340px',
    background: '#FFFFFF',
    zIndex: 300,
    overflowY: 'auto',
    boxShadow: '-8px 0 32px rgba(15,27,61,0.15)',
  },
  header: {
    background: NAVY,
    padding: '20px 20px 18px',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
  },
  hLabel: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '0.52rem',
    fontWeight: 700,
    letterSpacing: '0.22em',
    color: GOLD,
    textTransform: 'uppercase',
    margin: '0 0 5px',
  },
  hTitle: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontWeight: 700,
    fontSize: '1.1rem',
    color: '#FFFFFF',
    margin: '0 0 6px',
  },
  hSub: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '0.68rem',
    color: 'rgba(255,255,255,0.6)',
    lineHeight: 1.5,
    margin: 0,
  },
  closeBtn: {
    background: 'none',
    border: 'none',
    color: 'rgba(255,255,255,0.65)',
    cursor: 'pointer',
    fontSize: '1.3rem',
    padding: '0',
    flexShrink: 0,
    lineHeight: 1,
    marginTop: '-2px',
  },
  form: {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
  },
  uploadBox: {
    border: '1.5px dashed rgba(15,27,61,0.2)',
    borderRadius: '2px',
    padding: '20px',
    textAlign: 'center',
    background: '#FAFAFA',
    cursor: 'pointer',
  },
  uploadText: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '0.7rem',
    color: '#7A7A7A',
    margin: '0 0 4px',
  },
  uploadHint: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '0.58rem',
    color: '#ABABAB',
    margin: 0,
  },
  submitBtn: {
    width: '100%',
    fontSize: '0.68rem',
    padding: '14px',
    marginTop: '4px',
  },
  footNote: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '0.65rem',
    color: '#2B7A4B',
    fontWeight: 600,
    textAlign: 'center',
    margin: 0,
  },
}
