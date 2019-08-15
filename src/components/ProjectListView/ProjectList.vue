<template>
  <v-container class="project_list_container">
    <v-layout>
      <v-flex xs12 sm4>
        <drop-down :title="'지역'"></drop-down>
      </v-flex>
      <v-flex xs12 sm4>
        <drop-down :title="'직군'"></drop-down>
      </v-flex>
    </v-layout>
    <v-layout class="project_list_container">
      <ul class="project_list">
        <v-layout wrap>
          <v-flex>
            <li class="list_item">
              <router-link to="/project/1">
                <project-list-item></project-list-item>
              </router-link>
            </li>
          </v-flex>
          <v-flex>
            <li class="list_item">
              <router-link to="/project/1">
                <project-list-item></project-list-item>
              </router-link>
            </li>
          </v-flex>
          <v-flex>
            <li class="list_item">
              <router-link to="/project/1">
                <project-list-item></project-list-item>
              </router-link>
            </li>
          </v-flex>
          <v-flex>
            <li class="list_item">
              <router-link to="/project/1">
                <project-list-item></project-list-item>
              </router-link>
            </li>
          </v-flex>
          <v-flex>
            <li class="list_item">
              <router-link to="/project/1">
                <project-list-item></project-list-item>
              </router-link>
            </li>
          </v-flex>
          <v-flex>
            <li class="list_item">
              <router-link to="/project/1">
                <project-list-item></project-list-item>
              </router-link>
            </li>
          </v-flex>
          <v-flex>
            <li class="list_item">
              <router-link to="/project/1">
                <project-list-item></project-list-item>
              </router-link>
            </li>
          </v-flex>
        </v-layout>
      </ul>
    </v-layout>
    <v-btn block color="secondary" dark>더 보기</v-btn>
  </v-container>
</template>

<script>
import DropDown from "./DropDown.vue";
import ProjectListItem from "./ProjectListItem.vue";
export default {
  components: {
    DropDown,
    ProjectListItem
  },

  created() {
    this.$store.dispatch("FETCH_PROJECTS");
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
}

.project_list {
  1max-width: 1660px;
}

.list_item {
  margin: 30px;
}
</style>
