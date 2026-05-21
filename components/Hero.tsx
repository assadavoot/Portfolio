import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.text}>
        <div className={styles.badge}>AVAILABLE FOR SENIOR FRONT END DEVELOPER / FULL STACK DEVELOPER </div>

        <h1 className={styles.heading}>
          Assadavoot<br />
          <span className={styles.accent}>Anukool</span>
        </h1>

        <p className={styles.subtitle}>
          Front-end Developer / Full Stack Developer crafting web apps,
          back-office systems, CRM &amp; loyalty platforms with React.js,
          Next.js, TypeScript &amp; Node.js.
        </p>

        <div className={styles.cta}>
          <a href="#contact" className={`${styles.btn} ${styles.btnPrimary}`}>
            GET IN TOUCH
          </a>
          <a href="#experience" className={`${styles.btn} ${styles.btnGhost}`}>
            VIEW WORK
          </a>
        </div>

        <div className={styles.stats}>
          <div>
            <div className={styles.statNum}>
              8<span className={styles.statUnit}>yrs</span>
            </div>
            <div className={styles.statLabel}>EXPERIENCE</div>
          </div>
          <div>
            <div className={styles.statNum}>3</div>
            <div className={styles.statLabel}>COMPANIES</div>
          </div>
          <div>
            <div className={styles.statNum}>∞</div>
            <div className={styles.statLabel}>COMPONENTS</div>
          </div>
        </div>
      </div>
    </section>
  )
}
