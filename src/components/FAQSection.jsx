import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const FAQS = [
  {
    q: 'How much does exterior painting cost in The Bridges?',
    a: 'Exterior painting for homes in The Bridges, Rancho Cucamonga typically ranges from $8,000 to $25,000 depending on home size, surface condition, and color complexity. We provide free detailed estimates after your color consultation.'
  },
  {
    q: 'Do you offer the visualization service for every home?',
    a: 'Yes — that\'s our signature service. Our custom visualization process shows your exact home in 3 premium color schemes before we touch a single brush.'
  },
  {
    q: 'How long does a project take?',
    a: 'Most projects in The Bridges complete in 3–5 days. We work Monday through Saturday to minimize disruption.'
  },
  {
    q: 'Do you know the HOA requirements for The Bridges?',
    a: 'The Bridges in Rancho Cucamonga is one of our primary service areas. We understand the Tuscan, Mediterranean, Spanish Colonial architectural styles and HOA requirements that The Bridges homeowners expect.'
  },
  {
    q: 'Have you painted homes near us in Rancho Cucamonga?',
    a: 'We\'ve transformed homes throughout The Bridges, including on Tournament Lane, Greenfield Drive and near Victoria Gardens.'
  },
  {
    q: 'What quality of paint do you use?',
    a: 'We exclusively use Sherwin-Williams Duration and Emerald — the gold standard for luxury homes. Every job includes our 1-Year Satisfaction Warranty.'
  }
];

export default function FAQSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section ref={ref} id="faq" className="section" style={styles.section}>
      <div className="container" style={styles.inner}>
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }} 
          animate={inView ? { opacity: 1, x: 0 } : {}} 
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} 
          style={styles.colLeft}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <div style={{ width: '40px', height: '2px', background: '#e8833a' }} />
            <span className="overline">Knowledge Base</span>
          </div>
          <h2 className="headline headline-lg" style={{ color: '#1a1f4e', marginBottom: '24px' }}>
            Frequently Asked<br />
            <em className="headline-accent">Questions</em>
          </h2>
          <p className="headline headline-sm" style={{ color: '#595959', fontStyle: 'italic', maxWidth: '400px' }}>
            — The Bridges Painting
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={inView ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }} 
          style={styles.colRight}
        >
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} style={styles.faqItem}>
                <button 
                  style={styles.faqButton} 
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                >
                  <span className="headline headline-sm" style={{ ...styles.qText, color: isOpen ? '#e8833a' : '#1a1f4e' }}>
                    {faq.q}
                  </span>
                  <div style={{ ...styles.iconWrap, background: isOpen ? '#e8833a' : '#F8F7F4' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={isOpen ? "#FFF" : "#e8833a"} strokeWidth="2">
                      {isOpen ? <path d="M5 12h14" /> : <> <path d="M12 5v14" /> <path d="M5 12h14" /> </>}
                    </svg>
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p className="body-text" style={styles.answerText}>
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}

const styles = {
  section: {
    background: '#FFFFFF',
    borderTop: '1px solid rgba(26,31,78,0.05)',
  },
  inner: {
    display: 'grid',
    gridTemplateColumns: '1fr 1.5fr',
    gap: '64px',
    alignItems: 'flex-start',
  },
  '@media (max-width: 900px)': {
    inner: {
      gridTemplateColumns: '1fr',
    }
  },
  colLeft: {
    position: 'sticky',
    top: '120px',
  },
  colRight: {
    display: 'flex',
    flexDirection: 'column',
  },
  faqItem: {
    borderBottom: '1px solid rgba(26,31,78,0.1)',
  },
  faqButton: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'none',
    border: 'none',
    padding: '32px 0',
    cursor: 'pointer',
    textAlign: 'left',
  },
  qText: {
    margin: 0,
    transition: 'color 200ms',
    paddingRight: '32px',
  },
  iconWrap: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    transition: 'background 200ms',
  },
  answerText: {
    paddingBottom: '32px',
    maxWidth: '600px',
  }
};
