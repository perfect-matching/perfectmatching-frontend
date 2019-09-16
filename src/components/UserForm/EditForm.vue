<template>
  <form>
    <v-text-field
      outline
      v-model="myProfile.email"
      :error-messages="emailErrors"
      label="E-mail"
      required
      @input="$v.myProfile.email.$touch()"
      @blur="$v.myProfile.email.$touch()"
      :disabled="this.$route.name === 'profileEdit'"
    ></v-text-field>

    <v-text-field
      outline
      v-model="myProfile.password"
      :error-messages="passwordErrors"
      :append-icon="showPassword ? 'visibility' : 'visibility_off'"
      :type="showPassword ? 'text' : 'password'"
      name="password"
      label="비밀번호"
      hint="At least 8 characters"
      class="input-group--focused"
      @input="$v.myProfile.password.$touch()"
      @blur="$v.myProfile.password.$touch()"
      @click:append="showPassword = !showPassword"
    ></v-text-field>

    <v-text-field
      outline
      v-model="myProfile.repeatPassword"
      :error-messages="repeatPasswordErrors"
      :append-icon="showPassword ? 'visibility' : 'visibility_off'"
      :type="showPassword ? 'text' : 'password'"
      name="repeat password"
      label="비밀번호 확인"
      class="input-group--focused"
      @input="$v.myProfile.repeatPassword.$touch()"
      @blur="$v.myProfile.repeatPassword.$touch()"
      @click:append="showPassword = !showPassword"
    ></v-text-field>

    <v-text-field
      outline
      v-model="myProfile.nickname"
      :error-messages="nickNameErrors"
      :counter="20"
      label="닉네임"
      required
      @input="$v.myProfile.nickname.$touch()"
      @blur="$v.myProfile.nickname.$touch()"
    ></v-text-field>

    <v-textarea
      outline
      v-model="myProfile.summary"
      :error-messages="summaryErrors"
      :counter="500"
      name="summary"
      label="자기소개"
      required
      value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
      @input="$v.myProfile.summary.$touch()"
      @blur="$v.myProfile.summary.$touch()"
    ></v-textarea>

    <v-text-field
      outline
      v-model="myProfile.socialUrl"
      label="소셜 URL"
    ></v-text-field>

    <vue-tags-input
      class="tag_input"
      v-model="tag"
      :tags="myProfile.tags"
      @tags-changed="newTags => (myProfile.tags = newTags)"
      :autocomplete-items="filteredItems"
      add-only-from-autocomplete
    />

    <div class="time">
      <v-subheader class="pl-0">투자시간(?)</v-subheader>
      <v-slider
        v-model="myProfile.investTime"
        thumb-label="always"
        min="0"
        max="24"
      ></v-slider>
      <div>
        저는 하루 중
        <span style="color:red;">{{ myProfile.investTime }}시간</span> 정도
        사이드 프로젝트에 투자하고 싶어요 :D
      </div>
    </div>

    <v-checkbox
      v-model="checkbox"
      :error-messages="checkboxErrors"
      label="Do you agree?"
      required
      @change="$v.checkbox.$touch()"
      @blur="$v.checkbox.$touch()"
    ></v-checkbox>

    <v-btn @click="submit">가입하기</v-btn>
    <v-btn @click="clear">clear</v-btn>
  </form>
</template>

<script>
import { mapGetters } from "vuex";
import { validationMixin } from "vuelidate";
import VueTagsInput from "@johmun/vue-tags-input";
import {
  required,
  email,
  maxLength,
  sameAs,
  minLength,
  helpers
} from "vuelidate/lib/validators";

const strength = helpers.regex(
  "strength",
  /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,22}$/
);

export default {
  props: {
    myProfile: {
      type: Object,
      required: false
    }
  },
  mixins: [validationMixin],
  components: {
    VueTagsInput
  },

  validations: {
    myProfile: {
      email: {
        required,
        email,
        maxLength: maxLength(50),
        async isUnique(value) {
          // standalone validator ideally should not assume a field is required
          if (value === "") return true;

          // simulate async call, fail for all logins with even length
          return this.$store.dispatch("CHECK_EMAIL", { email: value });
        }
      },

      nickname: {
        required,
        maxLength: maxLength(20),
        async isUnique(value) {
          // standalone validator ideally should not assume a field is required
          if (value === "") return true;

          // simulate async call, fail for all logins with even length
          return this.$store.dispatch("CHECK_NICK", { nick: value });
        }
      },
      password: { required, minLength: minLength(8), strength },
      repeatPassword: {
        sameAsPassword: sameAs("password")
      },
      summary: { required, maxLength: maxLength(500) }
    },

    checkbox: {
      checked(val) {
        return val;
      }
    }
  },

  data: () => ({
    valid: false,
    showPassword: false,
    tag: "",

    checkbox: false
  }),

  computed: {
    ...mapGetters({
      autocompleteItems: "fetchedDbUserSkills"
    }),

    filteredItems() {
      return this.autocompleteItems.filter(i => {
        return i.text.toLowerCase().indexOf(this.tag.toLowerCase()) !== -1;
      });
    },

    emailErrors() {
      const errors = [];
      if (!this.$v.myProfile.email.$dirty) return errors;
      !this.$v.myProfile.email.maxLength &&
        errors.push("이메일은 50자 이내이어야 합니다.");
      !this.$v.myProfile.email.email &&
        errors.push("이메일 형식이 틀렸습니다.");
      !this.$v.myProfile.email.required &&
        errors.push("이메일을 입력해주세요.");
      !this.$v.myProfile.email.isUnique &&
        errors.push("이미 존재하는 이메일입니다.");
      return errors;
    },

    checkboxErrors() {
      const errors = [];
      if (!this.$v.checkbox.$dirty) return errors;
      !this.$v.checkbox.checked && errors.push("You must agree to continue!");
      return errors;
    },

    nickNameErrors() {
      const errors = [];
      if (!this.$v.myProfile.nickname.$dirty) return errors;
      !this.$v.myProfile.nickname.maxLength &&
        errors.push("닉네임은 최대 20자 이내이어야 합니다.");
      !this.$v.myProfile.nickname.required &&
        errors.push("닉네임을 입력해주세요.");
      !this.$v.myProfile.nickname.isUnique &&
        errors.push("이미 존재하는 닉네임입니다.");
      return errors;
    },

    passwordErrors() {
      const errors = [];
      if (!this.$v.myProfile.password.$dirty) return errors;
      !this.$v.myProfile.password.minLength &&
        errors.push("비밀번호는 최소 8자 이상이어야 합니다.");

      !this.$v.myProfile.password.strength &&
        errors.push("영문,숫자 그리고 특수문자로 이루어져 있어야 합니다.");

      !this.$v.myProfile.password.required &&
        errors.push("비밀번호를 입력해주세요");
      return errors;
    },

    repeatPasswordErrors() {
      const errors = [];
      if (!this.$v.myProfile.repeatPassword.$dirty) return errors;
      !this.$v.myProfile.repeatPassword.sameAsPassword &&
        errors.push("비밀번호가 일치하지 않습니다.");
      return errors;
    },

    summaryErrors() {
      const errors = [];
      if (!this.$v.myProfile.summary.$dirty) return errors;
      !this.$v.myProfile.summary.maxLength &&
        errors.push("최대 500자 이내이어야 합니다.");
      !this.$v.myProfile.summary.required &&
        errors.push("자기소개를 입력해주세요.");
      return errors;
    }
  },

  methods: {
    clearDatas() {},

    submit() {
      this.$v.$touch();
      console.log(this.myProfile);
      if (this.$v.$invalid) {
        console.log("형식 불일치");
      } else {
        const user = {
          email: this.myProfile.email,
          password: this.myProfile.password,
          confirmPassword: this.myProfile.repeatPassword,
          nickname: this.myProfile.nickname,
          summary: this.myProfile.summary, // 현재 가입부분 description 으로 되어있어서 오류남 백엔드가 바뀌면 오류 안날듯
          investTime: this.myProfile.investTime,
          userSkills: this.myProfile.tags
        };
        console.log("제출!!:", user);
        this.$store.dispatch("JOIN_USER", { user });
      }
    },

    clear() {
      this.$v.$reset();
      this.clearDatas();
    }
  },

  created() {
    this.$store.dispatch("FETCH_USER_SKILLS");
  }
};
</script>

<style scoped>
.tag_input {
  max-width: 100% !important;
}
</style>
