<template>
  <section class="done_project_section">
    <v-card>
      <h2 class="section_title">프로젝트 추가하기</h2>
      <done-project-form :project="project"></done-project-form>
    </v-card>
  </section>
</template>

<script>
import DoneProjectForm from "../components/ProjectForm/DoneProjectForm.vue";
export default {
  components: {
    DoneProjectForm
  },

  data() {
    return {
      project: {
        title: "",
        summary: "",
        content: "",
        tags: [],
        startDate: "",
        endDate: ""
      }
    };
  }
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
