import React from 'react'
import styles from './aboutme.module.css'
import { infoData, Myinfo } from '@src/Components/Myinfo/Myinfo'
import img from '@src/assets/img/index'
import { techstackData, Techstack } from '@src/Components/Techstack/Techstack'
import { ArchiveData, Archive } from '@src/Components/Archive/Archive'

const Aboutme: React.FC = () => {
  return (
    <div id={styles.aboutMe}>
      <article className={styles.aboutMe}>
        <div className={styles.aboutMeSection}>
          <div className={styles.aboutMeTitle}>
            <div className={styles.titleText}>About Me</div>
          </div>
          <div className={styles.infoContainer}>
            {infoData.map((info, label) => (
              <Myinfo
                key={label}
                label={info.label}
                value={info.value}
                icon={info.icon}
              />
            ))}
          </div>
        </div>
      </article>
      <article className={styles.skills}>
        <div className={styles.skillsSection}>
          <div className={styles.skillsTitle}>
            <div className={styles.titleText}>Skills</div>
          </div>
          <div className={styles.skillsContainer}>
            {techstackData.map((techstack, title) => (
              <Techstack
                key={title}
                title={techstack.title}
                imgs={techstack.imgs}
                alt={techstack.alt}
              />
            ))}
          </div>
        </div>
      </article>
      <article className={styles.archive}>
        <div className={styles.archiveSection}>
          <div className={styles.archiveTitle}>
            <div className={styles.titleText}>Archive</div>
          </div>
          <div className={styles.archiveDataList}>
            {ArchiveData.map((archive, link) => (
              <Archive
                key={link}
                img={archive.img}
                alt={archive.alt}
                link={archive.link}
                url={archive.url}
                description={archive.description}
              />
            ))}
          </div>
        </div>
      </article>
    </div>
  )
}

export default Aboutme
