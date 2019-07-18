<template>
  <section>
    <h2>this is itemview</h2>
    <project-detail></project-detail>
    <comment-list></comment-list>
  </section>
</template>

<script>
import ProjectDetail from "../components/ProjectItemView/ProjectDetail.vue";
import CommentList from "../components/ProjectItemView/CommentList.vue";
export default {
  components: {
    ProjectDetail,
    CommentList
  }
};
</script>

<style scoped></style>
