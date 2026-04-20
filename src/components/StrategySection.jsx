import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function StrategySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="section" style={styles.section}>
      <div className="container" style={styles.inner}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={styles.card}
        >
          <div style={styles.header}>
            <div style={styles.line} />
            <span className="overline" style={styles.overline}>The Strategy:</span>
          </div>
          
          <h2 className="headline" style={styles.headlineText}>
            "With our Custom Visualization Service, we showed them exactly how their chosen colors would transform their home."
          </h2>
          
          <p className="body-text" style={styles.bodyText}>
            Seeing the visualization gave them confidence to approve a sophisticated scheme they never would have chosen from a paper swatch.
          </p>

          <div style={styles.videoCard}>
            <img src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?q=80&w=1200&auto=format&fit=crop" alt="Homeowner Before and After Story" style={styles.videoThumbnail} />
            <div style={styles.videoOverlay} />
            <div style={styles.playBtn}>
              <div style={styles.playCircle}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#FFFFFF">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </div>
            </div>
            <div style={{ position: 'absolute', bottom: '24px', left: '24px', zIndex: 10, textAlign: 'left' }}>
              <span className="headline headline-sm" style={{ color: '#FFFFFF', display: 'block', marginBottom: '8px' }}>The Bridges Homeowner Story</span>
              <span className="overline" style={{ color: 'rgba(255,255,255,0.8)' }}>Before & After Transformation Video</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '80px 0',
    background: '#F8F7F4', // Continue the Cream background
  },
  inner: {
    display: 'flex',
    justifyContent: 'center',
  },
  card: {
    background: '#FFFFFF',
    border: '1px solid rgba(26,31,78,0.06)',
    boxShadow: '0 16px 48px rgba(26,31,78,0.04)',
    padding: '80px',
    maxWidth: '1000px',
    width: '100%',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '16px',
    marginBottom: '32px',
  },
  line: {
    width: '32px',
    height: '2px',
    background: '#e8833a',
  },
  overline: {
    color: '#e8833a',
    fontSize: '0.85rem',
  },
  headlineText: {
    fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
    color: '#1a1f4e',
    margin: '0 auto 24px auto',
    maxWidth: '800px',
    lineHeight: '1.25',
    fontStyle: 'italic',
  },
  bodyText: {
    fontSize: '1.1rem',
    color: '#595959',
    maxWidth: '600px',
    margin: '0 auto 48px auto',
  },
  videoCard: {
    position: 'relative',
    width: '100%',
    aspectRatio: '16/7',
    background: '#1a1f4e',
    borderRadius: '4px',
    overflow: 'hidden',
  },
  videoThumbnail: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  videoOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to top, rgba(26,31,78,0.8) 0%, rgba(26,31,78,0.2) 60%)',
  },
  playBtn: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 10,
    cursor: 'pointer',
  },
  playCircle: {
    width: '64px',
    height: '64px',
    borderRadius: '50%',
    background: '#e8833a',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: '4px',
    boxShadow: '0 4px 16px rgba(232,131,58,0.4)',
  },
};
