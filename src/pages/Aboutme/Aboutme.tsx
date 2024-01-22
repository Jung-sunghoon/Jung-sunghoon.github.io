import React from 'react'
import styles from './aboutme.module.css'
import { infoData, Myinfo } from '@src/Components/Myinfo/Myinfo'
import img from '@src/assets/img/index'
import { techstackData, Techstack } from '@src/Components/Techstack/Techstack'

const Aboutme: React.FC = () => {
  return (
    <div id={styles.Aboutme}>
      <article className={styles.AboutMe}>
        <div className={styles.AboutMeSection}>
          <div className={styles.AboutMe__Title}>
            <div className={styles.Title__Text}>About Me</div>
          </div>
          <div className={styles.Info__Container}>
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
      <article className={styles.Skills}>
        <div className={styles.SkillsSection}>
          <div className={styles.Skills__Title}>
            <div className={styles.Title__Text}>Skills</div>
          </div>
          <div className={styles.Skills__Container}>
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
      <article className={styles.Archive}>
        <div className={styles.ArchiveSection}>
          <div className={styles.Archive__Title}>
            <div className={styles.Title__Text}>Archive</div>
          </div>
          <div className={styles.Archive__Contents}>
            <a
              href="https://github.com/Jung-sunghoon"
              className={styles.Archive__Container}
              target="_blank"
            >
              <div className={styles.Archive__Img__Wrapper}>
                <img
                  src={img['aghimg']}
                  alt={'agithubImg'}
                  className={styles.Archive__Img}
                ></img>
              </div>
              <div className={styles.Archive__Url}>
                github.com/Jung-sunghoon
              </div>
              <div className={styles.Archive__Description}>
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
