<template>
  <v-app id="inspire">
    <nav-bar></nav-bar>
    <v-content>
      <v-container class="view_wrapper" fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer color="black" app>
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
#inspire {
  font-family: "Sunflower", sans-serif !important;
}
.v-content {
  background-color: #fafafa !important;
}

.view_wrapper {
  padding: 0;
  margin: 0 auto;
}
</style>
