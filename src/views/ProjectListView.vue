<template>
  <section class="project_list_section">
    <h2 class="section_title">프로젝트 리스트</h2>
    <project-list></project-list>
  </section>
</template>

<script>
import ProjectList from "../components/ProjectListView/ProjectList.vue";
export default {
  components: {
    ProjectList
  }
};
</script>

<style scoped></style>
