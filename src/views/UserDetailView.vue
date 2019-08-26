<template>
  <section class="user_detail_section">
    <h2>User Detail View</h2>
    <user-info :userProfile="userProfile" :userSkills="userSkills"></user-info>
    <doing-project-list :projects="doingProjects"></doing-project-list>
    <end-project-list :projects="doneProjects"></end-project-list>
  </section>
</template>

<script>
import UserInfo from "../components/UserDetailView/UserInfo.vue";
import DoingProjectList from "../components/ProjectComponents/DoingProjectList.vue";
import EndProjectList from "../components/ProjectComponents/EndProjectList.vue";
import { mapGetters } from "vuex";

export default {
  name: "userDetail",
  components: {
    UserInfo,
    DoingProjectList,
    EndProjectList
  },

  computed: {
    ...mapGetters({
      userProfile: "fetchedUserProfile",
      userSkills: "fetchedUserSkills",
      doingProjects: "fetchedUserProjects",
      doneProjects: "fetchedDoneProjects"
    })
  },

  created() {
    const idx = this.$route.params.idx;
    this.$store.dispatch("GET_USER_PROFILE_BY_IDX", { idx });
    this.$store.dispatch("GET_USER_SKILLS_BY_USER_IDX", { idx });
    this.$store.dispatch("GET_USER_PROJECTS_BY_USER_IDX", { idx });
    this.$store.dispatch("GET_DONE_PROJECTS_BY_USER_IDX", { idx });
  }
};
</script>
