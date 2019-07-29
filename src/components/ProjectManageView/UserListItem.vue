<template>
  <v-container class="user_item_container">
    <v-layout text-xs-center align-center>
      <v-card class="mx-auto user_card" color="#26c6da" dark>
        <v-layout text-xs-center align-center>
          <v-flex>
            <v-avatar :tile="false" :size="56" color="grey lighten-4">
              <img src="https://vuetifyjs.com/apple-touch-icon-180x180.png" alt="avatar" />
            </v-avatar>
          </v-flex>
          <v-flex xs5>
            <v-card-title class="title" primary-title>
              <div class="headline">권영근 jkljkl1793</div>
            </v-card-title>
          </v-flex>
          <v-flex>2019년 01월 01일</v-flex>
          <v-flex>모집중</v-flex>
        </v-layout>
      </v-card>
      <v-btn depressed color="primary">Primary</v-btn>
      <v-btn depressed color="primary">Primary</v-btn>
    </v-layout>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
.user_item_container {
  padding: 0;
}
.headline {
  width: 100%;
}

.user_card {
  width: 800px;
  margin: 0;
}
</style>
