// import React from 'react'
import styles from './About.module.css'

export const About = () => {
  return (
    <section className={styles.container} id='about'>
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img 
          src='/assets/about/aboutImage.png' 
          className={styles.aboutImage}
        />

        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src='/assets/about/cursorIcon.png'/>
            <div className={styles.aboutItemText}>
              <h3>Game Developer</h3>
              <p>I have experience working in small and large teams to create over half a dozen games</p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src='/assets/about/serverIcon.png'/>
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>I'm a front-end developer with experience in building responsive and optimized sites</p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src='/assets/about/uiIcon.png'/>
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>I have designed multiple landing pages and have created design systems as well</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}
