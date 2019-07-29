<template>
  <v-card class="user_card">
    <v-layout align-center justify-center row fill-height>
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">권영근</h3>
          <v-chip color="primary" text-color="white">대기중</v-chip>
        </div>
      </v-card-title>

      <!-- <v-card-actions>
      <v-btn flat color="orange">수락</v-btn>
      <v-btn flat color="orange">거절</v-btn>
      </v-card-actions>-->
      <v-spacer></v-spacer>

      <div>
        <v-card-actions>
          <v-btn icon>
            <v-icon>more_horiz</v-icon>
          </v-btn>
        </v-card-actions>
        <v-avatar
          class="user_photo"
          :tile="false"
          :size="50"
          color="grey lighten-4"
        >
          <img
            src="https://vuetifyjs.com/apple-touch-icon-180x180.png"
            alt="avatar"
          />
        </v-avatar>
      </div>
    </v-layout>
  </v-card>
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
  width: 100%;
  margin: 0;
}

.user_photo {
  margin-right: 15px;
}
</style>
