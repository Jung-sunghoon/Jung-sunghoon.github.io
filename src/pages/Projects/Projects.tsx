import Project from '@src/Components/Projects/Project'
import styles from './projects.module.css'

export const ProjectsData = [
  {
    title: '포트폴리오 웹사이트',
    date: '2024.01 ~ (1인 프로젝트)',
    imgs: '',
    description: '프로젝트 내용',
    skill:
      '나에 대한 소개, 나만의 기술 블로그, 나의 프로젝트 소개, 나만의 일정관리 앱',
    url: '',
    github: '',
    frontend: 'React, TypeScript',
    backend: 'node.js',
    database: 'MariaDB',
    deployment: 'Docker',
  },
  {
    title: 'Deople',
    date: '2023-09 ~ 2023-11 (4인 팀 프로젝트)',
    imgs: '',
    description:
      '<b>한신대학교 학생들을 위한 프로젝트 공유 및 팀원 구인 웹사이트</b>입니다. 한신대학교 캡스톤 디자인 수업에서 진행한 팀 프로젝트이며 프로젝트를 진행할 때 팀을 구하는 것과 아이디어 창출에 대한 고민이 많았기 때문에 다른 학생들에게 도움이 되고자 개발하게 되었습니다.<p></p>첫 팀 프로젝트이기도 하였으며 처음으로 프론트엔드 개발을 시작한 프로젝트이기도 합니다. <b>React</b>와 <b>TypeScript</b>를 처음 다뤄본 것에 의미가 굉장히 컸고, <b>Rest API</b> 통신에 대해 처음으로 알게 되어 백엔드와 프론트엔드 간의 통신을 경험해봤다는 것에 큰 의미가 있었습니다.<p></p>',
    skill:
      '본인의 완성한 프로젝트 공유하기, 팀원을 구인하는 프로젝트 작성하기, 프로젝트 모집 신청하기, 신청자 프로필 확인하기, 활동으로 얻은 포인트를 활용한 랭킹 보기',
    url: '--',
    github:
      '프론트엔드 - <a href="https://github.com/Jung-sunghoon/capstone_fe" target="_blank">https://github.com/Jung-sunghoon/capstone_fe</a>, <br/> 백엔드 - <a href="https://github.com/Jung-sunghoon/capstone_backend" target="_blank">https://github.com/Jung-sunghoon/capstone_backend</a>',
    frontend: 'React, TypeScript',
    backend: 'Java SpringBoot',
    database: 'MySQL',
    deployment: '--',
  },
]

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
                frontend,
                backend,
                database,
                deployment,
                date,
                url,
              } = project
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
                  frontend={frontend}
                  backend={backend}
                  database={database}
                  deployment={deployment}
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
