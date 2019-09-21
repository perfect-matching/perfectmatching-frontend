<template>
  <section class="my_projects_section">
    <h2>프로젝트 관리</h2>
    <leading-project-list :projects="leadingProjects"></leading-project-list>
    <apply-project-list :projects="applyPorjects"></apply-project-list>
    <doing-project-list :projects="doingProjects"></doing-project-list>
    <end-project-list :projects="doneProjects"></end-project-list>
  </section>
</template>

<script>
import { store } from "../store/index.js";
import { mapGetters } from "vuex";
import bus from "../utils/bus.js";
import LeadingProjectList from "../components/ProjectComponents/LeadingProjectList.vue";
import DoingProjectList from "../components/ProjectComponents/DoingProjectList.vue";
import ApplyProjectList from "../components/ProjectComponents/ApplyProjectList.vue";
import EndProjectList from "../components/ProjectComponents/EndProjectList.vue";
export default {
  components: {
    LeadingProjectList,
    DoingProjectList,
    ApplyProjectList,
    EndProjectList
  },

  computed: {
    ...mapGetters({
      leadingProjects: "fetchedMyLeadingProjects",
      applyPorjects: "fetchedMyApplyProjects",
      doingProjects: "fetchedMyDoingProjects",
      doneProjects: "fetchedMyDoneProjects"
    })
  },

  async beforeRouteEnter(to, from, next) {
    bus.$emit("start:spinner");
    try {
      console.log("들어감");
      // const idx = store.state.myModule.myProfile.userIdx;
      const idx = localStorage.getItem("user-idx");

      await store.dispatch("GET_MY_LEADING_PROJECTS_BY_IDX", { idx });
      await store.dispatch("GET_MY_DOING_PROJECTS_BY_IDX", { idx });
      await store.dispatch("GET_MY_DONE_PROJECTS_BY_IDX", { idx });
      await store.dispatch("GET_MY_APPLY_PROJECTS", { idx });
      bus.$emit("end:spinner");
      next();
    } catch {
      console.log("to: ", to);
      bus.$emit("end:spinner");
    }
  }
};
</script>

<style scoped>
.my_projects_section {
  background-color: #fafafa;
}
</style>
