<template>
  <section class="project_list_section">
    <h2 class="section_title">프로젝트 리스트</h2>
    <project-list :projects="projects"></project-list>
    <v-btn block color="secondary" dark @click="nextProjects">더 보기</v-btn>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import ProjectList from "../components/ProjectListView/ProjectList.vue";
export default {
  components: {
    ProjectList
  },

  computed: {
    ...mapGetters({
      projects: "fetchedProjects"
    })
  },

  created() {
    this.$store.dispatch("FETCH_PROJECTS");
  },

  methods: {
    nextProjects() {
      this.$store.dispatch("FETCH_NEXT_PROJECTS", {
        nextUrl: this.$store.state.projectModule.nextUrl
      });
    }
  }
};
</script>

<style scoped></style>
