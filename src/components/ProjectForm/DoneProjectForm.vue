<template>
  <form>
    <v-text-field
      v-model="project.title"
      :error-messages="titleErrors"
      :counter="20"
      label="Title"
      placeholder="프로젝트 명을 입력해주세요."
      required
      @input="$v.project.title.$touch()"
      @blur="$v.project.title.$touch()"
      outline
    ></v-text-field>

    <v-textarea
      v-model="project.summary"
      :error-messages="summaryErrors"
      :counter="500"
      label="summary"
      placeholder="요약 내용을 입력해주세요"
      required
      @input="$v.project.summary.$touch()"
      @blur="$v.project.summary.$touch()"
      outline
    ></v-textarea>

    <vue-tags-input
      class="tag_input"
      v-model="tag"
      :tags="project.tags"
      @tags-changed="newTags => (project.tags = newTags)"
      :autocomplete-items="filteredItems"
      add-only-from-autocomplete
    />

    <v-textarea
      class="content_input"
      v-model="project.content"
      :error-messages="contentErrors"
      :counter="500"
      label="Content"
      placeholder="프로젝트 내용을 입력해주세요"
      @input="$v.project.content.$touch()"
      @blur="$v.project.content.$touch()"
      outline
    ></v-textarea>
    <date-picker
      v-model="project.startDate"
      :labelName="'프로젝트 시작일'"
    ></date-picker>
    <date-picker
      v-model="project.endDate"
      :labelName="'프로젝트 종료일'"
    ></date-picker>
    <v-layout>
      <v-spacer></v-spacer>
      <v-btn flat @click="submit">submit</v-btn>
      <v-btn flat @click="clear">clear</v-btn>
    </v-layout>
  </form>
</template>
<script>
import DatePicker from "./DatePicker.vue";
import VueTagsInput from "@johmun/vue-tags-input";
import { validationMixin } from "vuelidate";
import { required, maxLength } from "vuelidate/lib/validators";

export default {
  props: {
    project: {
      type: Object,
      required: false
    }
  },

  components: {
    DatePicker,
    VueTagsInput
  },

  mixins: [validationMixin],

  validations: {
    project: {
      title: { required, maxLength: maxLength(20) },
      summary: { required, maxLength: maxLength(500) },
      content: { required, maxLength: maxLength(500) }
    }
  },

  data() {
    return {
      // tags: [],
      tag: "",
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
    };
  },

  computed: {
    filteredItems() {
      return this.autocompleteItems.filter(i => {
        return i.text.toLowerCase().indexOf(this.tag.toLowerCase()) !== -1;
      });
    },

    positionErrors() {
      const errors = [];

      let positions = [
        this.developer,
        this.designer,
        this.planner,
        this.marketer
      ];

      let counter = 0;
      positions.forEach(position => {
        if (position === null) {
          counter++;
        } else {
          return errors;
        }
      });

      if (counter === 4) errors.push("직군을 최소 1개 선택해주세요");

      return errors;
    },

    titleErrors() {
      const errors = [];
      if (!this.$v.project.title.$dirty) return errors;

      !this.$v.project.title.maxLength &&
        errors.push("프로젝트 명은 반드시 20자 이내이어야 합니다.");

      !this.$v.project.title.required &&
        errors.push("프로젝트 명은 반드시 입력해주세요.");
      return errors;
    },

    summaryErrors() {
      const errors = [];
      if (!this.$v.project.summary.$dirty) return errors;

      !this.$v.project.summary.maxLength &&
        errors.push("내용은 반드시 500자 이내이어야 합니다.");

      !this.$v.project.summary.required &&
        errors.push("요약 정보를 반드시 입력해주세요.");

      return errors;
    },

    contentErrors() {
      const errors = [];
      if (!this.$v.project.content.$dirty) return errors;

      !this.$v.project.content.maxLength &&
        errors.push("내용은 반드시 500자 이내이어야 합니다.");

      !this.$v.project.content.required &&
        errors.push("상세업무 및 성과를 반드시 입력해주세요.");

      return errors;
    },

    endDateErrors() {
      const errors = [];
      return errors;
    }
  },

  methods: {
    clearDatas() {
      this.project.title = "";
      this.project.summary = "";
      this.project.content = "";
      this.project.tags = [];
      this.project.startDate = "";
      this.project.endDate = "";
    },

    submit() {
      this.$v.$touch();
      console.log(this.project);
      if (this.$v.$invalid) {
        console.log("형식 불일치");
      } else {
        console.log("제출!!:");
      }
    },

    clear() {
      this.$v.$reset();
      console.log(this.tags);
      this.clearDatas();
    }
  }
};
</script>

<style scoped>
.form_container {
  padding: 25px;
}
.tag_input {
  max-width: 100% !important;
  margin-bottom: 20px;
}
</style>
