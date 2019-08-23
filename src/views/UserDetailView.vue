<template>
  <section class="user_detail_section">
    <h2>User Detail View</h2>
    <user-info></user-info>
    <doing-project-list></doing-project-list>
    <end-project-list></end-project-list>
  </section>
</template>

<script>
import UserInfo from "../components/UserDetailView/UserInfo.vue";
import DoingProjectList from "../components/ProjectRecordComponents/DoingProjectList.vue";
import EndProjectList from "../components/ProjectRecordComponents/EndProjectList.vue";

export default {
  name: "userDetail",
  components: {
    UserInfo,
    DoingProjectList,
    EndProjectList
  }
};
</script>
