<template>
  <form>
    <v-text-field
      outline
      v-model="email"
      label="E-mail"
      value="jkljkl17@naver.com"
      disabled
      placeholder="jkljkl17@naver.com"
    ></v-text-field>
    <v-text-field
      outline
      v-model="nickName"
      :error-messages="nickNameErrors"
      :counter="20"
      label="닉네임"
      required
      @input="$v.nickName.$touch()"
      @blur="$v.nickName.$touch()"
    ></v-text-field>
    <v-textarea
      outline
      v-model="introduce"
      :error-messages="introduceErrors"
      :counter="500"
      name="introduce"
      label="자기소개"
      required
      value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
      @input="$v.introduce.$touch()"
      @blur="$v.introduce.$touch()"
    ></v-textarea>
    <v-checkbox
      v-model="checkbox"
      :error-messages="checkboxErrors"
      label="Do you agree?"
      required
      @change="$v.checkbox.$touch()"
      @blur="$v.checkbox.$touch()"
    ></v-checkbox>

    <v-btn @click="submit">submit</v-btn>
    <v-btn @click="clear">clear</v-btn>
  </form>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  validations: {
    nickName: { required, maxLength: maxLength(20) },
    introduce: { required, maxLength: maxLength(500) },
    checkbox: {
      checked(val) {
        return val;
      }
    }
  },

  data: () => ({
    nickName: "",
    email: "",
    introduce: "",
    checkbox: false
  }),

  computed: {
    checkboxErrors() {
      const errors = [];
      if (!this.$v.checkbox.$dirty) return errors;
      !this.$v.checkbox.checked && errors.push("You must agree to continue!");
      return errors;
    },
    nickNameErrors() {
      const errors = [];
      if (!this.$v.nickName.$dirty) return errors;
      !this.$v.nickName.maxLength &&
        errors.push("닉네임은 최대 20자 이내이어야 합니다.");
      !this.$v.nickName.required && errors.push("닉네임을 입력해주세요.");
      return errors;
    },
    introduceErrors() {
      const errors = [];
      if (!this.$v.introduce.$dirty) return errors;
      !this.$v.introduce.maxLength &&
        errors.push("최대 500자 이내이어야 합니다.");
      !this.$v.introduce.required && errors.push("자기소개를 입력해주세요.");
      return errors;
    }
  },

  methods: {
    submit() {
      console.log(this.nickName);
      console.log(this.email);
      this.$v.$touch();
    },
    clear() {
      this.$v.$reset();
      this.nickName = "";
      this.introduce = "";
      this.checkbox = false;
    }
  }
};
</script>

<style scoped></style>
