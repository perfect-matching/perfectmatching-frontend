<template>
  <section class="project_list_section">
    <h2 class="section_title">프로젝트 리스트</h2>
    <v-layout>
      <v-flex xs12 sm4>
        <drop-down
          :title="'지역'"
          :items="locations"
          v-model="location"
          @input="findLocationQuery"
        ></drop-down>
      </v-flex>
      <!-- <v-flex xs12 sm4>
        <drop-down :title="'직군'"></drop-down>
      </v-flex>-->
    </v-layout>
    <project-list :projects="projects"></project-list>
    <v-btn class="next_btn" block color="secondary" dark @click="nextProjects"
      >더 보기</v-btn
    >
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import DropDown from "../components/ProjectListView/DropDown.vue";
import ProjectList from "../components/ProjectListView/ProjectList.vue";
export default {
  components: {
    DropDown,
    ProjectList
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
      ]
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
      const locations = [
        { kor: "서울", eng: "SEOUL" },
        { kor: "부산", eng: "BUSAN" },
        { kor: "대구", eng: "DAEGU" },
        { kor: "광주", eng: "GWANGJU" },
        { kor: "대전", eng: "DAEJEON" },
        { kor: "울산", eng: "ULSAN" },
        { kor: "충청북도", eng: "CHUNGCHEONGBUKDO" },
        { kor: "충청남도", eng: "CHUNGCHEONGNAMDO" },
        { kor: "전라북도", eng: "JEOLLABUKDO" },
        { kor: "전라남도", eng: "JEOLLANAMDO" },
        { kor: "경상북도", eng: "GYENONGSNAGBUKDO" },
        { kor: "경상남도", eng: "GYENONGSANGNAMDO" },
        { kor: "제주도", eng: "JEJUDO" }
      ];

      const selectedLocation = locations.find(
        location => location.kor === this.location
      );

      this.$store.dispatch("FETCH_PROJECTS_WITH_QURIES", {
        location: selectedLocation.eng
      });
    },

    nextProjects() {
      this.$store.dispatch("FETCH_NEXT_PROJECTS", {
        nextUrl: this.$store.state.projectModule.nextUrl
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
