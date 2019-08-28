<template>
  <section class="project_list_section">
    <h2 class="section_title">프로젝트 리스트</h2>
    <v-layout>
      <v-flex xs12 sm4>
        <v-select
          :items="locations"
          label="지역"
          v-model="location"
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
    <!-- <v-btn class="next_btn" block color="secondary" dark @click="nextProjects"
      >더 보기</v-btn
    >-->
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
      location: "",
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
      infiniteId: +new Date()
    };
  },

  computed: {
    ...mapGetters({
      projects: "fetchedProjects"
    })
  },

  created() {
    this.$store.dispatch("FETCH_PROJECTS");
  },

  methods: {
    // 지역 쿼리를 영어로 넘기기로 하였음. 선택한 한글 지역 이름을 영어로 리턴하는 함수
    findLocationQuery() {
      const locations = {
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

      this.$store.dispatch("FETCH_PROJECTS_WITH_QURIES", {
        location: locations[this.location]
      });

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
.next_btn {
  margin-bottom: 20px;
}
</style>
