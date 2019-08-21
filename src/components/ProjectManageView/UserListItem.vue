<template>
  <v-card class="user_card mx-auto" flat>
    <v-card-title>
      <v-avatar :tile="false" :size="36" color="black lighten-4">
        <img
          src="https://vuetifyjs.com/apple-touch-icon-180x180.png"
          alt="avatar"
        />
      </v-avatar>
      <div class="my_nick">후아 닉네임!</div>
      <v-spacer></v-spacer>
      <div class="create_date">하루 전</div>
    </v-card-title>
    <v-card-text class="content">
      전 스프링 개발자에요전 스프링 개발자에요전 스프링 개발자에요전 스프링
      개발자에요전 스프링 개발자에요전 스프링 개발자에요전 스프링 개발자에요전
      스프링 개발자에요전 스프링 개발자에요
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn flat text>수락</v-btn>
      <v-btn flat>거절</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {};
</script>

<style scoped>
.my_nick {
  margin-left: 10px;
}
.create_date {
  color: #b6b6b6;
}
.content {
  padding: 0 16px;
  color: #898989;
}
</style>
