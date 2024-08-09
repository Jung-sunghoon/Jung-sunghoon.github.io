// post_id: number
// title: string
// thumbnail?: any
// views: number
// creation_date: string
// content: string

/* 
{
  post_id: ,
  title: '',
  creation_date: '',
  thumbnail: '',
  content: ``,
},
*/

import blogThumbnailImg from '@src/assets/img/blogThumbnailImg'
import blogPostImg from '@src/assets/img/blogPostImg'

export const posts = [
  {
    post_id: 1,
    title: '기술 블로그를 시작하며',
    creation_date: '2024-01-16',
    thumbnail: blogThumbnailImg.thumbnail1,
    content: `<p>영원할 것만 같았던 대학생활이 끝나고 졸업을 눈 앞에 두고 취업 준비에 돌입했습니다.</p>
    <p>학창시절을 거의 놀면서 보냈던 저는 당장 이룬 것도 없고,</p>
    <p>그나마 막 공부를 시작한 프론트엔드 기술 스택 조차 시작한지 6개월 밖에 되지 않은 저에게 취업 준비란 너무 막막한 일이었습니다.</p>
    <p>다행히 프론트엔드 개발자로 재직 중이신 삼촌께서 도와 주시기로 하셨고,</p>
    <p>삼촌이 가장 먼저 하신 말씀은</p>
    <strong>"너를 브랜드화 해라"</strong>
    <p>아무것도 이룬 것이 없고, 해 본 것이라고는 대학교 수업 시간 캡스톤 디자인 수업 때 해본 팀 프로젝트 웹사이트 개발.</p>
    <p>어떻게 시작을 해야할 지 아무것도 모르던 저에게 해주신 말씀은 기술 블로그를 작성해보라는 것이었습니다.</p>
    <p>그렇게 시작하게 된 기술 블로그 첫 게시물은 이번에 취업 준비를 본격적으로 시작하며 세우게 된 계획표입니다.</p>

    <img src="${blogPostImg.post1Img}" alt="" />
    
    <blockquote>
      9시 반에 기상하여 11시까지 출근
      점심 전까지 기술 블로그를 작성하거나 기술 블로그 게시물 작성 계획 짜기, 혹은 이력서 추가로 작성하기
      점심 이후 ~ 저녁 전까지 현재 개발 중인 포트폴리오 웹사이트 개발
      저녁 후 ~ 퇴근 전까지 부족한 개념 공부 및 면접 공부
    </blockquote>
    <p>비록 시간 단위로 완벽하게 짠 시간표는 아니지만, 우선은 이 안에서 조금씩 계획을 세워가며 해보고자 합니다.</p>`,
  },
  {
    post_id: 2,
    title: '캡스톤 디자인 회고',
    creation_date: '2024-01-18',
    thumbnail: blogThumbnailImg.thumbnail2,
    content: `
    <h1>캡스톤 디자인 프로젝트 회고</h1>
    <h2>프로젝트 소개</h2>
    <h3>프로젝트 개요</h3>
    <p>한신대학교 컴퓨터공학부 캡스톤 디자인 팀 프로젝트입니다.</p>
    <p>프로젝트 기간은 23.09 ~ 23.11 입니다. 대략 2개월 반 정도 걸린 것 같습니다.</p>
    <p>토이 프로젝트 공유 웹사이트 Devfolioh! 와 사이드 프로젝트 및 스터디 팀원 모집 웹사이트 Hola!를 모티브로 
    하여 한신대학교 학생들을 위한 프로젝트 공유 및 팀원 구인 웹사이트를 개발하였습니다.</p>
    <blockquote>Devfolioh! - <a href="https://devfolio.kr/">https://devfolio.kr/</a></blockquote>
    <blockquote>Hola! - <a href="https://holaworld.io/">https://holaworld.io/</a>
    </blockquote>
    <p>이 프로젝트에서 저는 백엔드와 웹 디자인을 제외한 전체적인 기획 및 프론트엔드를 맡았습니다.</p>
    <h3>프로젝트 아이템 선정 동기</h3>
    <p>학교 수업 특성 상 같이 수업을 듣는 친구들과 팀을 이루거나 랜덤으로 팀을 짜거나 둘 중 하나로 진행해야 되었으나 랜덤 팀의 경우 각자 잘하는 것이 무엇인지 모르고 프로젝트의 방향성도 잡기 어렵기 때문에 순조롭게 진행되지 않는 경우가 많은데, 졸업을 위해 필수로 들어야하는 수업에서 이러한 불편한 점이 있다는 것이 이해가 되지 않았습니다.</p>
    <p>또한 어렵게 팀을 꾸린 후에도 프로젝트에 대한 아이템 선정 과정에서 아무것도 없이 그저 생각만 하려고 하니 마땅히 좋은 아이디어가 나오지 않아 아이템을 선정하는 것에만 시간을 꽤 할애해야만 했습니다.</p>
    <p>그러던 와중에 Devfolioh!와 Hola!를 알게 되었고 제가 느꼈던 불편함들을 해결할 수 있으며 Hola!의 팀원 구인과 Devfolioh!의 프로젝트 공유를 한 곳에서 할 수 있는 웹사이트를 개발하게 되었습니다.</p>
    <h3>역할 분담</h3>
    <p>Front-end 1명, Back-end 2명, 웹 디자인 1명으로 진행했습니다.</p>
    <h4>PM</h4>
    <p>1. Devfolioh!와 Hola!는 한국 개발자 전체를 대상으로 운영되고 있는 서비스입니다. 개발 기간을 고려하고 대상을 집중하는 것이 맞다고 판단하여 사용자를 한신대학교 학생으로 한정했습니다.</p>
    <p>2. 2개월 반이라는 기간 동안 해야하는 필수 구현 사항과 추가 구현 사항을 구분하고, 주 1일 구글 meet를 통해 회의를 진행했습니다.</p>
    <h4>Frontend</h4>
    <ul style="margin-left: 25px;">
    <li>로그인 및 회원가입 페이지</li>
    <li>프로젝트 게시판 페이지</li>
    <li>프로젝트 작성 페이지</li>
    <li>프로젝트 상세 페이지</li>
    <li>프로필 페이지</li>
    <li>랭킹 페이지</li>
    <li>IT 정보 페이지</li>
    </ul>
    <h4>협업 Tool</h4>
    <p>Git / Github</p>
    <p>버전 관리를 위해 Tool중 하나인 Git과 Github를 사용했습니다.</p>
    <p>Git과 Github도 제대로 사용해본 것이 처음이라 Git 명령어를 공부하는 데에 큰 도움이 되었습니다.</p>
    <p>Github 레퍼지토리는 다음과 같습니다.</p>
    <blockquote>
    Front-end 레퍼지토리 <a href="https://github.com/Jung-sunghoon/capstone_fe" target="_blank">바로 가기</a>
    <br />
    Back-end 레퍼지토리 <a href="https://github.com/Jung-sunghoon/capstone_backend" target="_blank">바로 가기</a>
    </blockquote>
    <h4>기술 스택</h4>
    
    <img src=${blogPostImg.post2Img1} alt="캡스톤 디자인에 사용한 기술 스택" />

    <h4>구현</h4>
    <p style="margin-left: 25px;">1. 로그인 및 회원가입 페이지 구현</p>
    <p style="margin-left: 25px;">2. 프로젝트 게시판 페이지 구현</p>
    <p style="margin-left: 50px;">1) 진행 중인 프로젝트와 완료된 프로젝트 구분</p>
    <p style="margin-left: 50px;">2) 검색 컴포넌트를 통한 제목 검색 구현</p>
    <p style="margin-left: 50px;">3) 페이지네이션 및 조회순, 좋아요순, 최신순 정렬 구현</p>
    <p style="margin-left: 25px;">3. 프로젝트 작성 페이지 구현</p>
    <p style="margin-left: 50px;">1) SummerNote를 활용하여 텍스트 및 이미지, 꾸미기 가능</p>
    <p style="margin-left: 25px;">4. 프로젝트 상세 페이지 구현</p>
    <p style="margin-left: 50px;">1) 댓글 작성 및 수정, 삭제 기능 구현</p>
    <p style="margin-left: 50px;">2) 작성자의 경우 프로젝트 수정, 삭제 기능 구현</p>
    <p style="margin-left: 50px;">3) 다른 사용자가 진행 중인 프로젝트에 프로젝트 참여 신청 기능 구현</p>
    <p style="margin-left: 50px;">4) 작성자의 경우 프로젝트에 참여 신청한 사용자의 목록 및 프로필 보기/ 프로젝트 참여 신청 승인 or 취소 기능 구현</p>
    <p style="margin-left: 25px;">5. 프로필 페이지 구현</p>
    <p style="margin-left: 50px;">1) 회원가입 시 적었던 사용자의 정보 보기 기능 구현</p>
    <p style="margin-left: 50px;">2) 로그인 시 본인의 프로필을 보면 비밀번호가 보이고 다른 사용자의 프로필은 비밀번호가 보이지 않는 기능 구현</p>
    <p style="margin-left: 50px;">3) 자신이 올린 프로젝트 목록을 볼 수 있는 기능 구현</p>
    <p style="margin-left: 50px;">4) 자신이 프로젝트 참여 신청한 프로젝트 목록을 보고, 신청 취소 할 수 있는 기능 구현</p>
    <p style="margin-left: 25px;">6. 랭킹 페이지 구현</p>
    <p style="margin-left: 50px;">1) 활동으로 얻은 포인트에 따라 랭킹 순위 적용 기능 구현</p>
    <p style="margin-left: 25px;">7. IT 정보 페이지 구현</p>
    <p style="margin-left: 50px;">1) 오직 관리자만이 게시물을 작성 및 수정, 삭제 할 수 있는 기능 구현</p>
    <p style="margin-left: 50px;">2) 일반 사용자는 게시물을 보기만 할 수 있음</p>

    <h2>후기</h2>
    <h3>좋았던 점</h3>
    <p style="margin-left: 25px;">1. 팀 프로젝트 경험을 해 볼 기회가 많이 없었는데 좋은 경험이 되었습니다.</p>
    <p style="margin-left: 25px;">2. 프론트엔드 개발이 재밌었습니다.</p>
    <h3>배운 점</h3>
    <p style="margin-left: 25px;">1. 프로젝트 진행에 있어서 개발자 뿐 만 아니라 다른 직군도 있다는 것을 배우고 프론트엔드 개발자와 PM의 역할을 해 볼 수 있게 되었습니다.</p>

    <h3>좋았던 점</h3>
    <p style="margin-left: 25px;">2. 프론트엔드 기술 스택 중 React와 TypeScript가 무엇이고 어떻게 사용하는 지에 대해 배웠습니다.</p>
    <p style="margin-left: 25px;">3. 협업 Tool 중 하나인 Git과 Github가 무엇인지, 어떻게 사용하는 가에 대해 배웠습니다.</p>
    <p style="margin-left: 25px;">4. Rest API에 대해 알고 백엔드와 통신하는 방법을 배웠습니다.</p>

    <h3>아쉬웠던 점</h3>
    <p style="margin-left: 25px;">1. 팀 프로젝트가 처음이다 보니 팀장으로서 이끌어 나가는 것이 어려웠습니다.</p>
    <p style="margin-left: 25px;">2. 팀원들과 소통에 있어서 원활하게 하지 못한 점이 아쉽습니다.</p>
    <p style="margin-left: 25px;">3. 결과물을 보여주기 위한 코딩을 하다 보니 코드의 완성도가 많이 떨어졌습니다.</p>
    <p style="margin-left: 25px;">4. 개념적인 부분에 대한 이해도가 낮다 보니 코딩을 하고 나서도 비슷한 코드가 필요할 때 헷갈리는 부분이 생겼습니다.</p>
    `,
  },
  {
    post_id: 3,
    title: 'Restful API ',
    creation_date: '2024-01-23',
    thumbnail: '',
    content: `<div>
    <h1>Rest API</h1>
    <h2>Rest API란?</h2>
    <p>Rest API에서 API란 Application Programming Interface의 약어로 애플리케이션이나 디바이스가 서로 간에 연결하여 통신할 수 있는 방법을 정의하는 규칙 세트입니다.<br>
    Rest란 REpresentational State Transfer의 약어로 소프트웨어 프로그램 아키텍처의 한 형식입니다.
    Rest API는 이러한 Rest 아키텍처를 스타일의 디자인 원칙을 준수하는 API입니다. 따라서 Rest API를 Restful API라고도 부릅니다.
    Rest는 기본적으로 웹의 기존 기술과 HTTP 프로토콜을 그대로 활용하기 때문에 웹의 장점을 최대한 활용할 수 있는 아키텍처 스타일입니다.</p>
    <p><img src="https://velog.velcdn.com/images/jsh_0218/post/8b3b9b3b-863b-4b0c-b8cd-2ad90522e741/image.png"></p>
    <p>이미지 출처: <a href="https://www.codecademy.com/article/what-is-rest">https://www.codecademy.com/article/what-is-rest</a></p>
    <h3>Rest의 구체적인 개념</h3>
    <p>HTTP URI를 통해 자원을 명시하고 HTTP Method(GET, POST, PUT, DELETE 등)을 통해 해당 자원에 대한 CRUD Operation을 적용하는 것을 의미한다.
    즉, REST는 자원 기반의 구조 설계의 중심에 Resource가 있고, HTTP Method를 통해 Resource를 처리하도록 설계된 아키텍처를 의미한다.
    웹의 모든 자원에 고유한 ID인 HTTP URI를 부여한다.</p>
    <h4>Rest의 구성</h4>

    <p style="margin-left:25px;">1. 자원(Resource) - URL</p>
    <p style="margin-left:50px;">모든 자원에 고유한 ID가 존재하고, 이 자원은 서버에 존재한다.
    자원을 구별하는 ID는 /post/post_id/1 과 같은 HTTP URI이다.</p>

    <p style="margin-left:25px;">2. 행위(Verb) - HTTP Method</p>
    <p style="margin-left:50px;">HTTP 프로토콜의 Method를 사용한다.
    HTTP 프로토콜은 GET, POST, PUT, DELETE 등의 Method를 제공한다.</p>

    <p style="margin-left:25px;">3. 표현(Representations)</p>
    <p style="margin-left:50px;">Client가 자원의 상태 (정보) 에 대한 조작을 요청하면 서버는 이에 적절한 응답(Representation)을 보낸다.
    Rest에서 하나의 자원은 JSON, XML, TEXT, RSS 등 여러 형태의 응답(Representation)으로 나타낼 수 있다.
    현재는 JSON으로 주고받는 것이 대부분이다.</p>
    
    <h3>HTTP Method의 역할</h3>
    <img src=${blogPostImg.post3Img1} alt="HTTP 메소드 종류 및 역할" />
    
    <h3>Rest의 특징</h3>

    <p style="margin-left:25px;">1. 클라이언트 / 서버 구조</p>
      <p style="margin-left:50px;">클라이언트는 유저와 관련된 처리를, 서버는 Rest API를 제공함으로써 각자의 역할이 확실하게 구분되고 일괄적인 인터페이스로 분리되어 작동할 수 있게 한다.</p>
      <p style="margin-left:50px;">클라이언트 - 사용자 인증이나 context(세션, 로그인 정보) 등을 직접 관리하고 책임진다.</p>
      <p style="margin-left:50px;">서버 - API를 제공하고 비즈니스 로직 처리 및 저장을 책임진다. 서로 간의 의존성이 줄어든다.</p>

    <p style="margin-left:25px;">2. 무상태성 (Stateless)</p>
      <p style="margin-left:50px;">Rest는 HTTP의 특성을 이용하기 때문에 무 상태성을 가진다.
      서버에서 특정 작업을 하기 위해 상태 정보를 기억할 필요가 없고 들어온 요청에 대해 처리만 해주면 되기 때문에 구현이 쉽고 단순해진다.</p>

    <p style="margin-left:25px;">3. 캐시 처리 기능 (Cacheable)</p>
      <p style="margin-left:50px;">HTTP라는 기존 웹 표준을 사용하는 특징 덕분에 기존 웹에서 사용하는 인프라를 그대로 사용 가능하다.
      대량의 요청을 효율적으로 처리하기 위해 캐시가 요구된다.
      캐시 사용을 통해 응답시간이 빨라지고 Rest 서버 트랜잭션이 발생하지 않기 때문에 전체 응답시간, 성능, 서버의 자원 이용률을 향상시킬 수 있다.</p>

    <p style="margin-left:25px;">4. 자체 표현 구조</p>
      <p style="margin-left:50px;">JSON을 이용한 메시지 Format을 이용하여 직관적으로 이해할 수 있고 Rest API 메시지만으로 그 요청이 어떤 행위를 하는지 알 수  있다.</p>

    <p style="margin-left:25px;">5. 계층화</p>
      <p style="margin-left:50px;">클라이언트와 서버가 분리되어 있기 때문에 중간에 프록시 서버, 암호화 계층 등 중간 매체를 사용할 수 있어 자유도가 높다.</p>

    <p style="margin-left:25px;">6. 유니폼 인터페이스 (Uniform)</p>
      <p style="margin-left:50px;">Uniform Interface는 Http 표준에만 따른다면 모든 플랫폼에서 사용이 가능하며 URI로 지정한 리소스에 대한 조작을 가능하게 하는 아키텍처 스타일을 말한다.
      URI로 지정한 Resource에 대한 조작을 통일되고 한정적인 인터페이스로 수행한다.
      즉, 특정 언어나 기술에 종속되지 않는다.</p>

    
    <h3>중심 규칙</h3>
    <p>Rest에서 가장 중요하며 기본적인 규칙은 두 가지가 있습니다.</p>
    <p>URI는 정보의 자원을 표현해야 한다.</p>
    <p>자원에 대한 행위는 HTTP Method (GET, POST, PUT, DELETE 등)으로 표현한다.</p>

    <h3>세부 규칙</h3>

    <p style="margin-left:25px;">1. 슬래시 구분자 ( / )(이하 슬래시) 는 계층 관계를 나타내는 데 사용한다.</p>

    <p style="margin-left:25px;">2. URI 마지막 문자로 슬래시를 포함하지 않는다.</p>
      <p style="margin-left:50px;">URI에 포함되는 모든 글자는 리소스의 유일한 식별자로 사용되어야 하며 URI가 다르다는 것은 리소스가 다르다는 것.
      역으로 리소스가 다르면 URI도 달라져야 한다.</p>

    <p style="margin-left:25px;">3. 하이픈 ( - ) 은 URI 가독성을 높이는데 사용한다.</p>

    <p style="margin-left:25px;">4. 밑줄 ( _ ) 은 URI에 사용하지 않는다.</p>

    <p style="margin-left:25px;">5. URI 경로에는 소문자가 적합하다.</p>
      <p style="margin-left:50px;">URI 경로에 대문자 사용은 피하도록 한다.</p>

    <p style="margin-left:25px;">6. 파일 확장자는 URI에 포함하지 않는다.</p>
      <p style="margin-left:50px;">  Rest API에서는 메시지 마디 내용의 Format을 나타내기 위한 파일 확장자를 URI 안에 포함시키지 않는다.
      대신 Accept Header를 사용한다.</p>
      <p style="margin-left:50px;">ex) GET : <a href="http://restapi.test.com/posts/2/Accept">http://restapi.test.com/posts/2/Accept</a>: images/jpg</p>

    <p style="margin-left:25px;">7. 리소스 간에 연관 관계가 있는 경우</p>
      <p style="margin-left:50px;">/리소스명/리소스ID/관계가 있는 다른 리소스 명</p>
      <p style="margin-left:50px;">ex) GET : /users/2/posts (일반적으로 소유의 관계를 표현할 때 사용)</p>

    
    <p>예시 이미지</p>
    <p><img src="https://velog.velcdn.com/images/jsh_0218/post/34f3d9e9-3ca0-4cea-ae38-28224466bd29/image.png"></p>
    <p>이미지 출처: <a href="https://hackernoon.com/build-restful-api-in-go-and-mongodb-5e7f2ec4be94">https://hackernoon.com/build-restful-api-in-go-and-mongodb-5e7f2ec4be94</a></p>
    
    <h3>설계 목표</h3>

    <p>Rest의 핵심 설계 목표는 다음과 같습니다.</p>

    <p style="margin-left:25px;">1. 컴포넌트들 간의 유연한 (쉽게 확장이 가능한) 상호 연동성 확보</p>
      <p style="margin-left:50px;">상호 연동성은 서로 상이한 컴포넌트들을 쉽게 연결할 수 있는 성질을 의미한다. 상호 연동성은 두 개 이상의 컴포넌트들을 결합함으로써, 작업을 더 효율적으로 수행하도록 하는데 목적이 있다.
      Rest는 HTTP와 URI 기반인데, HTTP와 URI 모두 표준이며 직관적이고, 사용이 간단하며 어디에서든 동일하게 작동하는 것을 보장할 수 있다.</p>

    <p style="margin-left:25px;">2. 범용 인터페이스</p>
      <p style="margin-left:50px;">상호 연동성과 비슷한 개념으로 Rest 모델을 위한 HTTP와 URI는 웹 표준으로 어디서든지 사용 가능한 범용 인터페이스를 제공한다.
      따라서 개발자는 비즈니스 로직만 고민하면 된다.</p>

    <p style="margin-left:25px;">3. 각 컴포넌트들의 독립적인 배포</p>
      <p style="margin-left:50px;">각 컴포넌트들과의 독립적인 배포의 의미는 다른 컴포넌트들과 독립적으로 개발할 수 있다는 것을 의미한다.
      규격에 맞추어 개발이 되었다면 다른 컴포넌트가 추가되어도 연동에 걱정할 것이 없다.</p>

    <p style="margin-left:25px;">4. 지연 감소, 보안 강화, 레거시 시스템을 인캡슐레이션하는 중간 컴포넌트로의 역할</p>
      <p style="margin-left:50px;">클라이언트는 엔드 서버에 직접 연결할 필요 없이 서비스를 이용할 수 있다. 그 이유는 Rest 서버가 클라이언트와 엔드 서버 중간에서 중계 역할을 할 수 있기 때문이다.
      이러한 중계 서버로 이용하면 로드 밸런싱, 공유 메모리 등을 이용해서 확장성 / 성능을 향상시킬 수 있으며 보안 정책을 적용하기도 용이하다.</p>
    
    <blockquote>
      <p>인캡슐래이션: 데이터에 헤더가 추가되는 과정 즉 OS Lv7 =&gt; Lv1로 내려가는 과정을 뜻하며 간단하게 PC에서 다른 PC로 데이터를 전송할 때 데이터를 패키지하는 과정을 말한다.</p>
    </blockquote>
    
    <blockquote>
      <p>로드 밸런싱: 부하 분산이라고도 불리며 컴퓨터 네트워크 기술의 일종으로 둘 혹은 셋 이상의 중앙 처리 장치 혹은 저장 장치와 같은 컴퓨터 자원들에게 작업을 나누어 주는 것을 의미한다.</p>
    </blockquote>

    
    <h2>Restful API</h2>

    <h3>Restful이란?</h3>

    <p>HTTP와 URI 기반으로 자원에 접근할 수 있도록 제공하는 애플리케이션 개발 인터페이스이다. 기본적으로 개발자는 HTTP Method와 URI만으로 인터넷에 자료를 CRUD 할 수 있다.
    Rest API를 제공하는 웹 서비스를 Restful하다고 할 수 있다.
    Restful은 Rest를 Rest답게 사용했다는 의미로 볼 수 있다.</p>

    <h3>Restful API 개발 원칙</h3>

    <p style="margin-left:25px;">1. 자원을 식별할 수 있어야 한다.</p>
      <p style="margin-left:50px;">URL (Uniform Resource Locator) 만으로 사용자가 어떤 자원을 제어하려고 하는지 알 수 있어야 한다. 자원을 제어하기 위해서 자원의 위치는 물론 자원의 종류까지 알 수 있어야 한다는 의미이다.
      서버가 제공하는 정보는 JSON이나 XML 형태로 HTTP body에 포함하여 전송시킨다.</p>

    <p style="margin-left:25px;">2. 행위는 명시적이어야 한다.</p>
      <p style="margin-left:50px;">Rest는 아키텍처 혹은 방법론과 비슷하다. 따라서 이런 방식을 사용해야한다고 강제적이지는 않다. 기존의 웹 서비스처럼 GET을 이용해서 UPDATE와 DELETE를 해도 된다.
      다만 Rest 아키텍처에는 부합하지 않으므로 Rest를 따른다고 할 수 없다.</p>

    <p style="margin-left:25px;">3. 자기 서술적이어야 한다.</p>
      <p style="margin-left:50px;">데이터에 대한 메타정보만 가지고도 어떤 종류의 데이터인지, 데이터를 위해서 어떤 어플리케이션을 실행해야 하는지를 알 수 있어야한다.
      즉, 데이터 처리를 위한 정보를 얻기 위해서, 데이터 원본을 읽어야 한다면 자기 서술적이지 못하다.</p>

    <p style="margin-left:25px;">4. HATEOS (Hypermedia as the Engine of Application State)</p>
      <p style="margin-left:50px;">클라이언트 요청에 대해 응답을 할 때 추가적인 정보를 제공하는 링크를 포함할 수 있어야한다.
      Rest는 독립적으로 컴포넌트들을 손쉽게 연결하기 위한 목적으로도 사용된다. 따라서 서로 다른 컴포넌트들을 유연하게 연결하기 위해서 느슨한 연결을 만들어줄 것이 필요하다.
      이때 사용되는 것이 바로 링크이다. 서버는 클라이언트 응용 어플리케이션에 하이퍼링크를 제공한다.
      클라이언트는 이 하이퍼링크를 통해서 전체 네트워크와 연결되며 HATEOS는 서버가 독립적으로 진화할 수 있도록 서버와 서버, 서버와 클라이언트를 분리할 수 있게 한다.</p>
    
    <h3>Rest의 단점들</h3>

    <p style="margin-left:25px;">1. Rest는 point-to-point 통신모델을 기본으로 하기 때문에 서버와 클라이언트가 연결을 맺고 상호작용해야하는 어플리케이션의 개발에는 적당하지 않다.</p>

    <p style="margin-left:25px;">2. Rest는 URI, HTTP를 이용한 아키텍처링 방법에 대한 내용만을 담고 있다. 보안과 통신규약 정책같은 것은 전혀 다루지 않는다. 따라서 개발자는 통신과 정책에 대한 설계와 구현을 도맡아서 진행해야 한다.</p>

    <p style="margin-left:25px;">3. HTTP에 상당히 의존적이다. Rest는 설계 원리이기 때문에 HTTP와는 상관없이 다른 프로토콜에서도 구현할 수 있기는 하지만 자연스러운 개발이 힘들다. 다만 Rest를 사용하는 이유가 대부분의 서비스가 웹으로 통합되는 상황이기 때문에 큰 단점이 아니게 되었다.</p>

    <p style="margin-left:25px;">4. CRUD 4가지 메소드만 제공한다. 대부분의 일들을 처리할 수 있지만 4가지 메소드 만으로 처리하기에는 모호한 표현이 있다.</p>

    
    <p>오늘은 Rest API에 대해서 알아보았습니다. 지금까지 이러한 개념 없이 Rest API를 사용하고 있었는데 왜 사용하는지, 규칙은 어떠한 것이 있는지 등을 알 수 있던 시간이었습니다. 이러한 규칙들을 잘 생각하면서 개발하도록 노력하고자 합니다.</p>
    <br />
    <p>Reference</p>
    <hr>
    <p><a href="https://velog.io/@somday/RESTful-API-%EC%9D%B4%EB%9E%80">https://velog.io/@somday/RESTful-API-%EC%9D%B4%EB%9E%80</a></p></div>`,
  },
  {
    post_id: 4,
    title: 'React란?',
    creation_date: '2024-01-30',
    thumbnail: '',
    content: `
    <h2>React란</h2>

    <p>React로 개발을 시작했지만 React가 무엇인지, 왜 사람들이 React를 가장 많이 사용하는지에 대해 알지 못 한 상태로 하다 보니 React가 무엇이고 사람들이 왜 사용하는지는 알고 사용해야겠다는 생각이 들어서 찾아보았습니다.

    따라서 이번 블로그 포스트에서는 React가 무엇인지 , 특징은 무엇인지 살펴보려고 합니다.

    React는 UI Javascript 라이브러리로써 싱글 페이지 애플리케이션의 UI(User Interface)를 생성하는데 집중한 라이브러리입니다. React는 Javascript에 HTML을 포함하는 JSX(Javascript XML)라는 간단한 문법과 단방향 데이터 바인딩(One-way Data Binding)을 사용하고 있습니다. 그리고 가상 돔(Virtual DOM)이라는 개념을 사용하여 웹 어플리케이션의 퍼포먼스를 최적화한 라이브러리입니다.

    React는 싱글 페이지 애플리케이션(Single Page Application이하 SPA)에서 UI를 만드는 Javascript 라이브러리이다 보니, SPA 제작을 하는 다른 프레임워크에 비해 부족한 부분이 있습니다. 예를 들어 React는 페이지 전환 기능을 제공하지 않기 때문에, React를 사용하여 페이지 전환을 해야한다면 react-router와 같은 추가적인 라이브러리를 사용해야 합니다.</p>

    <h2>React의 특징</h2>



    <p>가상 돔</p>
    <p>단방향 데이터 바인딩</p>
    <p>JSX</p>
    <p>Props 와 State</p>
    <p>Component 기반</p>

    <h3> 가상 돔</h3>

    <p>React는 가상 돔을 사용하여 웹 어플리케이션의 성능을 극대화 시켰습니다. 가상 돔을 이해하기 전에 먼저 HTML과 CSS의 렌더링 과정을 이해할 필요가 있습니다.</p>

    <h3>HTML과 CSS의 렌더링 과정</h3>

    <p>웹 브라우저가 네트워크를 통해 HTML을 전달 받으면 브라우저의 렌더링 엔진은 HTML을 파싱하고 돔 노드로 이루어진 트리를 만듭니다. 또한 CSS파일과 HTML의 요소들의 인라인 스타일을 파싱하여 스타일 정보를 가진 스타일 트리도 같이 생성합니다.</p>

    <img src=https://velog.velcdn.com/images/jsh_0218/post/c1f84f50-74af-40da-b0a0-38feb5a093b8/image.png alt="웹 브라우저 렌더링 과정 이미지" />

    <p>이렇게 렌더 트리가 완성되면 브라우저는 Attachment라는 과정을 통해 스타일 정보를 계산합니다. 렌더 트리로 생성된 모든 노드들은 attach라는 함수를 가지고 있는데 Attachment 과정에서이 메소드들이 호출되며 해당 메소드는 스타일 정보를 계산하고 결과값을 객체 형태로 반환하게 됩니다.

    이 때 이 계산 과정은 모두 동기적으로 동작하게 되며, 만약 렌더 트리에 새로운 노드가 추가된다면 해당 노드의 attach 메소드가 실행되어 계산 과정을 거치게 됩니다.

    렌더 트리는 Attachment 과정을 거친 후 레이아웃이라는 과정을 거치게 되는데, 이 과정에서는 브라우저가 렌더 트리의 각 노드들에게 좌표를 부여하고 정확히 어디에 어떻게 표시되는지를 결정합니다.

    마지막으로 브라우저는 페인팅이라는 과정을 거치게 되는데 각 노드들에 paint 함수를 호출하여 렌더링된 요소들에 색상을 입히게 됩니다.

    이런 과정을 거쳐 표시된 HTML을 Javascript를 사용하여 돔을 조작하게 되면 각 노드의 좌표를 계산하기 위해 레이아웃 과정이 다시 실행되고 그 이후 페인팅이 다시 진행되게 됩니다.이렇게 돔 조작으로 레이아웃 과정이 다시 진행되는 것을 Reflow, 페인팅 과정이 다시 진행되는 것을 Repaint라고 합니다. 리플로우와 리페인팅은 돔의 각 노드에 대한 연산 과정을 다시 수행하므로 이 과정이 많이 수행될수록 웹 서비스의 성능이 저하되는 문제가 발생하게 됩니다.

    React는 이러한 문제를 가상 돔을 만듦으로써 해결했습니다. 화면에 표시한 돔과 동일한 돔을 메모리상에 만들고 돔 조작이 발생하면 가상 돔에 모든 연산을 수행한 후 실제 돔을 갱신하여 리플로우 및 리페인트의 연산을 최소화하였습니다.

    만약 사용자가 Todo 리스트 앱을 사용한다고 가정했을 때, 가상 돔이 없는 경우 리스트에 할 일을 추가하려면 할 일을 하나 표시하기 위해 리플로우/리페인트가 한 번 발생하고, 전체 리스트를 표시하기 위해 리플로우/리페인트가 한 번 더 발생합니다. 그러나 React에서는 이 모든 과정을 가상 돔에서 수행하여 리플로우/리페인트를 한 번 만 수행하도록 합니다.

    이렇게 React에서는 가상 돔을 활용해 SPA의 리플로우/리페인트를 최소화하여 성능을 최적화 시켰습니다.</p>

    <h3>단방향 데이터 바인딩</h3>

    <p>우선 양방향 데이터 바인딩부터 살펴보겠습니다. 양방향 데이터 바인딩은 사용자 UI의 데이터 변경을 감시하는 Watcher와 Javascript 데이터의 변경을 감시하는 Watcher가 UI와 자바 스크립트 데이터를 자동으로 동기화 시켜주는 방식을 말합니다. 이를 통해 개발자는 Javascript 내의 데이터 변경과 사용자 UI의 데이터 변경에 관한 동기화를 신경쓰지 않고 프로그램을 작성할 수 있습니다.</p>


    <img src=https://velog.velcdn.com/images/jsh_0218/post/0f35e2a4-9d56-40b8-9e71-d30103a2456d/image.avif alt="양방향 데이터 바인딩 이미지" />

    <p>하지만 하나의 데이터 동기화에 두 개의 Watcher가 사용되고 데이터가 많아지게 되면 이 데이터의 동기화를 위한 수 많은 Watcher가 생성되므로 성능 저하가 발생할 수 있습니다.

    이러한 이유로 React에서는 단방향 데이터 바인딩을 사용합니다.</p>

    <img src=https://velog.velcdn.com/images/jsh_0218/post/12e8bf72-f1f7-42c9-9078-b0f8ef0f3b1c/image.avif alt="단방향 데이터 바인딩 이미지" />


    <p>단방향 데이터 바인딩은 단 하나의 Watcher가 Javascript의 데이터 갱신을 감지하여 사용자의 UI 데이터를 갱신합니다. 사용자가 UI를 통해 Javascript의 데이터를 갱신할 때는 이벤트를 통해 갱신하게 됩니다. 이처럼 단방향 데이터 바인딩은 하나의 Watcher를 사용하기 때문에 성능적인 이슈를 해결하고 확실하게 데이터를 추적할 수 있게 해줍니다.</p>

    <h3>JSX</h3>

    <p>JSX는 Javascript와 HTML을 동시에 사용하며 HTML에 Javascript의 변수들을 바로 사용할 수 있는 일종의 템플릿 언어(Template Language)입니다.</p>

    <img src="${blogPostImg.post4Img1}" alt="JSX 예시" />

    <p>React는 위와 같이 Javascript에서 HTML을 사용할 수 있으며 Javascript 변수를 HTML 태그에서 바로 호출하여 사용할 수 있습니다.</p>

    <h3>Props와 State</h3>

    <h4>Props</h4>

    <p>부모 Component에서 자식 Component로 전달해 주는 데이터를 말합니다. 자식 Component에서 전달받은 Props는 변경이 불가능하고 Props를 전달해준 최상위 부모 Component만 Props를 변경할 수 있습니다.</p>

    <h4>State</h4>

    <p>State는 Component 내부에서 선언하며 내부에서 값을 변경할 수 있습니다. State는 동적인 데이터를 다룰 때 사용하며 사용자와의 상호작용을 통해 데이터를 동적으로 변경할 때 사용합니다. 클래스형 Component에서만 사용할 수 있고, 각각의 State는 독립적입니다.</p>

    <h3>Component 기반</h3>

    <p>Component는 독립적인 단위의 소프트웨어 모듈을 말합니다.

    React는 UI(View)를 여러 Component를 쪼개서 만듭니다.

    한 페이지 내에서도 여러 각 부분들을 독립된 Component로 만들고, 이 Component를 조립해 화면을 구성합니다.

    Component 단위로 쪼개져 있기 때문에 전체 코드를 파악하기가 상대적으로 쉽습니다. 이렇게 기능 단위, UI 단위로 캡슐화시켜 코드를 관리하기 때문에 재사용성이 높습니다. 코드를 반복해서 입력할 필요 없이 Component를 import하여 사용하면 된다는 간편함이 있으며 코드의 유지 보수, 관리가 쉬워지는 장점이 있습니다.</p>

    <img src=${blogPostImg.post4Img2} alt="컴포넌트로 분할 이미지" />

    <p>Layout, Header와 같은 구조를 Component로 만들고, 이를 조합해서 Root Component를 만드는 방식으로 구조를 이루고 있습니다.</p>

    <p>오늘은 React는 무엇인지, React의 특징은 무엇인지 간단하게 알아보았습니다.</p>

    <br />

    <p>Reference</p>

    <hr />

    <a href="https://velog.io/@jini_eun/React-React.js%EB%9E%80-%EA%B0%84%EB%8B%A8-%EC%A0%95%EB%A6%AC#4-props-and-state">
    <p>https://velog.io/@jini_eun/React-React.js%EB%9E%80-%EA%B0%84%EB%8B%A8-%EC%A0%95%EB%A6%AC#4-props-and-state</p></a>

    <a href="https://deku.posstree.com/ko/react/create-react-app/react/"><p>https://deku.posstree.com/ko/react/create-react-app/react/<p/></a>

    <p>이미지 출처 - <a href="https://deku.posstree.com/ko/react/create-react-app/react/">https://deku.posstree.com/ko/react/create-react-app/react/</a></p>
    `,
  },
  {
    post_id: 5,
    title: 'Axios',
    creation_date: '2024-02-07',
    thumbnail: '',
    content: `
    <h1>Axios 란?</h1>

    <p>
    지난번 Restful API에 대해 알아보면서 HTTP Method에 대해 배워보았습니다. 이러한 API 통신을 위해 클라이언트에 많은 라이브러리가 있는데, 그 중 Axios에 대해 알아보고자 합니다.
    </p>

    <p>
    Axios에 대해 배우기 전에 우선 AJAX에 대해 알아볼 필요가 있습니다.
    </p>

    <h2>AJAX</h2>

    <p>AJAX란 Asynchronous Javascript And XML(비동기식 Javascript와 XML)의 약자로 Javascript의 라이브러리 중 하나입니다. 브라우저가 가지고 있는 XMLHttpRequest 객체를 이용해서 전체 페이지를 새로 고치지 않고도 페이지의 일부만을 위한 데이터를 로드하는 기법이며, JavaScript를 사용한 비동기 통신, 클라이언트와 서버 간에 XML 데이터를 주고받는 기술입니다. 간단히 말해보자면 자바스크립트를 통해서 서버에 데이터를 요청하는 것입니다.</p>

    <h2>비동기 방식이란?</h2>

    <p>비동기 방식은 웹페이지를 리로드하지 않고 데이터를 불러오는 방식이며, Ajax를 통해서 요청을 한 후 멈춰 있는 것이 아니라 그 프로그램은 계속 돌아간다는 의미를 내포하고 있습니다.</p>

    <h2>비동기 방식의 장점</h2>

    <p>페이지 리로드의 경우 전체 리소스를 다시 불러와야 하는데 이미지, 스크립트, 기타 코드 등을 모두 재요청할 경우 불필요한 리소스 낭비가 발생하게 되지만, 비동기 방식을 이용할 경우 필요한 부분만 불러와 사용할 수 있어 이러한 낭비를 줄일 수 있다는 장점이 있습니다.</p>

    <h2>Axios의 특징</h2>

    <p>Axios는 브라우저, Node.js를 위한 Promise API를 활용하는 HTTP 비동기 통신 라이브러리입니다.</p>

    <p>Axios의 특징은 아래와 같습니다.</p>

    <p>운영 환경에 따라 브라우저의 SMLHttpRequest 객체 또는 Node.js의 HTTP API 사용</p>
    <p>Promise(ES6) 사용</p>
    <p>요청과 응답 데이터의 변형</p>
    <p>HTTP 요청 취소 및 요청과 응답을 JSON형태로 자동 변경</p>

    <h2>Axios 사용법</h2>

    <h3>Axios 다운로드</h3>

    <blockquote>
    <p>yarn add axios</p>
    <p>npm i axios</p>
    <p>#자신의 프로젝트 상위에 import</p>
    <p>import axios from ‘axios’</p>
    </blockquote>

    <h2>HTTP Methods 활용해보기</h2>

    <h3>1. GET</h3>

    <h4>GET: 입력한 URL에 존재하는 자원에 요청한다.</h4>

    <img src=${blogPostImg.post5Img1} alt="" />

    <h3>2. POST</h3>

    <h4>POST: 새로운 리소스를 생성(create)할 때 사용한다.</h4>

    <p>POST Method의 두 번째 인자는 본문으로 보낼 데이터를 설정한 객체 리터럴을 전달한다.</p>

    <p>POST를 사용하면 주소창에 쿼리스트링이 남지 않아 GET보다 안전하다.</p>

    <img src=${blogPostImg.post5Img2} alt="" />

    <h3>3. DELETE</h3>

    <h4>DELETE: 리소스를 삭제할 때 사용한다.</h4>

    <img src=${blogPostImg.post5Img3} alt="" />

    <h3>4. PUT</h3>

    <h4>PUT: 리소스를 갱신할 때 사용된다.</h4>

    <img src=${blogPostImg.post5Img4} alt="" />

    <p>오늘은 axios 라이브러리에 대해 알아보았습니다.</p>

    <br />

    <p>Reference</p>

    <hr />

    <a href="https://velog.io/@shin6403/React-axios%EB%9E%80-feat.-Fetch-API#-axios-%ED%8A%B9%EC%A7%95"><p>https://velog.io/@shin6403/React-axios%EB%9E%80-feat.-Fetch-API#-axios-%ED%8A%B9%EC%A7%95</p></a>
    `,
  },
  {
    post_id: 6,
    title: '포트폴리오 웹 사이트 오류 해결 (1)',
    creation_date: '2024-02-20',
    thumbnail: blogThumbnailImg.thumbnail6,
    content: `
    <p>여느 날처럼 포트폴리오 웹 사이트 개발을 하면서 블로그 게시물 수정 테스트를 하고 있던 도중 오류를 발견했습니다. 그 오류는...</p>
    
    <img src="https://velog.velcdn.com/images/jsh_0218/post/b1b6f451-2f31-4177-bdc4-47e7ca809567/image.png" alt="오류 이미지">
    
    <p>게시물 수정 시 작성 날짜가 현재 날짜로 바뀌는 것...!</p>
    
    <p>처음에는 프론트 쪽에 문제가 있는 줄 알고 날짜 포맷을 바꿔보거나 했지만 여전히 같은 문제가 지속되었고</p>
    
    <p>개발자 도구의 Network 탭을 통해 블로그 게시물 리스트를 불러오는 API의 Response를 확인한 결과 리스트를 불러올 때 애초에 현재 날짜로 바뀌어 있었습니다.</p>
    
    <p>프론트엔드 쪽의 문제가 아니었던 것..</p>
    
    <p>그렇게 백엔드 코드도 뒤져보고 문제가 없다는 것을 깨닫고 난 뒤 오류가 난 곳을 찾게 되었는데....</p>
    
    <img src="https://velog.velcdn.com/images/jsh_0218/post/e9f27469-f1b6-4860-94c5-d7cc4999109f/image.png" alt="백엔드 코드">
    
    <p>데이터베이스에서 이미 날짜가 현재 시각으로 설정되어 있었습니다.</p>
    
    <p>왜 이렇게 되었나 살펴보았더니</p>
    
    <img src="https://velog.velcdn.com/images/jsh_0218/post/15cca56c-cdbd-4460-96ac-9deeaa75f886/image.png" alt="데이터베이스 설정">
    
    <p>ON UPDATE CURRENT_TIMESTAMP가 붙어있었습니다 짜잔...?</p>
    
    <p>분명 로컬에서 할 때는 ON UPDATE CURRENT_TIMESTAMP는 넣지 않았는데 어째서 이런 일이 일어났나 했더니</p>
    
    <p>서버로 올리기 위해 서버 쪽 컴퓨터로 데이터베이스를 복사하는 과정에서 자동으로 추가된 것이었습니다..</p>
    
    <img src="https://velog.velcdn.com/images/jsh_0218/post/69ad30ee-b8ca-4816-8208-56f3145c74e2/image.png" alt="서버 복사 과정">
    
    <p>결국 ON UPDATE CURRENT_TIMESTAMP는 지우고 원래 날짜로 업데이트 해준 뒤에</p>
    
    <img src="https://velog.velcdn.com/images/jsh_0218/post/082c23db-91f7-4bb8-8ba4-a23837985eb4/image.png" alt="업데이트 후">
    
    <p>정상적으로 돌아왔답니다..</p>
    
    <img src="https://velog.velcdn.com/images/jsh_0218/post/69da43b7-7b75-493e-94bb-f2bbee59fbe8/image.png" alt="정상 처리된 날짜">
    
    <p>다행히 날짜가 정상 처리되고 수정해도 작성한 날짜 그대로 나오게 되었습니다.
    DB 무료 Tool 사용하면 가끔 이런 일이 일어난다고 하네요....</p>
    
    <p>DB 무료 Tool 사용할 때는 다들 조심하시길 바라며 이만 포스팅 마칩니다.</p>

    `,
  },
  {
    post_id: 7,
    title: '첫 모의 면접 후기',
    creation_date: '2024-02-29',
    thumbnail: '',
    content: `
    <h1>모의 면접 후기 (1)</h1>

    <p>취직을 위해 이곳 저곳 이력서를 넣게 되었고 면접 준비를 해야할 시기가 다가왔습니다.</p>

    <p>현재 공부하러 다니고 있는 회사에서 면접을 잘 보기 위해 모의 면접을 도와주겠다고 해주셔서 2월 28일 첫 모의 면접을 보게되었습니다. 그리하여 이번 게시물은 모의 면접 후기입니다.</p>

    <h2>24.02.28 첫 모의 면접</h2>

    <h3>후기</h3>

    <p>우선 자기소개로 시작을 하게 되었는데 시작부터 머리에 아무것도 떠오르지 않아 아무 말도 못한 채로 1분 가량 있었습니다. 보다 못한 면접관 분께서 편하게 말씀하셔도 된다고 해주셨으나 아무 말도 못하다가 어영부영 시작하게 되었고 그마저도 제대로 끝내지 못했습니다. 자기소개를 복기하느라 뒤의 질문에 대해 제대로 답하거나 더 좋은 답변을 생각하지 못하고 또 후회하는 식으로 흘러가게 되어서 첫 모의 면접은 완전 실패로 끝났습니다.</p>
    <h4>아래는 모의 면접 후 받은 피드백입니다.</h4>
    <br />
    <ul style="margin-left:25px;">
        <li>자기소개 할 수 있게 어느 정도 틀 만들어 둘 것</li>
        <li>사용한 기술 스택에 대해 명확하게 설명할 수 있어야한다 (ex. 'react왜 쓰게 되었나요?' 등)</li>
        <li>이력서에 자기소개 부분에 기술 소개만 있고 자신이 어떠한 사람인지 보여지지 않는다</li>
        <li>잘한 것이나 장점은 확실하게 어필할 것</li>
    </ul>
    <br />
    <p>등등이 있었고 셀프 피드백으로는</p>
    <br />
    <ul style="margin-left:25px;">
        <li>음..... 하는 습관 줄이기</li>
        <li>이러한, 그러한, 저러한, 어떠한, 무언가 등등 뭉뚱그려 말하는 습관 줄이기</li>
        <li>기초 지식 공부</li>
    </ul>
    <br />
    <p>등이 있었습니다.</p>

    <p>피드백을 받은 후 최소한 자기소개 정도는 해야겠다고 생각해서 머릿속으로 계속해서 정리를 했고 얼추 자기소개를 할 수 있게 되었습니다.</p>

    <h2>24.02.29 두번째 모의 면접</h2>

    <h3>후기</h3>

    <p>어제와 마찬가지로 자기소개로 시작했고 계속 복기한 것이 도움이 되었는지 자기소개를 잘 끝마쳤습니다. 흐름이 괜찮게 흘러갔고 어제보다는 훨씬 나아진 상태로 면접에 임할 수 있었습니다.</p>

    <h4>피드백입니다.</h4>
    <br />
    <ul style="margin-left:25px;">
        <li>전반적으로 대답이 괜찮았으나 개발 지식 관련하여 좀 더 공부해야할 필요성이 보인다</li>
        <li>안좋게 비춰질 수 있는 대답은 피하자</li>
        <li>개발 지식이 낮다는 것을 전제로 대답하는 것을 피하자</li>
        <li>단점을 너무 이야기 한다</li>
    </ul>
    <br />
    <p>셀프 피드백으로는</p>
    <br />
    <ul style="margin-left:25px;">
        <li>말을 좀 흐리는 편이 있다</li>
    </ul>
    <br />
    <p>정도가 될 것 같습니다.</p>

    <p>어제보다는 훨씬 나아졌다고 해주셨지만 좀 더 다듬고 면접 공부를 더 해서 다음에는 더 칭찬 듣도록 노력할 것 입니다....</p>

    `,
  },
  {
    post_id: 8,
    title: '첫 면접 후기',
    creation_date: '2024-03-11',
    thumbnail: '',
    content: `
    <h1>면접 후기</h1>

    <p>모 회사의 서류와 코딩테스트를 통과하여 실제 면접을 처음으로 보게 되었습니다.</p>

    <p>면접 회고를 하려고 게시물을 작성했습니다.</p>

    <p>질문 기억나는대로 적고 공부해야할 것들 정리하려고 했는데 금요일에 했어야 했는데 못해서 지금 합니다 헿</p>
    <h2>질문 목록</h2>
    <p>1. 반응형도 했다고 했는데 웹 표준과 웹 접근성도 고려하면서 한 것인가요?</p>
    <p>2. 반복되는 코드를 컴포넌트화 했다고 하셨는데 어떤 식으로 한건지 설명이 가능한가요?</p>
    <p>2-1. 맵 함수로 반복하셨다고 했는데 Key props에 대해 설명해주세요</p>
    <p>3. HTTP 메서드 아는대로 설명해주세요</p>
    <p>4. 리액트 사용하셨으면 가상 돔에 대해 설명해주세요</p>
    <p>4-1. 리플로우와 리페인팅에 대해 설명해주세요</p>
    <p>5. 자바스크립트의 클로저에 대해 설명해주세요</p>
    <p>6. 자바스크립트의 쓰레드는 몇개일까요?</p>
    <p>6-1. 이벤트 루프가 싱글쓰레드라고 하셨는데 이벤트 루프에 대해 설명해주세요</p>
    <p>7. 학부에서는 다른 언어 배운 것이 있나요?</p>
    <p>8. 브라우저에 URL을 입력하면 일어나는 일에 대해서 설명해주세요</p>
    <p>9. HTML이 렌더링 될 때 자바스크립트 코드를 만나면 어떻게 될까요?</p>
    <p>9-1. 그렇다면 어떻게 해결할 수 있을까요?</p>
    <p>10. 컴포넌트에서 버튼 클릭 시 이벤트 함수 내에서 setState(state + 1)이 3번 있으면 버튼 한 번 클릭 시 어떻게 될까요?</p>
    <p>11. use Hook이 if문 안에 들어갈 수 있나? 못 들어간다면 이유는?</p>
    <p>12. 로컬스토리지에 들어간 아이템과 let a = 0 으로 선언된 변수와 useRef를 사용한 변수의 차이점</p>
    <br />
    <h2>제대로 대답하지 못한 질문: 1, 2-1, 6-1</h2>

    <p>1: 웹 표준이라는 개념을 이해하지 못 했습니다. 오히려 웹 표준이라면 어떤 것을 뜻할까요? 같이 설명을 요구했습니다.</p>
    <p>2-1: Map을 쓰고 Key도 쓰는데 key props가 무엇인지는 알고 있었지만 그 내용을 key props라고 부른다는 것을 몰랐습니다.</p>
    <p>6-1: 이벤트 루프에 대해 정확한 개념을 잘 숙지하지 못했습니다.</p>

    <h2>애매하게 대답해서 아쉬웠던 질문: 5, 10, 11, 12</h2>

    <p>5: 클로저에 대해 좀 더 명확하게 알고 있었어야 한다고 생각합니다. 어떤 것인지는 알고 있었으나 확실하게 답을 하지 못한 것 같습니다.</p>
    <p>10, 11, 12: 처음에 다 틀린 답을 말하고 후에 왜 틀렸는지에 대한 설명은 어느 정도 한 것 같은데 그마저도 자신감있게 답을 하지 못했습니다. useRef 같은 경우 제가 사용해 본 적이 없어서 당황한 것도 있지만 나머지는 제대로 설명해서 맞췄으면 됐을거 같은데 아쉬운 부분이 있습니다.</p>

    <p>아쉬운 점: 다음 면접에 대한 질문도 했어야했는데 머리가 하얘져서 생각을 하지 못했습니다.... 물어볼 걸...</p>

    <p>아직 결과가 나오지 않았지만 기술적으로도 이론적으로도 많이 성장하게 된 면접이었습니다. 배운 점도 많았고 제가 생각했던 거랑 다른 답이 나오니까 재밌고 신기하기도 했습니다.</p>

    <p>좀 더 열심히 달려보고자 합니다.</p>

    `,
  },
  {
    post_id: 9,
    title: '구글 애널리틱스 적용하기',
    creation_date: '2024-03-22',
    thumbnail: blogThumbnailImg.thumbnail9,
    content: `
    <p>제 기술 블로그에 어떤 경로로 얼마나 들어왔는지 파악하고 데이터를 시각적으로 보기 위해 찾던 도중 구글 애널리틱스를 알게되었습니다.</p>
    
    <p>오늘은 구글 애널리틱스를 어떻게 적용하는 지에 대해 알아보겠습니다.</p>
    
    <p>우선 애널리틱스를 들어가보겠습니다.</p>
    
    <p><a href="https://analytics.google.com/analytics/web" target="_blank">https://analytics.google.com/analytics/web</a></p>
    
    <p>위에 있는 링크에 들어가면</p>

    <img src=${blogPostImg.post9Img1} alt="구글 애널리틱스 첫 화면" />

    <p>해당 화면이 나오게 됩니다. 측정 시작을 눌러봅시다.</p>

    <img src=${blogPostImg.post9Img2} alt="구글 애널리틱스 측정 화면1" />

    <p>계정 세부 정보를 입력해주고,</p>

    <img src=${blogPostImg.post9Img3} alt="구글 애널리틱스 측정 화면2" />

    <p>속성을 만들어 줍니다. 저는 지금 보고 있는 웹사이트에 대한 측정이 필요하기 때문에 포트폴리오 웹사이트로 했습니다.</p>

    <img src=${blogPostImg.post9Img4} alt="구글 애널리틱스 측정 화면3" />

    <p>어떠한 비즈니스인지 선택해주면 됩니다.</p>

    <img src=${blogPostImg.post9Img5} alt="구글 애널리틱스 측정 화면4" />

    <p>마찬가지로 비즈니스의 목표를 선택해줍니다.</p>

    <img src=${blogPostImg.post9Img6} alt="구글 애널리틱스 측정 화면5" />

    <p>동의 해준 다음 화면이 넘어가면 데이터 수집을 시작합니다.</p>

    <img src=${blogPostImg.post9Img7} alt="구글 애널리틱스 측정 화면6" />

    <p>웹을 클릭하고,</p>

    <img src=${blogPostImg.post9Img8} alt="구글 애널리틱스 데이터 스트림 설정화면" />

    <p>데이터 스트림을 설정해준 후 스트림을 만들면 끝!</p>
    <p>이제 사이트에 적용해봅시다.</p>

    <img src=${blogPostImg.post9Img9} alt="구글 애널리틱스 웹 스트림 세부정보 화면" />

    <p>웹 스트림 세부정보가 나옵니다. 화면에 있는 측정 ID를 복사해줍니다.</p>

    <img src=${blogPostImg.post9Img11} alt="구글 애널리틱스 데이터 스트림 설정화면" />
    
    <p>.env에 측정 ID를 넣고 설정하여 App.tsx에 보이는 코드를 붙여넣어 줍니다.</p>

    <img src=${blogPostImg.post9Img10} alt="구글 애널리틱스 데이터 스트림 설정화면" />

    <p>보시는 것처럼 웹사이트에 대한 데이터가 시각화 되어 편리하게 볼 수 있습니다.</p>
    <p>이렇게 되면 제 웹사이트를 누가 얼마나 어떤 경로로 확인했는지 알 수 있기 때문에 웹 사이트 관리를 효율적으로 할 수 있습니다.</p>
    <p>오늘은 간단하게 구글 애널리틱스(GA)를 적용시키는 방법을 배워 보았습니다.</p>
    <p>잘 적용해서 웹사이트 관리를 효율적으로 하시길 바랍니다.</p>
    `,
  },
  {
    post_id: 10,
    title: '구글 폰트 적용하기',
    creation_date: '2024-03-29',
    thumbnail: blogThumbnailImg.thumbnail10,
    content: `
    <p>오늘의 포스팅은 구글 폰트 적용입니다.</p>
    
    <p>기본 폰트가 불편한 것 보다는 조금 더 잘 보이는 폰트를 찾아서 적용 해야겠다는 생각에 바꾸게 되었습니다.</p>
    
    <p>폰트의 종류에도 여러가지가 있고 폰트 사이트에도 여러가지가 있는데 그 중 구글 폰트를 사용해보겠습니다.</p>
    
    <p>먼저 구글 폰트로 들어가 봅시다.</p>

    <p><a href="https://fonts.google.com/" target="_blank">https://fonts.google.com/</a></p>

    <p>보시는 것처럼 굉장히 다양한 폰트가 있습니다.</p>
    
    <p>그 중 가장 무난하고 사람들이 많이 사용하는 Noto Sans Korean 을 사용 해 보겠습니다.</p>

    <p>해당 화면에서 Get font 를 클릭하고</p>

    <p>저는 html에 적용할 것이므로 Get embed code를 클릭해줍니다.</p>

    <p>보이는 코드를 카피하여 html 파일의 &lt;head&gt; 태그 안에 넣어줍니다.</p>

    <p>이렇게 하면 끝!</p>
    <p>인 줄 알았으나... 아무리 해도 적용이 되질 않더라구요..</p>
    <p>그런 관계로 가장 상위에 있는 index.css 파일에서</p>
    <pre>
      *{
        font-family: 'Noto Sans KR', serif !important
      }
    </pre>
    <p>를 사용하여 적용해줬습니다.</p>
    <img src=${blogPostImg.post10Img1} alt="" />
    <img src=${blogPostImg.post10Img2} alt="" />
    <img src=${blogPostImg.post10Img3} alt="" />
    <img src=${blogPostImg.post10Img4} alt="" />
    <img src=${blogPostImg.post10Img5} alt="" />
    <img src=${blogPostImg.post10Img6} alt="" />
    <img src=${blogPostImg.post10Img7} alt="" />
    <p>아래는 변경 후 모습입니다.</p>
    <img src=${blogPostImg.post10Img8} alt="" />
    <img src=${blogPostImg.post10Img9} alt="" />
    <img src=${blogPostImg.post10Img10} alt="" />
    <img src=${blogPostImg.post10Img11} alt="" />
    <img src=${blogPostImg.post10Img12} alt="" />
    <img src=${blogPostImg.post10Img13} alt="" />
    <img src=${blogPostImg.post10Img14} alt="" />

    <p>매우 큰 차이는 없지만 글씨체 자체가 좀 더 두께감이 생기고 알아보기 쉽게 변경이 잘 되었습니다.</p>
    <p>오늘은 구글 폰트 적용에 대해 알아보았습니다.</p>

    `,
  },
  {
    post_id: 11,
    title: 'Vanilla JS로 to-do list 만들기',
    creation_date: '2024-04-05',
    thumbnail: blogThumbnailImg.thumbnail11,
    content: `
    <p>4월 4일 목요일, N사의 코딩 테스트를 보러 갔습니다.</p>
    
    <p>후기를 찾아보니 프론트엔드의 경우 흔히 보는 알고리즘 코딩테스트가 아닌 시간 내에 Vanilla JS로 주어진 화면을 구현하는 방식이었습니다.</p>
    <p>이를 위해 "to-do list 만들기"로 실습 연습을 했었습니다.</p>
    <p>본 게시물은 연습하면서 구현한 코드 리뷰입니다.</p>
    
    <p>우선 Html에 Title, 아이템 추가 기능 section, 아이템 리스트 section을 div로 나눴습니다.</p>

    <img src=${blogPostImg.post11Img1} alt="투두리스트 html 코드" />
    
    <p>그 후 JS로 기능 구현을 하였습니다.</p>
    
    <p>use strict를 통해 엄격 모드를 활성화 하고, itemList 배열과 itemId를 정의해줍니다.</p>
    <p>이후 버튼을 불러와 addEventListener를 통해 클릭 시 아이템을 추가할 수 있도록 해주고</p>
    <img src=${blogPostImg.post11Img2} alt="투두리스트 JS 코드1" />
    
    <p>아이템을 추가하는 함수인 addItem을 적어줍니다.</p>
    <img src=${blogPostImg.post11Img3} alt="투두리스트 JS 코드2" />
    
    <p>렌더링 함수도 추가해줍니다.</p>
    <img src=${blogPostImg.post11Img4} alt="투두리스트 JS 코드3" />
    
    <p>체크 상태를 확인하기 위해 checkedClass와 checkBtnColor를 const로 넣어줍니다.</p>
    <p>마지막으로 초기 렌더링을 위해 renderList()를 불러옵니다.</p>
    <img src=${blogPostImg.post11Img5} alt="투두리스트 JS 코드4" />

    <p>아래는 css입니다.</p>
    <img src=${blogPostImg.post11Img6} alt="투두리스트 css 코드1" />
    
    <img src=${blogPostImg.post11Img7} alt="투두리스트 css 코드2" />

    <img src=${blogPostImg.post11Img8} alt="투두리스트 css 코드3" />

    <p>btnWrap의 position을 absolute로 주어 체크와 삭제 버튼에도 line-through가 생기는 문제를 해결했습니다.</p>
    <p>추가적으로 </p>
    <p>이상으로 간단하게 to-do list를 만들 수 있게 되었고 결과물은</p>
    <img src=${blogThumbnailImg.thumbnail11} alt="투두리스트 css 코드2" />

    <p>해당 화면처럼 잘 나오게 됐습니다.</p>
    <p>그러나...</p>
    <p>코딩 테스트 당시</p>
    <ul style="margin-left:25px;">
      <li>use strict를 적지 않았음(큰 문제는 아니지만 습관이 덜 되었다는 점을 자각했습니다.).</li>
      <li>초기 렌더링을 하지 않았음.</li>
      <li>css를 완벽하게 하지 못했음.</li>
      <li>JavaScript 코딩할 때 디테일 한 부분을 챙기지 못하였음.</li>
      <li>itemList에 아무것도 없을 때 list 빈 화면 보여주는 작업(없으면 아이템 전부 삭제 시 비어있는 한 칸이 보임).</li>
      <li>input에 빈 칸일 때 아이템이 추가 됨.</li>
    </ul>

    <p>아쉬웠던 부분은 있었지만 기본적인 기능은 다 구현했기 때문에 후회는 없었고 많이 배웠던 시간이었습니다.</p>
    `,
  },
  {
    post_id: 12,
    title: '정보처리기사 실기 후기',
    creation_date: '2024-05-01',
    thumbnail: '',
    content: `
    <p>정보처리기사 실기 준비로 인하여 기술 블로그 작성을 잘 하지 못했습니다.</p>
    
    <p>그렇게 오늘은 정보처리기사 실기 후기를 써보려합니다.</p>
    
    <p>시험 준비를 위해 우선 서점에서 책을 구매하였습니다.</p>
    
    <p>제가 구매한 책은 "시나공 퀵이지 정보처리기사 실기 단기완성" 입니다.</p>

    <img src=${blogPostImg.post12Img1} alt="2024 시나공 퀵이지 정보처리기사 실기 단기완성">

    
    <p>한달이 채 되지 않는 시간 안에 준비를 완료해야 했기 때문에 빠르게 훑어보고 문제를 풀어볼 수 있는 단기완성을 골랐고 우선 개념을 쭉 읽어보는 것으로 공부를 시작하였습니다.</p>
    
    <p>프로그래밍 문제와 SQL 문제는 익숙한 것도 있었고 학교 수업에선 잘 이해하지 못했던 포인터, 상속 등을 다시 보며 부족했던 CS 지식에 대해 조금 더 채울 수 있는 경험이었습니다.</p>
    
    <p>가장 어려웠던 것은 프로토콜, 보안 공격, 디자인 패턴 등이었습니다.</p>
    
    <p>우선 종류가 너무 많았기 때문에 통째로 외우는 것은 어려움을 느껴 특정 키워드와 엮으면서 암기하였습니다.</p>
    
    <p>객체 생성을 "추상화" 하는 추상 팩토리(Abstract Factory)패턴, "경량화"라는 단어가 나오면 플라이 웨이트(Flyweight) 패턴 등 패턴의 이름을 해석하고 설명의 키워드와 엮어서 외우니 좀 더 편하게 외울 수 있었던 것 같습니다.</p>
    
    <p>보안 파트같은 경우에도 키워드를 위주로 암기하였는데, 그럼에도 너무 많아서 시험 당일까지도 헷갈려했던 파트였습니다.</p>
    
    <p>다행스럽게도 정확히 외웠던 부분에서 시험 문제가 출제되었기에 잘 맞출 수 있었습니다.</p>
    
    <p>다양한 개념들을 다시 복습하거나 새롭게 배우면서 저의 전공 지식을 더 채우고 정립할 수 있는 시간이었습니다.</p>
    
    <p>이후에는 인터넷에 올라와있는 기출문제나 시나공 책에 있는 기출문제를 위주로 풀어서 문제 형식에 익숙해지고자 하였고 기출 문제에 나오는 개념들이 익숙해지고 난 후에는 수제비 카페에 올라오는 데일리 문제들을 풀며 개념을 정리하는 시간을 가졌습니다.</p>
    
    <p>시험 당일에는 여러 자료들을 찾던 도중 한 사이트를 발견하여 그 사이트에 정리되어있는 개념들을 쭉 훑어보며 멘탈을 잡으며 시간을 보냈습니다.</p>
    
    <p>참고 URL -&nbsp;<a href="https://starrykss.tistory.com/1856" target="_blank">https://starrykss.tistory.com/1856</a></p>
    
    <p>필기 시험을 합격한지 거의 10개월이 넘어가는 시점이라 잊어버린 부분도 있고 다시 기억나는 부분도 있었지만 실기 시험을 준비하는 동안 다시 한 번 공부하며 한 걸음 더 성장할 수 있는 기회가 되었습니다.</p>

    <p>가채점 결과는 다행히 합격으로 나왔고, 이번 기회를 통해 다시 한 번 마음을 다 잡고 취업 준비를 다시 시작하고자 합니다.</p>
    
    <p>6월 18일, 정보처리기사 실기 합격으로 정보처리기사가 되었습니다!!!!</p>
    `,
  },
  {
    post_id: 13,
    title: '이스트 소프트 부트캠프 시작',
    creation_date: '2024-05-16',
    thumbnail: '',
    content: `
    <p>최근 혼자 프로젝트를 진행하기 벅차다는 생각도 있었고, 경험이 많이 필요할 것 같다는 고민을 하던 찰나 이스트 소프트 부트캠프의 존재를 알게 되었고, 너무 짧지도 길지도 않은 기간과 온라인 편의성, 좋은 커리큘럼 등 장점이 많이 보여서 신청하게 되었습니다.</p>
    
    <p>프론트엔드 부트캠프 1기 오르미를 접수하기 위해 서류 작성을 해야했고 여러 질문이 있었습니다.</p>
    
    <p>질문들은 다음과 같았습니다.</p>
    
    <p>1. 프론트엔드에 대한 지식을 어떻게 학습해 왔는지</p>
    
    <p>2. 프론트엔드 개발자가 되고 싶은 이유가 무엇인지</p>
    
    <p>3. 프론트엔드 오르미 1기 지원하면서 각오 한마디</p>
    
    <p>그 동안 생각만 해왔지만 막상 글로 쓰려하니 굉장히 어려운 기분이 들었습니다.</p>
    
    <p>내가 이 길을 왜 걸어 가고 싶은지, 나는 어떤 사람인지 다시 생각하게 되는 계기가 되었고 좀 더 마음을 잡게 되었습니다.</p>
    
    <p>개인 별로 연락을 주기 때문인지 서류 결과는 바로 나왔습니다.</p>
    
    <p>프론트엔드 오르미 1기에 합격했습니다!</p>
    
    <p>6월부터 10월까지 4개월의 일정을 잘 소화해서 다양한 경험을 쌓고 준비된 상태로 취업준비에 다시 임하고자 합니다.</p>
    
    <p>열심히 해보겠습니다!</p>
    `,
  },
  {
    post_id: 14,
    title: '부트캠프 6월 1주차 정리',
    creation_date: '2024-06-07',
    thumbnail: blogThumbnailImg.thumbnail14,
    content: `
    <h2>block / inline / inline-block</h2>

    <h3>block</h3>
    <ul style="margin-left: 25px">
      <li>가능한 모든 너비 차지</li>
      <li>항상 새로운 줄에서 시작</li>
      <li>이전, 이후 요소 사이에 줄바꿈이 일어남</li>
      <li>인라인 요소 안에 블록 요소는 중첩 가능하나 반대는 불가능</li>
    </ul>

    <h3>inline</h3>
    <ul style="margin-left: 25px">
      <li>항상 블록 레벨 요소 내부에 포함 됨</li>
      <li>컨텐츠에 따라 너비가 달라짐</li>
      <li>새로운 줄을 만들지 X</li>
      <li>width, height 지정 X</li>
      <li>padding/border/margin(좌우) 사용 O</li>
    </ul>
    
    <h3>inline-block</h3>
    <ul style="margin-left: 25px">
      <li>인라인 속성을 따르지만 너비와 높이 조절 가능</li>
      <li>margin, padding 상하 간격 지정 가능</li>
      <li>button, input, select</li>
    </ul>

    <h2>div / span</h2>

    <h3>div</h3>
    <ul style="margin-left: 25px">
      <li>block 요소</li>
      <li>공간을 나누고 정리의 역할을 하는 광범위하게 사용되는 태그</li>
      <li>지정된 기능은 영역을 구분 짓기</li>
      <li>SEO, 코드가독성, 접근성 등에 도움을 주는 태그가 아니기 때문에 공간을 나누기 위한 용도로 사용을 권장함.</li>
    </ul>

    <h3>span</h3>
    <ul style="margin-left: 25px">
      <li>inline 요소</li>
      <li>스타일 적용 시 인라인 요소 묶을 때 사용함(p,a 등)</li>
    </ul>

    <h2>실습</h2>

    <h3>스크린샷</h3>
    <img src=${blogPostImg.post14Img1} alt="로그인 페이지 실습 스크린샷" />

    <h3>코드</h3>
    <img src=${blogPostImg.post14Img2} alt="로그인 페이지 실습 코드" />

    <img src=${blogPostImg.post14Img3} alt="로그인 페이지 실습 코드" />
    `,
  },
  {
    post_id: 15,
    title: '6월 2주차 정리',
    creation_date: '2024-06-14',
    thumbnail: '',
    content: `
    <h1>6월 2주차 정리</h1>

    <h2>HTML</h2>

    <h3>form</h3>

    <ul style="margin-left:25px">
      <li>
        form은 사용자로부터 입력을 받기 위한 양식을 작성하는 태그들을 통틀어 부르는 말
      </li>
      <li>
        입력한 데이터를 제출하는 데에 주 목적이 있음
      </li>
      <li>
        예시: 로그인, 회원가입
      </li>
    </ul>

    <h3>action</h3>

    <ul style="margin-left:25px">
      <li>
        form 데이터를 처리할 URL 작성
      </li>
      <li>
        데이터를 어디로 보낼 것인지 지정하며 값은 반드시 유효한 URL이어야 함
      </li>
      <li>
        지정하지 않을 경우 데이터는 form이 있는 페이지의 URL로 보내짐
      </li>
    </ul>

    <h3>method</h3>
    <ul style="margin-left:25px">
      <li>
        양식을 제출하는 데에 사용(http 메소드)
      </li>
    </ul>

    <h4>GET vs POST</h4>
    
    <img src=${blogPostImg.post15Img1} alt="GET vs POST 테이블" />


    <h3>input</h3>

    <h4>공통 속성</h4>

    <ul style="margin-left:25px">
      <li>
        type: input 양식 컨트롤의 유형
      </li>
      <li>
        name: input 양식 컨트롤의 이름
      </li>
      <li>
        value: input 양식 컨트롤의 값
      </li>
      <li>
        autocomplete: on / off 양식 자동완성 기능에 대한 힌트
      </li>
      <li>
        placeholder: 양식 컨트롤이 비어있을 때 나타내는 내용(ex. 아이디를 입력하시오)
      </li>
      <li>
        required: 전송을 위한 필수 입력 값
      </li>
      <li>
        disabled: 비활성화
      </li>
      <li>
        readonly: 수정불가(읽기 전용)
      </li>
    </ul>


    <h3>SEO란?</h3>

    <ul style="margin-left:25px">
      <li>
        Search Engine Optimization의 줄임말, 한국어로는 검색 엔진 최적화
      </li>
      <li>
        사이트마다 정책과 적용 기법이 다름
      </li>
      <li>
        검색엔진: 네이버, 다음, 구글 검색
      </li>
      <li>
        SEO가 잘 되었을 때의 이점: 트래픽 증가, 신뢰성 구축, 비용 효율 증가
      </li>
    </ul>


    <h2>CSS</h2>

    <h3>CSS란?</h3>

    <ul style="margin-left:25px">
      <li>
        Cascading Style Sheets의 약자
      </li>
      <li>
        CSS에서 스타일이 적용될 때 우선순위를 가지고 적용되는데 그 과정이 폭포처럼 위에서 아래로 떨어지는 모양이기 때문
      </li>
      <li>
        HTML의 스타일, 레이아웃 등을 꾸미는 역할
      </li>
      <li>
        여러 HTML에 재사용하여 반복 작업을 줄일 수 있다.
      </li>
    </ul>


    <h3>작성방법</h3>
    <ul style="margin-left:25px">
      <li>
        인라인 적용
      </li>
      <li>
        태그 선택자 적용
      </li>
      <li>
        그룹 선택자 적용
      </li>
      <li>
        상속 적용
      </li>
    </ul>


    <h3>가상 클래스 선택자</h3>

    <ul style="margin-left:25px">
      <li>
        선택한 요소가 특별한 상태여야 만족
      </li>
      <li>
        : 를 사용함
      </li>
    </ul>

    <h3>가상 요소</h3>
    <ul style="margin-left:25px">
      <li>
        선택자에 추가하는 키워드
      </li>
      <li>
        특정 요소의 일부분에만 스타일을 입힐 수 있음
      </li>
      <li>
        :: 를 사용함
      </li>
    </ul>


    <h3>CSS 선택자 우선순위</h3>
    <ul style="margin-left:25px">
      <li>
        후자 우선의 원칙: 동일한 선택자에 동일한 속성이 사용되었을 경우 뒤에 적힌 속성을 따름
      </li>
      <li>
        구체성의 원칙: inline-style / id(#)/ class(.), 가상 클래스, 속성 선택자/ type(tag), 가상 요소 선택자 순으로 우선순위가 낮아짐
      </li>
      <li>
        중요성의 원칙: !important
      </li>
    </ul>
    `,
  },
  {
    post_id: 16,
    title: '6월 3주차 정리',
    creation_date: '2024-06-21',
    thumbnail: '',
    content: `
    <h1>6월 3주차 정리</h1>

    <h2>Box Model</h2>

    <h3>border-radius</h3>
    <ul style="margin-left:25px">
      <li>단축속성
      <li>모서리를 설정하며 설정값이 높을수록 둥글어짐
    </ul>


    <h3>background</h3>

    <ul style="margin-left:25px">
      <li>color: 배경 색상 설정</li>
      <li>image: 배경 이미지 설정</li>
      <li>repeat: 배경 이미지 반복 여부 및 방식 설정</li>
      <li>position: 배경 위치 설정</li>
      <li>size: 배경 이미지 사이즈 설정</li>
      <li>attachment: 고정 설정</li>
      <li>clip: 요소의 배경이 어디까지 차지할지 지정</li>
      <li>origin: 배경 위치 시작점 설정</li>
    </ul>

    <h3>box-shadow</h3>
    <ul style="margin-left:25px">
      <li>그림자 효과 추가</li>
    </ul>

    <h3>opacity</h3>

    <ul style="margin-left:25px">
      <li>0 ~ 1 사이의 숫자로 불투명도 설정</li>
    </ul>


    <h2>display</h2>

    <ul style="margin-left:25px">
      <li>박스의 유형을 지정하여 다른 박스들과 어떻게 배치될 지 레이아웃 설정</li>
      <li>주의: CSS 속성으로 시각적인 부분이 바뀌었을 뿐 태그 자체의 요소가 블록 레벨로 바뀐 것은 아님</li>
    </ul>

    <ul style="margin-left:25px">
      <li>block</li>
      <li>inline</li>
      <li>inline-block</li>
      <li>flex</li>
      <li>grid</li>
      <li>none</li>
    </ul>

    <h2>reset.css</h2>
    <ul style="margin-left:25px">
      <li>각 브라우저마다 기본적으로 제공하는 스타일이 있으며 조금씩 다름</li>
      <li>크로스 브라우징을 대비하여 CSS를 리셋시키는 것</li>
    </ul>

    <h3>크로스 브라우징</h3>
    <ul style="margin-left:25px">
      <li>어느 한 쪽 브라우저에 최적화되어 치우치지 않도록 공통 요소를 사용하여 웹 페이지를 제작하는 기법</li>
      <li>다른 브라우저로 접속해도 거의 비슷한 사용자 경험을 할 수 있게 함</li>
    </ul>

    <h2>Position</h2>

    <ul style="margin-left:25px">
      <li>static(기본값)</li>
      <li>relative</li>
      <li>absolute</li>
      <li>fixed</li>
      <li>sticky</li>
    </ul>


    <h2>flex</h2>

    <h3>flex-container</h3>

    <ul style="margin-left:25px">
      <li>flex가 적용된 부모요소를 flex-container, 자식요소를 flex-item이라고 부름</li>
      <li>1차원적 레이아웃을 위해 주로 사용 됨</li>
    </ul>

    <h3>flex-direction</h3>
    <ul style="margin-left:25px">
      <li>컨테이너 내 아이템을 배치할 때 주축 및 방향 지정</li>
    </ul>

    <h3>justify-content</h3>
    <ul style="margin-left:25px">
      <li>주축을 기준으로 배열의 위치를 조절하거나 아이템 간의 설정 가능</li>
    </ul>

    <h3>align-items</h3>
    <ul style="margin-left:25px">
      <li>교차 축을 기준으로 정렬</li>
    </ul>

    <h3>align-content</h3>
    <ul style="margin-left:25px">
      <li>컨테이너의 교차 축의 아이템들이 여러 줄일 때 사용 가능(flex-wrap: wrap) 상태에서만 사용 가능</li>
    </ul>


    <h3>flex-basis</h3>
    <ul style="margin-left:25px">
      <li>flex-item의 초기 크기를 설정(축마다 달라지며 내부 콘텐츠에 따라 유연한 크기를 가짐)</li>
    </ul>

    <h3>flex-grow</h3>
    <ul style="margin-left:25px">
      <li>아이템이 컨테이너 내부에서 할당할 수 있는 공간의 정도 지정</li>
      <li>0을 줄 경우 늘어나지 않으며 2 이상의 수를 줄 경우 다른 자식요소보다 2배 이상의 여백 공간을 할당 받음</li>
    </ul>

    <h2>grid</h2>
    <ul style="margin-left:25px">
      <li>웹 페이지를 위한 2차원 레이아웃</li>
    </ul>

    <h2>grid-container 속성</h2>

    <h3>grid-template-columns</h3>
    <ul style="margin-left:25px">
      <li>열 방향 그리드 트랙의 사이즈를 설정</li>
    </ul>

    <h3>grid-template-rows</h3>
    <ul style="margin-left:25px">
      <li>행 방향 그리드 트랙의 사이즈를 설정</li>
    </ul>

    <h3>fr</h3>
    <ul style="margin-left:25px">
      <li>fraction(분수)의 약자</li>
      <li>컨테이너 분할</li>
      <li>트랙의 비율을 지정해주는 유연한 길이 단위</li>
      <li>1fr 1fr 1fr은 1:1:1의 비율 의미</li>
    </ul>

    <h3>함수</h3>

    <h4>1. repeat()</h4>
    <ul style="margin-left:25px">
      <li>grid-track의 사이즈를 더 간단한 형태로 표현하도록 도와줌</li>
      <li>repeat(반복 횟수, 반복할 값)으로 사용</li>
    </ul>

    <h4>2. minmax()</h4>
    <ul style="margin-left:25px">
      <li>그리드에서 최소와 최대 사이의 범위를 설정하는 함수이며 최소값과 최대값을 의미하는 두 가지 인자를 가짐</li>
    </ul>
    
    <h3>align-content</h3>
    <ul style="margin-left:25px">
      <li>그리드 콘텐츠의 수직 정렬</li>
      <li>아이템의 세로 높이가 컨테이너 안에서 움직일 공간이 있어야 함</li>
    </ul>

    <h3>justify-content</h3>
    <ul style="margin-left:25px">
      <li>그리드 콘텐츠의 수평 정렬</li>
      <li>아이템의 가로 높이가 컨테이너 안에서 움직일 공간이 있어야 함.</li>
    </ul>

    <h3>align-items</h3>
    <ul style="margin-left:25px">
      <li>직계 자식에 대한 수직 정렬을 동일하게 해줌</li>
    </ul>

    <h3>justify-items</h3>
    <ul style="margin-left:25px">
      <li>직계 자식에 대한 수평 정렬을 모두 동일하게 해줌</li>
    </ul>

    <h2>grid-item 속성</h2>

    <h3>grid-area</h3>

    <h3>grid-column-start, grid-column-end / grid-row-start, grid-row-end</h3>

    <ul style="margin-left:25px">
      <li>그리드 열방향 시작, 끝 / 그리드 행방향 시작, 끝</li>
    </ul>

    <h3>align-self</h3>
    <ul style="margin-left:25px">
      <li>아이템 개별로 수직 (열) 정렬을 지정</li>
    </ul>

    <h3>justify-self</h3>
    <ul style="margin-left:25px">
      <li>아이템 개별로 수평(행) 정렬을 지정</li>
    </ul>

    <h3>place-self</h3>
    <ul style="margin-left:25px">
      <li>align-self, justify-self 를 함께 적는 단축 속성</li>
    </ul>

    <h3>order</h3>

    <ul style="margin-left:25px">
      <li>(flex와 마찬가지로) 아이템의 배치 순서를 지정</li>
    </ul>

    <h2>transform</h2>
    <ul style="margin-left:25px">
      <li>요소에 다양한 변형을 줄 수 있음</li>
    </ul>

    <h3>scale</h3>
    <ul style="margin-left:25px">
      <li>요소의 크기 조절</li>
      <li>자신의 가운데를 중심으로 크기 변경</li>
      <li>transform-origin을 통해 기준점 변경 가능</li>
      <li>scale(1.5) => 1.5배 커짐</li>
    </ul>

    <h3>rotate</h3>
    <ul style="margin-left:25px">
      <li>요소 회전</li>
      <li>transform: rotate(180deg) / transform: rotate(0.5turn) 으로 사용</li>
      <li>자신의 가운데를 중심으로 회전</li>
      <li>transform-origin을 통해 기준점 변경 가능</li>
    </ul>

    <h3>translate</h3>
    <ul style="margin-left:25px">
      <li>자신의 위치에서 x, y축 이동</li>
      <li>기준점: 왼쪽 상단</li>
      <li>음수값 지정 가능</li>
    </ul>

    <h3>skew</h3>
    <ul style="margin-left:25px">
      <li>요소 왜곡</li>
      <li>각도 단위 사용</li>
    </ul>

    <h2>transition</h2>
    <ul style="margin-left:25px">
      <li>CSS 속성값이 변할 때 값의 변화가 일정 시간에 걸쳐 일어나도록 하는 것</li>
      <li>단축 속성</li>
      <li>property: 전환 효과 속성 설정</li>
      <li>duration: 완료까지 걸리는 시간</li>
      <li>timing-function: 진행 속도 설정</li>
    </ul>

    <h2>animation</h2>
    <ul style="margin-left:25px">
      <li>스타일 전환</li>
      <li>구성요소: CSS 스타일과 키프레임들</li>
    </ul>

    <h3>transition VS animation</h3>
    <ul style="margin-left:25px">
      <li>transition: 요소의 상태가 변경되어야 가능</li>
      <li>animation: 요소의 상태 변화 관계 X</li>
    </ul>

    <h3>@keyframes</h3>
    <ul style="margin-left:25px">
      <li>두 개 이상의 애니메이션 중간 상태 설정</li>
      <li>0%, from: 시작시점 / 100%, to: 종료시점</li>
    </ul>

    <h3>animation 속성</h3>

    <h4>name</h4>
    <img src=${blogPostImg.post16Img1} alt="animation 코드" />
    <ul style="margin-left:25px">
      <li>animation-name의 시작에는 '영문 소문자,문자열, 언더바(_), 하이픈(-)'을 사용</li>
      <li>사용할 수 없는 것:  영문 대문자, 숫자, 특수문자</li>
      <li>여러 개의 animation-name을 동시에 나열할 경우: 쉼표(,)를 통해 구분</li>
    </ul>

    <h4>duration</h4>
    <ul style="margin-left:25px">
      <li>애니메이션 한 사이클 완료 시간</li>
      <li>음수값이면 실행 X</li>
    </ul>

    <h4>timing-function</h4>
    <ul style="margin-left:25px">
      <li>애니메이션 진행 방식 설정</li>
      <li>ease(기본값)</li>
      <li>linear</li>
      <li>steps(n)</li>
    </ul>

    <h4>delay</h4>
    <ul style="margin-left:25px">
      <li>애니메이션이 언제 시작할지 설정</li>
      <li>음수값이면 도중에 시작</li>
    </ul>

    <h4>iteration-count</h4>
    <ul style="margin-left:25px">
      <li>재생 횟수 설정</li>
      <li>infinite: 무한 반복</li>
      <li>1: 한 사이클 재생</li>
    </ul>

    <h4>direction</h4>
    <ul style="margin-left:25px">
      <li>앞으로 뒤로 또는 앞뒤로 번갈아 재생 여부 설정</li>
      <li>normal(기본값)</li>
      <li>reverse</li>
      <li>alternate</li>
      <li>alternate-reverse</li>
    </ul>
  `,
  },
  {
    post_id: 17,
    title: '6월 4주차 정리',
    creation_date: '2024-06-28',
    thumbnail:
      'https://velog.velcdn.com/images/jsh_0218/post/ff8299b1-5cee-4939-b01b-185ae12f417a/image.png',
    content: `
    <h1>6월 4주차 정리</h1>

    <h2>CSS</h2>

    <h3>Animation</h3>

    <h4>animaion-fill-mode</h4>

    <ul style="margin-left:25px">
      <li>실행 전과 후에 대상에 스타일을 적용하는 방법을 지정</li>
      <li>normal: 기본값</li>
      <li>forwards: 요소의 기존 스타일로 시작하며 애니메이션 마지막 속성값 유지</li>
      <li>backwards: 첫 번째 정의된 애니메이션 값으로 시작하며 요소의 기존 스타일로 돌아감</li>
      <li>both: 첫 번째 정의된 값으로 시작하며 마지막 값 유지</li>
    </ul>

    <h4>animation-play-state</h4>

    <ul style="margin-left:25px">
      <li>애니메이션 재생 여부</li>
      <li>paused / running: 정지 / 재생</li>
    </ul>

    <h4>animation</h4>

    <ul style="margin-left:25px">
      <li>단축속성</li>
      <li>포함하는 속성: animation-name, animation-duration, animation-timing-function, animation-delay, animation-iteration-count, animation-direction, animation-fill-mode, animation-play-state</li>
    </ul>

    <h3>3d 관련 속성들</h3>

    <h4>perspective</h4>

    <ul style="margin-left:25px">
      <li>3D 요소에 원근감을 주기위해 z축의 위치를 정함</li>
      <li>값이 크면 변형이 작고 값이 작으면 변형이 큼</li>
      <li>부모에게 사용하며 적용 범위는 직계자식만</li>
      <li>음수 값 사용 X</li>
    </ul>

    <h4>perspective-origin</h4>

    <ul style="margin-left:25px">
      <li>소실점</li>
      <li>사용자가 보고있는 위치(x, y)를 결정</li>
      <li>부모에게 사용하며 기본값은 정 중앙</li>
    </ul>

    <h4>transform</h4>

    <ul style="margin-left:25px">
      <li>요소에 2D or 3D 변형을 적용</li>
      <li>translate(), scale(), rotate()...</li>
    </ul>

    <h4>transform-style</h4>

    <ul style="margin-left:25px">
      <li>요소에 변형을 적용할 때 그 변환이 자식에게도 적용될지를 설정</li>
      <li>부모요소에 작용</li>
      <li>flat / preserved-3d: 평면 배치(기본값) / 3D 공간 배치</li>
    </ul>

    <h4>backface-visibility</h4>

    <ul style="margin-left:25px">
      <li>요소의 뒷면이 사용자를 향할 때 보이게 할지 설정</li>
      <li>변형을 통해 3D 공간에서 회전되면 노출 될수 있습니다.</li>
      <li>visible / hidden: (기본값) 뒷면을 보임 / 뒷면이 보이지 않음</li>
    </ul>

    <h3>미디어쿼리</h3>

    <h4>미디어 유형</h4>

    <ul style="margin-left:25px">
      <li>all: 모든 장치를 대상으로 함(기본값)</li>
      <li>print: 인쇄 결과물 및 출력 미리보기 화면에 표시하는 경우</li>
      <li>screen: 모니터나 스크린이 있는 디바이스를 의미</li>
      <li>speech: 텍스트를 음성으로 변환하는 음성 합성장치 대상</li>
    </ul>

    <h4>미디어 특성</h4>

    <ul style="margin-left:25px">
      <li>width: 스크롤바를 포함한 뷰포트의 너비</li>

          <li style="margin-left:25px">min-width, max-width: 최소 / 최대 너비</li>

      <li>height: 뷰포트의 높이</li>

          <li style="margin-left:25px">min-height, max-height: 최소 / 최대 높이</li>

      <li>orientation: 뷰포트의 방향</li>

          <li style="margin-left:25px">portrait / landscape: 세로 / 가로</li>

      <li>aspect-ratio: 뷰포트의 가로세로비</li>

      <li>resolution: 출력장치의 픽셀 밀도 - 단위 dppx(Device pixel ratio).</li>

    </ul>

    <h4>min-, max-</h4>

    <ul style="margin-left:25px">
      <li>min- / max-: 최소 조건 / 최대 조건</li>
    </ul>

    <h4>논리연산자</h4>

    <ul style="margin-left:25px">
      <li>and: 조건을 모두 만족하는 경우에만 스타일을 적용</li>
      <li>not: 조건을 반전하는 경우 스타일을 적용</li>

          <li style="margin-left:25px">주의: 미디어 유형(all, screen, print..)을 지정한 경우에는 해당 미디어 유형일 경우를 의미하며 부정의 의미에 미디어 유형은 포함되지 않음</li>
      
      <li>,(쉼표): 조건중 하나라도 만족하는 경우 스타일을 적용</li>
      <li>only: 미디어쿼리를 지원 하는 브라우저에서만 작동</li>
    </ul>


    <h3>반응형 이미지</h3>

    <h4>반응형 이미지가 필요한 이유</h4>

    <ul style="margin-left:25px">
      <li>현재 다양한 디바이스가 있기 때문에 각 디바이스 환경을 고려하여 적절한 이미지를 제공해야하기 때문</li>
    </ul>

    <h4>해상도 전환</h4>

    <ul style="margin-left:25px">
      <li>사용할 때의 장점: 디바이스의 해상도 및 크기에 따라 적절한 이미지를 효율적으로 보여주는 방법</li>
    </ul>

    <h4>srcset</h4>

    <ul style="margin-left:25px">
      <li>브라우저가 네트워크, 메모리, 성능, 시간 등을 고려하여 최적의 이미지를 선택</li>
      <li>w, x 서술자를 사용</li>

          <li style="margin-left:25px">w: 이미지의 원본 넓이를 브라우저에게 알려줌</li>
          <li style="margin-left:25px">x: 화소의 밀도. 디바이스 화소 밀도에 따른 이미지를 로딩하도록 브라우저에게 알려줌</li>

      <li>사용 예시</li>

          <li style="margin-left:25px">w: 이미지의 크기는 기본적으로 뷰포트의 100%를 차지(width, sizes 등의 속성으로 변경 가능)</li>
          <li style="margin-left:25px">x: 화소밀도: 동일한 면적에 들어가는 화소의 수. 개발자 도구 콘솔창에서 window.devicePixelRatio 명령어를 입력하면 알 수 있음</li>

    </ul>

    <h4>sizes</h4>

    <ul style="margin-left:25px">
      <li>이미지가 차지하게 될 사이즈를 브라우저에게 알려줌</li>
      <li>sizes와 width를 같이 작성할 경우 ⇒ width를 우선시 함</li>
    </ul>

    <h3>아트디렉션</h3>

    <ul style="margin-left:25px">
      <li>필요한 경우: 반응형 이미지에서 이미지의 의도가 제대로 전달되도록 기기에 따라 사진의 핵심을 확대해서 보여줌. 다른 비율, 다양한 크기의 이미지를 사용하고 싶을 때 사용.</li>
      <li>picture 태그 사용</li>
    </ul>

    <h2>Figma</h2>

    <h3>피그마란?</h3>

    <ul style="margin-left:25px">
      <li>UI/UX 디자인을 위한 클라우드 기반 협업 웹 어플리케이션</li>
      <li>쉽게 말해 웹을 기반으로 디자인 편집 작업을 하고 웹 링크 공유를 통해 편리하게 협업하는 디자인 툴</li>
    </ul>

    <h3>주요기능</h3>

    <ul style="margin-left:25px">
      <li>협업</li>
      <li>디자인 시스템</li>
      <li>프로토타이핑</li>
      <li>버전 관리</li>
      <li>플러그인</li>
      <li>내보내기 및 공유</li>
      <li>레퍼런스</li>
    </ul>

    <h2>Figma 심화</h2>

    <h3>오토레이아웃</h3>

    <ul style="margin-left:25px">
      <li>오토레이아웃이란?: 자동으로 레이아웃을 잡아주는 기능(ex. 내부 텍스트의 크기에 따라 버튼의 크기가 달라짐)</li>
    </ul>

    <h3>안경 꾸며주기 실습</h3>
    <img src="https://velog.velcdn.com/images/jsh_0218/post/ff8299b1-5cee-4939-b01b-185ae12f417a/image.png" alt="안경 꾸며주기 실습">

    <h3>명함만들기 실습</h3>
    <img src="https://velog.velcdn.com/images/jsh_0218/post/48c107b1-05a4-40e7-a6b1-6c3bbbb19ec3/image.png" alt="명함 만들기 실습">


    <h3>컴포넌트</h3>

    <ul style="margin-left:25px">
      <li>컴포넌트란?: 재사용 가능한 UI 요소. 일관성 유지, 효율성, 협업 용이 등의 장점이 있음</li>
    </ul>

    <h4>컴포넌트 용어</h4>

    <ul style="margin-left:25px">
      <li>메인 컴포넌트: 컴포넌트의 원본이자 ‘마스터’ 버전. 메인 컴포넌트를 수정하면 해당 컴포넌트를 기반으로 하는 모든 인스턴스 컴포넌트가 자동으로 업데이트 됨.</li>
      <li>인스턴스 컴포넌트: 메인 컴포넌트의 복사본 여러 군데에 배치하여 일관된 디자인 유지 가능</li>
      <li>오버라이드: 특정 인스턴스 컴포넌트에서 메인 컴포넌트와는 다른 속성이나 스타일을 적용하는 것. 개별 인스턴스를 메인 컴포넌트와 다르게 커스터마이징 하는 것을 의미</li>
    </ul>

    <h3>프로토타입</h3>

    <ul style="margin-left:25px">
      <li>프로토타입: 디자인한 UI를 실제로 작동하는 것처럼 시뮬레이션할 수 있게 해줌</li>
      <li>프로토타입의 시작점을 만드는 방법: 프로토타입의 시작이 되는 지점을 Flow Starting Point로 설정</li>
    </ul>
    `,
  },
  {
    post_id: 18,
    title: '7월 1주차 정리',
    creation_date: '2024-07-10',
    thumbnail:
      'https://velog.velcdn.com/images/jsh_0218/post/2bb8cd94-1735-4710-8aae-c57d63bef62e/image.png',
    content: `
    <h1>프로젝트 실습</h1>
    <p>월요일(1일) ~ 목요일(5일)까지 Html, css, 아주 간단한 JS로만 구현하는 웹페이지 실습을 진행하였습니다.</p>

    <h2>1만 시간의 법칙 실습</h2>

    <h3>GitHub URL</h3>
    <p><a href="https://github.com/Jung-sunghoon/frontend_test/tree/main/testFolder/10000hours">https://github.com/Jung-sunghoon/frontend_test/tree/main/testFolder/10000hours</a></p>

    <h3>실행 URL</h3>
    <p><a href="https://jung-sunghoon.github.io/frontend_test/testFolder/10000hours/10000hours.html">https://jung-sunghoon.github.io/frontend_test/testFolder/10000hours/10000hours.html</a></p>

    <h3>스크린샷</h3>

    <h4>PC 화면</h4>
    <img src="https://velog.velcdn.com/images/jsh_0218/post/208d07d6-29ce-4825-a2e8-c34db3b3d61b/image.png" alt="PC 화면">

    <h4>모바일 화면</h4>
    <img src="https://velog.velcdn.com/images/jsh_0218/post/0d708f62-99fe-4696-9aa5-90a9532f5159/image.png" alt="모바일 화면">

    <h2>랜딩페이지 실습</h2>

    <h3>GitHub URL</h3>
    <p><a href="https://github.com/Jung-sunghoon/frontend_test/tree/main/testFolder/landingPage">https://github.com/Jung-sunghoon/frontend_test/tree/main/testFolder/landingPage</a></p>

    <h3>실행 URL</h3>
    <p><a href="https://jung-sunghoon.github.io/frontend_test/testFolder/landingPage/landing.html">https://jung-sunghoon.github.io/frontend_test/testFolder/landingPage/landing.html</a></p>

    <h3>스크린샷</h3>
    <p>JS가 필요한 부분은 스크린 샷이 없습니다(모달, 모바일 메뉴 등)</p>

    <h4>PC 화면</h4>
    <img src="https://velog.velcdn.com/images/jsh_0218/post/2bb8cd94-1735-4710-8aae-c57d63bef62e/image.png" alt="PC 화면 1">
    <img src="https://velog.velcdn.com/images/jsh_0218/post/4bfb5319-afd0-4ac6-8016-aa64d984f321/image.png" alt="PC 화면 2">
    <img src="https://velog.velcdn.com/images/jsh_0218/post/55f974db-7472-416f-8918-2b45470c9456/image.png" alt="PC 화면 3">

    <h4>모바일 화면</h4>
    <img src="https://velog.velcdn.com/images/jsh_0218/post/76c0e567-c989-4fb7-a472-74d1e4729010/image.png" alt="모바일 화면 1">
    <img src="https://velog.velcdn.com/images/jsh_0218/post/e7db0d98-b8b7-425e-bb76-6ff85aa98e54/image.png" alt="모바일 화면 2">
    <img src="https://velog.velcdn.com/images/jsh_0218/post/dc0ff8e5-4d84-444e-bda3-0f9274b84dff/image.png" alt="모바일 화면 3">

    <h1>JavaScript</h1>

    <h2>자바스크립트 기초</h2>

    <h3>자바스크립트란?</h3>
    <ul style="margin-left:25px">
      <li>웹페이지에서 보조 기능을 위해 개발된 프로그래밍 언어</li>
      <li>실행 주체: 웹 브라우저</li>
      <li>점차 서버, 모바일 앱, 게임 프로그래밍 등에서 사용됨</li>
    </ul>

    <h3>자바스크립트로 할 수 있는 기능</h3>
    <ul style="margin-left:25px">
      <li>데이터 처리</li>
      <li>사용자와 상호작용</li>
      <li>화면 조작</li>
      <li>다른 컴퓨터와 통신</li>
    </ul>

    <h2>자바스크립트 실행</h2>
    <ul style="margin-left:25px">
      <li>개발자 도구 콘솔 창에서 입력</li>
      <li>VSCode를 통해 작성</li>
      <li>코드 작성</li>

          <li style="margin-left:25px">HTML 태그 내에 삽입</li>
          <li style="margin-left:25px">script 태그 사용</li>
          <li style="margin-left:25px">외부 js 파일 저장 후 로드</li>
      
    </ul>

    <h2>변수</h2>

    <h3>변수 선언과 사용</h3>
    <ul style="margin-left:25px">
      <li>변수란?: 변할 수 있는 수 혹은 정보</li>
      <li>변수선언에 쓰이는 키워드는?: var, let, const</li>
    </ul>

    <h3>변수명 작성 규칙</h3>
    <ul style="margin-left:25px">
      <li>변수 이름에 사용할 수 있는 문자의 종류는?: 문자, 숫자, 언더스코어(_), 달러($)</li>
      <li>사용 불가 법칙의 예시: 숫자로 시작 X, 예약어 사용 X</li>
      <li>대소문자 구분, 한글이나 일본어도 변수명에 사용 가능(권장 X)</li>
      <li>네이밍 규칙의 종류:</li>

          <li style="margin-left:25px">카멜 케이스</li>

              <li style="margin-left:50px">첫글자는 소문자, 이후 각 단어의 첫 글자는 대문자</li>
              <li style="margin-left:50px">useName</li>
          
          <li style="margin-left:25px">스네이크 케이스</li>

              <li style="margin-left:50px">각 단어를 언더스코어(_)로 연결</li>
              <li style="margin-left:50px">user_name</li>

          
          <li style="margin-left:25px">파스칼 케이스</li>

              <li style="margin-left:50px">단어의 첫 글자를 대문자</li>
              <li style="margin-left:50px">UserName</li>
          
          <li style="margin-left:25px">헝가리안 케이스</li>

              <li style="margin-left:50px">변수명에 타입 종류를 함께 작성</li>
              <li style="margin-left:50px">strUserName</li>
          
    </ul>

    <h3>변수 키워드와 특징</h3>
    <ul style="margin-left:25px">
      <li>var: 재선언, 재할당 가능</li>
      <li>let: 재선언 불가능, 재할당 가능</li>
      <li>const: 재선언, 재할당 불가능</li>
    </ul>

    <h3>스코프 (scope)</h3>
    <ul style="margin-left:25px">
      <li>스코프란: 변수의 접근성과 생존 기간을 제어하는 생존 범위</li>
      <li>선언 키워드별로 각각 다른/같은 스코프를 가진다.</li>
      <ul style="margin-left:25px">
        <p>1. 전역 스코프: 어디서든 접근 가능한 변수 영역</p>
        <p>2. 함수 스코프: 함수 내에서만 접근 가능한 변수 영역. var로 선언한 변수는 함수 스코프를 가짐</p>
        <p>3. 블록 스코프: 중괄호로 감싸진 코드 블록 단위로 접근 가능한 변수 영역을 나타냄. let과 const로 선언한 변수는 블록 스코프를 가짐</p>
      </ul>
    </ul>

    `,
  },
  {
    post_id: 19,
    title: '7월 2주차 정리',
    creation_date: '2024-07-12',
    thumbnail: '',
    content: `
    <h1>7월 2주차 정리</h1>

    <h2>변수</h2>

    <h3>호이스팅</h3>
    <h4>호이스팅이란?</h4>
    <ul style="margin-left:25px">
      <li>변수의 선언문이 해당 스코프의 최상단으로 끌어올려지는 것처럼 보이는 현상</li>
      <li>호이스팅에서 var, let, const의 차이점
        <ul style="margin-left:25px">
          <li>var는 호이스팅이 되지만 let, const는 TDZ로 인해 되지 않는 것처럼 보임</li>
          <li>TDZ: Temporal Dead Zone(임시 접근 불가 구역)의 약자이며 let과 const는 TDZ에 배치되어 호이스팅이 발생하지 않는 것처럼 보임</li>
        </ul>
      </li>
    </ul>

    <h2>객체</h2>

    <h3>객체란?</h3>
    <ul style="margin-left:25px">
      <li>여러 개의 데이터를 한 변수에 저장할 수 있는 자료형</li>
      <li>여러개의 키와 값의 쌍으로 이루어짐</li>
      <li>이 쌍을 프로퍼티라고 함</li>
    </ul>

    <h3>객체 생성방법</h3>
    <ul style="margin-left:25px">
      <li>생성예시</li>
      <img src=${blogPostImg.post19Img1} alt="" />
      <li>객체에서 메서드 생성예시</li>
      <img src=${blogPostImg.post19Img2} alt="" />
    </ul>

    <h3>객체 접근방법</h3>
    <ul style="margin-left:25px">
      <li>객체['키']</li>
      <li>객체.키</li>
    </ul>

    <h3>객체 속성 추가/제거 방법</h3>
    <ul style="margin-left:25px">
      <li>추가방법
        <ul style="margin-left:25px">
          <li>객체['키'] = '값';</li>
          <li>객체['키'] = ['값2','값2'];</li>
          <li>객체.키 = '값';</li>
        </ul>
      </li>
      <li>삭제방법
        <ul style="margin-left:25px">
          <li>delete 객체.키;</li>
        </ul>
      </li>
    </ul>

    <h2>연산</h2>

    <h3>산술 연산</h3>
    <ul style="margin-left:25px">
      <li>더하기 연산을 제외한 나머지 산술연산은 숫자형이 아닌 경우 자동으로 타입을 변환하여 연산을 수행</li>
    </ul>

    <h4>산술 할당 연산</h4>
    <ul style="margin-left:25px">
      <li>산술연산과 동시에 변수에 값을 할당하는 연산자</li>
    </ul>

    <h4>증감 연산자</h4>
    <img src=${blogPostImg.post19Img3} alt="" />

    <h3>비교 연산</h3>
    <ul style="margin-left:25px">
      <li>결과값은 항상 true 또는 false가 됩니다.</li>
    </ul>

    <h4>대소관계 연산자</h4>
    <img src=${blogPostImg.post19Img4} alt="" />

    <h4>동등 / 부등</h4>
    <ul style="margin-left:25px">
      <li>값을 비교</li>
      <li>타입이 다른 경우: 타입 변환을 수행한 후 비교. 원시타입은 값이 같을 때, 객체 타입은 동일한 객체를 참조할 때만 true를 반환</li>
    </ul>

    <h4>자동 형 변환</h4>
    <ul style="margin-left:25px">
      <li>연산과 비교를 위하여 JS 엔진이 데이터 형을 자동으로 변환하는 것
        <ul style="margin-left:25px">
          <li>원시값끼리 비교할 때는 숫자로 변환</li>
          <li>null과 undefined는 각자와 서로끼리 비교할 경우에는 true를 반환</li>
          <li>객체와 원시타입 비교할 때는 객체를 원시타입에 맞춰 변환</li>
          <li>NaN의 경우: false로 변환</li>
        </ul>
      </li>
    </ul>

    <h4>일치 / 불일치</h4>
    <ul style="margin-left:25px">
      <li>값과 타입이 일치하는지 비교</li>
      <li>타입변환을 하지 않고 엄격한 비교를 수행</li>
    </ul>

    <h3>논리연산</h3>

    <h4>논리곱 AND(&&) / 논리합 OR(||) 의 비교</h4>
    <ul style="margin-left:25px">
      <li>논리곱 연산자: 두 개의 피연산자가 모두 true일 때만 true를 반환. 모든 값이 true라면 가장 마지막 값을, false 값이 있다면 가장 처음 만나는 false값을 반환하며 나머지 평가를 생략(단축 평가)</li>
      <li>논리합 연산자: 두 개의 피연산자 중 적어도 한 개 이상이 true면 true를 반환. 즉 모두 false일 때만 false를 반환. 모든 피연산자가 false라면 마지막 값을, true값이 있으면 가장 처음 만나는 true값을 반환(단축 평가)</li>
    </ul>

    <h4>논리부정 NOT(!)</h4>
    <ul style="margin-left:25px">
      <li>true ⇒ false</li>
      <li>false ⇒ true</li>
    </ul>

    <h4>nullish 연산자(??)</h4>
    <ul style="margin-left:25px">
      <li>왼쪽 피 연산자를 먼저 만나서 null도 아니고 undefined도 아니면 왼쪽, null이거나 undefined라면 오른쪽을 반환함. 즉, undefined나 null이 아닌 값을 반환</li>
      <li>OR연산자와의 차이: OR 연산자는 첫 번째 true 값을 반환하고, nullish 연산자는 첫 번째로 값이 할당된 피연산자를 반환</li>
    </ul>

    <h4>옵셔널 체이닝(?.)</h4>
    <ul style="margin-left:25px">
      <li>객체의 속성값에 접근할 때 속성이 존재하지 않아도 오류가 발생하지 않게 해줌</li>
      <li>객체의 속성값에 접근할 때 프로퍼티가 존재하지 않으면 undefined로 반환되며 오류를 발생함.</li>
      <li>단축 평가를 이용해 오류가 나지 않고 undefined를 출력함.</li>
      <li>그러한 단축 평가를 간결하게 표현하는 것이 옵셔널체이닝(?.)</li>
      <li>ex. console.log(user?.address?.city)</li>
    </ul>

    <h3>형변환</h3>

    <h4>문자로 변환 예시</h4>
    <img src=${blogPostImg.post19Img5} alt="" />

    <h4>숫자로 변환 예시</h4>
    <img src=${blogPostImg.post19Img6} alt="" />

    <h4>불리언으로 변환 예시</h4>
    <img src=${blogPostImg.post19Img7} alt="" />

    <h2>조건문</h2>

    <h3>if문</h3>
    <img src=${blogPostImg.post19Img8} alt="" />

    <h3>else문</h3>
    <img src=${blogPostImg.post19Img9} alt="" />

    <h3>else if문</h3>
    <img src=${blogPostImg.post19Img10} alt="" />

    <h3>삼항연산자</h3>
    <ul style="margin-left:25px">
      <li>간단한 if-else문을 한 줄로 표현 가능한 연산자</li>
      <img src=${blogPostImg.post19Img11} alt="" />
      <li>너무 많이 중첩하면 가독성이 떨어질 수 있으므로 주의</li>
    </ul>

    <h3>switch문</h3>
    <img src=${blogPostImg.post19Img12} alt="" />

    <h3>fall through현상</h3>
    <ul style="margin-left:25px">
      <li>case 문의 끝에 break 문이 생략된 경우 값이 일치하는 case문 이후의 모든 case문이 실행되는 현상</li>
    </ul>

    <h2>반복문</h2>
    <ul style="margin-left:25px">
      <li>언제사용할까?: 동일한 작업을 여러번 반복해야 할 때</li>
    </ul>

    <h3>for</h3>
    <ul style="margin-left:25px">
      <li>for문의 구조:</li>
      <img src=${blogPostImg.post19Img13} alt="" />
      <li>for문으로 2차원 배열을 만들 수 있을까?: 이중 for문을 사용해서 만들 수 있음.</li>
      <img src=${blogPostImg.post19Img14} alt="" />
    </ul>

    <h3>while</h3>
    <ul style="margin-left:25px">
      <li>while문의 구조:</li>
      <img src=${blogPostImg.post19Img15} alt="" />
    </ul>

    <h4>do-while</h4>
    <ul style="margin-left:25px">
      <li>조건식의 평가 전 코드를 실행하는 반복문.</li>
      <li>최소 1번의 실행이 보장됨</li>
      <li>do-while문의 구조:</li>
      <img src=${blogPostImg.post19Img16} alt="" />
    </ul>

    <h3>break와 continue</h3>
    <ul style="margin-left:25px">
      <li>반복문의 흐름을 제어함</li>
      <li>특정조건에 따라서 반복문을 중단, 건너뛰게 하는 역할</li>
    </ul>

    <h4>break</h4>
    <ul style="margin-left:25px">
      <li>반복문 즉시 종료</li>
    </ul>

    <h4>continue</h4>
    <ul style="margin-left:25px">
      <li>반복문의 다음 반복으로 이동</li>
    </ul>

    <h3>label</h3>
    <ul style="margin-left:25px">
      <li>특정한 코드블록에 이름을 지정함</li>
      <li>사용예시:</li>
      <img src=${blogPostImg.post19Img17} alt="" />
    </ul>

    <h2>전개 구문과 구조분해할당</h2>

    <h3>전개구문(Spread syntax)</h3>
    <ul style="margin-left:25px">
      <li>배열이나 객체와 같은 데이터 구조를 확장하기 위해 사용하는 문법 == 전개식</li>
    </ul>

    <h4>배열의 전개구문</h4>
    <ul style="margin-left:25px">
      <li>대괄호 안에서 세 개의 점(…)을 사용하여 배열을 확장</li>
      <li>배열의 전개구문 사용한 예시:</li>
      <img src=${blogPostImg.post19Img18} alt="" />
    </ul>

    <h4>객체의 전개구문</h4>
    <ul style="margin-left:25px">
      <li>중괄호 안에서 세 개의 점(…)을 사용하여 객체를 확장</li>
      <li>객체의 전개구문 사용한 예시:</li>
      <img src=${blogPostImg.post19Img19} alt="" />
    </ul>

    <h4>구조분해할당(destructuring)</h4>
    <ul style="margin-left:25px">
      <li>배열이나 객체와 같은 데이터 구조를 분해하여 변수에 할당하는 표현식</li>
      <li>구조분해할당 사용시의 장점: 반복과 불필요한 변수 생성을 줄여 코드를 깔끔하게 작성 가능</li>
      <li>구조분해할당의 기본 구조:</li>
      <img src=${blogPostImg.post19Img20} alt="" />
    </ul>

    <h4>배열의 구조분해할당</h4>
    <ul style="margin-left:25px">
      <li>배열의 구조분해할당의 예시:</li>
      <img src=${blogPostImg.post19Img21} alt="" />
    </ul>

    <h4>함수의 구조분해할당</h4>
    <ul style="margin-left:25px">
      <li>함수의 구조분해할당의 예시:</li>
      <img src=${blogPostImg.post19Img22} alt="" />
    </ul>

    <h2>this</h2>
    <ul style="margin-left:25px">
      <li>this는 객체를 가리키는 참조 변수</li>
      <li>호출되는 위치에 따라 다른 값을 출력함</li>
    </ul>

    <h3>호출되는 위치에 따른 this</h3>

    <h4>전역 컨텍스트</h4>
    <ul style="margin-left:25px">
      <li>전역컨텍스트에서 this는 전역객체, 브라우저에서는 window를 가리킵니다.</li>
    </ul>

    <h4>함수 호출</h4>
    <ul style="margin-left:25px">
      <li>일반 함수 내부에서 this는 전역 객체를 가리킵니다.</li>
    </ul>

    <h4>메서드 호출</h4>
    <ul style="margin-left:25px">
      <li>객체의 메서드 내에서 this는 그 메서드를 호출한 객체를 가리킵니다.</li>
    </ul>

    <h4>이벤트 핸들러</h4>
    <ul style="margin-left:25px">
      <li>이벤트 핸들러 내에서 this는 이벤트가 발생한 DOM 요소를 가리킵니다.</li>
    </ul>

    <h3>this를 사용자 의도대로 값 조작하기</h3>

    <h4>call()</h4>
    <ul style="margin-left:25px">
      <li>call메서드의 인수에 this로 사용할 값을 전달할 수 있습니다.</li>
      <li>예시</li>
      <img src=${blogPostImg.post19Img23} alt="" />
    </ul>

    <h4>apply()</h4>
    <ul style="margin-left:25px">
      <li>apply() 메서드의 인수에 this 로 사용할 값을 전달할 수 있습니다.</li>
      <li>배열의 형태로 전달할 수 있습니다.</li>
      <li>예시</li>
      <img src=${blogPostImg.post19Img24} alt="" />
    </ul>

    <h4>bind()</h4>
    <ul style="margin-left:25px">
      <li>bind()는 this가 고정된 새 함수를 반환</li>
      <li>예시</li>
      <img src=${blogPostImg.post19Img25} alt="" />
    </ul>

    `,
  },
  {
    post_id: 20,
    title: '7월 3주차 정리 (1)',
    creation_date: '2024-07-19',
    thumbnail: '',
    content: `
    <h1>7월 3주차 정리 (1)</h1>

    <h2>함수심화</h2>

    <h3>자바스크립트 Scope</h3>
    <ul style="margin-left:25px">
        <li>스코프: 변수의 생존 범위를 의미함.</li>
        <li>스코프의 종류
            <ul style="margin-left:25px">
                <li>전역스코프
                    <ul style="margin-left:25px">
                        <li>접근범위: 스크립트의 어디서든 접근 가능</li>
                    </ul>
                </li>
                <li>함수스코프
                    <ul style="margin-left:25px">
                        <li>접근범위: 함수 내부에서 정의된 변수와 매개변수는 함수 외부에서 접근 X</li>
                    </ul>
                </li>
                <li>블록스코프
                    <ul style="margin-left:25px">
                        <li>접근범위: 중괄호 안에서만 접근 가능</li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>

    <h3>콜백함수</h3>
    <ul style="margin-left:25px">
        <li>함수에 매개변수로 전달되어 실행되는 함수를 의미함.</li>
    </ul>

    <h3>함수의 호이스팅</h3>
    <ul style="margin-left:25px">
        <li>호이스팅이란?: 변수나 함수 선언문이 해당 스코프의 최상단으로 끌어올려지는 현상. 즉 코드에서 변수나 함수를 선언하기 전에 해당 변수나 함수를 사용할 수 있는 것처럼 보이는 현상을 의미.(코드는 위에서 아래로, 좌에서 우로 순차적으로 읽어가기 때문)</li>
        <li>TDZ란?: Temporal Dead Zone(임시 접근 불가구역)의 약자. 말 그대로 접근이 불가능한 구역이며 let, const, class를 사용한 선언문이 호이스팅이 되었지만 안된 것처럼 동작하게 함.</li>
    </ul>
    <pre>
    console.log(x);
    console.log(y);
    console.log(z);
    var x = 1;
    let y = 2;
    const z = 3;

    // 각각
    // undefined
    // 실행오류
    // 실행오류

    sayHi();
    function sayHi() {
        console.log("Hello, lions!");
    }

    // Hello, lions!
    </pre>
    <ul style="margin-left:25px">
        <li>실행결과와 그렇게 출력된 이유는?
            <ul style="margin-left:25px">
                <li>let, const는 호이스팅이 되지 않는 것처럼 동작하기 때문에 선언되지 않았으므로 오류, var는 호이스팅이 되었지만 할당은 호이스팅이 안되기 때문에 undefined</li>
                <li>함수의 경우 함수 선언문 전체가 호이스팅 되기 때문에 sayHi()가 동작함.</li>
            </ul>
        </li>
    </ul>

    <h3>재귀함수</h3>
    <ul style="margin-left:25px">
        <li>재귀함수: 함수가 자기 자신을 호출하는 것</li>
        <li>재귀함수는 무한히 반복될 수 있습니다.</li>
        <li>무한 반복을 제한하기 위해 함수의 종료조건을 체크해야합니다.</li>
        <li>반복문으로 구현할 수 있다면 재귀함수로도 구현이 모두 가능합니다. 반대로 재귀함수로 구현 가능한 것은 반복문으로 대부분 구현 가능(단 복잡도를 증가시켜야 함).</li>
        <li>팩토리얼 재귀함수 예시:</li>
    </ul>
    <pre>
    function factorial (n) {
      if (n <= 1) {
        return n
      }
      return n * factorial(n-1)
    }

    // n부터 1까지 전부 곱함
    </pre>

    <h3>즉시 실행함수</h3>
    <ul style="margin-left:25px">
        <li>즉시 실행함수: 즉시 실행하며 외부에서 컨트롤 할 필요가 없는 함수</li>
        <li>장점: 함수 스코프를 사용하며 즉시 실행하기 때문에 메모리 효율적임.</li>
    </ul>

    <h3>클로저</h3>
    <ul style="margin-left:25px">
        <li>클로저란?: 폐쇄된 공간 안에 데이터에 접근하기 위한 테크닉(외부 함수와 내부 함수가 존재할 때 내부 함수가 외부 함수의 환경을 기억하는 것.)</li>
        <li>클로저의 사용이유는?: 특정 변수나 함수를 외부에서 접근할 수 없도록 숨길 수 있음. private 변수와 메서드를 비슷하게 구현할 수도 있음.</li>
    </ul>

    <h3>생성자 함수</h3>
    <ul style="margin-left:25px">
        <li>생성자 함수란?: 사용자 정의 객체를 생성할 때 사용되는 함수</li>
        <li>생성자 함수의 특징
            <ul style="margin-left:25px">
                <li>생성자 함수이름은 첫 글자를 대문자로 시작</li>
                <li>new 연산자를 붙여 실행해야합니다.</li>
            </ul>
        </li>
        <li>생성자 함수 사용의 예시:</li>
    </ul>

    <pre>
    let book = {
        책이름: '알잘딱깔센 JavaScript 비동기 프로그래밍 - 비동기 너 내 동기가 돼라',
        책가격: 0,
        저자: ['정성훈', '정승훈'],
        출판일: '2022.08.12'
    }

    function Book(책이름, 책가격, 저자, 출판일){
        this.책이름 = 책이름
        this.책가격 = 책가격
        this.저자 = 저자
        this.출판일 = 출판일
    }
    
    // new를 사용한 생성자 함수
    let book1 = new Book('JS', 0, ['정성훈'], '2099.10.30')
    let book2 = new Book('Python', 100000, ['정성훈'], '2099.11.30')
    let book3 = new Book('React', 1000000, ['정성훈'], '2099.12.30')

    console.log(book1, book2, book3)
    </pre>

    <h2>Map & Set</h2>

    <h3>Map</h3>

    <h4>Map이란?</h4>
    <ul style="margin-left:25px">
        <li>키-값 쌍을 가지는 객체 자료형의 한 종류</li>
    </ul>

    <h4>Map의 여러가지 활용법</h4>
    <ul style="margin-left:25px">
        <li>순회 예시:</li>
    </ul>
    <pre>
    let m = new Map();

    for (const variable of m) {
      console.log(\`m을 순회 key : \${variable[0]}\`)
      console.log(\`m을 순회 value : \${variable[1]}\`)
    }
    </pre>
    <ul style="margin-left:25px">
        <li>값에 접근하는 예시:</li>
    </ul>
    <pre>
    console.log(m.keys());// 키 가져오기
    console.log(m.values());// 값 가져오기
    console.log(m.entries());// 키-값 쌍 가져오기
    </pre>
    <ul style="margin-left:25px">
        <li>인덱스를 가지는 자료형을 맵핑하는 예시:</li>
    </ul>
    <pre>
    let temp = new Map([[0, 1],
    [1, 2],
    [2, 3],
    [3, 4]]);
    </pre>

    <h4>Map과 Object의 차이는?</h4>
    <ul style="margin-left:25px">
        <li>공통점: 키-값 쌍을 가짐</li>
        <li>차이점
            <ul style="margin-left:25px">
                <li>Object의 키는 오직 문자열 타입 / Map의 키는 모든 값 가능</li>
                <li>Object의 크기는 수동으로 / Map은 size 사용</li>
            </ul>
        </li>
        <li>Map이 Object보다 나은 경우는?: 데이터를 추가하거나 제거하는 작업</li>
    </ul>

    <h3>Set</h3>

    <h4>Set이란?</h4>
    <ul style="margin-left:25px">
        <li>모든 타입의 값을 저장하는 객체자료형의 한 종류. 중복 값을 허용하지 않음</li>
    </ul>

    <h4>Set의 여러가지 활용법</h4>
    <ul style="margin-left:25px">
        <li>값 추가 예시:</li>
    </ul>
    <pre>
    let s = new Set('aaabbbccccdeeee');
    console.log(s); // {'a','b','c','d','e'}

    // 값이 배열인 경우
    let ss = new Set('aaabbbccccdeeee'.split(''));

    // 값 추가
    s.add('f');
    console.log(s); // {'a','b','c','d','e','f'}
    </pre>
    <ul style="margin-left:25px">
        <li>순회 예시:</li>
    </ul>
    <pre>
    for (let i of s) {
      console.log(i);
    }
    </pre>
    <ul style="margin-left:25px">
        <li>값 제거 예시:</li>
    </ul>
    <pre>
    s.delete('b');
    </pre>
    <ul style="margin-left:25px">
        <li>값 찍어보는(확인) 예시:</li>
    </ul>
    <pre>
    console.log(s.has('a'));
    </pre>
    <ul style="margin-left:25px">
        <li>모든 값 제거 예시:</li>
    </ul>
    <pre>
    s.clear();
    </pre>

    <h2>Json</h2>

    <h3>Json이란</h3>
    <ul style="margin-left:25px">
        <li>JavaScript Object Notation의 약자</li>
        <li>자바스크립트에서 객체를 표현하는 형식으로 데이터를 표현한 것</li>
    </ul>

    <h3>Json의 기본형태</h3>
    <ul style="margin-left:25px">
        <li>예시:</li>
    </ul>
    <pre>
    {
      "squadName": "슈퍼히어로",
      "members": [
        {
          "name": "아이언맨",
          "age": 29,
          "본명": "토니 스타크"
        },
        {
          "name": "헐크",
          "age": 39,
          "본명": "브루스 배너"
        }
      ]
    }
    </pre>

    <h3>Json 메서드</h3>
    <ul style="margin-left:25px">
        <li>JSON.parse() : JSON 문자열을 자바스크립트 객체로 변환</li>
        <li>JSON.stringfy() : 자바스크립트 객체를 JSON 문자열로 변환</li>
    </ul>

    <h2>DOM</h2>

    <h3>DOM API</h3>
    <ul style="margin-left:25px">
        <li>DOM: Document Object Model, HTML 문서의 내용을 트리형태로 구조화하여 웹페이지와 프로그래밍 언어를 연결시켜주는 역할을 함</li>
        <li>node: DOM에서 각각의 요소와 속성, 콘텐츠를 표현하는 단위</li>
        <li>API: Application Programming Interface, 어플리케이션 프로그래밍 도구. 쉽게 주문서라고 이해하면 된다.</li>
    </ul>

    <h3>DOM 트리에 접근하기</h3>
    <ul style="margin-left:25px">
        <li>접근 예시:</li>
    </ul>
    <pre>
    // 해당하는 Id를 가진 요소에 접근하기
    document.getElementById();

    // 해당하는 모든 요소에 접근하기
    document.getElementsByTagName();

    // 해당하는 클래스를 가진 모든 요소에 접근하기
    document.getElementsByClassName();

    // css 선택자로 단일 요소에 접근하기
    document.querySelector("selector");

    // css 선택자로 여러 요소에 접근하기
    document.querySelectorAll("selector");
    </pre>

    <h3>DOM 제어 명령어</h3>

    <h4>이벤트 삽입</h4>
    <ul style="margin-left:25px">
        <li>target.addEventListener(type, listener)</li>
        <li>예시:</li>
    </ul>
    <pre>
    const myBtn = document.querySelector("button");

    myBtn.addEventListener('click', function(){
      console.log("hello world");
    })
    </pre>

    <h4>클래스 제어</h4>
    <ul style="margin-left:25px">
        <li>classList 객체를 통해 요소의 class 속성을 제어</li>
        <li>예시:</li>
    </ul>
    <pre>
    myBtn.addEventListener('click', function(){
      myBtn.classList.add("red") // 클래스 추가
      myBtn.classList.remove("blue"); // 클래스 제거
      myBtn.classList.toggle("blue"); // 클래스 토글. 없으면 넣고 있으면 제거
      myBtn.classList.contains("blue"); // 클래스 유무 확인
    })
    </pre>

    <h4>요소 제어</h4>
    <ul style="margin-left:25px">
        <li>document.createElement(target): target 요소를 생성</li>
        <li>document.createTextNode(target): target 텍스트를 생성합니다.</li>
        <li>element.appendChild(target): target 요소를 element의 자식으로 위치합니다.</li>
        <li>element.removeChild(target): element의 target 자식 요소를 제거</li>
        <li>element.append(target) : target 요소를 element의 자식으로 위치(appendChild와의 차이는 노드 뿐만 아니라 여러 개의 노드를 한 번에, 텍스트도 자식 노드로 포함 가능)</li>
        <li>target.remove() : target 요소 제거</li>
    </ul>

    <h4>JS 문자열을 사용해 element, text 노드 생성&추가</h4>
    <ul style="margin-left:25px">
      <li>innerHTML 사용 예시:</li>
    </ul>
    <pre>
    text.innerHTML = "<strong>I'm Strong!!</strong>";
    </pre>
    <ul style="margin-left:25px">
        <li>사용 시의 주의사항: innerHTML의 경우 마크업으로 변환할 수 있는 문자열이 있다면 마크업으로 만들어 보여준다는 점, 의도치 않게 자바스크립트 코드를 실행시킬 가능성이 있기 때문에 innerText, textContent 속성을 이용하는 것이 낫다.</li>
    </ul>

    <h4>속성 제어하기</h4>

    <ul style="margin-left:25px">
        <li>스타일 제어하기:</li>
    </ul>
    <pre>
    const target = document.querySelector("p");
    const txtColor = target.style.color; // 현재 스타일 정보를 가져옴
    target.style.color = "red"; // 현재 스타일 정보를 변경
    target.style.fontWeight = "bold"; // 현재 스타일 정보에 font-weight 속성이 없다면 추가
    target.style.color = null; // 현재 스타일 정보를 제거(초기화)
    </pre>
    <ul style="margin-left:25px">
        <li>Attribute 메서드로 속성값 접근&수정하기:</li>
    </ul>
    <pre>
    const target = document.querySelector('p');
    const myimg = document.querySelector('img');
    const idAttr = target.getAttribute('id');
    console.log(idAttr);
    myimg.setAttribute("src", "https://img.wendybook.com/image_detail/img159/159599_01.jpg");
    </pre>
    <ul style="margin-left:25px">
        <li>data 속성으로 요소에 데이터 저장하기:</li>
    </ul>
    <pre>
    img
          class="terran battle-cruiser"
          src="battle-cruiser.png"
          data-ship-id="324"
          data-weapons="laser"
          data-health="400"
          data-mana="250"
          data-skill="yamato-cannon"
          
        const img = document.querySelector('img')
        console.log(img.dataset);
        console.log(img.dataset.shipId);
    </pre>

    <h4>Adjacent로 더 인접한 곳에 정밀하게 배치하기</h4>
    <ul style="margin-left:25px">
        <li>insertAdjacentHTML : 요소 노드를 대상의 인접한 주변에 배치</li>
    </ul>

    <h4>DOM 안에서 노드 탐색하기</h4>
    <pre>
    const cont = document.querySelector(".cont");
    console.log(cont.firstElementChild);  // 첫번째 자식 탐색
    console.log(cont.lastElementChild);   // 마지막 자식 탐색
    console.log(cont.nextElementSibling); // 다음 형제요소를 찾습니다.
    console.log(cont.previousSibling);    // 이전 형제요소 탐색
    console.log(cont.children);           // 모든 자식요소 탐색
    console.log(cont.childNodes);         // 모든 자식노드 탐색
    console.log(cont.parentElement);      // 부모 요소 탐색
    </pre>
    `,
  },
  {
    post_id: 21,
    title: '7월 3주차 정리 (2)',
    creation_date: '2024-07-19',
    thumbnail: '',
    content: `
    <h1>7월 3주차 정리 (2)</h1>

    <h2>이벤트 흐름</h2>
    <ul style="margin-left:25px">
        <li>이벤트 대상을 찾아가는 단계
            <ul style="margin-left:25px">
                <li>캡처링 단계: 이벤트 대상을 찾아갈 때 가장 상위의 window부터 document, body 순으로 DOM 트리를 따라 내려가며 중간에 만나는 모든 캡처링 이벤트 리스너를 실행함</li>
                <li>버블링 단계: 캡처링 이후 DOM 트리를 따라 올라가며 만나는 모든 버블링 이벤트 리스너를 실행함</li>
                <li>이벤트 전파: 이벤트 리스너가 차례대로 실행되는 현상</li>
            </ul>
        </li>
    </ul>

    <h2>이벤트 target, currentTarget</h2>
    <ul style="margin-left:25px">
        <li>target : 이벤트가 발생한 요소</li>
        <li>currentTarget : 이벤트 리스너가 연결된 요소</li>
    </ul>

    <h2>이벤트 위임</h2>
    <ul style="margin-left:25px">
        <li>이벤트 리스너가 없어도 마치 리스너가 있는것처럼 사용할 수 있음</li>
        <li>예시코드</li>
        <img src=${blogPostImg.post21Img1} alt="이벤트 위임 예시 코드" />
    </ul>

    <h2>이벤트의 this</h2>
    <ul style="margin-left:25px">
        <li>이벤트 리스너 함수내부의 this 는 이벤트가 연결된 노드를 참조합니다.</li>
    </ul>

    <h2>이벤트 흐름 조작</h2>
    <ul style="margin-left:25px">
        <li>preventDefault()
            <ul style="margin-left:25px">
                <li>브라우저의 기본 이벤트 동작을 취소</li>
            </ul>
        </li>
        <li>stopPropagation()
            <ul style="margin-left:25px">
                <li>이벤트 전파를 막음</li>
            </ul>
        </li>
    </ul>

    <hr>

    <h2>실습 URL</h2>
        <p>1. 셀렉트 박스 만들기
            <br>
            <a href="https://jung-sunghoon.github.io/frontend_test/js-test/240718/실습.html">https://jung-sunghoon.github.io/frontend_test/js-test/240718/실습.html</a>
            <br>
            <img src="https://velog.velcdn.com/images/jsh_0218/post/d06623d8-ce0b-4069-b595-3adfda11650a/image.png" alt="셀렉트 박스 실습">
        </p>
        <p>2. 브라우저의 우클릭 이벤트 제한
            <br>
            <a href="https://jung-sunghoon.github.io/frontend_test/js-test/240718/실습2.html">https://jung-sunghoon.github.io/frontend_test/js-test/240718/실습2.html</a>
            <br>
            <img src="https://velog.velcdn.com/images/jsh_0218/post/b5c0bcaa-5955-4db4-af42-8a41611072e5/image.png" alt="우클릭 이벤트 제한 실습">
        </p>
        <p>3. 리스트 삭제 및 이벤트 전파 막기
            <br>
            <a href="https://jung-sunghoon.github.io/frontend_test/js-test/240718/실습3.html">https://jung-sunghoon.github.io/frontend_test/js-test/240718/실습3.html</a>
            <br>
            <img src="https://velog.velcdn.com/images/jsh_0218/post/90e87d41-b964-40d8-accd-51e44164d38e/image.png" alt="리스트 삭제 및 이벤트 전파 막기 실습">
        </p>


    <h2>객체지향 프로그래밍</h2>

    <h3>객체지향 프로그래밍이란?</h3>
    <ul style="margin-left:25px">
        <li>객체와 객체가 서로 메소드를 통해 상호작용하게 하는 것</li>
    </ul>

    <h4>생성자 사용이유</h4>
    <ul style="margin-left:25px">
        <li>생성자의 장점: 생성자를 통해 생성된 각 객체들은 같은 프로퍼티와 메서드를 공유할 수 있다는 것입니다.</li>
    </ul>

    <h4>커스텀 생성자 만들기</h4>
    <ul style="margin-left:25px">
        <li>생성자는 함수이다.</li>
        <li>네이밍 규칙: 대문자로 시작함</li>
        <li>생성자 함수에 new 키워드 사용시 일어나는 일:
            <ul style="margin-left:25px">
                <li>새로운 객체가 만들어짐</li>
                <li>이 객체를 인스턴스(instance)라고 함</li>
            </ul>
        </li>
    </ul>

    <h3>프로토 타입</h3>
    <ul style="margin-left:25px">
        <li>프로토 타입을 사용하는 이유: 객체의 메서드를 등록할 때 마다 새로운 함수를 생성하는데, 이러한 자원의 낭비를 해결하기 위해 프로토타입을 사용함</li>
        <li>프로토 타입: 특정 객체에 대한 참조, 모든 인스턴스가 하나의 메서드를 공유하도록 만듦</li>
    </ul>

    <h4>객체상속</h4>
    <ul style="margin-left:25px">
        <li>프로토타입 체이닝: 자기 자신에게 존재하지 않는 프로퍼티나 메서드를 프로토타입을 통해 추적하는 과정</li>
    </ul>

    `,
  },
  {
    post_id: 22,
    title: '7월 4주차 정리',
    creation_date: '2024-07-26',
    thumbnail: '',
    content: `

    <h1>7월 4주차 정리</h1>

    <h2>classes</h2>
    <ul style="margin-left:25px">
      <li>클래스란 객체를 생산하는 틀이다</li>
    </ul>

    <h3>class의 사용법</h3>

    <ul style="margin-left:25px">
    <li>클래스의 기본 형태</li>

<pre>
class Robot {
    constructor(name) {
        this.name = name;
    }

    sayYourName() {
        console.log(\`삐리비리. 제 이름은 \${this.name}입니다. 주인님.\`);
    }
}
</pre>

    <h3>class 상속받기</h3>

    <ul style="margin-left:25px">
        <li>extend 키워드 사용</li>
        <li>super: 상속을 받기 위해 사용하는 함수
            <ul style="margin-left:25px">
                <li>사용시 주의점
                    <ul style="margin-left:25px">
                        <li>파생 클래스에 생성자 함수를 사용하고 싶다면 반드시 super 함수 사용</li>
                        <li>파생 클래스에 생성자 함수가 없다면 super 함수가 자동으로 호출되어 부모 클래스의 프로퍼티를 상속 받게 함</li>
                        <li>생성자 함수에서 this 값을 사용할 경우 super 함수는 반드시 this보다 먼저 실행되어야 함</li>
                        <li>파생 클래스가 아닌 클래스에서 사용하려고 해도 에러가 발생</li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>

    <h3>비공개(Private) 프로퍼티</h3>

    <ul style="margin-left:25px">
        <li>사용하는 상황: 중요한 데이터를 외부에서 함부로 수정할 수 없게 만들고 싶을 때</li>
        <li>비공개 프로퍼티의 역할: 객체 안의 중요한 정보를 안전하게 보호하여 프로그램이 뜻하지 않게 변경되는 것을 막는 역할</li>
        <li>프로퍼티를 비공개로 전환할때에는 #키워드를 사용합니다.</li>
        <li>비공개 프로퍼티에 접근/수정하기 위한 키워드
            <ul style="margin-left:25px">
                <li>get : 값을 불러옴</li>
                <li>set : 값을 수정함</li>
                <li>사용시 주의점: 협업 시에 주석이나 가이드 문서를 만들어 충분한 정보를 제공해주어 오해의 소지를 최대한 없애야 함</li>
            </ul>
        </li>
    </ul>

    <h2>AJAX</h2>

    <h3>AJAX란?</h3>

    <ul style="margin-left:25px">
        <li>Asynchronous Javascript And Xml의 약자</li>
        <li>JS 기술을 이용해 비동기적으로 서버와 통신할 수 있는 방법들을 묶어 AJAX라고 명명함</li>
    </ul>

    <h3>동기 VS 비동기</h3>

    <ul style="margin-left:25px">
        <li>동기 실행방식: 코드를 순서대로 실행</li>
        <li>비동기 실행방식: 코드를 순서대로 실행하지 않고 빠르게 실행되는 것 먼저 실행함</li>
    </ul>

    <h3>XMLHttpRequest</h3>

    <ul style="margin-left:25px">
        <li>어떤 기능을 가진 객체인가요?: 서버와의 비동기 통신을 가능하게 하는 여러 기능을 가짐</li>
    </ul>

    <h4>Call back지옥이란?</h4>

    <ul style="margin-left:25px">
        <li>비동기 코드가 끝나고 콜백으로 함수를 부르고, 다음 함수를 또 콜백으로 부르는 형태가 계속해서 이어지는, 콜백을 지속해서 부르는 것</li>
    </ul>

    <h3>fetch API</h3>

    <ul style="margin-left:25px">
        <li>fetch의 보편적 의미: 가져오다, 찾아내다</li>
    </ul>

    <h4>XHR과 fetch</h4>

    <ul style="margin-left:25px">
        <li>차이점은?: XHR은 통신의 기능을 수행하는 XMLHttpRequest 객체를 반환하는 인스턴스를 생성 / fetch는 인스턴스가 아닌 Promise를 반환</li>
    </ul>

    <h4>Promise</h4>

    <ul style="margin-left:25px">
        <li>Promise란?: 서버에 데이터를 호출하여 값을 받아오기 까지의 상태를 반환하는 객체 rejected, pending, fulfilled</li>
        <li>통신 상태가 거절일때의 처리방법: catch 메소드를 통해 에러를 표시</li>
    </ul>

    <h3>fetch API 사용</h3>

    <ul style="margin-left:25px">
        <li>기본형태:
<pre>
const result = fetch('url');
console.log(result);
</pre>
        </li>
        <li>json을 받는 예시:</li>
<pre>
const result = fetch('url');
result
  .then((res)=>{
    console.log(res);
    return res.json();
  })
  .then((json)=>{
    console.log(json);
    return json;
  })
  .catch((error)=>{
    console.error(error);
  })
</pre>
    </ul>

    <h2>실습</h2>

    <h3>xhr</h3>

<pre>
const requestObj = new XMLHttpRequest();

requestObj.open("GET", "https://test.api.weniv.co.kr/mall");

requestObj.onreadystatechange = () => {
  if (requestObj.readyState === 4 && requestObj.status === 200) {
    const result = requestObj.responseText;
    console.log(JSON.parse(result)[0]);
  }
};
requestObj.send();
</pre>

    <h3>promise</h3>

<pre>
const req = new Promise((resolve, reject) => {
  const requestObj = new XMLHttpRequest();
  requestObj.open("GET", "https://test.api.weniv.co.kr/mall");
  requestObj.onreadystatechange = () => {
    if (requestObj.readyState === 4 && requestObj.status === 200) {
      const result = JSON.parse(requestObj.responseText);
      resolve(result);
    } else if (requestObj.readyState === 4 && requestObj.status !== 200) {
      reject(
        new Error(
          \`호출이 정상적으로 이뤄지지 않았습니다.: \${requestObj.status}\`
        )
      );
    }
  };
  requestObj.send();
});

req
  .then((resolveResult) => {
    console.log(resolveResult);
    const data = resolveResult;
    const myOl = document.createElement("ol");

    data.forEach((element) => {
      const myLi = document.createElement("li");
      const productName = document.createElement("p");
      const price = document.createElement("p");

      myLi.id = element.id;
      productName.textContent = element.productName;
      price.textContent = element.price;

      myLi.append(productName);
      myLi.append(price);

      myOl.appendChild(myLi);
    });
    document.body.appendChild(myOl);
  })
  .catch((error) => {
    console.log(error);
  });
</pre>

    <h3>fetch</h3>

<pre>
const req = fetch("https://test.api.weniv.co.kr/mall");
req
  .then((res) => {
    console.log(res.json);
    return res.json();
  })
  .then((data) => {
    console.log(data);
    const myOl = document.createElement("ol");

    data.forEach((element) => {
      const myLi = document.createElement("li");
      const productName = document.createElement("p");
      const price = document.createElement("p");
      const img = document.createElement("img");

      myLi.id = element.id;
      productName.textContent = element.productName;
      price.textContent = element.price;
      img.src = "https://test.api.weniv.co.kr/" + element.thumbnailImg;

      myLi.append(productName);
      myLi.append(price);
      myLi.append(img);

      myOl.appendChild(myLi);
    });
    document.body.appendChild(myOl);
    return data;
  })
  .catch((error) => {
    console.error(error);
  });
</pre>

    <h2>async, await</h2>

    <ul style="margin-left:25px">
        <li>특징:
            <ul style="margin-left:25px">
                <li>async는 어떤 함수든 프로미스 객체를 반환하게 만들 수 있음.(return 키워드가 없어도)</li>
                <li>await은 async 함수 안에서 promise 객체의 상태가 결정될 때 까지 다음 코드를 실행시키지 않고 기다리게 함. 그 promise 객체의 fulfilled 값을 반환</li>
                <li>await은 무조건 async 함수 안에서만 사용 가능</li>
            </ul>
        </li>
    </ul>

    <h2>실습 내용 정리</h2>

    <h3>로컬에서 서버를 실행하기</h3>

    <ul style="margin-left:25px">
        <li>npm과 node 설치</li>
        <li>전역으로 json-server 설치
            <ul style="margin-left:25px">
                <li>npm install -g json-server</li>
            </ul>
        </li>
        <li>db/db.json 생성</li>
        <li>터미널에서 json-server —watch db/db.json</li>
    </ul>

    <h3>API란?</h3>

    <ul style="margin-left:25px">
        <li>Application Programming Interface의 약자로 운영체제나 프로그래밍 언어가 제공하는 기능을 제어할 수 있게 만든 인터페이스</li>
    </ul>

    <h3>서버 통신방식</h3>

    <ul style="margin-left:25px">
        <li>fetch
<pre>
//fetch로 get요청 보내기, 옵션을 넣지 않으면 get요청
fetch("요청할주소")

//fetch에 옵션을 넣어 POST요청
fetch("요청할 주소",{
  method: "POST",
  header: {
    "Content-Type":"application/json"
  },
  body: "{text:'안녕하세요'}"
})
</pre>
        </li>
    </ul>

    <h3>동기와 비동기</h3>

    <ul style="margin-left:25px">
        <li>차이점은?: 동기 방식은 작업이 순차적으로 실행, 비동기는 작업의 완료를 기다리지 않고 다음 작업을 실행.</li>
        <li>동기방식으로 처리되는 코드예시:
<pre>
출력1();//1을 출력하는 함수
출력2();//2를 출력하는 함수
출력3();//3을 출력하는 함수

//출력
// 1
// 2
// 3
</pre>
        </li>
        <li>비동기방식으로 처리되는 코드예시:
<pre>
비동기출력1();//1을 출력하는 함수
비동기출력2();//2를 출력하는 함수
비동기출력3();//3을 출력하는 함수

//출력
// 3
// 1
// 2
</pre>
        </li>
    </ul>

    <h2>json-server를 이용해 간단한 서버구축 방법</h2>

    <ul style="margin-left:25px">
        <li>필요한 환경설정: node, npm(Node Package Manager)</li>
        <li>서버 실행방법:
<pre>
json-server --watch db.json
</pre>
        </li>
    </ul>

    <h2>로컬스토리지</h2>

    <ul style="margin-left:25px">
        <li>로컬 스토리지란?: 만료기간이 존재하지 않으며 페이지를 변경하거나 브라우저를 닫아도 반 영구적으로 유지되는 저장소</li>
        <li>로컬스토리지 이용하여 배열데이터 보관하는 방법
<pre>
// 로컬스토리지에 데이터 저장하기
localStorage.setItem("key","value");

// 로컬스토리지에서 데이터 꺼내오기
localStorage.getItem("key");

// 키는 "key"가 아니라 다른 문자열도 가능하다.
</pre>
        </li>
    </ul>

    <h2>알고리즘</h2>

    <h3>알고리즘이란?</h3>

    <ul style="margin-left:25px">
        <li>문제를 어떻게 풀 것인가?에 대한 대답</li>
    </ul>

    <h3>알고리즘이 필요한 이유는?</h3>

    <ul style="margin-left:25px">
        <li>문제를 해결하고 효율성을 높이기 위해</li>
    </ul>

    <h3>오늘 배운 주요 알고리즘은?</h3>

    <ul style="margin-left:25px">
        <li>요구사항 구현 알고리즘</li>
    </ul>

    <h2>정규표현식</h2>

    <ul style="margin-left:25px">
        <li>정규표현식이란?:
            <ul style="margin-left:25px">
                <li>문자열의 특정한 패턴을 찾아내는데 활용하는 형식 언어</li>
                <li>많은 프로그래밍 언어들이 공통으로 지원함</li>
            </ul>
        </li>
        <li>정규표현식의 종류:</li>
<pre>
// 일반 문자열(V)
// 대소문자를 구별

// 처음과 끝(Anchors)
/^hello/gm : 처음에 hello
/hello$/gm : 끝에 hello


// 모든 문자(V)

/./gm : 모든 문자열(*과 같은 역할)
/....../gm : 모든 6개의 문자열
/h.llo/gm : h와 l 사이에 문자가 하나 있음(hallo, hello, hollo 등을 다 잡음)


// 택1(V)

/h[eay]llo/gm : 대괄호 안에 문자는 문자 1개에 해당!
/h[ea]l../gm : 총 5개의 문자
/h[a-f]llo/gm
/[a-zA-Z0-9]/gm : 모든 알파뱃과 숫자를 찾음
/[^a-zA-Z0-9]/gm : 나머지 문자열을 찾음

/010-[0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]/gm
/010[- .][0-9][0-9][0-9][0-9][- .][0-9][0-9][0-9][0-9]/gm


// 부정
// 대괄호 안에서만 부정이고 대괄호 밖에서는 시작의 의미

/h[^ae]llo/gm : 대괄호 안에 있다면 not에 의미


// 서브패턴


/(on|ues|rida)/gm : 그룹 1로 3개 중 매칭되는 패턴 찾음


// 수량자(V)
// 내가 찾을 패턴이 몇개 반복인지 찾는 방식

/010-[0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]/gm
/010-[0-9]{4}-[0-9]{4}/gm
/[0-9]{3}-[0-9]{3,4}-[0-9]{4}/gm
/[0-9]{3}[- .][0-9]{3,4}[- .][0-9]{4}/gm
/[0-9]{3}[- .]?[0-9]{3,4}[- .]?[0-9]{4}/gm
/[0-9a-zA-Z]+@[0-9a-zA-Z]+.[a-zA-Z]+/gm
/[0-9]*-[0-9]*-[0-9]*/gm

_* : 앞에 있는 문자가 0개 ~ N개({0,})
_+ : 앞에 있는 문자가 1개 ~ N개({1,})
_? : 앞에 있는 문자가 0개 ~ 1개({0,1})

{3} : 3개
{3,} : 3개 이상
{1,3} : 1개 ~ 3개



// 캐릭터 클래스(V)
// 빈도 매우 높음

/\w/gm : 워드
/\d/gm : 숫자

/[0-9]{3}[- .]?[0-9]{3,4}[- .]?[0-9]{4}/gm
/\d{3}[- .]?\d{3,4}[- .]?\d{4}/gm

// 빈도 작음

/\W/gm : not 워드
/\D/gm : not 숫자
/\s/gm : 스페이스
/\S/gm : not 스페이스


// 이스케이프 문자

/\[.*]/gm : 대괄호([]) 안에 감싸여진 문자열
/\[123\]/gm
/./gm
/\./gm
</pre>
    </ul>
        `,
  },
  // {
  //   post_id: ,
  //   title: '',
  //   creation_date: '',
  //   thumbnail: '',
  //   content: ``,
  // },
  // {
  //   post_id: ,
  //   title: '',
  //   creation_date: '',
  //   thumbnail: '',
  //   content: ``,
  // },
  // {
  //   post_id: ,
  //   title: '',
  //   creation_date: '',
  //   thumbnail: '',
  //   content: ``,
  // },
]
