export default function Footer({ onBookClick }) {
  const year = new Date().getFullYear()

  return (
    <footer style={styles.footer}>
      <div className="container">
        <div style={styles.grid}>
          {/* Brand column */}
          <div style={styles.brandCol}>
            <a href="/" style={styles.logo}>
              VIP<span style={styles.logoAccent}> Premier</span> Painting
            </a>
            <p style={styles.tagline}>See It. Love It. Paint It.</p>
            <p style={styles.brandDesc}>
              Southern California's foremost luxury exterior painting specialist.
              Serving estates from $2M to $20M across the Inland Empire,
              Orange County, and greater Los Angeles.
            </p>
            <div style={styles.socialRow}>
              {['Houzz', 'Yelp', 'Google'].map((platform) => (
                <span key={platform} style={styles.socialChip}>{platform}</span>
              ))}
            </div>
          </div>

          {/* Services */}
          <div style={styles.linkCol}>
            <p style={styles.colHeader}>Services</p>
            {[
              'Exterior Painting',
              'Interior Painting',
              'Custom Visualization Service',
              'Trim & Accent Detailing',
              'Estate Color Consultation',
              'VIP Concierge Program',
            ].map((item) => (
              <a key={item} href="#" style={styles.link}>{item}</a>
            ))}
          </div>

          {/* Communities */}
          <div style={styles.linkCol}>
            <p style={styles.colHeader}>Communities</p>
            {[
              'Newport Beach',
              'Irvine',
              'Rancho Cucamonga',
              'Corona',
              'Riverside',
              'Fontana',
            ].map((city) => (
              <a key={city} href={`/painting/${city.toLowerCase().replace(' ', '-')}`} style={styles.link}>{city}</a>
            ))}
          </div>

          {/* Contact */}
          <div style={styles.contactCol}>
            <p style={styles.colHeader}>Contact</p>
            <a href="tel:9093125400" style={styles.contactPhone}>(909) 312-5400</a>
            <a href="mailto:Contact@VIPHomePainting.com" style={styles.contactEmail}>
              Contact@VIPHomePainting.com
            </a>
            <a href="https://viphomepainting.com" style={styles.contactWeb}>
              viphomepainting.com
            </a>
            <button className="btn-primary" onClick={onBookClick} style={styles.footerCTA}>
              Free Visualization
            </button>
          </div>
        </div>

        <div style={styles.bottom}>
          <p style={styles.copyright}>
            © {year} VIP Premier Painting. All rights reserved.
            Licensed Painting Contractor — State of California.
          </p>
          <div style={styles.bottomLinks}>
            {['Privacy Policy', 'Terms of Service', 'Licensing'].map((item) => (
              <a key={item} href="#" style={styles.bottomLink}>{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

const styles = {
  footer: {
    background: '#1a1f4e',
    borderTop: 'none',
    paddingTop: '80px',
    paddingBottom: '40px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1.5fr 1fr 1fr 1fr',
    gap: '48px',
    paddingBottom: '64px',
    borderBottom: '1px solid rgba(255,255,255,0.08)',
  },
  brandCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  logo: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '1.3rem',
    fontWeight: '500',
    color: '#FFFFFF',
    textDecoration: 'none',
    letterSpacing: '0.05em',
  },
  logoAccent: {
    color: '#e8833a',
  },
  tagline: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '0.65rem',
    fontWeight: '600',
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    color: '#e8833a',
  },
  brandDesc: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: '0.8rem',
    color: 'rgba(255,255,255,0.45)',
    fontWeight: '300',
    lineHeight: '1.7',
  },
  socialRow: {
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap',
    marginTop: '8px',
  },
  socialChip: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '0.55rem',
    fontWeight: '600',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.4)',
    border: '1px solid rgba(255,255,255,0.12)',
    padding: '4px 10px',
  },
  linkCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  colHeader: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '0.62rem',
    fontWeight: '600',
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    color: '#FFFFFF',
    marginBottom: '4px',
  },
  link: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: '0.82rem',
    color: 'rgba(255,255,255,0.45)',
    textDecoration: 'none',
    fontWeight: '300',
    transition: 'color 200ms',
    lineHeight: '1.4',
  },
  contactCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  contactPhone: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '1rem',
    fontWeight: '600',
    color: '#e8833a',
    textDecoration: 'none',
    letterSpacing: '0.05em',
  },
  contactEmail: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: '0.78rem',
    color: 'rgba(255,255,255,0.45)',
    textDecoration: 'none',
    fontWeight: '300',
    transition: 'color 200ms',
    wordBreak: 'break-all',
  },
  contactWeb: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: '0.78rem',
    color: 'rgba(255,255,255,0.45)',
    textDecoration: 'none',
    fontWeight: '300',
    transition: 'color 200ms',
  },
  footerCTA: {
    padding: '12px 24px',
    fontSize: '0.65rem',
    marginTop: '8px',
  },
  bottom: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '16px',
    paddingTop: '32px',
  },
  copyright: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: '0.7rem',
    color: 'rgba(255,255,255,0.25)',
    fontWeight: '300',
  },
  bottomLinks: {
    display: 'flex',
    gap: '24px',
  },
  bottomLink: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: '0.7rem',
    color: 'rgba(255,255,255,0.25)',
    textDecoration: 'none',
    fontWeight: '300',
    transition: 'color 200ms',
  },
}
