<template>
  <form>
    <v-text-field
      outline
      v-model="email"
      :error-messages="emailErrors"
      label="E-mail"
      required
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    ></v-text-field>

    <v-text-field
      outline
      v-model="nickName"
      :error-messages="nickNameErrors"
      label="닉네임"
      required
      @input="$v.nickName.$touch()"
      @blur="$v.nickName.$touch()"
    ></v-text-field>

    <v-text-field
      outline
      v-model="password"
      :error-messages="passwordErrors"
      :append-icon="showPassword ? 'visibility' : 'visibility_off'"
      :type="showPassword ? 'text' : 'password'"
      name="password"
      label="비밀번호"
      hint="At least 8 characters"
      class="input-group--focused"
      @input="$v.password.$touch()"
      @blur="$v.password.$touch()"
      @click:append="showPassword = !showPassword"
    ></v-text-field>

    <v-text-field
      outline
      v-model="repeatPassword"
      :error-messages="repeatPasswordErrors"
      :append-icon="showPassword ? 'visibility' : 'visibility_off'"
      :type="showPassword ? 'text' : 'password'"
      name="repeat password"
      label="비밀번호 확인"
      class="input-group--focused"
      @input="$v.repeatPassword.$touch()"
      @blur="$v.repeatPassword.$touch()"
      @click:append="showPassword = !showPassword"
    ></v-text-field>
    <vue-tags-input
      class="tag_input"
      v-model="tag"
      :tags="tags"
      :placeholder="'가지고 있는 능력을 입력해주세요!'"
      @tags-changed="newTags => (tags = newTags)"
      :autocomplete-items="filteredItems"
      add-only-from-autocomplete
    />
    <v-textarea
      class="introduce_input"
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

    <v-text-field outline v-model="url" label="소셜 URL"></v-text-field>

    <div class="time">
      <v-subheader class="pl-0">투자시간(?)</v-subheader>
      <v-slider v-model="time" thumb-label="always" min="0" max="24"></v-slider>
      <div>
        저는 하루 중
        <span style="color:red;">{{ time }}시간</span> 정도 사이드 프로젝트에
        투자하고 싶어요 :D
      </div>
    </div>

    <v-layout class="form_buttons">
      <v-spacer></v-spacer>
      <v-btn flat color="secondary" dark @click="submit">회원가입</v-btn>
      <v-btn flat color="secondary" dark @click="clear">취소</v-btn>
    </v-layout>
  </form>
</template>
<script>
import VueTagsInput from "@johmun/vue-tags-input";
import { validationMixin } from "vuelidate";
import {
  required,
  minLength,
  maxLength,
  sameAs,
  email
} from "vuelidate/lib/validators";

export default {
  components: {
    VueTagsInput
  },

  mixins: [validationMixin],

  validations: {
    nickName: { required, maxLength: maxLength(20) },
    email: { required, email, maxLength: maxLength(50) },
    password: { required, minLength: minLength(8) },
    repeatPassword: {
      sameAsPassword: sameAs("password")
    },
    introduce: { required, maxLength: maxLength(500) }
  },

  data: () => ({
    valid: false,
    showPassword: false,
    email: "",
    nickName: "",
    password: "",
    repeatPassword: "",
    introduce: "",
    url: "",
    time: 12,
    tag: "",
    tags: [],
    autocompleteItems: [
      {
        id: 1,
        text: "Spain"
      },
      {
        id: 2,
        text: "France"
      },
      {
        id: 3,
        text: "USA"
      },
      {
        id: 4,
        text: "Germany"
      },
      {
        id: 5,
        text: "China"
      },
      {
        id: 6,
        text: "한글"
      },
      {
        id: 7,
        text: "앱 기획"
      },
      {
        id: 8,
        text: "웹 기획"
      }
    ]
  }),

  computed: {
    filteredItems() {
      return this.autocompleteItems.filter(i => {
        return i.text.toLowerCase().indexOf(this.tag.toLowerCase()) !== -1;
      });
    },

    nickNameErrors() {
      const errors = [];
      if (!this.$v.nickName.$dirty) return errors;
      !this.$v.nickName.maxLength &&
        errors.push("닉네임은 20자 이내이어야 합니다.");
      !this.$v.email.required && errors.push("닉네임을 입력해주세요.");
      return errors;
    },

    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.maxLength &&
        errors.push("이메일은 50자 이내이어야 합니다.");
      !this.$v.email.email && errors.push("이메일 형식이 틀렸습니다.");
      !this.$v.email.required && errors.push("이메일을 입력해주세요.");
      return errors;
    },

    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.minLength &&
        errors.push("비밀번호는 최소 8자 이상이어야 합니다.");

      !this.$v.password.required && errors.push("비밀번호를 입력해주세요");
      return errors;
    },

    repeatPasswordErrors() {
      const errors = [];
      if (!this.$v.repeatPassword.$dirty) return errors;
      !this.$v.repeatPassword.sameAsPassword &&
        errors.push("비밀번호가 일치하지 않습니다.");
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
      this.$v.$touch();

      if (this.$v.$invalid) {
        console.log("형식 불일치");
      } else {
        console.log("제출!!:");
      }
    },

    clear() {
      this.$v.$reset();
      this.nickName = "";
      this.email = "";
      this.password = "";
      this.repeatPassword = "";
    }
  }
};
</script>
<style scoped>
.tag_input {
  max-width: 100% !important;
}

.introduce_input {
  margin-top: 30px;
}

.time {
  text-align: center;
}

.form_buttons {
  margin-top: 20px;
}
</style>
