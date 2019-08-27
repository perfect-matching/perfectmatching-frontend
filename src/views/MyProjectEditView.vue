<template>
  <section class="project_edit_section">
    <v-card>
      <h2 class="section_title">프로젝트 수정</h2>
      <project-form :project="project"></project-form>
    </v-card>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import ProjectForm from "../components/ProjectForm/ProjectForm.vue";
export default {
  components: {
    ProjectForm
  },

  computed: {
    ...mapGetters({
      project: "fetchedMyProject"
    })
  }
};
</script>

<style scoped>
.project_edit_section {
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
