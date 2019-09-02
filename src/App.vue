<template>
  <v-app id="inspire">
    <nav-bar></nav-bar>
    <v-content>
      <v-container class="view_wrapper" fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import bus from "./utils/bus.js";
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
  font-family: "Nanum Gothic", sans-serif !important;
}
.v-content {
  background-color: #fafafa !important;
  1background-color: #fff !important;
}

.view_wrapper {
  padding: 60px 0 0 0;
  margin: 0 auto;
}
</style>
