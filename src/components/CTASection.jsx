import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function CTASection({ onBookClick }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} id="contact" className="section" style={styles.section}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          animate={inView ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} 
          style={styles.card}
        >
          <div style={styles.imageBox}>
            <img 
              src="https://images.unsplash.com/photo-1613564175376-857e4e1de196?q=80&w=1200&auto=format&fit=crop" 
              alt="Luxury Painting Process" 
              style={styles.image} 
            />
          </div>
          <div style={styles.content}>
            <h2 className="headline headline-lg" style={{ marginBottom: '24px', color: '#1a1f4e' }}>
              Every Project Begins<br />
              <em className="headline-accent">With A Conversation.</em>
            </h2>
            <p className="body-text" style={{ maxWidth: '600px', marginBottom: '16px' }}>
              Currently accepting The Bridges visualization slots — limited availability this month.
            </p>
            <p className="body-text" style={{ maxWidth: '600px', marginBottom: '48px' }}>
              Elevating The Bridges, Rancho Cucamonga homes with professional craftsmanship and royal service standards.
            </p>
            <div style={styles.actions}>
              <button className="btn-primary" onClick={onBookClick}>
                Book Consultation
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              <a href="tel:9093125400" className="btn-secondary">
                (909) 312-5400
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    background: '#F8F7F4', // Cream
    paddingBottom: '160px',
  },
  card: {
    background: '#FFFFFF',
    border: '1px solid rgba(26,31,78,0.1)',
    boxShadow: '0 16px 48px rgba(26,31,78,0.06)',
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
    gap: '0',
    overflow: 'hidden',
  },
  content: {
    padding: '80px 64px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    background: '#FFFFFF',
  },
  actions: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
  },
  imageBox: {
    position: 'relative',
    height: '100%',
    minHeight: '400px',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
};
