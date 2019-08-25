<template>
  <section class="my_projects_section">
    <h2>프로젝트 관리</h2>
    <doing-project-list></doing-project-list>
    <end-project-list></end-project-list>
  </section>
</template>

<script>
import DoingProjectList from "../components/ProjectComponents/DoingProjectList.vue";
import EndProjectList from "../components/ProjectComponents/EndProjectList.vue";
export default {
  components: {
    DoingProjectList,
    EndProjectList
  }
};
</script>

<style scoped>
.my_projects_section {
  background-color: #fafafa;
}
</style>
