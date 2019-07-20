<template>
  <section>
    <h2>My Page</h2>
    <my-info></my-info>
    <my-project-list></my-project-list>
  </section>
</template>

<script>
import MyInfo from "../components/MyPageView/MyInfo.vue";
import MyProjectList from "../components/MyPageView/MyProjectList.vue";
export default {
  components: {
    MyInfo,
    MyProjectList
  }
};
</script>

