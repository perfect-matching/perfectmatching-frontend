<template>
  <section class="mypage_section">
    <h2 class="section_title">My Page</h2>
    <my-info></my-info>
  </section>
</template>

<script>
import MyInfo from "../components/MyPageView/MyInfo.vue";
// import MyProjectList from "../components/MyPageView/MyProjectList.vue";
export default {
  components: {
    MyInfo
    // MyProjectList
  }
};
</script>
<style scoped></style>
