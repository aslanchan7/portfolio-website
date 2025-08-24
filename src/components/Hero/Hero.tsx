import React from 'react'
import styles from './Hero.module.css'

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Aslan</h1>
        <p className={styles.description}>
          I'm a game developer and frontend developer currently studying at UC San Diego.
          Please check out some of my projects below!
        </p>
        <a href='mailto:aslanchan7@gmail.com' className={styles.contactButton}>Contact Me</a>
      </div>

      <div className={styles.avatarContainer}>
        <img src={'/assets/hero/avatar.jpg'} alt="Hero image of me" className={styles.avatar}/>
      </div>
      
      <div className={styles.topBlur}/>
      <div className={styles.bottomBlur}/>
    </section>
  )
}
