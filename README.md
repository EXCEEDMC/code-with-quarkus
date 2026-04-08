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






