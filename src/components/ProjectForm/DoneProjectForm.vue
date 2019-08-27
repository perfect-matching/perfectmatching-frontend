<template>
  <form>
    <v-text-field
      v-model="title"
      :error-messages="titleErrors"
      :counter="20"
      label="Title"
      placeholder="프로젝트 명을 입력해주세요."
      required
      @input="$v.title.$touch()"
      @blur="$v.title.$touch()"
      outline
    ></v-text-field>

    <v-textarea
      v-model="summary"
      :error-messages="summaryErrors"
      :counter="500"
      label="summary"
      placeholder="요약 내용을 입력해주세요"
      required
      @input="$v.summary.$touch()"
      @blur="$v.summary.$touch()"
      outline
    ></v-textarea>

    <vue-tags-input
      class="tag_input"
      v-model="tag"
      :tags="tags"
      @tags-changed="newTags => (tags = newTags)"
      :autocomplete-items="filteredItems"
      add-only-from-autocomplete
    />

    <v-textarea
      class="content_input"
      v-model="content"
      :error-messages="contentErrors"
      :counter="500"
      label="Content"
      placeholder="프로젝트 내용을 입력해주세요"
      @input="$v.content.$touch()"
      @blur="$v.content.$touch()"
      outline
    ></v-textarea>
    <date-picker
      v-model="startDate"
      :labelName="'프로젝트 시작일'"
      :error-messages="deadlineErrors"
    ></date-picker>
    <date-picker
      v-model="endDate"
      :labelName="'프로젝트 종료일'"
      :error-messages="deadlineErrors"
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
    title: { required, maxLength: maxLength(20) },
    summary: { required, maxLength: maxLength(500) },
    content: { maxLength: maxLength(500) },

    deadline: {
      required,
      minValue: value => value > new Date().toISOString()
    }
  },

  data: () => ({
    title: "",
    summary: "",
    content: "",
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

    startDate: "",
    endDate: ""
  }),

  created() {
    console.log(this.project);
    if (this.isPropsExist(this.project)) {
      const propsData = this.project;
      this.title = propsData.title;
      this.location = propsData.location;
      this.summary = propsData.summary;
      this.content = propsData.content;
      this.socialUrl = propsData.socialUrl;
    }
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
      if (!this.$v.title.$dirty) return errors;

      !this.$v.title.maxLength &&
        errors.push("프로젝트 명은 반드시 20자 이내이어야 합니다.");

      !this.$v.title.required &&
        errors.push("프로젝트 명은 반드시 입력해주세요.");
      return errors;
    },

    summaryErrors() {
      const errors = [];
      if (!this.$v.summary.$dirty) return errors;

      !this.$v.summary.maxLength &&
        errors.push("내용은 반드시 500자 이내이어야 합니다.");

      !this.$v.summary.required &&
        errors.push("요약 정보를 반드시 입력해주세요.");

      return errors;
    },

    contentErrors() {
      const errors = [];
      if (!this.$v.content.$dirty) return errors;

      !this.$v.content.maxLength &&
        errors.push("내용은 반드시 500자 이내이어야 합니다.");

      return errors;
    },

    endDateErrors() {
      const errors = [];
      return errors;
    },

    deadlineErrors() {
      const errors = [];
      if (!this.$v.content.$dirty) return errors;

      !this.$v.deadline.minValue &&
        errors.push("오늘 이후의 날짜를 선택해주세요");

      return errors;
    }
  },

  methods: {
    clearDatas() {
      this.title = "";
      this.summary = "";
      this.content = "";
      this.tag = "";
      this.tags = [];
      this.startDate = "";
      this.endDate = "";
    },

    submit() {
      this.$v.$touch();

      if (this.$v.$invalid) {
        console.log("형식 불일치");
      } else {
        const project = {
          title: this.title,
          summary: this.summary,
          content: this.content,
          tag: this.tag,
          tags: this.tags,
          startDate: this.startDate,
          endDate: this.endDate
        };
        console.log("제출!!:", project);
      }
    },

    clear() {
      this.$v.$reset();
      console.log(this.tags);
      this.clearDatas();
    },

    isPropsExist(props) {
      return typeof props !== "undefined";
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
