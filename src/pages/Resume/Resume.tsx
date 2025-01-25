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
          <h1>지속적인 성장을 꿈꾸는 주니어 FE 개발자 정성훈입니다.</h1>
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
        <ul className={styles.projectList}>
          <h3>
            <li>레시피 연구소</li>
          </h3>
          <h4>레시피 공유 커뮤니티 웹 페이지</h4>
          <p>상세정보</p>
          <ul>
            <li>React와 TypeScript를 활용하여 SPA로 개발</li>
            <li>module css를 사용하여 개발</li>
            <li>firebase를 활용하여 회원가입 및 로그인 관리</li>
            <li>firestore와 storage를 활용하여 게시물 및 이미지 관리</li>
            <li>팀장을 맡아 프로젝트 및 회의를 리드함</li>
            <li>
              검색 컴포넌트 및 메인화면 개발 + 레시피(게시물) 작성 및 수정 개발
              및 게시물 정렬 기능 개발
            </li>
            <li>레시피(게시물) 제목, 재료, 태그 검색 기능 개발</li>
          </ul>
          <h3>
            <li>이게 되네? JS와 Node로 배포까지!</li>
          </h3>
          <h4>무료 E-BOOK 집필 프로젝트</h4>
          <p>상세정보</p>
          <li>js와 node.js로 실제 웹 프로젝트를 개발하는 과정을 담음</li>
          <li>팀장을 맡아 프로젝트 및 회의를 리드함</li>
          <li>백엔드 개발 부분 집필 및 전체 퇴고(편집)</li>
          <h3>
            <li>Pronend</li>
          </h3>
          <h4>일정 관리를 위한 캘린더 웹 페이지</h4>
          <p>상세정보</p>
          <li>Vanilla JS를 활용하여 개발</li>
          <li>node.js를 활용하여 api 개발</li>
          <li>프론트엔드 배포는 vercel, 백엔드는 firebase function 활용</li>
          <li>팀장을 맡아 프로젝트 및 회의를 리드함</li>
          <li>
            일정 전체 가져오기 로직 및 날씨 api를 연동하여 사이드 바에 날씨 표시
            기능 개발
          </li>
          <li>일정 추가, 수정, 삭제, 조회 api 개발</li>
          <h3>
            <li>Lookgit</li>
          </h3>
          <h4>깃헙 프로세스 시각화 학습 오픈소스 프로젝트</h4>
          <p>상세정보</p>
          <li>HTML,CSS,JavaScript로 개발</li>
          <li>d3.js를 활용하여 시각화</li>
          <li>
            add, commit, push, pull 과정 시각화 기능 개발 및 pull 기능 개발
          </li>
        </ul>
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
