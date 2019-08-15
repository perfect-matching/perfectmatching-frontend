<template>
  <section class="project_list_section">
    <h2 class="section_title">프로젝트 리스트</h2>
    <project-list></project-list>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import ProjectList from "../components/ProjectListView/ProjectList.vue";
export default {
  components: {
    ProjectList
  },

  computed: {
    ...mapGetters({
      projects: "fetchedProjects"
    })
  },

  created() {
    this.$store.dispatch("FETCH_PROJECTS");
  }
};
</script>

<style scoped></style>
