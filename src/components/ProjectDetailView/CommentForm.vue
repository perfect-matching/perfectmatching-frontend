<template>
  <v-container class="comment_container">
    <v-layout class="user_info" align-center>
      <v-btn icon to="/my">
        <v-avatar :tile="false" :size="36" color="grey lighten-4">
          <img
            src="https://vuetifyjs.com/apple-touch-icon-180x180.png"
            alt="avatar"
          />
        </v-avatar>
      </v-btn>
      <div class="nick_name">jkljkl1793</div>
    </v-layout>

    <form class="comment_form">
      <v-textarea
        outline
        v-model="content"
        :error-messages="contentErrors"
        :counter="500"
        name="댓글"
        label="댓글"
        required
        placeholder="내용을 입력해주세요."
        @input="$v.content.$touch()"
        @blur="$v.content.$touch()"
      ></v-textarea>
      <div class="form_button_container">
        <v-btn flat @click="submit">댓글달기</v-btn>
        <v-btn flat @click="clear">취소</v-btn>
      </div>
    </form>
  </v-container>
</template>
<script>
import { validationMixin } from "vuelidate";
import { required, maxLength } from "vuelidate/lib/validators";
export default {
  mixins: [validationMixin],

  validations: {
    content: { required, maxLength: maxLength(500) }
  },

  data: () => ({
    content: ""
  }),

  computed: {
    contentErrors() {
      const errors = [];
      if (!this.$v.content.$dirty) return errors;
      !this.$v.content.maxLength &&
        errors.push("최대 500자 이내이어야 합니다.");
      !this.$v.content.required && errors.push("내용을 입력해주세요.");

      return errors;
    }
  },
  methods: {
    submit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        console.log("형식 불일치");
      } else {
        console.log("제출!!:");
      }
    },
    clear() {
      this.$v.$reset();
      this.content = "";
    }
  }
};
</script>
<style scoped>
.user_info {
  margin-bottom: 10px;
}
</style>
