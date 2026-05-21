import styles from './Contact.module.css'

const contacts = [
  { icon: '📱', label: 'PHONE',    value: '080-895-4245' },
  { icon: '✉️', label: 'EMAIL',    value: 'artdeath553@gmail.com' },
  { icon: '💬', label: 'LINE',     value: 'art-za132' },
  { icon: '📘', label: 'FACEBOOK', value: 'https://www.facebook.com/assadavoot.anukool' },
  { icon: '📍', label: 'LOCATION', value: 'Min buri / Bankok, Thailand' },
]

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <p className={styles.tag}>// CONTACT</p>
      <h2 className={styles.title}>Get in touch</h2>
      <div className={styles.divider} />

      <div className={styles.grid}>
        {contacts.map((c) => (
          <div key={c.label} className={styles.item}>
            <div className={styles.icon}>{c.icon}</div>
            <div>
              <div className={styles.label}>{c.label}</div>
              <div className={styles.value}>{c.value}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
