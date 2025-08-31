import React from 'react'
import styles from "./Contact.module.css"

export const Contact = () => {
  return (
    <section id='contact' className={styles.container}>
      <div className={styles.content}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>
            Contact
          </h2>
          
          <h3 className={styles.subtitle}>
            Feel free to reach out!
          </h3>
        </div>

        <div className={styles.contactsContainer}>
          <div>
            <img src='/assets/contact/mail-icon.png'/>
            <p>aslanchan7@<wbr></wbr>gmail.com</p>
          </div>
          
          <div>
            <img src='/assets/contact/linkedin-icon.png'/>
            <p>linkedin.com/in/<wbr></wbr>aslan-chan-09527b297/</p>
          </div>

          <div>
            <img src='/assets/contact/github-icon.png'/>
            <p>github.com/<wbr></wbr>aslanchan7</p>
          </div>
        </div>
      </div>
    </section>
  )
}
