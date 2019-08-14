<template>
  <section class="project_detail_section">
    <h2 class="section_title">프로젝트 상세정보</h2>
    <project-detail></project-detail>
    <comment-form></comment-form>
    <comment-list></comment-list>
  </section>
</template>

<script>
import ProjectDetail from "../components/ProjectDetailView/ProjectDetail.vue";
import CommentForm from "../components/ProjectDetailView/CommentForm.vue";
import CommentList from "../components/ProjectDetailView/CommentList.vue";
export default {
  name: "prjectDetail",
  components: {
    ProjectDetail,
    CommentForm,
    CommentList
  }
};
</script>
<style scoped>
.project_detail_section {
  max-width: 800px;
  margin: auto;
}

.section_title {
  display: none;
}
</style>
