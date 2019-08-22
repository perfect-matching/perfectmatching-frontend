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
    <vue-tags-input
      class="tag_input"
      v-model="tag"
      :tags="tags"
      @tags-changed="newTags => (tags = newTags)"
      :autocomplete-items="filteredItems"
      add-only-from-autocomplete
    />
    <div class="time">
      <v-subheader class="pl-0">투자시간(?)</v-subheader>
      <v-slider v-model="time" thumb-label="always" min="0" max="24"></v-slider>
      <div>
        저는 하루 중
        <span style="color:red;">{{ time }}시간</span> 정도 사이드 프로젝트에
        투자하고 싶어요 :D
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

    <v-btn @click="submit">submit</v-btn>
    <v-btn @click="clear">clear</v-btn>
  </form>
</template>

<script>
import { validationMixin } from "vuelidate";
import VueTagsInput from "@johmun/vue-tags-input";
import { required, maxLength } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  components: {
    VueTagsInput
  },

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
    ],
    time: 12,
    checkbox: false
  }),

  computed: {
    filteredItems() {
      return this.autocompleteItems.filter(i => {
        return i.text.toLowerCase().indexOf(this.tag.toLowerCase()) !== -1;
      });
    },

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
    clearDatas() {
      this.nickName = "";
      this.email = "";
      this.introduce = "";
      this.tag = "";
      this.tags = [];
      this.time = 12;
      this.checkbox = false;
    },

    submit() {
      if (this.$v.$invalid) {
        console.log("형식 불일치");
      } else {
        console.log("제출!!:");
      }
    },

    clear() {
      this.$v.$reset();
      this.clearDatas();
    }
  }
};
</script>

<style scoped>
.tag_input {
  max-width: 100% !important;
}
</style>
