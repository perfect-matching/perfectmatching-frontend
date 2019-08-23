<template>
  <section class="done_project_section">
    <v-card>
      <h2 class="section_title" v-if="this.$route.name == 'newDoneProject'">
        프로젝트 추가하기
      </h2>
      <h2
        class="section_title"
        v-else-if="this.$route.name == 'editDoneProject'"
      >
        프로젝트 수정하기
      </h2>
      <h2 class="section_title" v-else>프로젝트 완료</h2>
      <done-project-form></done-project-form>
    </v-card>
  </section>
</template>

<script>
import DoneProjectForm from "../components/DoneProjectForm.vue";
export default {
  components: {
    DoneProjectForm
  },

  created() {}
};
</script>

<style scoped>
.done_project_section {
  margin: 0 auto;
  padding: 20px 0 50px 0;
  max-width: 800px;
}

.v-card {
  padding: 25px;
}

.section_title {
  margin-bottom: 20px;
}
</style>
