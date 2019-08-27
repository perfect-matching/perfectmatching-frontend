<template>
  <section class="my_projects_section">
    <h2>프로젝트 관리</h2>
    <doing-project-list :projects="doingProjects"></doing-project-list>
    <end-project-list :projects="doneProjects"></end-project-list>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import DoingProjectList from "../components/ProjectComponents/DoingProjectList.vue";
import EndProjectList from "../components/ProjectComponents/EndProjectList.vue";
export default {
  components: {
    DoingProjectList,
    EndProjectList
  },

  computed: {
    ...mapGetters({
      doingProjects: "fetchedMyDoingProjects",
      doneProjects: "fetchedMyDoneProjects"
    })
  },

  created() {
    this.$store.dispatch("GET_MY_DOING_PROJECTS_BY_IDX", { idx: 1 });
    this.$store.dispatch("GET_MY_DONE_PROJECTS_BY_IDX", { idx: 1 });
  }
};
</script>

<style scoped>
.my_projects_section {
  background-color: #fafafa;
}
</style>
