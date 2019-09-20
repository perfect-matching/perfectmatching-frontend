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
    <v-select
      v-model="project.location"
      :items="locations"
      :error-messages="locationErrors"
      label="location"
      required
      @change="$v.project.location.$touch()"
      @blur="$v.project.location.$touch()"
      outline
    ></v-select>
    <v-textarea
      class="summary_input"
      height="70"
      v-model="project.summary"
      :error-messages="summaryErrors"
      :counter="100"
      label="Summary"
      placeholder="요약 내용을 입력해주세요"
      required
      @input="$v.project.summary.$touch()"
      @blur="$v.project.summary.$touch()"
      outline
    ></v-textarea>
    <v-switch v-model="detailSwitch" :label="`상세 내용 입력`"></v-switch>
    <tiptap-vuetify
      v-if="detailSwitch"
      class="content_textarea"
      v-model="project.content"
      :extensions="extensions"
      placeholder="상세 내용을 작성해주세요."
    />
    <!-- <v-textarea
      v-if="detailSwitch"
      v-model="project.content"
      :error-messages="contentErrors"
      :counter="5000"
      label="Content"
      placeholder="프로젝트 내용을 입력해주세요"
      @input="$v.project.content.$touch()"
      @blur="$v.project.content.$touch()"
      outline
    ></v-textarea>-->
    <v-text-field
      outline
      v-model="project.socialUrl"
      label="소셜 URL"
      :error-messages="socialUrlErrors"
      :counter="100"
      @input="$v.project.socialUrl.$touch()"
      @blur="$v.project.socialUrl.$touch()"
    ></v-text-field>
    <vue-tags-input
      class="tag_input"
      v-model="tag"
      :tags="project.tags"
      @tags-changed="newTags => (project.tags = newTags)"
      :autocomplete-items="filteredItems"
      placeholder="사용할 기술 스택을 입력해주세요."
      add-only-from-autocomplete
    />
    <v-layout
      >필요 직군( 단위: 명 ) 전체 인원:{{ watchTotalRecruits }}</v-layout
    >
    <div
      class="recruits_error"
      v-if="!$v.watchTotalRecruits.watchTotalRecruitsErrors"
      style="color:red;"
    >
      {{ watchTotalRecruitsErrors[0] }}
    </div>

    <v-layout wrap>
      <v-flex>
        <v-text-field
          class="job_input"
          label="개발자"
          v-model="project.developerRecruits"
          type="number"
          min="0"
          placeholder="0"
          onkeydown="return event.keyCode !== 69"
          oninput="validity.valid||(value='')"
          @input="$v.watchTotalRecruits.$touch()"
          @blur="$v.watchTotalRecruits.$touch()"
          outline
        ></v-text-field>
      </v-flex>

      <v-flex>
        <v-text-field
          class="job_input"
          label="디자이너"
          v-model="project.designerRecruits"
          type="number"
          min="0"
          placeholder="0"
          onkeydown="return event.keyCode !== 69"
          oninput="validity.valid||(value='')"
          @input="$v.watchTotalRecruits.$touch()"
          @blur="$v.watchTotalRecruits.$touch()"
          outline
        ></v-text-field>
      </v-flex>

      <v-flex>
        <v-text-field
          class="job_input"
          label="기획자"
          type="number"
          min="0"
          placeholder="0"
          v-model="project.plannerRecruits"
          onkeydown="return event.keyCode !== 69"
          oninput="validity.valid||(value='')"
          @input="$v.watchTotalRecruits.$touch()"
          @blur="$v.watchTotalRecruits.$touch()"
          outline
        ></v-text-field>
      </v-flex>

      <v-flex>
        <v-text-field
          class="job_input"
          label="마케터"
          type="number"
          min="0"
          placeholder="0"
          v-model="project.marketerRecruits"
          onkeydown="return event.keyCode !== 69"
          oninput="validity.valid||(value='')"
          @input="$v.watchTotalRecruits.$touch()"
          @blur="$v.watchTotalRecruits.$touch()"
          outline
        ></v-text-field>
      </v-flex>

      <v-flex>
        <v-text-field
          class="job_input"
          label="기타"
          type="number"
          min="0"
          placeholder="0"
          v-model="project.etcRecruits"
          onkeydown="return event.keyCode !== 69"
          oninput="validity.valid||(value='')"
          @input="$v.watchTotalRecruits.$touch()"
          @blur="$v.watchTotalRecruits.$touch()"
          outline
        ></v-text-field>
      </v-flex>
    </v-layout>

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
import {
  TiptapVuetify,
  Heading,
  Bold,
  Italic,
  Strike,
  Underline,
  Code,
  CodeBlock,
  Paragraph,
  BulletList,
  OrderedList,
  ListItem,
  Link,
  Blockquote,
  HardBreak,
  HorizontalRule,
  History
} from "tiptap-vuetify";
import {
  required,
  maxLength,
  minValue,
  helpers
} from "vuelidate/lib/validators";

export default {
  props: {
    project: {
      type: Object,
      required: false
    }
  },

  components: {
    VueTagsInput,
    TiptapVuetify
  },

  mixins: [validationMixin],

  validations: {
    project: {
      title: { required, maxLength: maxLength(255) },
      summary: { required, maxLength: maxLength(100) },
      content: { maxLength: maxLength(5000) },
      location: { required },
      socialUrl: { maxLength: maxLength(100) }
    },
    watchTotalRecruits: { minValue: minValue(1) }
  },

  created() {
    this.$store.dispatch("FETCH_PROJECT_TAGS");
  },

  data() {
    return {
      extensions: [
        new Heading({
          levels: [1, 2, 3]
        }),
        new Bold(),
        new Italic(),
        new Strike(),
        new Underline(),
        new Code(),
        new CodeBlock(),
        new Paragraph(),
        new BulletList(),
        new OrderedList(),
        new ListItem(),
        new Link(),
        new Blockquote(),
        new HardBreak(),
        new HorizontalRule(),
        new History()
      ],
      detailSwitch: false,
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
      tag: ""
    };
  },

  computed: {
    watchTotalRecruits() {
      const developerRecruits =
        parseInt(this.project.developerRecruits, 10) || 0;
      const designerRecruits = parseInt(this.project.designerRecruits, 10) || 0;
      const plannerRecruits = parseInt(this.project.plannerRecruits, 10) || 0;
      const marketerRecruits = parseInt(this.project.marketerRecruits, 10) || 0;
      const etcRecruits = parseInt(this.project.etcRecruits, 10) || 0;

      const sum =
        developerRecruits +
        designerRecruits +
        plannerRecruits +
        marketerRecruits +
        etcRecruits;

      return sum;
    },

    ...mapGetters({
      autocompleteItems: "fetchedTags"
    }),

    filteredItems() {
      return this.autocompleteItems.filter(i => {
        return i.text.toLowerCase().indexOf(this.tag.toLowerCase()) !== -1;
      });
    },

    locationErrors() {
      const errors = [];
      if (!this.$v.project.location.$dirty) return errors;
      !this.$v.project.location.required && errors.push("지역을 선택해주세요.");
      return errors;
    },

    titleErrors() {
      const errors = [];
      if (!this.$v.project.title.$dirty) return errors;

      !this.$v.project.title.maxLength &&
        errors.push("프로젝트 명은 반드시 255자 이내이어야 합니다.");

      !this.$v.project.title.required &&
        errors.push("프로젝트 명은 반드시 입력해주세요.");
      return errors;
    },

    summaryErrors() {
      const errors = [];
      if (!this.$v.project.summary.$dirty) return errors;

      !this.$v.project.summary.maxLength &&
        errors.push("요약은 반드시 100자 이내이어야 합니다.");

      !this.$v.project.summary.required &&
        errors.push("요약 정보를 반드시 입력해주세요.");

      return errors;
    },

    contentErrors() {
      const errors = [];
      if (!this.$v.project.content.$dirty) return errors;

      !this.$v.project.content.maxLength &&
        errors.push("내용은 반드시 5000자 이내이어야 합니다.");

      return errors;
    },

    socialUrlErrors() {
      const errors = [];
      if (!this.$v.project.socialUrl.$dirty) return errors;

      !this.$v.project.socialUrl.maxLength &&
        errors.push("URL은 반드시 100자 이내이어야 합니다.");

      return errors;
    },

    watchTotalRecruitsErrors() {
      const errors = [];
      if (!this.$v.watchTotalRecruits.$dirty) return errors;

      !this.$v.watchTotalRecruits.minValue &&
        errors.push("최소 1명 이상의 팀원이 있어야 합니다.");

      return errors;
    }
  },

  methods: {
    clearDatas() {
      this.project.title = "";
      this.project.summary = "";
      this.project.content = "";
      this.project.location = null;
      this.project.socialUrl = "";
      this.project.developerRecruits = 0;
      this.project.designerRecruits = 0;
      this.project.plannerRecruits = 0;
      this.project.marketerRecruits = 0;
      this.project.etcRecruits = 0;
      this.project.tag = "";
      this.project.tags = [];
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

        console.log(this.project.socialUrl);

        const project = {
          title: this.project.title,
          location: this.project.location,
          summary: this.project.summary,
          content: this.project.content,
          developerRecruits: parseInt(this.project.developerRecruits, 10) || 0,
          designerRecruits: parseInt(this.project.designerRecruits, 10) || 0,
          plannerRecruits: parseInt(this.project.plannerRecruits, 10) || 0,
          marketerRecruits: parseInt(this.project.marketerRecruits, 10) || 0,
          etcRecruits: parseInt(this.project.etcRecruits, 10) || 0,
          socialUrl: this.project.socialUrl,
          tags: this.project.tags
        };

        const routeName = this.$route.name;
        if (routeName == "NewProjectView") {
          this.$store
            .dispatch("POST_NEW_PROJECT", { postProject: project })
            .then(() => {
              this.$_swal.fire(
                "프로젝트 개설 완료!",
                "프로젝트가 개설되었습니다. :D",
                "success"
              );
              this.$router.push("/projects");
            });
        } else if (routeName == "editProject") {
          this.$store
            .dispatch("PUT_PROJECT", {
              projectIdx: this.project.projectIdx,
              putProject: project
            })
            .then(() => {
              this.$_swal.fire(
                "프로젝트 수정 완료!",
                "프로젝트가 수정되었습니다. :D",
                "success"
              );
              this.$router.push(`/my/leading/${this.project.projectIdx}`);
            });
        }
      }
    },

    isPropsExist(props) {
      return typeof props !== "undefined";
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

<style>
.form_container {
  padding: 25px;
}
.tag_input {
  max-width: 100% !important;
  margin-bottom: 20px;
}

.job_input {
  max-width: 130px;
}

.content_textarea {
  margin-bottom: 20px;
}

.tiptap-vuetify-editor__content {
  height: 400px;
}
</style>
