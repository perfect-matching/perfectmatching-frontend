<template>
  <v-container class="project_detail_container">
    <v-card flat class="project_card">
      <v-chip class="status" color="green" text-color="white">진행중</v-chip>
      <div class="project_title">모든 정보를 다 얻을 수 있는 몽땅</div>
      <div class="deadline">2019년 03월 30일 까지 모집</div>
      <div class="project_content">
        <p>이 프로젝트는 모든 정보를 얻는 프로젝트입니다!</p>
      </div>
      <div class="require_skill">
        <v-chip v-for="tag in tags" :key="tag">{{ tag }}</v-chip>
      </div>

      <v-layout wrap>
        <v-btn depressed color="grey">프로젝트 삭제</v-btn>
        <v-btn depressed color="grey" to="/my/projects/:id/edit"
          >프로젝트 수정</v-btn
        >
        <v-btn depressed color="grey" to="/my/projects/:id/done"
          >프로젝트 완료</v-btn
        >
        <v-spacer></v-spacer>
        <v-btn depressed color="grey">지원 취소</v-btn>
      </v-layout>
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

.deadline {
  margin-bottom: 20px;
}

.project_content {
  color: #898989;
}

.require_skill {
  margin-bottom: 10px;
}
</style>
