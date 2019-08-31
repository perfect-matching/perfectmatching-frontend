<template>
  <v-container>
    <article class="end_project_article">
      <h3>진행했던 프로젝트</h3>
      <ul class="end_project_list">
        <li class="list_item">
          <end-project-item></end-project-item>
        </li>
        <li class="list_item">
          <end-project-item></end-project-item>
        </li>
        <li class="list_item">
          <end-project-item></end-project-item>
        </li>
        <li class="list_item">
          <end-project-item></end-project-item>
        </li>
        <li class="list_item">
          <end-project-item></end-project-item>
        </li>
      </ul>
    </article>
    <v-btn
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
  components: { EndProjectItem }
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
</style>
