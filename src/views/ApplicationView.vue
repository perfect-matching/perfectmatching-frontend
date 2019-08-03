<template>
  <section class="application_section">
    <h2 class="section_title">프로젝트 지원하기</h2>
    <project-info></project-info>
    <application-form></application-form>
  </section>
</template>

<script>
import ProjectInfo from "../components/ApplicationView/ProjectInfo.vue";
import ApplicationForm from "../components/ApplicationView/ApplicationForm.vue";
export default {
  components: {
    ProjectInfo,
    ApplicationForm
  }
};
</script>

<style scoped></style>
