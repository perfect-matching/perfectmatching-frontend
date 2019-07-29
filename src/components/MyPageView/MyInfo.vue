<template>
  <v-container>
    <v-flex class="my_info" text-xs-center>
      <div>
        <v-avatar :tile="false" :size="170" color="black lighten-4">
          <img
            src="https://vuetifyjs.com/apple-touch-icon-180x180.png"
            alt="avatar"
          />
        </v-avatar>
      </div>
      <div class="my_nick">my nick name</div>
      <div class="info_change_btn">
        <v-btn depressed small to="/my/edit">정보 수정</v-btn>
      </div>
    </v-flex>
  </v-container>
</template>

<script>
export default {
  name: "userInfo"
};
</script>

<style scoped>
.user_info {
  border: 2px solid red;
}
</style>
