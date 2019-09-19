<template>
  <v-container>
    <article class="end_project_article">
      <h3>진행했던 프로젝트</h3>
      <ul class="end_project_list">
        <div class="no_project" v-if="projects.length === 0">
          현재 진행했던 프로젝트가 없습니다.
        </div>
        <li
          class="list_item"
          v-for="project in projects"
          :key="project.doneProjectIdx"
        >
          <end-project-item :project="project"></end-project-item>
        </li>
      </ul>
    </article>
    <v-btn
      class="add_project_btn"
      v-if="this.$route.name == 'myProjects'"
      block
      color="secondary"
      dark
      to="/new/done"
      >프로젝트 추가하기</v-btn
    >
  </v-container>
</template>

<script>
import EndProjectItem from "./EndProjectItem";

export default {
  components: {
    EndProjectItem
  },
  props: {
    projects: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}

.list_item {
  margin-bottom: 10px;
}

.no_project {
  text-align: center;
}

.add_project_btn {
  margin: 30px 0;
}
</style>
