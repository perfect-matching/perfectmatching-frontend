<template>
  <v-container class="project_detail_container">
    <v-card flat class="project_card">
      <!-- <v-chip class="status" color="green" text-color="white">진행중</v-chip> -->
      <div class="project_title">{{ project.title }}</div>
      <div class="project_date">
        {{ setDateFormat(project.startDate) }} -
        {{ setDateFormat(project.endDate) }}
      </div>
      <div class="project_summery">
        <div class="summery_title content_title">요약내용</div>
        <p>{{ project.summary }}}</p>
      </div>

      <div class="require_skill">
        <div class="skill_title content_title">기술 스택</div>
        <v-chip v-for="tag in tags" :key="tag">{{ tag }}</v-chip>
      </div>

      <div class="github">
        <div class="github_title content_title">깃허브 저장소</div>
        <a
          href="https://github.com/perfect-matching/perfectmatching-frontend"
          >{{ project.socialUrl }}</a
        >
      </div>
      <br />

      <div class="project_detail">
        <div class="detail_title content_title">상세설명</div>
        <p>{{ project.content }}</p>
      </div>

      <v-layout wrap v-if="this.$route.name == 'myProjects'">
        <v-spacer></v-spacer>
        <v-btn depressed color="grey">프로젝트 삭제</v-btn>
        <v-btn
          depressed
          color="grey"
          :to="`/my/done/${project.doneProjectIdx}/edit`"
          >프로젝트 수정</v-btn
        >
      </v-layout>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  },

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
  }),

  methods: {
    setDateFormat(date) {
      return this.$_moment(date).format("LL");
    }
  }
};
</script>

<style scoped>
.project_card {
  padding: 20px;
  border: 1px solid #dbdbdb;
}

.project_title {
  font-weight: bold;
  font-size: 30px;
}

.project_date {
  color: grey;
  margin-bottom: 20px;
}

.project_summery {
  color: #898989;
}

.content_title {
  font-weight: 600;
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
