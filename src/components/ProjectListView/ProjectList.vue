<template>
  <v-container class="project_list_container">
    <v-layout class="project_list_container">
      <ul class="project_list">
        <v-layout wrap>
          <v-flex>
            <li
              class="list_item"
              v-for="(project, index) in projects"
              :key="index"
            >
              <router-link :to="`/project/${project.projectIdx}`">
                <project-list-item :project="project"></project-list-item>
              </router-link>
            </li>
          </v-flex>
        </v-layout>
      </ul>
    </v-layout>
  </v-container>
</template>

<script>
import ProjectListItem from "./ProjectListItem.vue";
export default {
  components: {
    ProjectListItem
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
a {
  text-decoration: none;
}
ul {
  list-style: none;
  padding: 0;
}

li {
  display: inline-block;
}

.info_bar {
  text-align: center;
}

.project_list_container {
  padding: 0;
  width: 100%;
  text-align: center;
}

.project_list {
  1max-width: 1660px;
}

.list_item {
  margin: 30px;
}
</style>
