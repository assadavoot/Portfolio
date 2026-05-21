import styles from './Education.module.css'

export default function Education() {
  return (
    <section id="education" className={styles.section}>
      <p className={styles.tag}>// EDUCATION</p>
      <h2 className={styles.title}>Academic background</h2>
      <div className={styles.divider} />

      <div className={styles.card}>
        <div className={styles.icon}>🎓</div>
        <div>
          <div className={styles.degree}>Bachelor in Computer Engineering</div>
          <div className={styles.school}>Mahanakorn University of Technology</div>
          <div className={styles.year}>2013 – 2017</div>
        </div>
      </div>
    </section>
  )
}
