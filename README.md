# quarkus프로젝트시작! (학번:20231035 이름: 허지훈)
매주수업내용을정리하자.

## 2, 3주차수업내용
실습1 : 쿼크스환경구축및준비완료!
실습2 : HTML 기본및LOL 메인화면개발완료!
<divalign="center">
<imgsrc="screenshots/2026-01-26 오전9_51_43.png" width="45%" alt="실습1 화면">
<imgsrc="screenshots/파일명.png" width="45%" alt="실습2 화면">
</div>
<br>

## 4주차수업내용
<!-- 부트스트랩 활용방법, 다양한 코드 표본과 예시를 참고 할 수 있었음.
 네비게이션 바  -->
 <nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container-fluid">
  <a class="navbar-brand" href="#">리그 오브 레전드</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">뉴스</a>
<ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">롤 공식 홈</a></li>
          <li><a class="dropdown-item" href="#">전적</a></li>
          <li><a class="dropdown-item" href="#">유튜브</a></li>

<!-- 4주차 수업내용 총 정리 : 네비게이션 바 안에 있는 버튼 옵션, 이미지를 삽입할때 사이트(외부 이미지 가져오기) 또는 이미지를 직접 다운받아 파일 경로로 입력하는 방식 , a href=" " 하이퍼 링크, 버튼 안에 또 다른 세부 옵션들이 있는 드롭 메뉴, 모달창 구현 방법을 배웠다. -->


## 5주차 수업내용

<!-- 네비게이션 바에서 선택 할 수 있는 서브 페이지 구현방법을 배우고, 
 다운로드 화면을 구현하였다. (여러 하위 폴더 및 html 파일들 추가 연동)
table (표) 사용 방법을 배웠다. 
css 경로를 연동시켜서 스타일을 꾸미는 방법을 배웠다. -->
<link rel="stylesheet" href="../css/download.css">

## 6주차 수업내용

<!-- 자바 스크립트의 기초 및 작동 원리, 활용 범위 및 필요성
<script> 태그에 js 파일을 내부 로컬로 연동하는 방법
js의 구현 방식 여러가지
<form> 태그와 <button> 태그, js 파일 연동을 통해 검색창 구현하기 (이때 search.js 는 최하단에 입력) -->

<form class="d-flex" id="searchForm">
  input class="form-control me-2" type="search" placeholder="챔피언, 뉴스 검색..." aria-label="Search" id="searchInput">
  <button class="btn btn-outline-success" type="submit">검색하기</button>
</form>

<script src="js/search.js"></script>

## 7주차 수업내용

<!-- main.css 파일에 기존 인덱스 사용자 스타일을 따로 분리하여 관리, + css 연동
서치 자바 스크립트 + 검색 결과 섹션을 인덱스 최하단에 추가함으로서 웹사이트 내부 검색 기능을 구현하였다. 
searchForm
performSearch (함수)
filter (검색어 일치 조건)
searchKeywordDisplay (키워드 출력)
필터 결과가 0 인경우 화면 출력 (if else문 사용)
switchCategory (버튼 클릭 시 탭 전환) -->

## 8주차 - 중간고사

## 9주차 수업내용

<!-- 객체 배열에 관해 배우고 직접 스크립트 적용
웹 화면에서 다크모드, 라이트모드 변환버튼 구현
어노테이션의 역할과 중요성
mysql 설치 후 데이터베이스 연동 -->


## 10주차 수업내용

<!-- 최근 웹 보안 사고 사례들 되짚어보기
데이터베이스, DataSeeder 연동
로그인, 로그아웃 화면 구현


      </li>
           <li class="nav-item">
        <a class="nav-link" href="/login">로그인</a>
      </li>

              링크 + 로그인버튼 -> 로그인 화면창으로 이동


        <div class="container" style="max-width: 400px;">
            <h2 class="fw-bold mb-4">로그인</h2>

            <form method="POST" action="/login_check">
                <div class="mb-3 text-start">
                    <label class="form-label">아이디</label>
                    <input type="text" class="form-control"
                            name="username" placeholder="아이디 입력" required>
                </div>
                <div class="mb-3 text-start">
                    <label class="form-label">패스워드</label>
                    <input type="password" class="form-control"
                            name="password" placeholder="패스워드 입력" required>
                </div>
                <button type="submit"
                            class="btn btn-primary w-100">로그인</button>

              아이디, 패스워드 화면, 제출 버튼

로그인 후 화면 이후 메인 페이지로 복귀 -> 기존 인덱스 파일을 재활용 해야함. 경로들은 ../ 을 앞에 붙여 수정 -->

## 11주차 수업내용

<!-- 로그아웃 창 마무리 + 회원가입 창 구현 + 암호화 전송 (추후 수정) -->

회원가입 시스템 구현 해보기 

학습 과정 중 활용 되었던 핵심 코드들을 중심으로 각 요소의 역할을 AI를 통해 요약 및 각색 해봤습니다.

엔드포인트의 정의? (Endpoint)
  ㄴ 클라이언트(웹 브라우저)가 서버의 특정 기능이나 자원에 접근하기 위해 접속하는 '끝점(도착지)'이자 '고유한 URL 주소'

1. 화면 구조 및 데이터 전송 준비 (HTML Form, 폼)
<form id="registerForm" action="/register_check" method="post">
사용자가 입력한 데이터를 서버로 전달하는 '택배 상자' 역할. action 속성으로 데이터가 도착할 서버의 엔드포인트를 지정, method="post"를 사용하여 민감한 개인정보가 URL에 노출되지 않도록 안전하게 전송

<input type="hidden" name="password">
화면에는 보이지 않는 숨겨진 입력칸. 사용자가 입력한 평문 비밀번호를 직접 서버로 보내지 않고, 자바스크립트를 통해 암호화(해시)된 결과값을 이 곳에 담아 서버로 전송하기 위한 필수적인 폼 요소

<button type="button" onclick="validateAndShowModal()">
일반적인 전송 버튼(type="submit")과 달리 type="button"을 사용. 버튼 클릭 시 폼이 서버로 즉각 제출되는 것을 막고, 자바스크립트가 먼저 개입하여 유효성 검사와 암호화를 수행할 수 있도록 제어권을 넘겨주는 역할

2. 프론트엔드 입력값 유효성 검사 (JavaScript)
validateAndShowModal()
회원가입 버튼 클릭 시 가장 먼저 실행되는 검증 함수. 아이디(영문/숫자), 비밀번호(특수문자 포함 8자 이상) 등이 올바른 형식인지 **정규식(Regex)**을 통해 검사합니다. 모든 입력값이 유효(valid = true)할 경우에만 다음 단계인 확인 모달창을 띄운다.
showError(), clearError()
유효성 검사를 통과하지 못했을 때 해당 폼 필드 아래에 붉은색 경고 메시지를 띄우고, 올바르게 수정되면 메시지를 지워주는 시각적 피드백을 담당한다.

3. 클라이언트 단 비밀번호 암호화 및 최종 전송 (JavaScript 비동기)
hashPassword(password)
브라우저 내장 API를 사용하여 평문 비밀번호를 SHA-256 알고리즘으로 암호화하는 함수입니다. 암호화 연산에 대기 시간이 필요하므로 async/await를 활용한 비동기 함수로 구현되었습니다.
showConfirmModal()
입력 정보들을 모달창에 요약해 보여주는 동시에, 앞서 만든 hashPassword()를 호출하여 생성된 비밀번호 해시값을 Form의 hidden 필드에 삽입합니다.
submitRegister()
최종 모달창에서 '가입하기'를 누르면 실행됩니다. 모달창을 닫고 registerForm.submit()을 호출하여, 대기하고 있던 폼 데이터를 최종적으로 서버에 POST 전송합니다.


4. 백엔드 라우팅 및 데이터베이스 엔티티 (Java)
registerPage() (AuthResource.java)
/register 경로로 들어오는 GET 요청을 받아 회원가입 HTML 폼 화면을 브라우저에 렌더링
findByUsername(), findByEmail() (User.java)
서버로 넘어온 가입 데이터를 DB에 저장하기 전, 데이터베이스를 조회하여 아이디나 이메일 중복 가입을 방지하는 역할을 한다

[느낀점]
수업 당시에는 화면을 보며 수업자료를 복붙하기에 신경이 쏠려서 시스템의 전체 구조를 넓게 보지 못했고, 이해를 못한 채 묻어진 적도 많았었다. 하지만 오늘 AI를 활용한 요약 정리를 통해 각 기능을 분담하는 함수들의 구체적인 역할을 짚어보는 과정이 내용 이해에 도움이 되었던 것 같다. 각 함수가 왜 그 위치에서 호출되어야 하는지 등의 인과관계를 파악하게 되면서 웹 프론트엔드, 백엔드의 상호작용 구조를 조금이나마 이해할 수 있었어서 마음이 한결 가벼웠다.



## 12주차 수업내용 암호화 및 로그인 체크

[해시함수 복습]

[SHA-256 (Secure Hash Algorithm 256-bit)]
  ㄴ 어떤 길이의 데이터를 입력하든, 항상 고정된 길이의 무작위 문자열(64자리 16진수)로 변환해 주는 암호화(해시) 알고리즘
     출력 형태 (예: 03ac674216f3e15c...)

암호화된 결과 해시값을 보고 원래의 비밀번호가 무엇이었는지 되돌리는 것(복호화)이 수학적으로 불가능함. (예: 고기를 다져서 햄버거 패티를 만들면, 다시 원래의 고기 덩어리로 되돌릴 수 없는 것과 같다.)

사용자가 입력한 비밀번호(예: 1234)를 평문 그대로 서버나 DB에 저장하면, 해킹을 당했을 때 치명적이기 때문, 따라서 클라이언트 측에서 먼저 SHA-256 해시함수로 변환한 뒤 전송하고 저장하면, 관리자나 해커조차 원래 비밀번호를 알 수 없어 강력한 보안이 유지된다.

[로그인 체크]

loginForm <form> 로그인 폼, JS에서 .submit() 호출

usernameInput <input> 아이디 입력 (유효성 검사)

usernameMsg <div> 아이디 유효성 에러 메시지 출력

passwordInput <input> 패스워드 입력 (해싱 전 원본)

passwordMsg <div> 패스워드 유효성 에러 메시지 출력

password Hidden 해시값 저장 후 서버 전송

로그인 버튼 클릭 시

 ▼ onclick="validateAndLogin()" ← login.js
 │
 ▼ 아이디 정규식 검사 (/^[a-zA-Z0-9]{4,20}$/)
 │ 실패 → usernameMsg 에 오류 표시
 │
 ▼ 패스워드 정규식 검사
 │ 실패 → passwordMsg 에 오류 표시
 │
 ▼ 유효성 통과 → submitLogin() ← login.js
 │
 ▼ hashPassword(passwordInput.value) ← input_sha256.js
 │ SHA-256 해시 생성
 │
 ▼ hidden(id="password").value = 해시값
 │
 ▼ loginForm.submit()
 │
 ▼ POST /login_check
 username = "guest" ← 평문
 password = "cbfdac60..." ← 해시값만 전송

[세션 체크]

로그인 상태 유지를 위해 필요.

경로 / (루트) 를 사용하여 로그인 상태일땐 after_login.html을 반환하고, 비로그인 상태일땐 main_index.html을 반환한다.