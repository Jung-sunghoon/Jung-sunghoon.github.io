import Project from '@src/Components/Projects/Project'
import styles from './projects.module.css'
import img from '@src/assets/img'

export const ReadMeData = [
  {
    readTitle: '포트폴리오 웹사이트',
    readDescription: `<p>안녕하세요</p>`,
  },
  {
    readTitle: 'Deople',
    readDescription: `
        <div className={styles.readMeSummary}>
          <h2>❗ 요약</h2>
          <p>
            <b>한신대학교 학생들을 위한 프로젝트 공유 및 팀원 구인 웹사이트</b>
            입니다. 캡스톤 디자인 수업 당시 팀 선정 과정에 있어서 불편함을 느낀
            것들과 팀 선정 이후에도 아이디어 창출에 관련하여 어려움을 느꼈던
            부분을 바탕으로 이를 해결하고자 개발했습니다.
          </p>
          <br />
          <p>
            첫 팀 프로젝트라는 것과 제 첫 프론트엔드 작업이라는 것만으로도 큰
            의미가 있었지만, 프로젝트를 진행하는 과정에서 Rest API에 대한 개념을
            배우며 처음 사용해보고, 단순한 작업만 해봤던 저에게 백엔드와
            프론트엔드 간의 통신으로 웹사이트를 만들 수 있게 되었다는 점에서
            매우 뜻 깊은 프로젝트였습니다.
          </p>
          <br />
          <p>
            처음으로 팀 프로젝트를 하다보니 백엔드와 프론트엔드만 있는 줄 알았던
            제가 PM이라는 역할을 수행하게 되었고, 프로젝트 기획이나 일정 관리
            등을 해보며 팀 단위의 프로젝트에서 협업의 중요성을 배우게
            되었습니다.
          </p>
          <br />
          <p>
            또한, Git과 Github를 처음 사용해 보면서 협업 툴의 중요성도 배우게
            되었습니다.
          </p>
          <br />
          <h3>※ 주요 기능</h3>
          <ul>
            <li>본인의 완성한 프로젝트 공유하기</li>
            <li>팀원을 구인하는 프로젝트 작성하기</li>
            <li>프로젝트 모집 신청하기</li>
            <li>신청자 프로필 확인하기</li>
            <li>활동으로 얻은 포인트를 활용한 랭킹 보기</li>
          </ul>
          <br />
          <h2>💡 프로젝트를 진행하면서 느낀 점</h2>
          <p>
            프론트엔드에 대한 지식이라고는 HTML, CSS에 국한되어 있던 제가
            처음으로 React와 TypeScript를 사용해본 프로젝트입니다. 대학교에서
            컴퓨터공학부 필수 과목인 캡스톤 디자인 수업을 진행하면서 하게 된 팀
            프로젝트이며 Product Manager(PM)와 프론트엔드의 역할을 담당했습니다.
          </p>
          <br />
          <p>
            프레임워크나 프론트엔드 언어에 대한 지식이 거의 전무하다보니,
            프로젝트 초반에 강의와 개발을 병행하는 것이 매우 힘들었습니다.
            하지만 이러한 어려움을 극복하기 위해 지속적으로 강의를 수강했고,
            팀원들과 같이 협력하여 기술적인 이해를 증진시켜 나갔습니다.
          </p>
          <br />
          <p>
            React의 컴포넌트 기반 구조와 TypeScript의 타입 지정 시스템은 처음에
            굉장히 낯설고 어려웠지만 개념에 대해 찾아보고 코딩하는 과정에서
            이해도를 향상시켜 나갈 수 있었습니다. 특히, 프로젝트를 통해 UI를
            개발하고, useState를 통해 상태를 관리하거나 싱글 페이지
            애플리케이션에서의 라우팅 등의 개념을 실전에서 익히는 경험은 매우
            가치 있었습니다.
          </p>
          <br />
          <p>
            팀원과 협업을 위해 Git과 Github를 처음 써보기도 하였습니다. 이전까지
            프로젝트를 해보지 않은 것은 아니지만 협업을 위해 Git을 사용해본 적이
            없던 저에게는 협업을 할 때 사람들이 왜 Git을 사용하는지를 알 수 있는
            굉장히 뜻 깊은 프로젝트였습니다.
          </p>
          <br />
          <p>
            또한 프론트엔드 뿐만 아니라 PM역할도 수행하면서 프로젝트 일정 계획,
            팀원 간의 의사소통, 프로젝트 업무 분배 등 프로젝트를 관리하는 것도
            큰 경험이었습니다. 이를 통해 프로젝트를 진행하는 방식이나 프로젝트
            관리, 팀을 이끌어 가는 리더십에 대한 감각도 키울 수 있었습니다.
          </p>
          <br />
          <p>
            처음해봤던 프로젝트라 뿌듯함도 큰 만큼 아쉬움도 많습니다. 이
            프로젝트는 저에게 프론트엔드 언어에 대한 이해와 기술적인 증진 뿐만
            아니라 팀원과의 협업, 프로젝트 관리에 대한 폭넓은 역량을 쌓을 수
            있는 기회였습니다. 프로젝트를 완성하고 나서 처음으로 코딩이 재밌다고
            느낀 계기가 되기도 하였습니다.
          </p>
          <br />
          <h2>💻 기술 스택</h2>
          <ul>
            <li>Frontend: React, Typescript</li>
            <li>Backend: Java SpringBoot</li>
            <li>Database: MySQL</li>
          </ul>
          <h2>⚙️ 환경 세팅</h2>
          <pre>
            <code>
              <p># 패키지 설치</p>
              <p>yarn add</p>
              <br />
              <p># 프론트 서버 구동</p>
              <p>yarn dev</p>
            </code>
          </pre>
        </div>
    `,
  },
]

export const ProjectsData = [
  {
    title: '포트폴리오 웹사이트',
    date: '2024.01 ~ (1인 프로젝트)',
    imgs: [],
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
    imgs: [img['htmlimg'], img['cssimg'], img['jsimg'], img['tsimg']],
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
                  frontend={frontend}
                  backend={backend}
                  database={database}
                  deployment={deployment}
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
