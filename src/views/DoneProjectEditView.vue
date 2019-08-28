<template>
  <section class="project_edit_section">
    <v-card>
      <h2 class="section_title">프로젝트 수정하기</h2>
      <done-project-form></done-project-form>
    </v-card>
  </section>
</template>

<script>
// import { mapGetters } from "vuex";
import DoneProjectForm from "../components/ProjectForm/DoneProjectForm.vue";
export default {
  components: {
    DoneProjectForm
  },

  // data() {
  //   return {
  //     doneProject: {}
  //   };
  // },

  // computed: {
  //   ...mapGetters({
  //     doneProject: "fetchedMyDoneProject"
  //   })
  // },

  created() {
    const doneProjectIdx = this.$route.params.idx;
    this.$store.dispatch("GET_MY_DONE_PROJECT_BY_IDX", { doneProjectIdx });
  }
};
</script>

<style scoped>
.project_edit_section {
  margin: 0 auto;
  padding: 20px 0 50px 0;
  max-width: 800px;
}

.v-card {
  padding: 25px;
}

.section_title {
  margin-bottom: 20px;
}
</style>
