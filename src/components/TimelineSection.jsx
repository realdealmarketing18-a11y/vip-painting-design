import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/* ── Phase Card — slides in when scrolled into view ── */
function PhaseCard({ number, title, body, tag, fromLeft }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, x: fromLeft ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      style={styles.card}
    >
      <div style={styles.cardHeader}>
        <span style={styles.cardNum}>{number}</span>
        <div>
          <span className="overline">{tag}</span>
          <h3 className="headline headline-md" style={{ marginTop: '8px', color: '#1a1f4e' }}>{title}</h3>
        </div>
      </div>
      <div style={styles.phaseContent}>
        <p className="body-text">{body}</p>
      </div>
    </motion.div>
  );
}

/* ── Main Section ── */
export default function TimelineSection() {
  const sectionRef = useRef(null);

  return (
    <section ref={sectionRef} id="process" className="section" style={styles.section}>
      <div className="container">
        
        <div style={styles.timelineWrap}>
          <div style={styles.track} />

          {/* Phase 01 */}
          <PhaseCard 
            number="01" 
            title="Personalized Color Consultation" 
            tag="Phase 01" 
            fromLeft={true}
            body="We start by understanding your vision — the colors, mood, and look you want for your The Bridges home."
          />

          <div style={styles.gap} />

          {/* Phase 02 */}
          <PhaseCard 
            number="02" 
            title="Customized Visualizations" 
            tag="Phase 02" 
            fromLeft={false}
            body="We create detailed visualizations in 30 minutes, showing how different color schemes will transform your home."
          />

          <div style={styles.gap} />

          {/* Phase 03 */}
          <PhaseCard 
            number="03" 
            title="Irresistible Estimate" 
            tag="Phase 03" 
            fromLeft={true}
            body="Receive a competitive, detailed estimate tailored to bring your dream home to life without compromising quality."
          />
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    background: '#F8F7F4', 
    paddingTop: '0', // Pulls closer to Strategy section
  },
  timelineWrap: {
    position: 'relative',
    paddingLeft: '64px',
    maxWidth: '1000px',
    margin: '0 auto',
  },
  track: {
    position: 'absolute',
    left: '24px',
    top: '0',
    bottom: '0',
    width: '2px',
    background: 'linear-gradient(to bottom, rgba(232,131,58,0.8), rgba(232,131,58,0.1))',
  },
  card: {
    background: '#FFFFFF',
    border: '1px solid rgba(26,31,78,0.05)',
    boxShadow: '0 8px 32px rgba(26,31,78,0.03)',
    padding: '48px 64px',
    position: 'relative',
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '32px',
    marginBottom: '24px'
  },
  cardNum: {
    fontFamily: "var(--font-headline)",
    fontSize: '4.5rem',
    fontWeight: '300',
    color: 'rgba(232,131,58,0.15)',
    lineHeight: 0.85,
    marginTop: '8px',
  },
  phaseContent: {
    maxWidth: '700px',
  },
  gap: {
    height: '48px',
  },
};
