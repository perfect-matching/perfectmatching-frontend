<template>
  <v-container class="application_form_container">
    <form>
      <v-radio-group
        v-model="position"
        label="신청 직군"
        :mandatory="true"
        :error-messages="positionErrors"
      >
        <v-layout class="position_group">
          <v-radio label="개발자" value="DEVELOPER" v-if="developerAvailable"></v-radio>
          <v-radio label="디자이너" value="DESIGNER" v-if="designerAvailable"></v-radio>
          <v-radio label="마케터" value="MARKETER" checked="checked" v-if="marketerAvailable"></v-radio>
          <v-radio label="기획자" value="PLANNER" v-if="plannerAvailable"></v-radio>
          <v-radio label="기타" value="ETC" v-if="etcAvailable"></v-radio>
        </v-layout>
      </v-radio-group>
      <v-textarea
        outline
        name="주최자에게 하고 싶은 말"
        label="주최자에게 하고 싶은 말"
        v-model="content"
        :error-messages="contentErrors"
        :counter="500"
        placeholder="주최자에게 하고 싶은 말을 전하세요. 기술스택이나 궁금한 점도 좋아요 :)"
        @input="$v.content.$touch()"
        @blur="$v.content.$touch()"
      ></v-textarea>
      <v-btn @click="submit">지원하기</v-btn>
      <v-btn @click="clear">취소</v-btn>
    </form>
  </v-container>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength } from "vuelidate/lib/validators";

export default {
  props: {
    project: {
      type: Object
    }
  },

  mixins: [validationMixin],

  validations: {
    content: { required, maxLength: maxLength(500) },
    position: {
      required
    }
  },

  data() {
    return {
      position: "",
      content: "",
      developerAvailable: this.checkAvailable(
        this.project.developerRecruits,
        this.project.currentDeveloper
      ),
      designerAvailable: this.checkAvailable(
        this.project.designerRecruits,
        this.project.currentDesigner
      ),
      plannerAvailable: this.checkAvailable(
        this.project.plannerRecruits,
        this.project.currentPlanner
      ),
      marketerAvailable: this.checkAvailable(
        this.project.marketerRecruits,
        this.project.currentMarketer
      ),
      etcAvailable: this.checkAvailable(
        this.project.etcRecruits,
        this.project.currentEtc
      )
    };
  },

  computed: {
    contentErrors() {
      const errors = [];
      if (!this.$v.content.$dirty) return errors;

      !this.$v.content.maxLength &&
        errors.push("내용은 반드시 500자 이내이어야 합니다.");

      !this.$v.content.required && errors.push("내용을 반드시 입력해주세요.");

      return errors;
    },

    positionErrors() {
      const errors = [];

      if (!this.$v.position.$dirty) return errors;

      !this.$v.position.required && errors.push("직군을 반드시 선택해주세요.");

      return errors;
    }
  },

  methods: {
    checkAvailable(recruits, current) {
      return !!(recruits - current);
    },

    clearDatas() {
      this.content = "";
    },

    submit() {
      this.$v.$touch();

      if (this.$v.$invalid) {
        console.log("형식 불일치");
      } else {
        const projectIdx = this.$route.params.idx;

        this.$store.dispatch("APPLY_TO_PROJECT", {
          projectIdx,
          position: this.position,
          simpleProfile: this.content
        });
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
.position_group {
  margin: 0 auto;
  text-align: center;
}
</style>
