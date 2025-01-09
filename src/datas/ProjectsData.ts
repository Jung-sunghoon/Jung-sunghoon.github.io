import img from '@src/assets/img'

export const ProjectsData = [
  {
    title: '레시피 연구소',
    date: '2024-09 ~ 2024-10',
    imgs: [
      img['recipeLab1'],
      img['recipeLab2'],
      img['recipeLab3'],
      img['recipeLab4'],
      img['recipeLab5'],
      img['recipeLab6'],
    ],
    description: `
    <p>서로의 레시피를 공유할 수 있는 커뮤니티 웹사이트입니다.</p>

    <p>최근 흑백요리사로 인한 요리의 관심도가 높아짐에 따라 쉽고 간단하게 요리를 할 수 있는 웹사이트를 제작하게 되었습니다.</p>

    <p>프로젝트의 팀장을 맡아 프로젝트의 일정 관리, 회의 주도 등 프로젝트를 리드했으며 프론트엔드 개발에도 참여했습니다.</p>
    `,
    skill: `firebase를 통한 사용자 및 데이터베이스 관리, 레시피 보기, 레시피 작성하기, AI 추천 레시피 생성(BETA)`,
    url: `<a href="https://recipeproject-theta.vercel.app/" target="_blank">https://recipeproject-theta.vercel.app/<a/>`,
    github: `
    <p><a href="https://github.com/Jung-sunghoon/recipe_project">https://github.com/Jung-sunghoon/recipe_project</a></p>
    `,
    techstack: 'React,TypeScript,firebase'
  },
  {
    title: 'PRONEND',
    date: '2024-07 ~ 2024-10',
    imgs: [img['pronend1'], img['pronend2']],
    description: `
    <p>일정 관리를 위한 캘린더 웹페이지입니다.</p>

    <p>E-BOOK 집필을 위해 프로젝트 주제를 찾던 도중 기본적인 CRUD 구현이 가능하고
    여러 기능을 추가할 수 있는, 일정 관리를 위한 캘린더 웹사이트를 개발하게 되었습니다.</p>

    <p>프로젝트의 팀장을 맡아 프로젝트의 일정 관리, 회의 주도 등 프로젝트를 리드했으며 프론트엔드와 백엔드 두 부분을 맡아 개발을 진행하였습니다.</p>

    <p>개발이 끝난 후 배포까지 해보는 것을 목적으로 책을 보는 사람들 뿐만 아니라 팀원들도 프로젝트 개발 사이클을 경험하면서 개발자로서의 성장을 목표로 진행하고 있습니다.</p>
    `,
    skill: `전체 달력을 통한 일정 관리, 오늘의 날씨 표시, 반복 일정 관리 가능, 구글 oAuth 로그인을 통한 간편한 사용자 인증`,
    url: `<a href="https://pronend.vercel.app/" target="_blank">https://pronend.vercel.app/<a/>`,
    github: `
    <p>프론트엔드 - <a href="https://github.com/Jung-sunghoon/calendarProject-fe">https://github.com/Jung-sunghoon/calendarProject-fe</a></p>
    <p>백엔드 - <a href="https://github.com/Jung-sunghoon/calendarProject-be">https://github.com/Jung-sunghoon/calendarProject-be</a></p>
    `,
    techstack: 'HTML, CSS, JavaScript,Node.js,mariaDB,Docker',
  },
  {
    title: '이게되네? JS와 Node로 배포까지!',
    date: '2024-07 ~ 2024-10',
    imgs: [img['jsNode1'], img['jsNode2'], img['jsNode3'], img['jsNode4']],
    description: `
    <p>위니브에서 주관하는 E-BOOK 집필 프로젝트입니다.</p>
    <p> 기초적인 HTML, CSS, JavaScript 지식을 알고 있는 예비 개발자들이 Vanilla JS와 Node.js를 활용하여
    프론트엔드와 백엔드를 구축하고 간단한 프로젝트를 구현한 후 배포까지 해보면서 프로젝트 사이클을 경험해보도록 하는 것을 목표로 하고 있습니다.</p>
    <p>무료로 출간되기 때문에 누구나 구매하여 볼 수 있다는 점에서 도움이 필요한 사람들에게 쉽게 도움을 줄 수 있을 것 같다는 생각이 들어 참여하게 되었습니다.</p>
    `,
    skill: `HTML, CSS, JavaScript, Node.js를 활용하여 프로젝트 개발 하기`,
    url: `<a href="https://ridibooks.com/books/2773000103?_rdt_sid=category_free_books&_rdt_idx=1&_rdt_arg=2200" target="_blank">https://ridibooks.com/books/2773000103?_rdt_sid=category_free_books&_rdt_idx=1&_rdt_arg=2200</a>`,
  },
  {
    title: 'Lookgit',
    date: '2024-06 ~ 현재 진행 중',
    imgs: [img['lookgitMain1'], img['lookgitMain2']],
    description: `
    <p>Git과 GitHub를 처음 배우는 사용자들이 버전 관리의 중요성을 이해하고, GitHub을 쉽게 활용할 수 있도록 돕기 위해 기획되었습니다.</p>
    <p>GitHub의 기본 프로세스를 시각화하여 사용자들이 직관적으로 이해할 수 있도록 했으며, 고급 명령어가 아닌 기초 명령어만 지원하여 초보자들이 복잡함 없이 GitHub의 기본 기능을 익힐 수 있도록 설계되었습니다.</p>
    <p>- 프로젝트 기여 내용</p>
    <p>명령어 개발: 사용자가 클릭한 기초 깃 명령어를 해석하고, 이에 따른 동작을 JavaScript로 구현했습니다. 
    Working Directory, Staging Area 등 GitHub 프로세스의 흐름을 시각적으로 볼 수 있도록 JavaScript로 구현했습니다.

    기록 및 에러 관리: 사용자의 명령어 실행 기록과 에러 메시지를 파일로 다운로드할 수 있도록 저장하는 기능을 추가했습니다.</p>
    `,
    skill: `
    d3.js를 활용한 GitHub 주요 프로세스 시각화, 명령어 버튼 클릭 UI로 간편하게 GitHub 프로세스 학습 가능,
    CLI 환경에서도 명령어 실행 가능, JSON 문서를 활용한 튜토리얼, 실행 기록과 에러 로그를 다운로드하여 복습 및 오류 수정 가능
    `,
    url: `<a href="https://lookgit.com/" target="_blank">https://lookgit.com/</a>`,
    github:
      '<a href="https://github.com/weniv/github_visualization" target="_blank">https://github.com/weniv/github_visualization</a>',
    techstack: 'HTML, CSS, JavaScript',
  },
  {
    title: '포트폴리오 웹사이트',
    date: '2024.01 ~ (1인 프로젝트)',
    imgs: [
      img['pInfo1'],
      img['pInfo2'],
      img['pBlog'],
      img['pProject'],
      img['pCalendar'],
      img['pAdmin'],
      img['pBlogCreate'],
      img['pCalendarEvent'],
    ],
    description: `<p>제 자신을 설명하기 위해 개발한 <b>포트폴리오 웹사이트입니다</b>. Deople 프로젝트에서는 프론트엔드만 맡았다면, Node.js를 학습하여 서버 측 api도 구현할 수 있게 되었다는 점에서 의미가 큽니다.</p>
    <br>
    <p>반응형 웹 디자인에 대해 더 알게 되었으며 module.css를 활용한 css 관리도 경험할 수 있었습니다.</p>
    <br />
    <p>기술 블로그 작성을 위한 <b>기본적인 CRUD</b> 뿐만 아니라 코드의 최적화를 위해 <b>컴포넌트로 관리하는 방법</b>까지 배우면서 기술적인 면이 많이 업그레이드 된 좋은 경험이었습니다.</p>
    <br /><p>(Google OAuth 인증도 구현하였으나 현재 Admin 기능인 블로그 게시물 및 일정 생성, 수정, 삭제 기능은 제 구글 아이디만 가능합니다.)<p/>
    <br />
    Google login 컴포넌트는 <a href="https://jung-sunghoon.github.io/admin" target="_blank">https://jung-sunghoon.github.io/admin</a> 이곳으로 가시면 볼 수 있습니다.`,
    skill:
      '간단한 자기 소개, 인적 사항, 기술 스택, 기술 블로그, 프로젝트 경험, 일정관리 앱',
    url: '<a href = "https://jung-sunghoon.github.io/welcome" target="_blank">https://jung-sunghoon.github.io/welcome</a>',
    github: `프론트엔드 - <a href="https://github.com/Jung-sunghoon/jung-sunghoon.github.io" target="_blank">https://github.com/Jung-sunghoon/jung-sunghoon.github.io</a>, 
      <br/> 
      백엔드 - <a href="https://github.com/Jung-sunghoon/Portfolio_Be" target="_blank">https://github.com/Jung-sunghoon/Portfolio_Be</a>`,
    techstack: 'React, TypeScript,Node.js,MariaDB,Docker',
  },
  {
    title: 'Deople',
    date: '2023-09 ~ 2023-11 (4인 팀 프로젝트)',
    imgs: [
      img['dLogin'],
      img['dSignup'],
      img['dProjectList'],
      img['dProjectCreation'],
      img['dProjectDetail'],
      img['dProjectApply'],
      img['dProjectComment'],
      img['dRanking'],
      img['dProfile'],
      img['dInfoList'],
      img['dInfoDetail'],
    ],
    description: `<p><b>한신대학교 학생들을 위한 프로젝트 공유 및 팀원 구인 웹사이트</b>입니다. 
    한신대학교 캡스톤 디자인 수업에서 진행한 팀 프로젝트이며 프로젝트를 진행할 때 팀을 구하는 것과 아이디어 창출에 대한 고민이 많았기 때문에 다른 학생들에게 도움이 되고자 개발하게 되었습니다.
    </p><br /><p>첫 팀 프로젝트이기도 하였으며 처음으로 프론트엔드 개발을 시작한 프로젝트이기도 합니다. 
    <b>React</b>와 <b>TypeScript</b>를 처음 다뤄본 것에 의미가 굉장히 컸고, 
    <b>Rest API</b> 통신에 대해 처음으로 알게 되어 백엔드와 프론트엔드 간의 통신을 경험해봤다는 것에 큰 의미가 있었습니다.</p>`,
    skill:
      '본인의 완성한 프로젝트 공유하기, 팀원을 구인하는 프로젝트 작성하기, 프로젝트 모집 신청하기, 신청자 프로필 확인하기, 활동으로 얻은 포인트를 활용한 랭킹 보기',
    github:
      '프론트엔드 - <a href="https://github.com/Jung-sunghoon/capstone_fe" target="_blank">https://github.com/Jung-sunghoon/capstone_fe</a>, <br/> 백엔드 - <a href="https://github.com/Jung-sunghoon/capstone_backend" target="_blank">https://github.com/Jung-sunghoon/capstone_backend</a>',
    techstack: 'React, TypeScript,Java SpringBoot,MySQL',
  },
]
