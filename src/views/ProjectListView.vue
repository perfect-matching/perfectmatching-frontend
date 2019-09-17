<template>
  <section class="project_list_section">
    <h2 class="section_title">프로젝트 리스트</h2>
    <v-layout>
      <v-flex xs12 sm4>
        <v-select
          class="select_menu"
          :items="locations"
          label="지역"
          v-model="location"
          value="value"
          @change="findLocationQuery"
        ></v-select>
      </v-flex>
      <v-flex xs12 sm4>
        <v-select
          class="select_menu"
          :items="positions"
          label="직군"
          v-model="position"
          value="value"
          @change="findLocationQuery"
        ></v-select>
      </v-flex>
    </v-layout>
    <project-list :projects="projects"></project-list>
    <infinite-loading
      :identifier="infiniteId"
      @infinite="infiniteHandler"
    ></infinite-loading>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import InfiniteLoading from "vue-infinite-loading";

import ProjectList from "../components/ProjectListView/ProjectList.vue";
export default {
  components: {
    ProjectList,
    InfiniteLoading
  },

  data() {
    return {
      location: "전체",
      position: "전체",
      locations: [
        "전체",
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
      positions: ["전체", "개발자", "디자이너", "기획자", "마케터", "기타"],
      infiniteId: +new Date()
    };
  },

  computed: {
    ...mapGetters({
      projects: "fetchedProjects"
    })
  },

  methods: {
    // 지역 쿼리를 영어로 넘기기로 하였음. 선택한 한글 지역 이름을 영어로 리턴하는 함수
    findLocationQuery() {
      const locations = {
        전체: "ALL",
        서울: "SEOUL",
        부산: "BUSAN",
        대구: "DAEGU",
        광주: "GWANGJU",
        대전: "DAEJEON",
        울산: "ULSAN",
        충청북도: "CHUNGCHEONGBUKDO",
        충청남도: "CHUNGCHEONGNAMDO",
        전라북도: "JEOLLABUKDO",
        전라남도: "JEOLLANAMDO",
        경상북도: "GYENONGSNAGBUKDO",
        경상남도: "GYENONGSANGNAMDO",
        제주도: "JEJUDO"
      };

      const positions = {
        전체: "ALL",
        개발자: "DEVELOPER",
        디자이너: "DESIGNER",
        마케터: "MARKETER",
        기획자: "PLANNER",
        기타: "ETC"
      };

      // position + location
      this.$store.dispatch("FETCH_PROJECTS_WITH_QURIES", {
        location: locations[this.location],
        position: positions[this.position]
      });

      // this.$store.dispatch("FETCH_PROJECTS_WITH_QURIES", {
      //   location: locations[this.location]
      // });

      this.infiniteId += 1;
    },

    nextProjects() {
      this.$store.dispatch("FETCH_NEXT_PROJECTS", {
        nextUrl: this.$store.state.projectModule.nextUrl
      });
    },

    infiniteHandler($state) {
      this.$store
        .dispatch("FETCH_NEXT_PROJECTS", {
          nextUrl: this.$store.state.projectModule.nextUrl
        })
        .then(() => {
          $state.loaded();
        })
        .catch(() => {
          $state.complete();
        });
    }
  }
};
</script>

<style scoped>
.section_title {
  display: none;
}
.next_btn {
  margin-bottom: 20px;
}

.select_menu {
  margin-left: 20px;
}
</style>
