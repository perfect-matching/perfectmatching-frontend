<template>
  <section class="new_project_section">
    <h2 class="section_title">프로젝트 개설</h2>
    <project-form></project-form>
  </section>
</template>

<script>
import ProjectForm from "../components/NewProjectView/ProjectForm.vue";
export default {
  components: {
    ProjectForm
  }
};
</script>

<style scoped>
.new_project_section {
  margin: 0 auto;
  padding: 100px 0 50px 0;
  max-width: 800px;
}
</style>
