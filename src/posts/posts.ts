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

<p>Reference</p>

<hr />

<a href="https://velog.io/@jini_eun/React-React.js%EB%9E%80-%EA%B0%84%EB%8B%A8-%EC%A0%95%EB%A6%AC#4-props-and-state">
<p>https://velog.io/@jini_eun/React-React.js%EB%9E%80-%EA%B0%84%EB%8B%A8-%EC%A0%95%EB%A6%AC#4-props-and-state</p></a>

<a href="https://deku.posstree.com/ko/react/create-react-app/react/"><p>https://deku.posstree.com/ko/react/create-react-app/react/<p/></a>

<p>이미지 출처 - <a href="https://deku.posstree.com/ko/react/create-react-app/react/">https://deku.posstree.com/ko/react/create-react-app/react/</a></p>`,
  },
  //   {
  //     post_id: 5,
  //     title: '',
  //     creation_date: '',
  //     thumbnail: '',
  //     content: ``,
  //   },
  //   {
  //     post_id: 6,
  //     title: '',
  //     creation_date: '',
  //     thumbnail: '',
  //     content: ``,
  //   },
  //   {
  //     post_id: 7,
  //     title: '',
  //     creation_date: '',
  //     thumbnail: '',
  //     content: ``,
  //   },
  //   {
  //     post_id: 8,
  //     title: '',
  //     creation_date: '',
  //     thumbnail: '',
  //     content: ``,
  //   },
  //   {
  //     post_id: 9,
  //     title: '',
  //     creation_date: '',
  //     thumbnail: '',
  //     content: ``,
  //   },
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
