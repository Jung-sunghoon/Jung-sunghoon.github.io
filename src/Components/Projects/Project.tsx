import styles from '@src/pages/Projects/projects.module.css'

export interface ProjectsProp {
  title: string
  date: string
  imgs?: any[]
  description: string
  skill: string
  github: string
  frontend: string
  backend: string
  database: string
  deployment?: string
}

export const ProjectsData = [
  {},
  {
    title: 'Deople',
    date: '2023-09 ~ 2023-11 (4인 팀 프로젝트)',
    description:
      '<b>한신대학교 학생들을 위한 프로젝트 공유 및 팀원 구인 웹사이트</b>입니다. 한신대학교 캡스톤 디자인 수업에서 진행한 팀 프로젝트이며 프로젝트를 진행할 때 팀을 구하는 것과 아이디어 창출에 대한 고민이 많았기 때문에 다른 학생들에게 도움이 되고자 개발하게 되었습니다.<p></p> 첫 팀 프로젝트이기도 하였으며 처음으로 프론트엔드 개발을 시작한 프로젝트이기도 합니다. React와 TypeScript를 처음 다뤄본 것에 의미가 굉장히 컸고, Rest API 통신에 대해 처음으로 알게 되어 백엔드와 프론트엔드 간의 통신을 경험해봤다는 것에 큰 의미가 있었습니다.<p></p>',
    skill:
      '본인의 완성한 프로젝트 공유하기, 팀원을 구인하는 프로젝트 작성하기, 프로젝트 모집 신청하기, 신청자 프로필 확인하기, 활동으로 얻은 포인트를 활용한 랭킹 보기',
    github:
      '프론트엔드 - https://github.com/Jung-sunghoon/capstone_fe , 백엔드 - https://github.com/Jung-sunghoon/capstone_backend',
    frontend: 'React, TypeScript',
    backend: 'Java SpringBoot',
    database: 'MySQL',
  },
]

export const Project: React.FC<ProjectsProp> = ({
  title,
  imgs,
  description,
  skill,
  github,
  frontend,
  backend,
  database,
  deployment,
}) => {
  return (
    <>
      <div className={styles.Project__Description}>
        <div className={styles.Description__Title}>{title}</div>
        <div className={styles.Description__Contents}>
          <div className={styles.Description__Img__Section}>{imgs}</div>
          <div
            className={styles.Description__Text}
            dangerouslySetInnerHTML={{ __html: description }}
          >
            {description}
          </div>
        </div>
        <div className={styles.Project__info}>{skill}</div>
        <div className={styles.Project__info}>{github}</div>
        <div className={styles.Project__info}>{frontend}</div>
        <div className={styles.Project__info}>{backend}</div>
        <div className={styles.Project__info}>{database}</div>
        <div className={styles.Project__info}>{deployment}</div>
      </div>
    </>
  )
}

export default Project
