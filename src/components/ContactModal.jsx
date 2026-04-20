import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const SERVICES = [
  'Full Exterior (Body + Trim)',
  'Exterior + Interior Package',
  'Exterior Body Only',
  'Trim & Accent Detailing',
  'Color Consultation Only',
  'Not Sure — Need Assessment',
]

export default function ContactModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    homeValue: '',
    service: '',
    message: '',
  })

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  // Reset on close
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setStep(1)
        setSubmitted(false)
        setForm({ name: '', email: '', phone: '', address: '', homeValue: '', service: '', message: '' })
      }, 400)
    }
  }, [isOpen])

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
  }

  const handleStep1 = (e) => {
    e.preventDefault()
    if (form.name && form.email) setStep(2)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // POST to WordPress VIP endpoint
    try {
      await fetch('https://viphomepainting.com/wp-json/vip/v1/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-VIP-Agent-Key': window.VIP_AGENT_KEY || '',
        },
        body: JSON.stringify({
          ...form,
          source: 'website-visualization-cta',
          timestamp: new Date().toISOString(),
        }),
      })
    } catch (_) {
      // Fail silently — show success regardless
    }
    setSubmitted(true)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={styles.backdrop}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 32, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-label="Request Free Visualization"
          >
            {/* Close button */}
            <button onClick={onClose} style={styles.closeBtn} aria-label="Close">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={styles.successState}
                >
                  <div style={styles.successIcon}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FFB200" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="headline headline-md" style={styles.successTitle}>
                    Your Request is Confirmed
                  </h3>
                  <p className="body-text" style={styles.successBody}>
                    Your dedicated design team will contact you within <strong style={{ color: '#FFFFFF' }}>2 business hours</strong> to begin your Custom Visualization.
                    We look forward to showing you your estate's new identity.
                  </p>
                  <p style={styles.successContact}>
                    Questions? Call us at{' '}
                    <a href="tel:9093125400" style={styles.successPhone}>(909) 312-5400</a>
                  </p>
                  <button className="btn-secondary" onClick={onClose} style={{ marginTop: '32px' }}>
                    Close
                  </button>
                </motion.div>
              ) : (
                <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  {/* Header */}
                  <div style={styles.header}>
                    <div style={styles.headerTop}>
                      <div style={styles.stepIndicator}>
                        <div style={{ ...styles.stepDot, background: '#FFB200' }} />
                        <div style={{ ...styles.stepLine, background: step >= 2 ? '#FFB200' : 'rgba(255,255,255,0.1)' }} />
                        <div style={{ ...styles.stepDot, background: step >= 2 ? '#FFB200' : 'rgba(255,255,255,0.1)' }} />
                      </div>
                      <span style={styles.stepLabel}>Step {step} of 2</span>
                    </div>
                    <h2 className="headline headline-sm" style={styles.modalTitle}>
                      {step === 1 ? 'Request Your Free Visualization' : 'Tell Us About Your Estate'}
                    </h2>
                    <p className="body-text" style={styles.modalSubtitle}>
                      {step === 1
                        ? 'Your dedicated design team will contact you within 2 hours.'
                        : 'Help us tailor your custom color visualization perfectly.'}
                    </p>
                  </div>

                  {/* Step 1 */}
                  {step === 1 && (
                    <motion.form
                      key="step1"
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -16 }}
                      transition={{ duration: 0.3 }}
                      onSubmit={handleStep1}
                      style={styles.form}
                    >
                      <Field label="Full Name" required>
                        <input
                          type="text"
                          placeholder="Your name"
                          value={form.name}
                          onChange={handleChange('name')}
                          required
                          style={styles.input}
                        />
                      </Field>
                      <Field label="Email Address" required>
                        <input
                          type="email"
                          placeholder="you@example.com"
                          value={form.email}
                          onChange={handleChange('email')}
                          required
                          style={styles.input}
                        />
                      </Field>
                      <Field label="Phone Number">
                        <input
                          type="tel"
                          placeholder="(xxx) xxx-xxxx"
                          value={form.phone}
                          onChange={handleChange('phone')}
                          style={styles.input}
                        />
                      </Field>
                      <button type="submit" className="btn-primary" style={styles.submitBtn}>
                        Continue
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </button>
                    </motion.form>
                  )}

                  {/* Step 2 */}
                  {step === 2 && (
                    <motion.form
                      key="step2"
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -16 }}
                      transition={{ duration: 0.3 }}
                      onSubmit={handleSubmit}
                      style={styles.form}
                    >
                      <Field label="Property Address">
                        <input
                          type="text"
                          placeholder="123 Estate Drive, Newport Beach, CA"
                          value={form.address}
                          onChange={handleChange('address')}
                          style={styles.input}
                        />
                      </Field>
                      <Field label="Estimated Home Value">
                        <select
                          value={form.homeValue}
                          onChange={handleChange('homeValue')}
                          style={{ ...styles.input, ...styles.select }}
                        >
                          <option value="">Select range</option>
                          <option value="2-5m">$2M – $5M</option>
                          <option value="5-10m">$5M – $10M</option>
                          <option value="10-20m">$10M – $20M</option>
                          <option value="20m+">$20M+</option>
                        </select>
                      </Field>
                      <Field label="Service Interest">
                        <select
                          value={form.service}
                          onChange={handleChange('service')}
                          style={{ ...styles.input, ...styles.select }}
                        >
                          <option value="">Select service</option>
                          {SERVICES.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </Field>
                      <Field label="Additional Notes">
                        <textarea
                          placeholder="Describe your vision, architectural style, HOA requirements…"
                          value={form.message}
                          onChange={handleChange('message')}
                          rows={3}
                          style={{ ...styles.input, resize: 'vertical', minHeight: '80px' }}
                        />
                      </Field>
                      <div style={styles.step2Actions}>
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="btn-secondary"
                          style={styles.backBtn}
                        >
                          Back
                        </button>
                        <button type="submit" className="btn-primary" style={styles.submitBtn}>
                          Submit Request
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </motion.form>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

function Field({ label, required, children }) {
  return (
    <div style={fieldStyles.wrapper}>
      <label style={fieldStyles.label}>
        {label}
        {required && <span style={fieldStyles.required}> *</span>}
      </label>
      {children}
    </div>
  )
}

const fieldStyles = {
  wrapper: { display: 'flex', flexDirection: 'column', gap: '6px' },
  label: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '0.62rem',
    fontWeight: '600',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    color: '#888888',
  },
  required: { color: '#FFB200' },
}

const styles = {
  backdrop: {
    position: 'fixed',
    inset: 0,
    background: 'rgba(0,0,0,0.85)',
    backdropFilter: 'blur(4px)',
    zIndex: 200,
  },
  modal: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 201,
    background: '#111111',
    border: '1px solid rgba(255,178,0,0.2)',
    width: '90vw',
    maxWidth: '520px',
    maxHeight: '90vh',
    overflowY: 'auto',
    padding: '48px',
  },
  closeBtn: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    background: 'none',
    border: '1px solid rgba(255,255,255,0.08)',
    color: '#888888',
    width: '36px',
    height: '36px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'color 200ms, border-color 200ms',
  },
  header: {
    marginBottom: '32px',
  },
  headerTop: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '16px',
  },
  stepIndicator: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  },
  stepDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    transition: 'background 300ms',
  },
  stepLine: {
    width: '24px',
    height: '2px',
    transition: 'background 300ms',
  },
  stepLabel: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '0.6rem',
    fontWeight: '500',
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color: '#555555',
  },
  modalTitle: {
    marginBottom: '8px',
    color: '#FFFFFF',
  },
  modalSubtitle: {
    fontSize: '0.85rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  input: {
    background: '#161616',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 0,
    color: '#FFFFFF',
    fontFamily: "'Poppins', sans-serif",
    fontSize: '0.9rem',
    fontWeight: '300',
    padding: '12px 16px',
    width: '100%',
    outline: 'none',
    transition: 'border-color 200ms',
    appearance: 'none',
  },
  select: {
    cursor: 'pointer',
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23888888' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 14px center',
    paddingRight: '40px',
  },
  submitBtn: {
    width: '100%',
    justifyContent: 'center',
    padding: '16px 24px',
    marginTop: '8px',
  },
  step2Actions: {
    display: 'flex',
    gap: '12px',
    marginTop: '8px',
  },
  backBtn: {
    padding: '15px 24px',
    flexShrink: 0,
  },
  successState: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '16px',
    padding: '16px 0',
  },
  successIcon: {
    width: '64px',
    height: '64px',
    background: 'rgba(255,178,0,0.08)',
    border: '1px solid rgba(255,178,0,0.25)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '8px',
  },
  successTitle: {
    color: '#FFFFFF',
  },
  successBody: {
    maxWidth: '400px',
    lineHeight: '1.75',
  },
  successContact: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: '0.8rem',
    color: '#555555',
    fontWeight: '300',
  },
  successPhone: {
    color: '#FFB200',
    textDecoration: 'none',
    fontWeight: '500',
  },
}
