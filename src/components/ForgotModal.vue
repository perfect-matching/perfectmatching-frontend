<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on }">
      <a flat color="black" dark v-on="on">비밀번호 찾기</a>
    </template>
    <v-card>
      <v-card-title class="modal_title">
        <div class="headline">비밀번호 재설정</div>
        <div class="welcome_text"></div>
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

          <div class="form_buttons">
            <v-btn flat color="secondary" dark @click="submit"
              >이메일 전송</v-btn
            >
            <v-btn flat color="secondary" dark @click="clear">취소</v-btn>
          </div>
        </form>
      </v-container>
    </v-card>
  </v-dialog>
</template>
<script>
import { mapGetters } from "vuex";
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  validations: {
    email: { required, email, maxLength: maxLength(50) }
  },

  data: () => ({
    dialog: false,
    email: ""
  }),

  computed: {
    ...mapGetters({
      loggenIn: "isAuthenticated"
    }),
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.maxLength &&
        errors.push("이메일은 50자 이내이어야 합니다.");
      !this.$v.email.email && errors.push("이메일 형식이 틀렸습니다.");
      !this.$v.email.required && errors.push("이메일을 입력해주세요.");
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
