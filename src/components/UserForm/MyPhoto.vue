<template>
  <v-container>
    <v-layout>
      <v-flex class="user_info" text-xs-center>
        <div>
          <v-avatar :tile="false" :size="170" color="black lighten-4">
            <img
              src="https://vuetifyjs.com/apple-touch-icon-180x180.png"
              alt="avatar"
            />
          </v-avatar>
        </div>
        <div class="user_nick">user nick name</div>
        <div class="info_change_btn">
          <v-btn depressed small @click="$refs.inputUpload.click()"
            >사진 변경</v-btn
          >
          <input
            v-show="false"
            ref="inputUpload"
            type="file"
            @change="yourFunction"
          />
          <!-- <v-btn depressed small>사진 변경</v-btn> -->
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      loading: false
    };
  },

  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];

      setTimeout(() => (this[l] = false), 3000);

      this.loader = null;
    }
  }
};
</script>

<style scoped>
.my_photo_container {
  text-align: center;
}
</style>
