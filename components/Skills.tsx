import styles from './Skills.module.css'

const skills = [
  {
    num: '01',
    cat: 'FRONT-END',
    name: 'Front-end Development',
    tags: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Responsive Design'],
  },
  {
    num: '02',
    cat: 'UI LIBRARIES',
    name: 'UI Frameworks & Libraries',
    tags: ['Ant Design', 'Styled Components', 'Shopify Polaris', 'Formik', 'Yup', 'Zustand'],
  },
  {
    num: '03',
    cat: 'BACK-END',
    name: 'Back-end Development',
    tags: ['Node.js', 'Express.js', 'REST API', 'API Integration', 'Auth Flow'],
  },
  {
    num: '04',
    cat: 'TOOLS',
    name: 'Database & Dev Tools',
    tags: ['SQL', 'Supabase', 'Git', 'GitHub', 'Postman', 'Jira', 'Scrum'],
  },
  {
    num: '05',
    cat: 'PROFESSIONAL',
    name: 'Soft Skills',
    tags: ['Requirement Analysis', 'System Design', 'Debugging', 'Code Review', 'Agile'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <p className={styles.tag}>// CORE SKILLS</p>
      <h2 className={styles.title}>What I work with</h2>
      <div className={styles.divider} />

      <div className={styles.grid}>
        {skills.map((s) => (
          <div key={s.num} className={styles.card}>
            <div className={styles.cat}>{s.num} / {s.cat}</div>
            <div className={styles.name}>{s.name}</div>
            <div className={styles.tags}>
              {s.tags.map((t) => (
                <span key={t} className={styles.tag2}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
