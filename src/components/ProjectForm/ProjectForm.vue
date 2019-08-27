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
    <v-select
      v-model="location"
      :items="locations"
      :error-messages="locationErrors"
      label="location"
      required
      @change="$v.location.$touch()"
      @blur="$v.location.$touch()"
      outline
    ></v-select>
    <v-textarea
      v-model="summary"
      :error-messages="summaryErrors"
      :counter="500"
      label="Summary"
      placeholder="요약 내용을 입력해주세요"
      required
      @input="$v.summary.$touch()"
      @blur="$v.summary.$touch()"
      outline
    ></v-textarea>
    <v-switch v-model="detailSwitch" :label="`상세 내용 입력`"></v-switch>
    <v-textarea
      v-if="detailSwitch"
      v-model="content"
      :error-messages="contentErrors"
      :counter="500"
      label="Content"
      placeholder="프로젝트 내용을 입력해주세요"
      @input="$v.content.$touch()"
      @blur="$v.content.$touch()"
      outline
    ></v-textarea>
    <v-text-field outline v-model="socialUrl" label="소셜 URL"></v-text-field>
    <vue-tags-input
      class="tag_input"
      v-model="tag"
      :tags="tags"
      @tags-changed="newTags => (tags = newTags)"
      :autocomplete-items="filteredItems"
      add-only-from-autocomplete
    />

    <v-layout>
      <v-spacer></v-spacer>
      <v-btn flat @click="submit">submit</v-btn>
      <v-btn flat @click="clear">clear</v-btn>
    </v-layout>
  </form>
</template>
<script>
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
    VueTagsInput
  },

  mixins: [validationMixin],

  validations: {
    title: { required, maxLength: maxLength(20) },
    summary: { required, maxLength: maxLength(500) },
    content: { maxLength: maxLength(500) },
    location: { required }
  },

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

  data() {
    return {
      title: "",
      summary: "",
      detailSwitch: false,
      content: "",
      socialUrl: "",
      location: null,
      locations: [
        "서울",
        "부산",
        "대구",
        "광주",
        "대전",
        "울산",
        "충청북도",
        "충청남도",
        "전라북도",
        "전라남도",
        "경상북도",
        "경상남도",
        "제주도"
      ],
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

      deadline: null
    };
  },

  computed: {
    filteredItems() {
      return this.autocompleteItems.filter(i => {
        return i.text.toLowerCase().indexOf(this.tag.toLowerCase()) !== -1;
      });
    },

    locationErrors() {
      const errors = [];
      if (!this.$v.location.$dirty) return errors;
      !this.$v.location.required && errors.push("지역을 선택해주세요.");
      return errors;
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
      this.location = null;
      this.tag = "";
      this.tags = [];
      this.deadline = null;
    },

    submit() {
      this.$v.$touch();
      console.log(this.project);
      if (this.$v.$invalid) {
        console.log("형식 불일치");
      } else {
        const project = {
          title: this.title,
          summary: this.summary,
          content: this.content,
          location: this.location,
          tag: this.tag,
          tags: this.tags,
          deadline: this.deadline
        };
        console.log("제출!!:", project);
      }
    },

    isPropsExist(props) {
      return typeof props !== "undefined";
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
