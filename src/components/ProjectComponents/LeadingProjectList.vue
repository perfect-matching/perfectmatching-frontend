<template>
  <v-container>
    <article class="doing_project_article">
      <h3>주최한 프로젝트</h3>
      <ul class="doing_project_list">
        <li
          class="list_item"
          v-for="project in projects"
          :key="project.projectIdx"
        >
          <router-link :to="{ path: `${url}/${project.projectIdx}` }">
            <project-list-item :project="project"></project-list-item>
          </router-link>
        </li>
      </ul>
    </article>
  </v-container>
</template>

<script>
import ProjectListItem from "./DoingProjectItem.vue";

export default {
  components: { ProjectListItem },
  props: {
    projects: {
      type: Array,
      required: true
    }
  },

  data() {
    return {
      url: ""
    };
  },

  created() {
    if (this.$route.name == "myProjects") {
      this.url = "/my/projects";
    } else if (this.$route.name == "userDetail") {
      this.url = "/project";
    }
  }
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
