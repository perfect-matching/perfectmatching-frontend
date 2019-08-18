<template>
  <v-container class="application_form_container">
    <form>
      <v-layout wrap justify-space-around>
        <v-flex xs12>직군:</v-flex>
        <v-radio-group v-model="position" required row>
          <v-radio label="개발자" value="developer"></v-radio>
          <v-radio label="디자이너" value="designer"></v-radio>
          <v-radio label="기획자" value="planner"></v-radio>
          <v-radio label="마케터" value="marketer"></v-radio>
        </v-radio-group>
        <v-flex xs12>내가 선택한 position: {{ position }}</v-flex>

        <v-flex xs12></v-flex>
        <v-textarea
          outline
          name="주최자에게 하고 싶은 말"
          label="주최자에게 하고 싶은 말"
          v-model="content"
          placeholder="주최자에게 하고 싶은 말을 전하세요. 기술스택이나 궁금한 점도 좋아요 :)"
        ></v-textarea>
        <v-flex xs12></v-flex>
        <v-btn @click="submit">submit</v-btn>
        <v-btn @click="clear">clear</v-btn>
      </v-layout>
    </form>
  </v-container>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  validations: {
    checkbox: {
      checked(val) {
        return val;
      }
    }
  },

  data: () => ({
    position: "",
    content: ""
  }),

  computed: {
    checkboxErrors() {
      const errors = [];
      if (!this.$v.checkbox.$dirty) return errors;
      !this.$v.checkbox.checked && errors.push("You must agree to continue!");
      return errors;
    }
  },

  methods: {
    submit() {
      this.$v.$touch();
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.email = "";
      this.select = null;
      this.checkbox = false;
    }
  }
};
</script>

<style></style>
