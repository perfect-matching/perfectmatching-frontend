<template>
  <v-container class="project_detail_container">
    <v-card flat class="project_card">
      <v-chip class="status" color="green" text-color="white">진행중</v-chip>
      <div class="project_title">모든 정보를 다 얻을 수 있는 몽땅</div>
      <div class="project_date">2019년 03월 30일 - 2019년 04월 22일</div>
      <div class="project_summery">
        <div class="summery_title content_title">요약내용</div>
        <p>이 프로젝트는 모든 정보를 얻는 프로젝트입니다!</p>
      </div>

      <div class="require_skill">
        <div class="skill_title content_title">기술 스택</div>
        <v-chip v-for="tag in tags" :key="tag">{{ tag }}</v-chip>
      </div>

      <div class="github">
        <div class="github_title content_title">깃허브 저장소</div>
        <a href="https://github.com/perfect-matching/perfectmatching-frontend"
          >https://github.com/perfect-matching/perfectmatching-frontend</a
        >
      </div>

      <div class="project_detail">
        <div class="detail_title content_title">상세설명</div>
        <p>이 프로젝트는 모든 정보를 얻는 프로젝트입니다!</p>
      </div>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    tags: [
      "Work",
      "Home Improvement",
      "Vacation",
      "Food",
      "Drawers",
      "Shopping",
      "Art",
      "Tech",
      "Creative Writing"
    ]
  })
};
</script>

<style scoped>
.project_card {
  padding: 20px;
}

.project_title {
  font-size: 30px;
}

.project_date {
  margin-bottom: 20px;
}

.project_summery {
  color: #898989;
}

.content_title {
  font-size: 16px;
  color: black;
}

.require_skill {
  margin-bottom: 10px;
}

.v-chip {
  margin: 5px 5px 5px 0;
}
</style>
