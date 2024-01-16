import React from 'react'
import './aboutme.css'
import { infoData, Myinfo } from '@src/Components/Myinfo/Myinfo'
import img from '@src/assets/img/index'
import { techstackData, Techstack } from '@src/Components/Techstack/Techstack'

const Aboutme: React.FC = () => {
  return (
    <div id="Aboutme">
      <article className="AboutMe__AboutMe">
        <div className="AboutMe__AboutMeSection">
          <div className="AboutMe__AboutMeSection__Title">
            <div className="AboutMe__AboutMeSection__Title__Text">About Me</div>
          </div>
          <div className="AboutMe__Infos">
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
      <article className="AboutMe__Skills">
        <div className="AboutMe__SkillsSection">
          <div className="AboutMe__SkillsSection__Title">
            <div className="AboutMe__SkillsSection__Title__Text">Skills</div>
          </div>
          <div className="AboutMe__SkillsSection__Container">
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
      <article className="Aboutme__Archive">
        <div className="Aboutme__ArchiveSection">
          <div className="Aboutme__ArchiveSection__Title">
            <div className="Aboutme__ArchiveSection__Title__Text">Archive</div>
          </div>
          <div className="Aboutme__ArchiveSection__Contents">
            <a
              href="https://github.com/Jung-sunghoon"
              className="Aboutme__ArchiveSection__Contents__Container"
              target="_blank"
            >
              <div className="Aboutme__ArchiveSection__Contents__Img__Wrapper">
                <img
                  src={img['aghimg']}
                  alt={'agithubImg'}
                  className="Aboutme__ArchiveSection__Contents__Img"
                ></img>
              </div>
              <div className="Aboutme__ArchiveSection__Contents__Url">
                github.com/Jung-sunghoon
              </div>
              <div className="Aboutme__ArchiveSection__Contents__Description">
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
