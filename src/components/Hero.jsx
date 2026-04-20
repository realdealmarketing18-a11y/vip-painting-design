import { useState } from 'react';
import { motion } from 'framer-motion';

const HERO_VIDEO_THUMBNAIL = 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000&auto=format&fit=crop'; 
const COUPLE_AVATAR = 'https://images.unsplash.com/photo-1590650046522-6b3f7f892a2a?q=80&w=200&auto=format&fit=crop'; // Premium couple placeholder

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 15 },
  animate:    { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero({ onBookClick }) {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <>
      <section style={styles.hero}>
        <div className="container" style={styles.inner}>
          
          {/* 1. Story Headline (Smaller to fit screen) */}
          <motion.div {...fadeUp(0.1)} style={styles.headlineWrapper}>
            <p className="overline" style={{ color: '#e8833a', marginBottom: '8px' }}>VIP Premier Experience</p>
            <h1 className="headline" style={styles.headlineText}>
              The Bridges homeowners Douglas & Sheri saved $1,000's by <em className="headline-accent">previewing their colors</em>.
            </h1>
            <div style={{...styles.profileBox, margin: '24px auto 0 auto', width: 'fit-content'}}>
              <img src={COUPLE_AVATAR} alt="Douglas and Sheri" style={styles.avatarImg} />
              <div style={styles.profileText}>
                <span style={styles.profileName}>Douglas & Sheri</span>
                <span style={styles.profileLocation}>Rancho Cucamonga Homeowners</span>
              </div>
            </div>
          </motion.div>

          {/* 2. Story-telling Video Below (Constrained max height to fit viewport) */}
          <motion.div {...fadeUp(0.2)} style={styles.videoWrapper}>
            <div style={styles.videoCard}>
              <img src={HERO_VIDEO_THUMBNAIL} alt="Douglas & Sheri transformation story" style={styles.videoThumbnail} />
              <div style={styles.videoOverlay} />
              <button style={styles.playBtn} onClick={() => setVideoOpen(true)}>
                <div style={styles.playCircle}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#FFFFFF">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
              </button>
            </div>
          </motion.div>

          {/* 3. Underneath Sub Headline */}
          <motion.div {...fadeUp(0.3)} style={styles.subHeadlineWrapper}>
            <h2 className="headline" style={styles.subheadlineText}>
              "We saw the finished room before a single can was opened."
            </h2>
          </motion.div>

          {/* 4. Underneath the CTA Button */}
          <motion.div {...fadeUp(0.4)} style={styles.ctaWrapper}>
            <button className="btn-primary" onClick={onBookClick} style={{ padding: '16px 40px', fontSize: '0.85rem' }}>
              Start Your Free Visualization
            </button>
          </motion.div>

          {/* 5. Banner Underneath (Icons) */}
          <motion.div {...fadeUp(0.5)} style={styles.bannerWrapper}>
            <div style={styles.bannerItem}>
              <div style={styles.prestigeIconBox}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e8833a" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
              </div>
              <div style={styles.bannerTextCol}>
                <strong style={styles.bannerBold}>Custom Color Scheme</strong>
                <span style={styles.bannerSub}>Over 20 Visualizations Included</span>
              </div>
            </div>

            <div style={styles.bannerDivider} />

            <div style={styles.bannerItem}>
              <div style={styles.prestigeIconBox}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e8833a" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" /></svg>
              </div>
              <div style={styles.bannerTextCol}>
                <strong style={styles.bannerBold}>1-Year Warranty</strong>
                <span style={styles.bannerSub}>5-Star Rated Craftsmanship</span>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── Video Modal ── */}
      {videoOpen && (
        <div style={styles.modalBackdrop} onClick={() => setVideoOpen(false)}>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} style={styles.modalInner} onClick={(e) => e.stopPropagation()}>
            <button style={styles.modalClose} onClick={() => setVideoOpen(false)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
            </button>
            <div style={styles.videoEmbed}>
              <img src={HERO_VIDEO_THUMBNAIL} alt="Transformation video" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(26,31,78,0.8)' }}>
                <p className="overline" style={{ color: '#FFFFFF' }}>Video Player Embedded Here</p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}

const styles = {
  hero: {
    paddingTop: '96px', // Reduced from 160px
    paddingBottom: '32px', // Reduced from 80px
    background: '#F8F7F4', 
    textAlign: 'center',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inner: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '900px', // Constrain width so elements don't get too tall
  },
  headlineWrapper: {
    marginBottom: '16px',
    padding: '0 20px',
  },
  headlineText: {
    color: '#1a1f4e',
    margin: '0 auto',
    maxWidth: '800px',
    fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', // Scaled down aggressively so it fits
    lineHeight: '1.2',
  },
  videoWrapper: {
    width: '100%',
    maxWidth: '760px', // Prevent massive video box
    height: 'auto',
    marginBottom: '24px',
  },
  videoCard: {
    position: 'relative',
    width: '100%',
    aspectRatio: '16/7', // Wider, shorter aspect ratio to fit the screen vertically
    background: '#1a1f4e',
    boxShadow: '0 8px 32px rgba(26,31,78,0.1)',
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
    background: 'linear-gradient(to right, rgba(26,31,78,0.5) 0%, rgba(26,31,78,0.1) 100%)',
  },
  playBtn: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
    transition: 'transform 200ms',
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
  subHeadlineWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '24px',
    padding: '0 20px',
  },
  profileBox: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    background: '#FFFFFF',
    padding: '8px 16px',
    borderRadius: '40px',
    border: '1px solid rgba(26,31,78,0.05)',
    boxShadow: '0 4px 12px rgba(26,31,78,0.03)',
  },
  avatarImg: {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    objectFit: 'cover',
  },
  profileText: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
  },
  profileName: {
    fontFamily: "var(--font-headline)",
    fontSize: '0.95rem',
    fontWeight: '600',
    color: '#1a1f4e',
    lineHeight: 1.1,
  },
  profileLocation: {
    fontFamily: "var(--font-body)",
    fontSize: '0.65rem',
    fontWeight: '600',
    color: '#8c8c8c',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  subheadlineText: {
    color: '#1a1f4e', 
    fontStyle: 'italic', 
    fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
    maxWidth: '600px',
  },
  ctaWrapper: {
    marginBottom: '32px',
  },
  bannerWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '24px',
    background: '#FFFFFF',
    border: '1px solid rgba(26,31,78,0.06)',
    padding: '16px 32px',
    boxShadow: '0 8px 16px rgba(26,31,78,0.03)',
    flexWrap: 'wrap',
  },
  bannerItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  prestigeIconBox: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: 'rgba(232,131,58,0.08)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bannerTextCol: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
  },
  bannerBold: {
    fontFamily: "var(--font-headline)",
    fontSize: '1.05rem',
    color: '#1a1f4e',
    lineHeight: 1.2,
  },
  bannerSub: {
    fontFamily: "var(--font-body)",
    fontSize: '0.7rem',
    color: '#8c8c8c',
  },
  bannerDivider: {
    width: '1px',
    height: '32px',
    background: 'rgba(26,31,78,0.1)',
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
    maxWidth: '1000px',
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
  videoEmbed: {
    position: 'relative',
    width: '100%',
    aspectRatio: '16/9',
  },
};
