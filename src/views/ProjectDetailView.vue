<template>
  <section class="project_detail_section">
    <h2 class="section_title">프로젝트 상세정보</h2>
    <project-detail :project="project"></project-detail>
    <comment-form></comment-form>
    <comment-list :comments="comments"></comment-list>
  </section>
</template>

<script>
import { store } from "../store/index.js";
import { mapGetters } from "vuex";
import ProjectDetail from "../components/ProjectDetailView/ProjectDetail.vue";
import CommentForm from "../components/ProjectDetailView/CommentForm.vue";
import CommentList from "../components/ProjectDetailView/CommentList.vue";

export default {
  name: "prjectDetail",
  components: {
    ProjectDetail,
    CommentForm,
    CommentList
  },

  computed: {
    ...mapGetters({
      project: "fetchedProjectDetail",
      comments: "fetchedComments"
    })
  },

  async beforeRouteEnter(to, from, next) {
    const idx = to.params.idx;
    await store.dispatch("FETCH_PROJECT_BY_IDX", { idx });
    await store.dispatch("FETCH_COMMENTS", { idx });
    next();
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
