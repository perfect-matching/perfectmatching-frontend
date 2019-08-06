<template>
  <v-container>
    <article class="project_article">
      <h3 class="article_title">프로젝트 이력</h3>

      <ul class="project_list">
        <v-layout wrap>
          <v-flex>
            <li class="list_item">
              <project-list-item></project-list-item>
            </li>
          </v-flex>
          <v-flex>
            <li class="list_item">
              <project-list-item></project-list-item>
            </li>
          </v-flex>
          <v-flex>
            <li class="list_item">
              <project-list-item></project-list-item>
            </li>
          </v-flex>
          <v-flex>
            <li class="list_item">
              <project-list-item></project-list-item>
            </li>
          </v-flex>
          <v-flex>
            <li class="list_item">
              <project-list-item></project-list-item>
            </li>
          </v-flex>
        </v-layout>
      </ul>
    </article>
  </v-container>
</template>

<script>
import ProjectListItem from "./ProjectListItem.vue";
export default {
  name: "userProjectList",

  components: {
    ProjectListItem
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
  margin: 20px;
}
</style>
