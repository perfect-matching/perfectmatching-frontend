<template>
  <v-card color="cyan darken-2" class="project_card white--text">
    <v-layout text-xs-center align-center>
      <v-flex>
        <v-avatar :tile="false" :size="56" color="grey lighten-4">
          <img src="https://vuetifyjs.com/apple-touch-icon-180x180.png" alt="avatar" />
        </v-avatar>
      </v-flex>
      <v-flex>
        <v-card-title primary-title>
          <div class="headline">이건 프로젝트 이름</div>
        </v-card-title>
      </v-flex>
      <v-flex>디자이너</v-flex>
      <v-flex>완료</v-flex>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  name: "projectListItem"
};
</script>

<style scoped>
.project_card {
  margin-bottom: 20px;
}
</style>