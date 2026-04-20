import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const REVIEWS = [
  { 
    text: '"Eliminates the anxiety completely. They created a digital twin of our home and we got to explore colors over the weekend. The actual finish is spectacular."', 
    author: 'David Chen', location: 'Rancho Cucamonga', rating: 5,
    videoImg: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop'
  },
  { 
    text: '"They completely transformed our geometric modern exterior. The charcoal paint is incredibly crisp and the architectural details pop exactly like the 3D render showed."', 
    author: 'M. Thompson', location: 'The Bridges', rating: 5,
    videoImg: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop'
  },
  { 
    text: '"We saw the finished room before a single can was opened. Seeing the visualization gave us confidence to approve a sophisticated scheme we never would have chosen from a paper swatch."', 
    author: 'Sarah Jenkins', location: 'Rancho Cucamonga', rating: 5,
    videoImg: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop'
  },
];

function StarRating({ count }) {
  return (
    <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
      {[...Array(count)].map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#e8833a" stroke="#e8833a" strokeWidth="2">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section ref={ref} id="testimonials" className="section" style={styles.section}>
      <div className="container" style={styles.inner}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={inView ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} 
          style={styles.header}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <div style={{ width: '40px', height: '2px', background: '#e8833a' }} />
            <span className="overline">Client Outcomes</span>
          </div>
          <h2 className="headline headline-lg" style={{ marginBottom: '24px', color: '#1a1f4e' }}>
            Trusted by the Most<br />
            <em className="headline-accent">Discerning Homeowners.</em>
          </h2>
          <p className="body-text" style={{ maxWidth: '600px', marginBottom: '16px' }}>
            We take pride in making sure every The Bridges client is happy. Backed by our insane warranty. 
            Our skilled painters have the expertise to make your home stunning.
          </p>
          <p className="body-text" style={{ maxWidth: '600px' }}>
            Trusted by homeowners throughout Rancho Cucamonga and surrounding communities.
          </p>
        </motion.div>

        <div style={styles.grid}>
          {REVIEWS.map((review, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.95 }} 
              animate={inView ? { opacity: 1, scale: 1 } : {}} 
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }} 
              style={styles.card}
            >
              <div style={styles.videoBox} onClick={() => setActiveVideo(i)}>
                <img src={review.videoImg} alt={`${review.author} Before and After Story`} style={styles.videoImg} />
                <div style={styles.videoOverlay} />
                <div style={styles.playIconBox}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#FFFFFF">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
                <div style={{ position: 'absolute', bottom: '16px', left: '16px', zIndex: 3 }}>
                  <span className="overline" style={{ color: '#FFFFFF' }}>Watch {review.author}'s Story</span>
                </div>
              </div>

              <div style={styles.cardContent}>
                <StarRating count={review.rating} />
                <p className="body-text" style={styles.text}>{review.text}</p>
                <div style={styles.authorBox}>
                  <span className="headline headline-sm" style={styles.author}>{review.author}</span>
                  <span className="overline" style={styles.location}>{review.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {activeVideo !== null && (
        <div style={styles.modalBackdrop} onClick={() => setActiveVideo(null)}>
          <div style={styles.modalInner} onClick={(e) => e.stopPropagation()}>
            <button style={styles.modalClose} onClick={() => setActiveVideo(null)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
            </button>
            <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9' }}>
               <img src={REVIEWS[activeVideo].videoImg} alt="Story video" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
               <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(26,31,78,0.8)' }}>
                  <p className="overline" style={{ color: '#FFFFFF' }}>Video Player Embedded Here</p>
               </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

const styles = {
  section: { 
    background: '#E8E4DE', // Cream dark
  },
  inner: { 
    display: 'flex', 
    flexDirection: 'column', 
    gap: '64px' 
  },
  header: { 
    maxWidth: '700px' 
  },
  grid: { 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
    gap: '40px' 
  },
  card: { 
    background: '#FFFFFF', 
    border: '1px solid rgba(26,31,78,0.05)', 
    display: 'flex', 
    flexDirection: 'column',
    boxShadow: '0 8px 24px rgba(26,31,78,0.05)',
    overflow: 'hidden',
  },
  videoBox: {
    position: 'relative',
    width: '100%',
    aspectRatio: '16/10',
    cursor: 'pointer',
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
    width: '56px',
    height: '56px',
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
  cardContent: {
    padding: '40px',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  text: { 
    flex: 1, 
    fontSize: '1.05rem', 
    fontStyle: 'italic', 
    lineHeight: '1.8', 
    color: '#595959', 
    marginBottom: '40px' 
  },
  authorBox: { 
    borderTop: '1px solid rgba(26,31,78,0.1)', 
    paddingTop: '24px' 
  },
  author: { 
    display: 'block', 
    marginBottom: '8px',
    color: '#1a1f4e'
  },
  location: { 
    color: '#8c8c8c',
    letterSpacing: '0.15em'
  },
  modalBackdrop: {
    position: 'fixed',
    inset: 0,
    background: 'rgba(26,31,78,0.95)',
    zIndex: 300,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backdropFilter: 'blur(8px)',
  },
  modalInner: {
    position: 'relative',
    width: '90vw',
    maxWidth: '800px',
    background: '#FFFFFF',
  },
  modalClose: {
    position: 'absolute',
    top: '-48px',
    right: '0',
    background: 'none',
    border: 'none',
    color: '#FFFFFF',
    cursor: 'pointer',
    padding: '8px',
  },
};
