import Project from '@src/Components/Project/Project'
import styles from './projects.module.css'
import { ReadMeData } from '@src/datas/ReadMeData'
import { ProjectsData } from '@src/datas/ProjectsData'

const Projects = () => {
  return (
    <div id={styles.projects}>
      <div className={styles.projectsWrapper}>
        <div className={styles.projectsContainer}>
          <div className={styles.projectsTitle}>Projects</div>
          <div className={styles.projectsContents}>
            {ProjectsData.map((project: any, index: number) => {
              const {
                title,
                imgs,
                description,
                skill,
                github,
                techstack,
                date,
                url,
              } = project

              const readMeData: any = ReadMeData.find(
                (readMe: { readTitle: string }) => readMe.readTitle === title,
              )

              return (
                <Project
                  key={index + '_' + title}
                  title={title}
                  date={date}
                  imgs={imgs}
                  description={description}
                  skill={skill}
                  url={url}
                  github={github}
                  techstack={techstack}
                  readTitle={readMeData?.readTitle || ''}
                  readDescription={readMeData?.readDescription || ''}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
