<template>
  <section class="mypage_section">
    <h2 class="section_title">My Page</h2>
    <my-info :myProfile="myProfile" :mySkills="mySkills"></my-info>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import MyInfo from "../components/MyPageView/MyInfo.vue";

export default {
  components: {
    MyInfo
  },

  computed: {
    ...mapGetters({
      myProfile: "fetchedMyProfile",
      mySkills: "fetchedMySkills"
    })
  },

  created() {
    this.$store.dispatch("GET_MY_PROFILE"); // 임시로 1, 실제 로직에서는 로그인 유저의 idx를 받아와 넣기
    this.$store.dispatch("GET_MY_SKILLS_BY_IDX");
  }
};
</script>
<style scoped></style>
