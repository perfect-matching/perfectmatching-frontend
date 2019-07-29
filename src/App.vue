<template>
  <v-app id="inspire">
    <nav-bar></nav-bar>
    <v-content>
      <v-container class="view_wrapper" fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
  components: {
    NavBar
  },

  props: {
    source: String
  }
};
</script>
<style scoped>
.v-content {
  background-color: #f4f6fc !important;
}

.view_wrapper {
  max-width: 1800px;
}
</style>
