<template>
  <section class="user_detail_section">
    <h2>User Detail View</h2>
    <user-info></user-info>
    <user-project-list></user-project-list>
  </section>
</template>

<script>
import UserInfo from "../components/UserDetailView/UserInfo.vue";
import UserProjectList from "../components/UserDetailView/UserProjectList.vue";

export default {
  name: "userDetail",
  components: {
    UserInfo,
    UserProjectList
  }
};
</script>
