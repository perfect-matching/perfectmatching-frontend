<template>
  <v-container class="comment_container">
    <v-layout class="user_info" align-center>
      <v-btn icon to="/my">
        <v-avatar :tile="false" :size="36" color="grey lighten-4">
          <img :src="comment.profileImage" alt="avatar" />
        </v-avatar>
      </v-btn>
      <div class="nick_name">{{ comment.nickname }}</div>
    </v-layout>

    <form class="comment_form">
      <v-textarea
        outline
        v-model="comment.content"
        :error-messages="contentErrors"
        :counter="255"
        name="댓글"
        label="댓글"
        required
        placeholder="내용을 입력해주세요."
        @input="$v.comment.content.$touch()"
        @blur="$v.comment.content.$touch()"
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
  props: {
    comment: {
      type: Object,
      required: false
    }
  },

  mixins: [validationMixin],

  validations: {
    comment: {
      content: { required, maxLength: maxLength(255) }
    }
  },

  computed: {
    contentErrors() {
      const errors = [];
      if (!this.$v.comment.content.$dirty) return errors;
      !this.$v.comment.content.maxLength &&
        errors.push("최대 255자 이내이어야 합니다.");
      !this.$v.comment.content.required && errors.push("내용을 입력해주세요.");

      return errors;
    }
  },

  methods: {
    submit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        console.log("형식 불일치");
      } else {
        console.log("제출!!:", this.comment.content);
        this.$store
          .dispatch("POST_COMMENT_ON_PROJECT", {
            content: this.comment.content,
            projectIdx: this.$route.params.idx
          })
          .then(() => {
            this.clear();

            document.body.scrollTop = document.body.scrollHeight;
            window.scrollTo(
              0,
              document.body.scrollTop || document.documentElement.scrollHeight
            );
          });
      }
    },

    clear() {
      this.$v.$reset();
      this.comment.content = "";
    }
  }
};
</script>
<style scoped>
.user_info {
  margin-bottom: 10px;
}
</style>
