<template>
  <v-container class="project_detail_container">
    <v-card flat class="project_card">
      <v-chip class="status" color="green" text-color="white">
        {{ project.status }}
      </v-chip>
      <div class="project_title">{{ project.title }}</div>
      <div class="deadline">{{ setDateFormat(project.createdDate) }} 개설</div>
      <div class="require_skill">
        <v-chip v-for="tag in project.tags" :key="tag.idx">{{
          tag.text
        }}</v-chip>
      </div>
      <div class="project_content">
        <p>{{ project.summary }}</p>
        <p>{{ project.content }}</p>
      </div>

      <v-layout wrap>
        <div>
          <v-btn depressed color="grey">프로젝트 삭제</v-btn>
          <v-btn
            depressed
            color="grey"
            :to="`/my/projects/${project.projectIdx}/edit`"
            >프로젝트 수정</v-btn
          >
          <v-btn
            v-if="project.status === '모집중'"
            depressed
            color="grey"
            :to="`/my/projects/${project.projectIdx}/done`"
            >프로젝트 시작하기</v-btn
          >
          <v-btn
            v-else-if="project.status === '진행중'"
            depressed
            color="grey"
            :to="`/my/projects/${project.projectIdx}/done`"
            >프로젝트 완료</v-btn
          >
        </div>

        <v-spacer></v-spacer>
        <v-btn depressed color="grey">지원 취소</v-btn>
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
}

.project_title {
  font-weight: bold;
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
