<template>
  <v-container class="application_form_container">
    <form>
      <v-textarea
        outline
        name="주최자에게 하고 싶은 말"
        label="주최자에게 하고 싶은 말"
        v-model="content"
        :error-messages="contentErrors"
        :counter="500"
        placeholder="주최자에게 하고 싶은 말을 전하세요. 기술스택이나 궁금한 점도 좋아요 :)"
        @input="$v.content.$touch()"
        @blur="$v.content.$touch()"
      ></v-textarea>

      <v-btn @click="submit">지원하기</v-btn>
      <v-btn @click="clear">취소</v-btn>
    </form>
  </v-container>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  validations: { content: { required, maxLength: maxLength(500) } },

  data: () => ({
    content: ""
  }),

  computed: {
    contentErrors() {
      const errors = [];
      if (!this.$v.content.$dirty) return errors;

      !this.$v.content.maxLength &&
        errors.push("내용은 반드시 500자 이내이어야 합니다.");

      !this.$v.content.required && errors.push("내용을 반드시 입력해주세요.");

      return errors;
    }
  },

  methods: {
    clearDatas() {
      this.content = "";
    },
    submit() {
      this.$v.$touch();
    },
    clear() {
      this.$v.$reset();
      this.clearDatas();
    }
  }
};
</script>

<style scoped>
.project_card {
  padding: 20px;
}

.project_title {
  font-size: 30px;
}

.project_date {
  margin-bottom: 20px;
}

.project_summery {
  color: #898989;
}

.content_title {
  font-size: 16px;
  color: black;
}

.require_skill {
  margin-bottom: 10px;
}

.v-chip {
  margin: 5px 5px 5px 0;
}
</style>
