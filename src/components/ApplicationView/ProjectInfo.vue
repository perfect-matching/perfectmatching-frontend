<template>
  <v-card flat class="project_card">
    <v-chip class="status" color="green" text-color="white">{{
      project.status
    }}</v-chip>
    <div class="project_title">{{ project.title }}</div>
    <div class="project_date">
      {{ setDateFormat(project.createdDate) }} 개설
    </div>
    <div class="project_summery">
      <div class="summery_title content_title">요약내용</div>
      <p>{{ project.summary }}</p>
    </div>

    <div class="require_skill">
      <div class="skill_title content_title">기술 스택</div>
      <v-chip v-for="skill in usedSkills" :key="skill.idx">{{
        skill.text
      }}</v-chip>
    </div>

    <div class="project_detail">
      <div class="detail_title content_title">상세설명</div>
      <div v-html="project.content"></div>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true
    },

    usedSkills: {
      type: Array,
      required: false
    }
  },
  data: () => ({
    content: ""
  }),

  methods: {
    setDateFormat(date) {
      return this.$_moment(date).format("ll");
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
  margin-bottom: 20px;
}

.project_summery {
  color: #898989;
}

.content_title {
  font-weight: 500;
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
