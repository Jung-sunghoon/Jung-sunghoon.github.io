import styles from './readme.module.css'

export const Readme: React.FC = () => {
  return (
    <div id={styles.readMe}>
      <div id={styles.readMePortfolio}></div>
      <div id={styles.readMeDeople}>
        <div className={styles.readMeSummary}>
          <h2>❗요약</h2>
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
          <h2>⚙️환경 세팅</h2>
          <pre>
            <p># 패키지 설치</p>
            <p>yarn add</p>
            <br />
            <br />
            <p># 프론트 서버 구동</p>
            <p>yarn dev</p>
          </pre>
        </div>
      </div>
    </div>
  )
}

export default Readme
