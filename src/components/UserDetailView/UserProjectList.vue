<template>
  <v-container>
    <article>
      <h3>프로젝트 이력</h3>
      <v-flex class="project_list_container">
        <ul>
          <li>
            <project-list-item></project-list-item>
          </li>
          <li>
            <project-list-item></project-list-item>
          </li>
          <li>
            <project-list-item></project-list-item>
          </li>
          <li>
            <project-list-item></project-list-item>
          </li>
          <li>
            <project-list-item></project-list-item>
          </li>
          <li>
            <project-list-item></project-list-item>
          </li>
          <li>
            <project-list-item></project-list-item>
          </li>
          <li>
            <project-list-item></project-list-item>
          </li>
          <li>
            <project-list-item></project-list-item>
          </li>
          <li>
            <project-list-item></project-list-item>
          </li>
        </ul>
      </v-flex>
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
  padding: 0;
}
.project_list_container {
  border: 2px solid red;
}
</style>
