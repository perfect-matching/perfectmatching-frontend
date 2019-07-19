<template>
  <section class="project_detail_section">
    <h2>this is itemview</h2>
    <project-detail></project-detail>
    <comment-list></comment-list>
  </section>
</template>

<script>
import ProjectDetail from "../components/ProjectDetailView/ProjectDetail.vue";
import CommentList from "../components/ProjectDetailView/CommentList.vue";
export default {
  name: "prjectDetail",
  components: {
    ProjectDetail,
    CommentList
  }
};
</script>
