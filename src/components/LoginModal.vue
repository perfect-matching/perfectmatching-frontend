<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn flat color="black" dark v-on="on">로그인/회원가입</v-btn>
    </template>
    <v-card>
      <v-card-title class="modal_title">
        <div class="headline">로그인</div>
        <div class="welcome_text">퍼펙트 매칭에 오신 걸 환영합니다!</div>
      </v-card-title>

      <v-container>
        <form>
          <v-text-field
            v-model="email"
            :error-messages="emailErrors"
            label="E-mail"
            required
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
          ></v-text-field>

          <v-text-field
            v-model="password"
            :error-messages="passwordErrors"
            :append-icon="showPassword ? 'visibility' : 'visibility_off'"
            :type="showPassword ? 'text' : 'password'"
            name="password"
            label="password"
            class="input-group--focused"
            @input="$v.password.$touch()"
            @blur="$v.password.$touch()"
            @click:append="showPassword = !showPassword"
          ></v-text-field>
          <div class="form_buttons">
            <v-btn flat color="secondary" dark @click="submit">로그인</v-btn>
            <v-btn flat color="secondary" dark @click="clear">취소</v-btn>
            <div>
              퍼펙트 매칭이 처음이신가요?
              <router-link to="/join" @click.native="clickedJoin"
                >회원가입</router-link
              >
            </div>
          </div>
        </form>
      </v-container>
      <v-card-actions>
        <v-spacer></v-spacer>
        <div class="find_actions">
          <small class="action_item">
            가입한 이메일을 잊으셨습니까?
            <a href>이메일 찾기</a>
          </small>
          <small class="action_item">
            비밀번호을 잊으셨습니까?
            <a href>비밀번호 찾기</a>
          </small>
        </div>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import { validationMixin } from "vuelidate";
import {
  required,
  minLength,
  maxLength,
  email
} from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  validations: {
    email: { required, email, maxLength: maxLength(50) },
    password: { required, minLength: minLength(8) }
  },

  data: () => ({
    dialog: false,
    valid: false,
    showPassword: false,
    email: "",
    password: ""
  }),

  computed: {
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

      !this.$v.password.required && errors.push("password is required");
      return errors;
    }
  },

  methods: {
    submit() {
      this.$v.$touch();
    },

    clear() {
      this.$v.$reset();
      this.email = "";
      this.password = "";
      this.dialog = false;
    },

    clickedJoin() {
      this.email = "";
      this.password = "";
      this.dialog = false;
    }
  }
};
</script>
<style scoped>
.modal_title {
  text-align: center;
  display: block;
}

.modal_title .headline {
  font-size: 34px !important;

  padding-bottom: 16px;
}

.modal_title .welcome_text {
  border-bottom: 3px solid black;
}

.form_buttons {
  text-align: center;
}

.find_actions .action_item {
  display: block;
}
</style>
