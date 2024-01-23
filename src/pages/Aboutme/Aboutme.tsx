import React from 'react'
import styles from './aboutme.module.css'
import { infoData, Myinfo } from '@src/Components/Myinfo/Myinfo'
import img from '@src/assets/img/index'
import { techstackData, Techstack } from '@src/Components/Techstack/Techstack'

const Aboutme: React.FC = () => {
  return (
    <div id={styles.aboutMe}>
      <article className={styles.aboutMe}>
        <div className={styles.aboutMeSection}>
          <div className={styles.aboutMeTitle}>
            <div className={styles.titleText}>About Me</div>
          </div>
          <div className={styles.infoContainer}>
            {infoData.map((info, index) => (
              <Myinfo
                key={index}
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
            {techstackData.map((techstack, index) => (
              <Techstack
                key={index}
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
          <div className={styles.archiveContents}>
            <a
              href="https://github.com/Jung-sunghoon"
              className={styles.archiveContainer}
              target="_blank"
            >
              <div className={styles.archiveImgWrapper}>
                <img
                  src={img['aghimg']}
                  alt={'agithubImg'}
                  className={styles.archiveImg}
                ></img>
              </div>
              <div className={styles.archiveUrl}>github.com/Jung-sunghoon</div>
              <div className={styles.archiveDescription}>
                <p>
                  <b>소스 코드 저장소</b>입니다.
                </p>
                <p>과거 프로젝트 및 코딩 학습을 위한 코드가 있습니다.</p>
              </div>
            </a>
          </div>
        </div>
      </article>
    </div>
  )
}

export default Aboutme
