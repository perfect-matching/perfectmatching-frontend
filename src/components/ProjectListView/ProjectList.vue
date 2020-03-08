<template>
  <v-container class="project_list_container">
    <v-layout class="project_list_container">
      <ul class="project_list">
        <v-layout wrap>
          <v-flex>
            <li class="list_item" v-for="(project, index) in projects" :key="index">
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

.list_item {
  margin: 30px;
} /* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575px) {
  li {
    width: 100%;
  }
  .list_item {
    margin: 30px 0;
  }
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767px) {
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991px) {
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199px) {
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
}
</style>
