<template>
  <section class="project_manage_section">
    <div>
      <h2>지원한 프로젝트 관리</h2>
      <project-detail :project="project"></project-detail>
      <applicants-list :applicants="applicants"></applicants-list>
      <user-list :members="members"></user-list>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import { store } from "../store/index.js";
import bus from "../utils/bus.js";
import ProjectDetail from "../components/ProjectManageView/ProjectDetail.vue";
import ApplicantsList from "../components/ProjectManageView/ApplicantsList.vue";
import UserList from "../components/ProjectManageView/UserList.vue";

export default {
  components: {
    ProjectDetail,
    UserList,
    ApplicantsList
  },

  computed: {
    ...mapGetters({
      project: "fetchedMyProject",
      applicants: "fetchedMyProjectApplicants",
      members: "fetchedMyProjectMembers"
    })
  },

  async beforeRouteEnter(to, from, next) {
    bus.$emit("start:spinner");
    try {
      const idx = to.params.idx;

      await store.dispatch("GET_MY_PROJECT_BY_IDX", { idx });
      await store.dispatch("GET_PROJECT_APPLICANTS_BY_IDX", { idx });
      await store.dispatch("GET_MY_PROJECT_MEMBERS_BY_IDX", { idx });

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
.project_manage_section {
  max-width: 800px;
  margin: 0 auto;
}
</style>
