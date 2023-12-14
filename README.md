 <img width="100%" alt="image" src="https://github.com/boostcampwm2023/web08-ByeolSoop/assets/44529556/a2b6f2c0-51db-46e8-a52a-bdd97a3d11e5">

<div align="center">
   <h1> 별숲 </h1>
   <h3>💫 당신의 이야기를 잇는, 밤하늘 별자리 다이어리 💫</h3>

<p>
  <a href="https://www.byeolsoop.site">별숲 홈페이지</a>
</p>
  <p>
  <a href="https://www.notion.so/551e1070f73a405badb8aeb178dac192?pvs=21">서비스 가이드</a>
  &nbsp; | &nbsp; 
  <a href="https://byeolsoop.notion.site/Notion-6ee66b92d165412e9954c35d223cfab4?pvs=4">노션</a>
  &nbsp; | &nbsp; 
  <a href="https://github.com/boostcampwm2023/web08-ByeolSoop/wiki">위키</a>
</p>
<p>
  서비스 체험을 원한다면? 아래의 계정으로 로그인해보세요!<br>
  아이디 : sample / 비밀번호 : sample<br>
</p>
</div>




## 📢  프로젝트 소개

###  별숲에 작성하는 일기장 서비스

`#일기` `#개인화` `#밤하늘` `#3D` `#감정분석` `#연결`

> "별숲"의 사전적 의미는 별들이 총총 떠 있는 하늘을 비유적으로 이르는 말입니다.  <br>
> 이처럼 별들이 가득한 밤하늘의 이미지를 바탕으로, 일기장 서비스를 기획하였습니다.

별숲은 3D 밤하늘에 사용자의 일기를 별의 형태로 그려나갈 수 있는 서비스입니다. <br>
사용자는 별의 모양을 커스텀하고, 별과 별 사이를 연결해 자신만의 별자리를 만들 수 있습니다. <br>
이와 함께, 감정분석 기능을 통해 작성된 일기의 감정에 따라 별의 색상이 변화하며, 사용자만의 감성적인 밤하늘을 꾸밀 수 있습니다.

<br>
<img width="600" alt="smile" src="https://github.com/boostcampwm2023/web08-ByeolSoop/assets/44529556/6487f421-305d-4770-af37-16fde97c2f30">
<br>


## 🔎  주요 기능

### ✦ 밤하늘에 오늘 하루 이야기를 담은 나만의 별을 수놓아보세요.
별숲은 `three.js`와 `React-Three-Fiber`를 결합하여 3D 밤하늘을 구현하였습니다. <br>
별처럼 빛나는 기억과 생각을 별의 형태로 밤하늘에 그려나갈 수 있습니다.

![byeolsoop_1](https://github.com/boostcampwm2023/web08-ByeolSoop/assets/49023654/7c5ffb0b-2d09-4994-a999-0bc346f690fc)

<br>

### ✦ 모양과 태그로 나만의 별을 기억하세요.
별의 모양을 커스텀하거나 태그를 편집하는 등의 개인화 기능을 통해, 자신만의 이야기와 감성이 담긴 별을 만들어낼 수 있습니다.

![byeolsoop_2](https://github.com/boostcampwm2023/web08-ByeolSoop/assets/49023654/9fb35383-7fd3-4cdd-8362-563fced82973)

<br>

### ✦ 그 날의 감정이 고스란히 녹아든 예쁜 별들이 하늘에 피어납니다.
Ncloud의 CLOVA Sentiment를 활용하여 작성된 일기의 감정을 분석합니다. <br>
이를 통해 각 별의 색상이 감정에 따라 변화하며, 사용자의 감정 상태를 시각적으로 표현합니다.

![byeolsoop_3](https://github.com/boostcampwm2023/web08-ByeolSoop/assets/49023654/b6160239-82be-497b-8ed3-4d785bbd5a9d)

<br>

### ✦ 별을 연결해 나만의 별자리를 만들어보세요.
별과 별 사이에 연결선을 그려 개인만의 별자리를 구성할 수 있습니다. <br>
이 기능은 일기를 더욱 특별하게 만들며, 사용자의 감정과 추억을 별자리로 연결하여 시각화합니다.

![byeolsoop_4](https://github.com/boostcampwm2023/web08-ByeolSoop/assets/49023654/c0f7e78b-a31b-47d8-8063-7b7a0815df3a)

<br>

### ✦ 모양이나 태그 등을 통해 내가 쓴 별들을 모아볼 수 있어요.

![byeolsoop_5](https://github.com/boostcampwm2023/web08-ByeolSoop/assets/49023654/18266aea-ec7f-4170-8a05-da4a95eb3234)

<br>

### ✦ 1년 동안 쌓인 별들의 아름다운 기록을 살펴보세요.

![byeolsoop_6](https://github.com/boostcampwm2023/web08-ByeolSoop/assets/49023654/4273665a-e006-407e-a7b3-e712fa00a19b)

<br>

## 💥  기술적 도전

### 프론트엔드
| 기능 | 상세 내용 |
|---|---|
|밤하늘 3D 뷰 구현| • `three.js` + `R3F` 활용한 별 / 별자리 / 밤하늘 3D 구현 <br> • UX를 위한 클릭 / 더블 클릭 이벤트 시점 이동 알고리즘 구현 <br> • Web API를 활용해 SVG 파일을 재질로 변환 |
|일기 데이터 관리| • 서비스 특성 상 빈번하게 발생할 데이터 변환을 고려 <br> • `Recoil` 라이브러리를 활용한 atomic 데이터 관리 <br> • `react-query` 라이브러리를 활용한 로딩 / 에러 처리 및 최신 데이터 유지|
|일기 데이터 가공| • 사용자들에게 일기 목록 / 현황을 제공하기 위한 데이터 가공 <br> • `react-datepicker` 라이브러리를 활용한 날짜 범위 필터링 서비스 제공 <br> • `Day.js` 라이브러리를 활용한 일기 스트릭 서비스 제공
### 백엔드
| 기능 | 상세 내용 |
|---|---|
|개인 데이터 접근 제어| • JWT 인증을 통해 로그인용 액세스 / 리프레시 토큰을 발급하고 저장 <br> • `JwtAuthGuard`를 사용하여 부적절한 로그인 및 중복 로그인 방지<br> • `PrivateDiaryGuard`를 사용하여 타인의 일기 접근 제어|
|명확한 테스트 코드| • 테스트 코드 규칙 정의<br> • 내부 및 외부 의존성에 대한 테스트 코드 작성<br> • `typeorm-transactional-tests` 라이브러리를 활용하여 트랜잭션 적용|

## BE의 기술적 도전 과제

### Stateful한 JWT 기반 인증 방식 도입

![리드미1](https://github.com/boostcampwm2023/web08-ByeolSoop/assets/49023630/cd697065-43f6-4e4c-994b-7f7aa2e0a426)

<a href="https://byeolsoop.notion.site/3048b611bbc4442b8b1fb6ec1abed392?pvs=4">개발일지</a>

- 개인 일기 서비스에서 가장 중요한 요소는 일기 데이터가 타인에게 노출되지 않는 것이라고 판단했습니다.
- Stateless한 JWT 기반 인증 방식을 도입했으나, 이 방식은 액세스 토큰의 탈취가 쉽고, 서버에서 이를 방지할 수 있는 방법이 없어 보안 이슈가 발생하였습니다.
    - Stateless 방식은 서버에서 클라이언트의 상태를 저장하지 않기 때문에, 탈취된 액세스 토큰을 통한 부적절한 접근을 막기 어렵다는 문제점이 있습니다.
- 이를 해결하기 위해 인증 방식을 Stateful하도록 변경했습니다.
    - Stateful JWT는 토큰의 유효성을 서버에서 검증하면서 사용자 상태를 기억하고 관리하는 방식입니다. 따라서 부적절한 접근 시 서버는 사용자의 상태를 기반으로 요청을 차단할 수 있습니다.

<br>

### 커스텀 Guard를 통한 개인 데이터 접근 제어

| <img width="90%" alt="image" src="https://github.com/boostcampwm2023/web08-ByeolSoop/assets/49023630/fd8bdba4-deb6-4675-a201-1be69e52232b"> |  <img width="90%" alt="image" src="https://github.com/boostcampwm2023/web08-ByeolSoop/assets/49023630/5955d1c7-4271-47c1-8308-915b6082469c"> |
|:---:|:---:|
|JwtAuthGuard 동작 과정|PrivateDiaryGuard 동작 과정|


<a href="https://byeolsoop.notion.site/Guard-4daa2c3e56d34b5e9009fb992bd61c60?pvs=4">개발일지</a>

- Stateful한 JWT 기반 인증 방식을 구현한 후, 이를 활용하여 중복 로그인 등의 여러 보안 이슈를 해결해야 했습니다.
- JwtAuthGuard를 구현하여 액세스 토큰을 발급 받은 사용자가 현재 사용자가 맞는지 리프레시 토큰을 활용하여 비교하고 접근을 제어하도록 했습니다.
    
    


    - 부적절한 액세스 토큰으로 접근한 경우 리프레시 토큰의 Payload에 저장된 액세스 토큰과 비교하여 접근을 제어할 수 있습니다.
    - 중복 로그인의 경우 리프레시 토큰의 Payload에 저장된 클라이언트 IP를 비교하여 접근을 제어할 수 있습니다.
- PrivateDiaryGuard를 구현하여 요청한 일기 데이터가 현재 사용자의 일기가 맞는지 검증하고 접근을 제어하도록 했습니다.
  
   

    - 정상적인 액세스 토큰을 갖고 타인의 일기를 부적절하게 요청하는 경우 접근을 통제할 수 있습니다.

<br>

### 테스트 코드 작성을 위한 개념과 규칙 정의

![image](https://github.com/boostcampwm2023/web08-ByeolSoop/assets/49023630/ae8e8891-3a9a-4521-b879-975e3a7c4347)

<a href="https://byeolsoop.notion.site/e9ce009cef9b40378011df2afe70101d?pvs=4">개발일지</a>

- 테스트 코드를 작성하기 시작할 때, 각 테스트의 종류에 대한 개념을 제대로 이해하지 못해 개발 중 혼동이 발생했습니다.
- 테스트와 관련된 명확한 개념과 규칙을 정의한 후 테스트 코드를 작성했습니다.
    - 특히나 통합 테스트의 경우 각 코드의 의존성을 내부 의존성과 외부 의존성으로 구분하고, 이에 따라 테스트 방식을 다르게 구현했습니다.
- 개념을 명확히 하여 팀원 간의 소통 시 혼동이 발생하지 않았고, 각 테스트가 갖는 책임을 명확히 하여 더 간결하고 확실하게 코드를 검증할 수 있었습니다.

<br>

### 트랜잭션 도입을 통한 테스트 리소스 사용량 감소
| ![리드미5](https://github.com/boostcampwm2023/web08-ByeolSoop/assets/49023630/fe5337cf-9d4d-4600-86b6-d3cac7fd1d28) | ![리드미6](https://github.com/boostcampwm2023/web08-ByeolSoop/assets/49023630/b44b86f0-6f33-48a5-800b-4dd89acd00d0) |
|---|---|
|도입 이전|도입 이후|

<a href="https://byeolsoop.notion.site/Transaction-83289ba51d524c4281cfae5303fd0113?pvs=4">개발일지</a>

- 테스트 데이터베이스 환경을 독립적으로 유지하기 위해, 매 테스트마다 데이터베이스를 초기화해야 했습니다. 이로 인해 테스트에 소요되는 리소스와 시간이 크게 늘어나는 문제가 발생했습니다.
- TypeORM Transactional Test를 통해 문제를 해결할 수 있었습니다.
    - 테스트가 시작하면 모든 쿼리문이 트랜잭션으로 들어갑니다.
    - 트랜잭션을 통해 기능의 검증을 실시합니다.
    - 테스트가 종료되면 트랜잭션이 롤백되고 커넥션을 풀에 반환합니다.
- 데이터베이스 초기화에 대한 부담이 없어지고 커넥션 객체가 풀에 바로 반납 및 재사용되어 테스트에 필요한 시간을 50% 이상 줄이고, 리소스 사용량을 크게 감소시킬 수 있었습니다.

<br>

## FE의 기술적 도전 과제

### 3D 뷰 구현 과정

- React에서 3D 그래픽 환경을 구축할 수 있는 React-Three-Fiber를 사용하면서, 밤하늘에 떠있는 별을 탐색하고 만들어나가는 그러한 과정을 어떻게 자연스럽게 처리할 수 있을지 고민하였습니다.
- 사용자가 마우스로 밤하늘을 드래그하여 컨트롤할 수 있도록 하기 위해 다음과 같은 컨트롤 방식을 찾아보았습니다.
    - [DragControls](https://threejs.org/docs/examples/ko/controls/DragControls.html)
    - [FirstPersonControls](https://threejs.org/docs/examples/ko/controls/FirstPersonControls.html)
    - [FlyControls](https://threejs.org/docs/examples/ko/controls/FlyControls.html)
    - [OrbitControls](https://threejs.org/docs/examples/ko/controls/OrbitControls.html)
    - [PointerLockControls](https://threejs.org/docs/examples/ko/controls/PointerLockControls.html)
    - [TrackballControls](https://threejs.org/docs/examples/ko/controls/TrackballControls.html)
    - [TransformControls](https://threejs.org/docs/examples/ko/controls/TransformControls.html)
- 사용자가 마치 고개를 돌려 밤하늘을 둘러보는 느낌을 주기 위해 OrbitControls를 사용하였습니다.
- 사용자가 밤하늘을 둘러보는 상황에서 밤하늘은 마치 하나의 구와 같기에, sphereGeometry를 활용해 사용자가 구 내부에 위치해있고 이 구의 내부 벽면을 밤하늘로 바라보도록 구현하였습니다.
    - sphereGeometry는 많은 segment가 있는 다면체처럼 되어있기 때문에, 이 segment값을 최대한 많이 주어 최대한 부드러운 구를 표현할 수 있도록 하였습니다.
    - 사용자가 바라보는 건 위쪽 하늘이기 때문에, pi/theta 값을 조정해 반구 아래 부분을 잘라냈습니다.
- R3F의 Mesh객체에서는 onDoubleClick 이벤트를 통해 그 이벤트에서 발생한 정보를 얻을 수 있습니다. 
이를 통해 사용자가 밤하늘을 더블클릭했을 때, 해당 이벤트에서의 point 정보를 통해 밤하늘의 어느 좌표를 사용자가 바라보고 클릭하였는지에 대한 정보를 Vector3 값으로 얻을 수 있었습니다.
    
    ```jsx
    {
    	distance: 29.94205148934579,
    	point: Vector3,
    	object: Mesh,
    	uv: Vector2,
    	normal: Vector3,
    	…
    }
    ```
    
- 사용자가 더블클릭한 좌표로 카메라 시점을 자연스럽게 이동하는 방법에 대해 고민하였고, 3가지 방안을 생각해보았습니다.
    1. OrbitControls 자체의 속성 값을 활용해, target을 클릭한 위치로 시점을 이동하는 방식을 구현하는 방식.
    2. raycasting. 카메라 주변에 작은 구를 추가하고, 더블 클릭 이벤트가 발생했을 때 작은 구의 충돌 지점 좌표를 시점 target으로 지정.
    3. 카메라 위치 변경은 제어하지 않음. 대신 target을 원점으로 두고 카메라 위치 자체를 작은 위에서 이동.
    
    첫번째 아이디어의 경우 React의 useState 및 useFrame을 활용해 target이 유동적으로 바뀌면서 프레임 단위로 카메라를 이동시킬 수 있었으나, target이 별을 기준으로 생성되어 드래그를 통한 이동이 별을 기준으로 실행되고, 별을 생성할 때마다 카메라의 위치가 불규칙하게 변경된다는 문제점이 존재했습니다.
    
    두번째 아이디어의 경우 target이 변경되어도 카메라 주변의 작은 구 위의 점이 target이 되기 때문에 첫번째 아이디어의 문제점을 크게 줄일 수 있었습니다. 하지만 여전히 시점 변환이 어색한 문제점이 있었고, target 위치 문제 역시 문제점이 아예 사라진 것이 아닌 것이었기 때문에 근본적으로 해결할 수 있는 방안이 필요했습니다.
    
    세번째 아이디어는 첫번째, 두번째 아이디어에서 실패한 부분에서 착안하여, 카메라 이동을 고정하고 카메라 시점을 이동하는 로직에서 카메라가 바라보는 target을 고정하고 카메라의 위치를 이동시키는 로직으로 변경하였고, 이를 통해 기존 두 가지 문제점을 깔끔하게 해결할 수 있었습니다.
    

<a href="https://byeolsoop.notion.site/3D-01df980774224f63b05003cc1c483c70?pvs=4">3D 뷰 구현 과정 개발 일지</a>

### API 요청 및 응답에 따른 클라이언트에서의 처리

- 백엔드 서버에 일기의 CRUD, 별 모양의 데이터 fetch 등 여러 요청을 보냈을 때 돌아오는 각 응답에 따른 처리에 대해 고민하였습니다.
- 각 요청에 따른 응답이 어떻게 돌아올 지에 대해서 API 문서에 정리를 상세히 하고, 이에 따라 React-Query를 통해 API 요청을 진행하였습니다.
- 각 응답 status code에 따라 case 별로 fetch 이후의 행동을 할 수 있도록 로직을 구현하였습니다.
    - 특히 중요한 401 code의 경우, 액세스 토큰이 만료되어 재발급이 필요할 때 받을 수 있는 status code입니다. 
    이를 응답으로 받은 경우 액세스 토큰을 재발급받는 요청을 보낸 후, 정상적으로 요청을 돌려받으면 기존에 시도하고자 했던 요청을 새로 발급받은 액세스 토큰으로 다시 요청하여 사용자 입장에서 사용할 때 불편함 없이 자연스럽게 동작할 수 있도록 설계하였습니다.
- React-Query 라이브러리를 통해 데이터를 실시간으로 fetching하는 과정을 거치면서, 각 API 요청 과정에서 중복되는 코드가 상당히 많아지는 것을 확인할 수 있었습니다.
    
    이는 가독성의 저하를 크게 불러오는 이슈를 발생시켰고, 따라서 먼저 각 요청에 따른 코드를 모두 작성한 후, 중복되는 코드를 각 코드에서 정리하여 하나의 함수로 분리하는 리팩토링 작업을 진행하였습니다.
    

<a href="https://byeolsoop.notion.site/API-341352ff57c84eef99c488bed5bd470f?pvs=4">각 status code에 따른 처리 방식 정리</a>

<a href="https://byeolsoop.notion.site/useQuery-useMutation-Refactoring-eed2ee2f03ea466e851d134ca35f0778?pvs=4">useQuery/useMutation 리팩토링을 위한 공통 부분 추출 및 함수화 과정</a>

## ⚒️  기술 스택 

| 분류 | 기술 |
| ---- | ---- |
| 프론트엔드 | <img src="https://img.shields.io/badge/JavaScript-%23323330?style=flat-square&logo=JavaScript&logoColor=%23F7DF1E"/> <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black"/> <img src="https://img.shields.io/badge/styled_components-DB7093?style=flat-square&logo=styled-components&logoColor=white"/> <img src="https://img.shields.io/badge/Recoil-3626B1?style=flat-square&logo=recoil&logoColor=white"/> <img src="https://img.shields.io/badge/React_Query-FF4154?style=flat-square&logo=react-query&logoColor=white"/> <img src="https://img.shields.io/badge/three.js-000000?style=flat-square&logo=three.js&logoColor=white"/> <img src="https://img.shields.io/badge/React_Three_Fiber-20232A?style=flat-square&logo=react&logoColor=61DAFB"/> |
| 백엔드 | <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=ffffff"> <img src="https://img.shields.io/badge/Nest.js-E0234E?style=flat-square&logo=NestJS&logoColor=white"/> <img src="https://img.shields.io/badge/TypeORM-FF4716?style=flat-square&logo=typeorm&logoColor=white"/> <img src="https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white" /> <img src="https://img.shields.io/badge/Jest-341f0e?style=flat-square&logo=jest&logoColor=FF0000"> <img src="https://img.shields.io/badge/Redis-DC382D?style=flat-square&logo=redis&logoColor=white"/> |
| 배포 | <img src="https://img.shields.io/badge/Naver Cloud Platform-03C75A?style=flat-square&logo=naver&logoColor=ffffff"> <img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=Docker&logoColor=white"> <img src="https://img.shields.io/badge/Nginx-014532?style=flat-square&logo=Nginx&logoColor=009639&"> <img src="https://img.shields.io/badge/Github Actions-2671E5?style=flat-square&logo=GitHub%20Actions&logoColor=white"/> |
| 협업 도구 | <img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white" /> <img src="https://img.shields.io/badge/Discord-5865F2?style=flat-square&logo=discord&logoColor=white"/> <img src="https://img.shields.io/badge/Notion-000000?style=flat-square&logo=Notion"> <img src="https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=Figma&logoColor=ffffff"> <img src="https://img.shields.io/badge/Slack-4A154B?style=flat-square&logo=Slack&logoColor=ffffff"> |


<br>

## ⚙️  시스템 아키텍처

<img width="600" src="https://github.com/boostcampwm2023/web08-ByeolSoop/assets/44529556/08e1c115-2799-450f-bf5f-eb97361fe1db">

## 👥  팀원 소개
|<img src="https://github.com/dmson1218.png" width="100">|<img src="https://github.com/dbwhdtjr0457.png" width=100>|<img src="https://github.com/JoonSoo-Kim.png" width=100>|<img src="https://github.com/mingxoxo.png" width="100">|
|:--:|:--:|:--:|:--:|
|[J069 손동민](https://github.com/dmson1218)|[J085 유종석](https://github.com/dmson1218)|[J032 김준수](https://github.com/JoonSoo-Kim)|[J114 이정민](https://github.com/mingxoxo)|
|FE|FE|BE|BE|

- 더 자세한 내용은 [📄Wiki](https://github.com/boostcampwm2023/web08-ByeolSoop/wiki) 를 확인해주세요!
