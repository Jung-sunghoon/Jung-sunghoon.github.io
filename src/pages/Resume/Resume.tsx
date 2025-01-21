import img from '@src/assets/img'
import styles from './resume.module.css'

const Resume = () => {
  return (
    <div id={styles.resume}>
      <div className={styles.resumeIntro}>
        <div className={styles.myInfo}>
          <img
            className={styles.infoImg}
            src={img.resumeImg}
            alt="정성훈 사진"
          />
          <div>
            <dl>
              <dt>🎂 </dt>
              <dd>2000.02.18</dd>
            </dl>
            <dl>
              <dt>📧 </dt>
              <dd>
                <a href="mailto:jsh0218131@gmail.com">jsh0218131@gmail.com</a>
              </dd>
            </dl>
            <dl>
              <dt>📞 </dt>
              <dd>010-4252-7897</dd>
            </dl>
            <dl>
              <dt>🔗 </dt>
              <dd>
                <a href="https://github.com/Jung-sunghoon">Github</a>
              </dd>
            </dl>
          </div>
        </div>
        <div className={styles.myIntro}>
          <h1>
            지속적인 성장을 꿈꾸는 주니어
            <br />
            FE 개발자 정성훈입니다.
          </h1>
          <div className={styles.introBlock}>
            <strong>
              함께 성장하는 것이 더 좋은 결과물을 가져온다고 믿습니다.
            </strong>
            <div className={styles.indentedText}>
              다수의 팀 프로젝트에서 팀장을 맡았던 경험으로{' '}
              <strong>팀원과의 협업을 통해 문제를 해결하고 목표를 달성</strong>
              하는 데 열정을 가지고 있으며, 지속적인 학습과 소통을 통해 항상
              성장하는 개발자가 되고자 합니다.
            </div>
          </div>
          <div className={styles.introBlock}>
            <strong>
              누구나 알아보기 쉽고 효율적인 코드를 작성하고자 합니다.
            </strong>
            <div className={styles.indentedText}>
              React와 TypeScript를 활용한 웹 프로젝트를 통해{' '}
              <strong>가독성과 재사용성</strong>을 중점으로 두어{' '}
              <strong>효율적이고 유지보수 가능한 코드</strong>를 작성하는 데에
              노력해 왔습니다.
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2>기술스택</h2>
        <hr />
        <div className={styles.techStack}>
          <p>프론트엔드</p>
          <ul>
            <li>React</li>
            <li>TypeScript</li>
            <li>JavaScript</li>
          </ul>
        </div>
        <div className={styles.techStack}>
          <p>백엔드</p>
          <ul>
            <li>Node.js</li>
          </ul>
        </div>
      </div>
      <div>
        <h2>프로젝트</h2>
        <hr />
        <ol>
          <h3>
            <li>레시피 연구소</li>
          </h3>
          <h4>레시피 공유 커뮤니티 웹 페이지</h4>
          <h3>
            <li>이게 되네? JS와 Node로 배포까지!</li>
          </h3>
          <h4>무료 E-BOOK 집필 프로젝트</h4>
          <h3>
            <li>Pronend</li>
          </h3>
          <h4>일정 관리를 위한 캘린더 웹 페이지</h4>
          <h3>
            <li>Lookgit</li>
          </h3>
          <h4>깃헙 프로세스 시각화 학습 오픈소스 프로젝트</h4>
          <h3>
            <li>포트폴리오 웹사이트</li>
          </h3>
          <h4>나를 설명하기 위한 포트폴리오 웹 사이트 + 기술 블로그</h4>
          <h3>
            <li>Deople</li>
          </h3>
          <h4>
            한신대학교 학생들을 위한 팀원 구인구직 및 프로젝트 공유 웹 사이트
          </h4>
        </ol>
      </div>
      <div>
        <h2>교육</h2>
        <hr />
        <ul>
          <h3>
            <li>
              EST 프론트엔드 오르미 부트캠프 1기{' '}
              <span className={styles.timestamp}>2024.06 - 2024.10</span>
              <ul>
                <h4>
                  <li>
                    학습 내용: HTML5, CSS3, JavaScript, React, TypeScript 등
                    프론트엔드 전반적인 기초지식
                  </li>
                </h4>
              </ul>
            </li>
          </h3>
        </ul>
      </div>
      <div>
        <h2>자격증</h2>
        <hr />
        <ul>
          <h3>
            <li>
              정보처리기사 <span className={styles.timestamp}>2024.06</span>
              <ul>
                <h4>
                  <li>발행처: 한국산업인력공단</li>
                </h4>
              </ul>
            </li>
          </h3>
        </ul>
      </div>
    </div>
  )
}

export default Resume
