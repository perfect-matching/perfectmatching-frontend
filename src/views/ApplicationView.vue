<template>
  <section class="application_section">
    <h2 class="section_title">프로젝트 지원하기</h2>
    <project-info :project="project"></project-info>
    <application-form :project="project"></application-form>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import ProjectInfo from "../components/ApplicationView/ProjectInfo.vue";
import ApplicationForm from "../components/ApplicationView/ApplicationForm.vue";
export default {
  components: {
    ProjectInfo,
    ApplicationForm
  },

  computed: {
    ...mapGetters({
      project: "fetchedProjectDetail"
    })
  },

  mounted() {
    const idx = this.$route.params.idx;
    this.$store.dispatch("FETCH_PROJECT_BY_IDX", { idx });
  }
};
</script>

<style scoped>
.application_section {
  margin: 0 auto;
  max-width: 800px;
}
</style>
