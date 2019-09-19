<template>
  <section class="project_detail_section">
    <h2 class="section_title">프로젝트 상세정보</h2>
    <project-detail :project="project"></project-detail>
    <comment-form :comment="comment"></comment-form>
    <comment-list :comments="comments"></comment-list>
  </section>
</template>

<script>
import { store } from "../store/index.js";
import { mapGetters } from "vuex";
import bus from "../utils/bus.js";
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

  data() {
    return {
      comment: {
        nickname: store.state.myModule.myProfile.nickname,
        content: "",
        profileImage: store.state.myModule.myProfile.profileImage
      }
    };
  },

  computed: {
    ...mapGetters({
      project: "fetchedProjectDetail",
      comments: "fetchedComments"
    })
  },

  async beforeRouteEnter(to, from, next) {
    bus.$emit("start:spinner");
    try {
      const idx = to.params.idx;
      await store.dispatch("FETCH_PROJECT_BY_IDX", { idx });
      await store.dispatch("FETCH_COMMENTS", { idx });
      bus.$emit("end:spinner");
      next();
    } catch {
      console.log("to: ", to);
      bus.$emit("end:spinner");
    }
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
