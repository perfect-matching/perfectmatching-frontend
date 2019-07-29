<template>
  <section class="project_manage_section">
    <h2>프로젝트 관리</h2>
    <project-detail></project-detail>
    <user-list></user-list>
  </section>
</template>

<script>
import ProjectDetail from "../components/ProjectManageView/ProjectDetail.vue";
import UserList from "../components/ProjectManageView/UserList.vue";
export default {
  components: {
    ProjectDetail,
    UserList
  }
};
</script>

<style scoped></style>
