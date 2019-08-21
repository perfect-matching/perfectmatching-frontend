<template>
  <v-container>
    <article class="doing_project_article">
      <h3>진행중인 프로젝트</h3>
      <ul class="doing_project_list">
        <li class="list_item">
          <router-link to="/my/projects/:id">
            <project-list-item></project-list-item>
          </router-link>
        </li>
        <li class="list_item">
          <router-link to="/my/projects/:id">
            <project-list-item></project-list-item>
          </router-link>
        </li>
      </ul>
    </article>
  </v-container>
</template>

<script>
import ProjectListItem from "./ProjectListItem.vue";

export default {
  components: { ProjectListItem }
};
</script>

<style scoped>
a {
  text-decoration: none;
}
ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}

.list_item {
  margin: 15px;
}
</style>
