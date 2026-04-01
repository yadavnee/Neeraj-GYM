import styles from "./page.module.css";
import Link from 'next/link';
import Hero3D from '../components/Hero3D';

export default function Home() {
  return (
    <div className={styles.container}>
      {/* 3D Background Canvas Placeholder */}
      <div className={styles.canvasContainer}>
        <Hero3D />
      </div>

      <main className={styles.main}>
        <section className={styles.hero}>
          <h2 className={styles.heroSub}>WELCOME TO THE FUTURE OF FITNESS</h2>
          <h1 className={styles.heroTitle}>
            ELEVATE YOUR <br />
            <span className="text-glow-red" style={{ color: 'var(--accent-neon-red)' }}>PERFORMANCE</span>
          </h1>
          <p className={styles.heroDesc}>
            Join the most elite fitness brand with Gen-Z aesthetics, cutting-edge AI workout planners, and immersive 3D equipment tracking.
          </p>
          <div className={styles.heroActions}>
            <button className="btn-primary">START FREE TRIAL</button>
            <button className="btn-outline">EXPLORE AI PLANS</button>
          </div>
          
          <div className={styles.statsContainer}>
            <div className={`glass-panel ${styles.statBox}`}>
              <h3>10K+</h3>
              <p>Active Members</p>
            </div>
            <div className={`glass-panel ${styles.statBox}`}>
              <h3>50+</h3>
              <p>Elite Trainers</p>
            </div>
            <div className={`glass-panel ${styles.statBox}`}>
              <h3>1M+</h3>
              <p>Calories Burned</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
