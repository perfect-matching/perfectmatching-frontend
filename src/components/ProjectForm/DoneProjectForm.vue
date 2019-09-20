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

    <!-- 시작 날짜 -->
    <v-menu
      ref="startMenu"
      v-model="startMenu"
      :close-on-content-click="false"
      :nudge-right="40"
      :return-value.sync="project.startDate"
      lazy
      transition="scale-transition"
      offset-y
      full-width
      min-width="290px"
    >
      <template v-slot:activator="{ on }">
        <v-text-field
          v-model="project.startDate"
          label="프로젝트 시작 날짜"
          :error-messages="startDateErrors"
          prepend-icon="event"
          readonly
          v-on="on"
          @input="$v.project.startDate.$touch()"
          @blur="$v.project.startDate.$touch()"
        ></v-text-field>
      </template>
      <v-date-picker v-model="project.startDate" no-title scrollable>
        <v-spacer></v-spacer>
        <v-btn flat color="primary" @click="startMenu = false">Cancel</v-btn>
        <v-btn flat color="primary" @click="$refs.startMenu.save(project.startDate)">OK</v-btn>
      </v-date-picker>
    </v-menu>

    <!-- 종료 날짜 -->
    <v-menu
      ref="endMenu"
      v-model="endMenu"
      :close-on-content-click="false"
      :nudge-right="40"
      :return-value.sync="project.endDate"
      lazy
      transition="scale-transition"
      offset-y
      full-width
      min-width="290px"
    >
      <template v-slot:activator="{ on }">
        <v-text-field
          v-model="project.endDate"
          label="프로젝트 종료 날짜"
          prepend-icon="event"
          :error-messages="endDateErrors"
          readonly
          v-on="on"
          @input="$v.project.endDate.$touch()"
          @blur="$v.project.endDate.$touch()"
        ></v-text-field>
      </template>
      <v-date-picker v-model="project.endDate" no-title scrollable>
        <v-spacer></v-spacer>
        <v-btn flat color="primary" @click="endMenu = false">Cancel</v-btn>
        <v-btn flat color="primary" @click="$refs.endMenu.save(project.endDate)">OK</v-btn>
      </v-date-picker>
    </v-menu>

    <v-layout>
      <v-spacer></v-spacer>
      <v-btn flat @click="submit">submit</v-btn>
      <v-btn flat @click="clear">clear</v-btn>
    </v-layout>
  </form>
</template>
<script>
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
    VueTagsInput
  },

  mixins: [validationMixin],

  validations: {
    project: {
      title: { required, maxLength: maxLength(255) },
      summary: { required, maxLength: maxLength(100) },
      content: { required, maxLength: maxLength(5000) },
      socialUrl: { maxLength: maxLength(100) },
      startDate: { required },
      endDate: { required }
    }
  },

  data() {
    return {
      tag: "",
      startMenu: false,
      endMenu: false
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

    startDateErrors() {
      const errors = [];
      if (!this.$v.project.startDate.$dirty) return errors;

      !this.$v.project.startDate.required &&
        errors.push("프로젝트 시작 날짜를 반드시 입력해주세요.");

      return errors;
    },
    endDateErrors() {
      const errors = [];
      if (!this.$v.project.endDate.$dirty) return errors;

      !this.$v.project.endDate.required &&
        errors.push("프로젝트 종료 날짜를 반드시 입력해주세요.");

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
        var re = new RegExp("^(http|https)://", "i");
        if (!re.test(this.project.socialUrl)) {
          this.project.socialUrl = "http://" + this.project.socialUrl;
        }

        const doneProject = {
          title: this.project.title,
          summary: this.project.summary,
          content: this.project.content,
          socialUrl: this.project.socialUrl,
          startDate: this.$_moment(this.project.startDate).format(
            "YYYY-MM-DDTHH:mm:ss"
          ),
          endDate: this.$_moment(this.project.endDate).format(
            "YYYY-MM-DDTHH:mm:ss"
          ),
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

          this.$_swal.fire(
            "수정 완료",
            "프로젝트가 수정되었습니다.",
            "success"
          );

          this.$router.push("/my/projects");
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
