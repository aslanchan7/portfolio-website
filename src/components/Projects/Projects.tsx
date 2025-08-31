import React from 'react'
import styles from "./Projects.module.css"
import projects from "../../data/projects.json"

export const Projects = () => {
  return (
    <section id='projects' className={styles.container}>
        <h2 className={styles.title}>
          Projects
        </h2>

        <div className={styles.content}>
          {projects.map((project, id) => {
            return <div key={id} className={styles.projectContainer}>
              <img src={`/assets/projects/${project.imageName}`} className={styles.projectImage} />
              
              <h3 className={styles.projectTitle}>
                {project.title}
              </h3>

              <p className={styles.projectDescription}>
                {project.description}
              </p>

              <div className={styles.projectSkills}>
                {project.skills.map((skill, id) => {
                  return <div key={id} className={styles.skillContainer}>
                    <p className={styles.skillText}>
                      {skill}
                    </p>
                  </div>
                })}
              </div>

              <div className={styles.projectLinks}>
                <a href={project.demoURL}>Demo</a>
                <a href={project.sourceCodeURL}>Source</a>
              </div>
            </div>
          })}
        </div>
    </section>
  )
}
