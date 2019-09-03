<template>
  <section class="my_projects_section">
    <h2>프로젝트 관리</h2>
    <doing-project-list :projects="doingProjects"></doing-project-list>
    <end-project-list :projects="doneProjects"></end-project-list>
  </section>
</template>

<script>
import { store } from "../store/index.js";
import { mapGetters } from "vuex";
import bus from "../utils/bus.js";
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

  async beforeRouteEnter(to, from, next) {
    bus.$emit("start:spinner");
    try {
      const idx = store.state.myModule.myProfile.userIdx;

      await store.dispatch("GET_MY_DOING_PROJECTS_BY_IDX", { idx });
      await store.dispatch("GET_MY_DONE_PROJECTS_BY_IDX", { idx });
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
