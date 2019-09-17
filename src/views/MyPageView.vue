<template>
  <section class="mypage_section">
    <h2 class="section_title">My Page</h2>
    <!-- <my-info :myProfile="myProfile" :mySkills="mySkills"></my-info> -->
    <user-info :userProfile="myProfile" :userSkills="mySkills"></user-info>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
// import MyInfo from "../components/MyPageView/MyInfo.vue";
import UserInfo from "../components/UserDetailView/UserInfo.vue";

export default {
  components: {
    UserInfo
    // MyInfo
  },

  computed: {
    ...mapGetters({
      myProfile: "fetchedMyProfile",
      mySkills: "fetchedMySkills"
    })
  },

  created() {
    this.$store.dispatch("GET_MY_PROFILE");
    this.$store.dispatch("GET_MY_SKILLS_BY_IDX");
  }
};
</script>
<style scoped></style>
