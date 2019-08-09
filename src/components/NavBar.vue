<template>
  <header>
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-list dense>
        <v-list-tile to="/project/new">
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
            <v-list-tile-title>프로젝트 관리</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>퍼펙트 매칭</v-toolbar-title>
      <v-spacer></v-spacer>
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
    </v-toolbar>
  </header>
</template>

<script>
export default {
  name: "navBar",

  data() {
    return {
      drawer: null
    };
  }
};
</script>

<style scoped></style>
