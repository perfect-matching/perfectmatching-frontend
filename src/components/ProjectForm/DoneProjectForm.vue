<template>
  <form>
    <v-text-field
      v-model="project.title"
      :error-messages="titleErrors"
      :counter="255"
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
      :counter="100"
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
      placeholder="사용한 기술스택을 입력해주세요."
      add-only-from-autocomplete
    />

    <v-textarea
      class="content_input"
      v-model="project.content"
      :error-messages="contentErrors"
      :counter="5000"
      label="Content"
      placeholder="프로젝트 내용을 입력해주세요"
      @input="$v.project.content.$touch()"
      @blur="$v.project.content.$touch()"
      outline
    ></v-textarea>

    <v-text-field
      outline
      v-model="project.socialUrl"
      label="소셜 URL"
      :error-messages="socialUrlErrors"
      :counter="100"
      placeholder="https://github.com/project"
      @input="$v.project.socialUrl.$touch()"
      @blur="$v.project.socialUrl.$touch()"
    ></v-text-field>

    <date-picker
      v-model="project.startDate"
      :date="project.startDate"
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
import { mapGetters } from "vuex";
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
      title: { required, maxLength: maxLength(255) },
      summary: { required, maxLength: maxLength(100) },
      content: { required, maxLength: maxLength(5000) },
      socialUrl: { maxLength: maxLength(100) }
    }
  },

  data() {
    return {
      tag: ""
    };
  },

  created() {
    this.$store.dispatch("FETCH_PROJECT_TAGS");
  },

  computed: {
    ...mapGetters({
      autocompleteItems: "fetchedTags"
    }),

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

    socialUrlErrors() {
      const errors = [];
      if (!this.$v.project.socialUrl.$dirty) return errors;

      !this.$v.project.socialUrl.maxLength &&
        errors.push("URL은 반드시 100자 이내이어야 합니다.");

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
      this.project.socialUrl = "";
      this.project.startDate = "";
      this.project.endDate = "";
    },

    submit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        console.log("형식 불일치");
      } else {
        // const socialUrlTemp = this.project.socialUrl;
        // if (
        //   socialUrlTemp.indexOf("http://") !== 0 ||
        //   socialUrlTemp.indexOf("https://") !== 0
        // ) {
        //   this.project.socialUrl = "http://" + this.project.socialUrl;
        // }

        var re = new RegExp("^(http|https)://", "i");
        if (!re.test(this.project.socialUrl)) {
          this.project.socialUrl = "http://" + this.project.socialUrl;
        }

        const doneProject = {
          title: this.project.title,
          summary: this.project.summary,
          content: this.project.content,
          socialUrl: this.project.socialUrl,
          startDate: this.project.startDate,
          endDate: this.project.endDate,
          tags: this.project.tags
        };

        const routeName = this.$route.name;
        if (routeName == "newDoneProject") {
          this.$store
            .dispatch("POST_DONE_PROJECT", { doneProject })
            .then(() => {
              this.$_swal.fire(
                "추가 완료",
                "프로젝트가 추가되었습니다.",
                "success"
              );
              this.$router.push("/my/projects");
            });
        } else if (routeName == "editDoneProject") {
          this.$store.dispatch("PUT_DONE_PROJECT", {
            doneProjectIdx: this.project.doneProjectIdx,
            doneProject
          });
        } else if (routeName == "doneProjectStateChange") {
          this.$store
            .dispatch("POST_DONE_PROJECT", { doneProject })
            .then(() => {
              this.$store.dispatch("CHANGE_PROJECT_STATUS", {
                projectIdx: this.project.projectIdx,
                status: "COMPLETE"
              });

              this.$_swal.fire(
                "프로젝트 완료",
                "프로젝트가 완료되었습니다.",
                "success"
              );

              this.$router.push("/my/projects");
            });
        }
      }
    },

    clear() {
      this.$_swal
        .fire({
          title: "초기화 하시겠습니까?",
          text: "작성한 내용이 전부 빈칸으로 처리됩니다.",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "초기화"
        })
        .then(result => {
          if (result.value) {
            this.$_swal.fire("초기화 완료", "내용이 지워졌습니다.", "success");

            this.$v.$reset();
            this.clearDatas();
          }
        });
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
