import styles from './Experience.module.css'

const jobs = [
  {
    period: 'MAY 2023 – PRESENT',
    role: 'Research & Development / Front-end Developer',
    company: 'ROCKET INNOVATION CO., LTD.',
    points: [
      'Developed and maintained front-end apps for loyalty points and CRM systems',
      'Built back-office features: margin settings, dashboards, transaction reports, reward configs',
      'Developed customer-facing redemption flows for products, discounts, and rewards',
      'Integrated apps with internal APIs and external platform services',
      'Created reusable UI components to improve consistency and development speed',
    ],
  },
  {
    period: 'MARCH 2020 – MAY 2023',
    role: 'Programmer and Developer',
    company: 'NATACHAT COMPANY LIMITED',
    points: [
      'Developed web app pages from UX/UI requirements using React.js and Next.js',
      'Integrated front-end applications with REST APIs based on technical specs',
      'Developed Node.js APIs to support front-end functionality',
      'Collaborated with PMs, SAs, and testers before customer delivery',
      'Fixed bugs, improved features, and supported production issues',
    ],
  },
  {
    period: 'SEPTEMBER 2018 – JANUARY 2020',
    role: 'Programmer and Developer',
    company: 'JMT NETWORK SERVICES PUBLIC CO., LTD.',
    points: [
      'Collected business requirements and translated them into system features',
      'Designed database structures for internal applications',
      'Developed and maintained internal web applications',
      'Supported issue resolution and improved operational workflows',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <p className={styles.tag}>// EXPERIENCE</p>
      <h2 className={styles.title}>Where I&apos;ve worked</h2>
      <div className={styles.divider} />

      <div className={styles.list}>
        {jobs.map((job) => (
          <div key={job.period} className={styles.item}>
            <div className={styles.period}>{job.period}</div>
            <div className={styles.role}>{job.role}</div>
            <div className={styles.company}>{job.company}</div>
            <ul className={styles.points}>
              {job.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
