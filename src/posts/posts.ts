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
    thumbnail: '',
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
  //   {
  //     post_id: 10,
  //     title: '',
  //     creation_date: '',
  //     thumbnail: '',
  //     content: ``,
  //   },
  //   {
  //     post_id: 11,
  //     title: '',
  //     creation_date: '',
  //     thumbnail: '',
  //     content: ``,
  //   },
  //   {
  //     post_id: 12,
  //     title: '',
  //     creation_date: '',
  //     thumbnail: '',
  //     content: ``,
  //   },
  //   {
  //     post_id: 13,
  //     title: '',
  //     creation_date: '',
  //     thumbnail: '',
  //     content: ``,
  //   },
]
