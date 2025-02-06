import img from '@src/assets/img'
import styles from './resume.module.css'

const Resume = () => {
  return (
    <div id={styles.resume}>
      <div className={styles.resumeIntro}>
        <img className={styles.infoImg} src={img.resumeImg} alt="정성훈 사진" />
        <div className={styles.myIntro}>
          <h1>지속적인 성장을 꿈꾸는 주니어 프론트엔드 개발자 정성훈입니다.</h1>
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
          <div className={styles.myInfo}>
            <dl>
              <dt>생년월일: </dt>
              <dd>2000.02.18</dd>
            </dl>
            <dl>
              <dt>이메일: </dt>
              <dd>
                <a href="mailto:jsh0218131@gmail.com">jsh0218131@gmail.com</a>
              </dd>
            </dl>
            <dl>
              <dt>휴대폰: </dt>
              <dd>010-4252-7897</dd>
            </dl>
            <dl>
              <dt>Github: </dt>
              <dd>
                <a href="https://github.com/Jung-sunghoon" target="_blank">
                  https://github.com/Jung-sunghoon
                </a>
              </dd>
            </dl>
          </div>
        </div>
      </div>
      <div>
        <h2>기술스택</h2>
        <hr />
        <div>
          <h3>Frontend</h3>
          <ul>
            <li>HTML, CSS3</li>
            <li>TypeScript, JavaScript(ES6+)</li>
            <li>React</li>
          </ul>
        </div>
        <div>
          <h3>Backend & Database</h3>
          <ul>
            <li>Node.js</li>
            <li>Firebase</li>
          </ul>
        </div>
        <div>
          <h3>Build & Tools</h3>
          <ul>
            <li>Vite</li>
            <li>Git, Github</li>
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
          <p>2024.09 - 2024.10 (팀 프로젝트)</p>
          <h4>레시피 공유 커뮤니티 웹 페이지</h4>
          <ul>
            <li>
              <a href="https://recipeproject-theta.vercel.app/" target="_blank">
                배포 링크
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Jung-sunghoon/recipe_project"
                target="_blank"
              >
                Github 링크
              </a>
            </li>
          </ul>
          <p>프로젝트 개요</p>
          <ul>
            <li>
              사용자가 다양한 레시피를 검색하고 공유하여 요리에 쉽게 접근할 수
              있도록 커뮤니티 웹 사이트 개발
            </li>
            <li>React와 TypeScript를 활용하여 SPA로 개발</li>
            <li>module css를 사용하여 개발</li>
            <li>firebase를 활용하여 회원가입 및 로그인 관리</li>
            <li>context API를 활용하여 로그인 상태 전역관리</li>
          </ul>
          <p>주요 기능 및 역할</p>
          <ul>
            <li>팀장을 맡아 프로젝트 및 회의를 리드함</li>
            <li>
              게시물 관리: firestore와 storage를 활용하여 레시피 등록, 수정,
              삭제 및 이미지 업로드 기능 개발
            </li>
            <li>
              검색 기능 개선
              <ul>
                <li>- 레시피(게시물) 제목, 재료, 태그 검색 기능 개발</li>
                <li>
                  - 검색어와 옵션을 URLSearchParams를 활용하여 페이지 이동
                  시에도 검색 상태를 유지하도록 개선
                </li>
              </ul>
            </li>
          </ul>
          <h3>
            <li>이게 되네? JS와 Node로 배포까지!</li>
          </h3>
          <p>2024.07 - 2024.10 (팀 프로젝트)</p>
          <h4>무료 E-BOOK 집필 프로젝트</h4>
          <a
            href="https://ridibooks.com/books/2773000103?_rdt_sid=category_free_books&_rdt_idx=1&_rdt_arg=2200"
            target="_blank"
          >
            리디북스 링크
          </a>
          <p>프로젝트 개요</p>
          <ul>
            <li>
              JavaScript와 node.js로 실제 웹 프로젝트를 개발하는 과정을 담음
            </li>
            <li>책 발간 이후 1달간 컴퓨터/IT 무료 책 부문 1위</li>
          </ul>
          <p>주요 기능 및 역할</p>
          <ul>
            <li>팀장을 맡아 프로젝트 및 회의를 리드함</li>
            <li>백엔드 개발 부분 집필 및 전체 퇴고(편집)</li>
          </ul>
          <h3>
            <li>Pronend</li>
          </h3>
          <p>2024.07 ~ 2024.10</p>
          <h4>일정관리를 위한 달력 웹 페이지</h4>
          <ul>
            <li>
              <a href="https://pronend.vercel.app/" target="_blank">
                배포 링크
              </a>
            </li>
            <li>
              <ul>
                <li>
                  <a href="https://github.com/Jung-sunghoon/calendarProject-fe">
                    프론트엔드 Github
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Jung-sunghoon/calendarProject-be">
                    백엔드 Github
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <p>프로젝트 개요</p>
          <li>Vite를 활용하여 빠른 개발 세팅</li>
          <li>HTML,CSS,JavaScript로 개발</li>
          <li>Node.js와 Firebase를 활용하여 개발</li>
          <li>vercel을 활용하여 프론트엔드 배포</li>
          <li>Firebase functions를 활용하여 백엔드 배포</li>
          <p>주요 기능 및 역할</p>
          <ul>
            <li>팀장을 맡아 프로젝트 및 회의를 리드함</li>
            <li>
              프론트엔드
              <ul>
                <li>- 날씨 API를 활용하여 사이드 바 날씨 표시 기능 개발</li>
                <li>
                  - Fetch를 활용한 API 통신으로 일정 데이터 달력에 시각화 기능
                  개발
                </li>
              </ul>
            </li>
            <li>
              백엔드
              <ul>
                <li>- 일정 생성, 수정, 삭제 API 개발</li>
                <li>- Swagger 연동으로 API 문서화 및 테스트</li>
              </ul>
            </li>
          </ul>
          <h3>
            <li>Lookgit</li>
          </h3>
          <p>2024.06 ~ (현재 진행 중)</p>
          <h4>깃헙 프로세스 시각화 학습 오픈소스 프로젝트</h4>
          <ul>
            <li>
              <a href="https://lookgit.com/" target="_blank">
                배포 링크
              </a>
            </li>
            <li>
              <a
                href="https://github.com/weniv/github_visualization"
                target="_blank"
              >
                Github 링크
              </a>
            </li>
          </ul>
          <p>프로젝트 개요</p>
          <li>HTML,CSS,JavaScript로 개발</li>
          <li>d3.js를 활용하여 시각화</li>
          <p>주요 기능 및 역할</p>
          <ul>
            <li>git 명령어 실행 시 사이드 바에 상태 텍스트 시각화 기능 개발</li>
            <li>git 명령어 중 push, pull 명령어 기능 개발</li>
          </ul>
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
            </li>
          </h3>
          <h4>프론트엔드 기술 학습</h4>
          <ul>
            <li>HTML5 & CSS3: 웹 표준 및 반응형 웹 디자인, Flex / Grid 활용</li>
            <li>
              JavaScript(ES6+): 비동기 처리(Promise, async / await), ES6+ 문법
              활용
            </li>
            <li>React: 컴포넌트 기반 아키텍쳐, 상태 관리</li>
            <li>TypeScript: 정적 타입 시스템 적용 및 코드 안정성 향상</li>
            <li>
              API 통신: Fetch / Axios를 활용한 Restful API 연동 및 데이터 처리
            </li>
            <li>버전 관리: Git & Github를 활용한 협업과 코드 리뷰 경험</li>
          </ul>
          <h4>성과 및 성장</h4>
          <ul>
            <li>
              프로젝트를 통해 5개월 동안 3개 이상의 웹 애플리케이션 개발을 경험
            </li>
            <li>프로젝트 내 코드 리뷰 피드백을 바탕으로 코드 작성 역량 향상</li>
          </ul>
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
