import React, {useState} from 'react'
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles.title}>Aslan Chan</a>
      <div className={styles.menu}>
        <img 
          className={styles.menuIcon} 
          src={
            menuOpen 
            ? '/assets/nav/closeIcon.png' 
            : '/assets/nav/menuIcon.png' 
          } 
          alt='menu-icon'
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul 
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} 
          onClick={() => setMenuOpen(false)}
        >
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}
