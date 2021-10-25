# 5조 Clone FaceBook

## Team

- Frontend : 한우석, 이지훈, 이민국 (REACT)
- Backend : 전은규, 김도형, 안성규 (NODE.JS))
  <br><br>

## Description

- 그 동안 배운 내용을 바탕으로 Facebook Clone Coding을 진행 하였습니다.<br>
- [데모 영상(유튜브)](https://www.youtube.com/watch?v=M7iybW5pcKU)
  <br><br>

## Objective

1. Frontend와 Backend 다른환경에서의 연동(CORS)
2. 회원가입 & Node.js에서 JWT 방식의 로그인
3. 게시글 목록 구현 (CRUD 적용, Image 업로드 가능)
4. 댓글 작성 (CRUD 적용)
5. 메인 페이지 View 기능 유뮤와 상관 없이 구현
6. 무한 스크롤 구현

---

- [API 설계](https://generated-drive-f4f.notion.site/API-3411050860cc46d0b583fffd95fff7c1)

<details markdown = "1">
<summary>
API 설계
</summary>

### 로그인/회원가입

좋아요 기능 구현 중 api 설계에 맞게 값을 보내고 콘솔을 확인한 결과 좋아요의 수는 올라가는데 유저가 해당 글에 좋아요를 눌렀는지 누르지 않았는지를 체크할 값이 없었다.
그래서 페이지를 리로드하면 좋아요를 눌렀던 글의 좋아요 수는 올라가지만 화면상에는 체크하지 않은 상태로 나와있었다.
백엔드분께 좋아요를 체크할 값을 boolean 값으로 내려달라고 요청하였고 이를 가지고 웹페이지를 리로드해도 좋아요를 눌렀던 게시글이 초기화되지 않고 유지되는 것을 구현하였다.
