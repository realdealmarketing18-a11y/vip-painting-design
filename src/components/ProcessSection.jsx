import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const SERVICES = [
  { 
    id: 'exterior', 
    overline: 'EXTERIOR',
    title: 'Exterior Painting', 
    body: 'Revamp your The Bridges home\'s curb appeal. Stucco repair, trim, and weather-proof finishes.', 
    videoPlaceholder: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=600&auto=format&fit=crop',
    icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>) 
  },
  { 
    id: 'interior', 
    overline: 'INTERIOR',
    title: 'Interior Painting', 
    body: 'Transform dull interiors into vibrant, welcoming spaces. Flawless walls and precise trim.', 
    videoPlaceholder: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop',
    icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>) 
  },
  { 
    id: 'cabinets', 
    overline: 'CABINETS',
    title: 'Kitchen Cabinets', 
    body: 'Cabinet refinishing that transforms your kitchen without the cost of a full renovation.', 
    videoPlaceholder: 'https://images.unsplash.com/photo-1556910103-1c02745a8728?q=80&w=600&auto=format&fit=crop',
    icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="4" y="4" width="16" height="16" rx="2" ry="2" /><rect x="4" y="4" width="16" height="8" /><line x1="12" y1="12" x2="12" y2="20" /><line x1="8" y1="16" x2="8" y2="16" /><line x1="16" y1="16" x2="16" y2="16" /></svg>) 
  },
];

export default function ProcessSection({ onBookClick }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  
  return (
    <section ref={ref} id="services" className="section" style={styles.section}>
      <div className="container">
        
        <div style={styles.grid}>
          {SERVICES.map((service, i) => (
            <motion.div 
              key={service.id} 
              initial={{ opacity: 0, y: 40 }} 
              animate={inView ? { opacity: 1, y: 0 } : {}} 
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }} 
              style={styles.card}
            >
              <div style={styles.cardTop}>
                <div style={styles.iconBox}>{service.icon}</div>
              </div>
              <span className="overline" style={{ display: 'block', marginBottom: '8px' }}>{service.overline}</span>
              <h3 className="headline headline-md" style={styles.cardTitle}>{service.title}</h3>
              <p className="body-text" style={styles.cardBody}>{service.body}</p>
              
              <div style={styles.videoBox}>
                <img src={service.videoPlaceholder} alt={`${service.title} Before and After Story`} style={styles.videoImg} />
                <div style={styles.videoOverlay} />
                <div style={styles.playIconBox}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#FFFFFF">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
                <div style={{ position: 'absolute', bottom: '12px', left: '16px', zIndex: 3 }}>
                  <span className="overline" style={{ color: '#FFFFFF' }}>Before & After Video</span>
                </div>
              </div>

              <button style={styles.textLink} onClick={onBookClick}>LEARN MORE</button>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}

const styles = {
  section: { 
    background: '#F8F7F4', // Match the rest of the flow
    paddingTop: 0,
  },
  grid: { 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
    gap: '32px', 
  },
  card: { 
    background: '#FFFFFF', 
    padding: '48px 40px', 
    display: 'flex', 
    flexDirection: 'column',
    border: '1px solid rgba(26,31,78,0.05)',
    boxShadow: '0 8px 24px rgba(26,31,78,0.02)',
  },
  cardTop: { 
    display: 'flex', 
    justifyContent: 'flex-start', 
    alignItems: 'center', 
    marginBottom: '32px' 
  },
  iconBox: { 
    width: '64px', 
    height: '64px', 
    background: '#FFFFFF', 
    border: '1px solid rgba(232,131,58,0.3)', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    color: '#e8833a',
    boxShadow: '0 8px 24px rgba(232,131,58,0.1)'
  },
  cardTitle: { 
    marginBottom: '16px', 
    color: '#1a1f4e' 
  },
  cardBody: { 
    lineHeight: '1.75',
    marginBottom: '24px',
  },
  videoBox: {
    position: 'relative',
    width: '100%',
    aspectRatio: '16/9',
    marginBottom: '32px',
    cursor: 'pointer',
    borderRadius: '4px',
    overflow: 'hidden',
  },
  videoImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  videoOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to top, rgba(26,31,78,0.8) 0%, rgba(26,31,78,0.2) 50%)',
    zIndex: 1,
  },
  playIconBox: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    background: '#e8833a',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: '4px',
    boxShadow: '0 4px 16px rgba(232,131,58,0.4)',
    zIndex: 2,
    transition: 'transform 200ms',
  },
  textLink: { 
    background: 'none',
    border: 'none',
    borderBottom: '1px solid #e8833a',
    paddingBottom: '2px',
    fontFamily: "var(--font-body)",
    fontSize: '0.8rem',
    fontWeight: '600',
    color: '#1a1f4e',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    cursor: 'pointer',
    alignSelf: 'flex-start',
  },
};
