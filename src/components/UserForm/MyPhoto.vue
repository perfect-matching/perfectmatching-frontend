<template>
  <v-container>
    <v-layout>
      <v-flex class="user_info" text-xs-center>
        <div>
          <v-avatar :tile="false" :size="170" color="white lighten-4">
            <img :src="profileImage" alt="avatar" />
          </v-avatar>
        </div>
        <div class="user_nick">user nick name</div>
        <div class="info_change_btn">
          <v-btn depressed small @click="$refs.inputUpload.click()"
            >사진 변경</v-btn
          >
          <v-btn depressed small @click="ImageRemove">기본 이미지로 설정</v-btn>
          <input
            v-show="false"
            ref="inputUpload"
            type="file"
            accept=".jpg, .png, .jpeg"
            @change="fileUpload"
          />
          <!-- <v-btn depressed small>사진 변경</v-btn> -->
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: {
    profileImage: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      loading: false,
      file: null
    };
  },

  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];

      setTimeout(() => (this[l] = false), 3000);

      this.loader = null;
    }
  },

  methods: {
    fileUpload() {
      this.file = this.$refs.inputUpload.files[0];

      const formData = new FormData();
      formData.append("file", this.file);

      this.$store.dispatch("PUT_MY_PHOTO", { formData });
    },

    ImageRemove() {
      this.$store.dispatch("DELETE_MY_PHOTO");
    }
  }
};
</script>

<style scoped>
.my_photo_container {
  text-align: center;
}
</style>
