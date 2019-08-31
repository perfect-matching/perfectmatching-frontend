<template>
  <header>
    <v-toolbar class="tool_bar" flat fixed>
      <v-toolbar-side-icon
        class="hidden-md-and-up"
        @click="toggleDrawer"
      ></v-toolbar-side-icon>
      <v-btn flat to="/">
        <v-toolbar-title>퍼펙트 매칭</v-toolbar-title>
      </v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-items class="menu hidden-sm-and-down">
        <v-btn flat to="/new/project">프로젝트 개설</v-btn>
        <v-btn flat to="/projects">프로젝트 리스트</v-btn>
        <v-btn flat to="/my/projects">나의 프로젝트</v-btn>
      </v-toolbar-items>
      <div class="login">
        <login-modal></login-modal>
      </div>
      <div class="loggedin_user" v-if="loggedin">
        <v-btn icon>
          <v-icon>notifications_none</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mail_outline</v-icon>
        </v-btn>

        <v-btn icon to="/my">
          <v-avatar :tile="false" :size="36" color="grey lighten-4">
            <img
              src="https://vuetifyjs.com/apple-touch-icon-180x180.png"
              alt="avatar"
            />
          </v-avatar>
        </v-btn>
      </div>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" app dark temporary>
      <v-list dense>
        <v-list-tile to="/new/project">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>프로젝트 개설</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/projects">
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>프로젝트 리스트</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/my/projects">
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>나의 프로젝트</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </header>
</template>

<script>
import LoginModal from "./LoginModal.vue";
export default {
  name: "navBar",
  components: {
    LoginModal
  },
  data() {
    return {
      drawer: null,
      loggedin: false
    };
  },

  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    }
  }
};
</script>

<style scoped>
.tool_bar {
  border-bottom: 1px solid #cfcfcf;
  background-color: #fff;
  1background-color: #232323;
}
.menu {
  1color: #cfcfcf;
  color: #fff;
}
</style>
