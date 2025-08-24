import skills from '../../data/skills.json'
import history from '../../data/history.json'
import styles from './Experience.module.css'

export const Experience = () => {
  return (
    <section id='experience' className={styles.container}>
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.experienceLayout}>
          {skills.map((skill, id) => {
            return <div key={id} className={styles.experienceItem}>
              <div className={styles.experienceLogo}>
                <img 
                  src={`/assets/experience/${skill.imageSrc}`}
                  alt={`${skill.title}`}
                />
              </div>
              <p className={styles.experienceText}>{`${skill.title}`}</p>
            </div>
          })}
        </div>

        <ul className={styles.historyList}>
          {history.map((historyItem, id) => {
            return <li key={id} className={styles.historyListItem}>
              <img 
                src={`/assets/experience/${historyItem.imageSrc}`}
                alt={`${historyItem.organisation} Logo`}
                className={styles.historyIcon}
              />
              <div>
                <h3 className={styles.historyRole}>
                  {`${historyItem.role}, ${historyItem.organisation}`}
                </h3>

                <p className={styles.historyDate}>
                  {`${historyItem.startDate} - ${historyItem.endDate}`}
                </p>
                <ul className={styles.historyPoints}>
                  {historyItem.experiences.map((experience, id) => {
                    return <li key={id}>
                      {experience}
                    </li>
                  })}
                </ul>
              </div>
            </li>
          })}
        </ul>
      </div>
    </section>
  )
}
