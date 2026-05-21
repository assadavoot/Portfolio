'use client'

import styles from './Navbar.module.css'

const links = [
  { href: '#skills',     label: 'Skills'     },
  { href: '#experience', label: 'Experience' },
  { href: '#education',  label: 'Education'  },
  { href: '#contact',    label: 'Contact'    },
]

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>// ART.DEV</div>
      <ul className={styles.links}>
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} className={styles.link}>{l.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
