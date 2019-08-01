<template>
  <v-container>
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
        v-model="content"
        :error-messages="contentErrors"
        :counter="500"
        label="Content"
        placeholder="프로젝트 내용을 입력해주세요"
        required
        @input="$v.content.$touch()"
        @blur="$v.content.$touch()"
        outline
      ></v-textarea>
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

      <v-layout>
        <date-picker
          v-model="startDate"
          :labelName="'프로젝트 시작일'"
          :error-messages="startDateErrors"
        ></date-picker>
        <date-picker
          v-model="endDate"
          :labelName="'프로젝트 종료일'"
          :error-messages="endDateErrors"
        ></date-picker>
      </v-layout>
      <!-- <position-check :labelName="'개발자'"></position-check> 타입을 number로 해도 문자를 받아버림 -->

      <v-layout>
        <v-flex>
          <v-select
            v-model="developer"
            :items="numbers"
            :error-messages="positionErrors"
            label="개발자"
            required
            @change="$v.checkbox.$touch()"
            @blur="$v.checkbox.$touch()"
            outline
          ></v-select>
        </v-flex>
        <v-flex>
          <v-select
            v-model="designer"
            :items="numbers"
            :error-messages="positionErrors"
            label="디자이너"
            required
            @change="$v.checkbox.$touch()"
            @blur="$v.checkbox.$touch()"
            outline
          ></v-select>
        </v-flex>
        <v-flex>
          <v-select
            v-model="planner"
            :items="numbers"
            :error-messages="positionErrors"
            label="기획자"
            required
            @change="$v.checkbox.$touch()"
            @blur="$v.checkbox.$touch()"
            outline
          ></v-select>
        </v-flex>
        <v-flex>
          <v-select
            v-model="marketer"
            :items="numbers"
            :error-messages="positionErrors"
            label="마케터"
            required
            @change="$v.checkbox.$touch()"
            @blur="$v.checkbox.$touch()"
            outline
          ></v-select>
        </v-flex>
      </v-layout>
      <date-picker
        v-model="deadline"
        :labelName="'팀원 모집 마감일'"
        :error-messages="deadlineErrors"
      ></date-picker>
      <v-btn @click="submit">submit</v-btn>
      <v-btn @click="clear">clear</v-btn>
    </form>
  </v-container>
</template>
<script>
import DatePicker from "./DatePicker.vue";
// import PositionCheck from "./PositionCheck.vue";
import { validationMixin } from "vuelidate";
import { required, maxLength } from "vuelidate/lib/validators";

export default {
  components: {
    DatePicker
    // PositionCheck
  },
  mixins: [validationMixin],

  validations: {
    title: { required, maxLength: maxLength(20) },
    content: { required, maxLength: maxLength(500) },
    location: { required },
    // developer: {
    //   checked(val) {
    //     return val;
    //   }
    // },
    // designer: {
    //   checked(val) {
    //     return val;
    //   }
    // },
    // planner: {
    //   checked(val) {
    //     return val;
    //   }
    // },
    // marketer: {
    //   checked(val) {
    //     return val;
    //   }
    // },
    checkbox: {
      checked(val) {
        return val;
      }
    },

    startDate: {
      required,
      minValue: value => value > new Date().toISOString(),
      maxValue: (value, endDate) => value < endDate
    },

    endDate: {
      required,
      minValue: (value, startDate) => value > startDate
    },

    deadline: {
      required,
      minValue: value => value > new Date().toISOString(),
      maxValue: (value, startDate) => value < startDate
    }
  },

  data: () => ({
    title: "",
    content: "",
    email: "",
    location: null,
    locations: ["지역 1", "지역 2", "지역 3", "지역 4"],
    startDate: null,
    endDate: null,
    deadline: null,
    numbers: [0, 1, 2, 3, 4, 5],
    developer: false,
    designer: false,
    planner: false,
    marketer: false,
    checkbox: false
  }),

  computed: {
    checkboxErrors() {
      const errors = [];
      if (!this.$v.checkbox.$dirty) return errors;
      !this.$v.checkbox.checked && errors.push("You must agree to continue!");
      return errors;
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

    contentErrors() {
      const errors = [];
      if (!this.$v.content.$dirty) return errors;

      !this.$v.content.maxLength &&
        errors.push("내용은 반드시 500자 이내이어야 합니다.");

      !this.$v.content.required &&
        errors.push("프로젝트 내용을 반드시 입력해주세요.");

      return errors;
    },

    startDateErrors() {
      const errors = [];
      if (!this.$v.startDate.$dirty) return errors;

      !this.$v.startDate.minValue &&
        errors.push("오늘 이후의 날짜를 선택해주세요.");

      !this.$v.startDate.maxValue &&
        errors.push("프로젝트 종료일 이전 날짜를 선택해주세요.");

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

      !this.$v.deadline.maxValue &&
        errors.push("프로젝트 시작일 이전 날짜를 선택해주세요.");

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

<style scoped></style>
