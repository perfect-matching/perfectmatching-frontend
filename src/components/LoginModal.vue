<template>
  <v-dialog v-model="loginModalStatus" persistent max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn
        flat
        color="black"
        dark
        v-on="on"
        @click="openModal"
        v-show="!loggedIn"
        >로그인/회원가입</v-btn
      >
      <v-btn flat color="black" dark @click="logout" v-show="loggedIn"
        >로그아웃</v-btn
      >
    </template>
    <v-card>
      <v-card-title class="modal_title">
        <div class="headline">로그인</div>
        <div class="welcome_text">
          입력안하고 로그인만 눌려도 로그인 되게 되어있음
        </div>
        <!-- <div class="welcome_text">퍼펙트 매칭에 오신 걸 환영합니다!</div> -->
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
            비밀번호을 잊으셨습니까?
            <forgot-modal></forgot-modal>
          </small>
        </div>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import { mapGetters } from "vuex";
import { validationMixin } from "vuelidate";
import ForgotModal from "./ForgotModal.vue";
import {
  required,
  minLength,
  maxLength,
  email
} from "vuelidate/lib/validators";

export default {
  components: {
    ForgotModal
  },

  mixins: [validationMixin],

  validations: {
    email: { required, email, maxLength: maxLength(50) },
    password: { required, minLength: minLength(8) }
  },

  data: () => ({
    valid: false,
    showPassword: false,
    email: "",
    password: ""
  }),

  computed: {
    ...mapGetters({
      loggedIn: "isAuthenticated",
      loginModalStatus: "loginModalStatus"
    }),
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
      const { email, password } = this;
      this.$store.dispatch("AUTH_REQUEST", { email, password }).then(() => {
        console.log("로그인 개성공!");
        this.$store.dispatch("TOGGLE_LOGIN_MODAL");
        this.$router.push("/");
      });
    },

    clear() {
      this.$v.$reset();
      this.email = "";
      this.password = "";
      this.$store.dispatch("TOGGLE_LOGIN_MODAL");
    },

    clickedJoin() {
      this.email = "";
      this.password = "";
      this.$store.dispatch("TOGGLE_LOGIN_MODAL");
    },

    openModal() {
      this.$store.dispatch("TOGGLE_LOGIN_MODAL");
    },

    login() {
      const { email, password } = this;
      this.$store.dispatch("AUTH_REQUEST", { email, password }).then(() => {
        console.log("로그인 개성공!");
        this.$store.dispatch("TOGGLE_LOGIN_MODAL");
        this.$router.push("/");
      });
    },

    logout() {
      this.$store.dispatch("AUTH_LOGOUT").then(() => {
        this.$router.push("/");
      });
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
