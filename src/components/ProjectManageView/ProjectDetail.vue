<template>
  <v-container class="project_detail_container">
    <div class="project_title">
      프로젝트 명: 모든 정보를 다 얻을 수 있는 몽땅
    </div>
    <div class="project_content">
      내용:
      <p>이 프로젝트는 모든 정보를 얻는 프로젝트입니다!</p>
    </div>
    <div class="project_date">
      프로젝트 일정: 2019년 6월 10일 ~ 2019년 8월 20일
    </div>

    <v-layout wrap>
      <v-btn depressed color="primary">프로젝트 삭제</v-btn>
      <v-btn depressed color="primary">프로젝트 수정</v-btn>
      <v-btn depressed color="primary">지원 취소</v-btn>
    </v-layout>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped></style>
