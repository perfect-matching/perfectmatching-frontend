<template>
  <v-card color="cyan darken-2" class="project_card white--text">
    <v-layout text-xs-center align-center>
      <v-flex>
        <v-avatar :tile="false" :size="56" color="grey lighten-4">
          <img
            src="https://vuetifyjs.com/apple-touch-icon-180x180.png"
            alt="avatar"
          />
        </v-avatar>
      </v-flex>
      <v-flex xs5>
        <v-card-title class="title" primary-title>
          <div class="headline">
            이건 엄청나게 긴 프로젝트 이름이건 엄청나게 긴 프로젝트 이름이건
            엄청나게 긴 프로젝트 이름이건 엄청나게 긴 프로젝트 이름이건 엄청나게
            긴 프로젝트 이름이건 엄청나게 긴 프로젝트 이름
          </div>
        </v-card-title>
      </v-flex>
      <v-flex xs2>2019년 02월 03일</v-flex>
      <v-flex xs2>2019년 01월 01일</v-flex>
      <v-flex xs1>모집중</v-flex>
    </v-layout>
  </v-card>
</template>

<script>
export default {};
</script>

<style scoped>
.headline {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
