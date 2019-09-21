<template>
  <div class="prject_info" grow>
    <div class="detail_header" justify-center>
      <h3 class="project_title">{{ project.title }}</h3>
      <v-layout class="project_status_container" align-center justify-center>
        <v-chip
          class="status"
          :color="setChipColor(project.status)"
          text-color="white"
          >{{ project.status }}</v-chip
        >
      </v-layout>
    </div>
    <v-layout class="sub_header">
      <div class="location">지역: {{ project.location }}</div>
      <v-spacer></v-spacer>
      <div class="createdate">
        <span class="createdate_title">프로젝트 개설일:</span>
        {{ setDateFormat(project.createDate) }}
      </div>
    </v-layout>

    <div class="detail_body">
      <div class="project_content" v-html="project.content"></div>
      <div class="summary_container">
        <div class="require_skill">
          <h4>요구 기술</h4>
          <v-chip v-for="tag in project.tags" :key="tag.text">
            {{ tag.text }}
          </v-chip>
        </div>
        <div class="project_summary">
          <h4 class="summary_title">요약</h4>
          <div class="summary_content">{{ project.summary }}</div>
        </div>

        <div class="positions">
          <h4>모집 직군</h4>
          <div class="position_group">
            <div class="position_item">
              <strong>개발자:</strong>
              {{ project.currentDeveloper }}/{{ project.developerRecruits }}
            </div>
            <div class="position_item">
              <strong>디자이너:</strong>
              {{ project.currentDesigner }}/{{ project.designerRecruits }}
            </div>

            <div class="position_item">
              <strong>기획자:</strong>
              {{ project.currentPlanner }}/{{ project.plannerRecruits }}
            </div>
            <div class="position_item">
              <strong>마케터:</strong>
              {{ project.currentMarketer }}/{{ project.marketerRecruits }}
            </div>
            <div class="position_item">
              <strong>기타:</strong>
              {{ project.currentEtc }}/{{ project.etcRecruits }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="leader_info">
      <div>팀장</div>
      <router-link :to="`/profile/${project.leaderIdx}`">
        <v-avatar :tile="false" :size="56" color="grey lighten-4">
          <img :src="project.profileImage" alt="avatar" />
        </v-avatar>
      </router-link>

      <div>{{ project.leader }}</div>

      <v-btn icon>
        <v-icon>mail_outline</v-icon>
      </v-btn>

      <v-btn
        v-if="
          project.leaderIdx !== this.$store.state.myModule.myProfile.userIdx &&
            project.status !== '완료'
        "
        class="apply_btn"
        block
        color="secondary"
        dark
        :to="`/projects/${project.projectIdx}/application`"
        >지원 하기</v-btn
      >
      <v-btn
        v-if="
          project.leaderIdx !== this.$store.state.myModule.myProfile.userIdx &&
            project.status === '완료'
        "
        class="apply_btn"
        block
        color="secondary"
        dark
        disable
        >이미 완료된 프로젝트입니다.</v-btn
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  },

  methods: {
    setDateFormat(date) {
      return this.$_moment(date).format("ll");
    },
    setChipColor(status) {
      const colors = {
        모집중: "primary",
        진행중: "green",
        완료: ""
      };

      return colors[status];
    }
  }
};
</script>

<style scoped>
img {
  max-width: 100%;
  height: auto;
}
.project_dtail_container {
  width: 100%;
}
.detail_header {
  position: relative;
  text-align: center;
  margin: 0px 0px 3px 0px; /* 모바일 때 좌우 마진을 20px씩 추가하기*/
  padding: 10px;
  border: 3px solid black;
}

.summary_container {
  background-color: #fff;
  padding: 20px;
  border: 1px solid #dbdbdb;
  margin-bottom: 15px;
}

.summary_container h4 {
  font-size: 17px;
}

.detail_body {
  padding: 32px 40px 40px 40px;
}

.project_content {
  background-color: #fff;
  padding: 20px;
  border: 1px solid #dbdbdb;
  margin-bottom: 15px;
}
/* .detail_header::after {
  position: absolute;
  left: 10%;

  background-color: #fafafa;
  content: "";
  display: inline-block;
  width: 80%;
  height: 15px;
} */

.proejct_detail {
  padding: 0 7px;
}
.project_summary {
  margin: 20px auto;
}

.summary_title {
  1font-size: 20px;
}

.summary_content {
  font-size: 17px;
}

.project_status_container {
  position: absolute;
  top: 75%;
  right: 45%;
  1margin: 100px 0 10px 0;
}

.status {
  font-weight: bold;
  height: 28px;
}

.project_title {
  font-size: 30px;
}

.planned_date {
  margin-bottom: 10px;
}

.prject_info {
  1margin-right: 5px;
}

.leader_info {
  width: 100%;
  text-align: center;
}

.require_skill {
  1text-align: center;
  margin-bottom: 20px;
}

.createdate {
  text-align: right;
}

.position_group {
  display: flex;
}

.position_item {
  1text-align: center;
  margin: 0 10px;
}
/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575px) {
  .createdate_title {
    display: none;
  }
  .sub_header {
    margin: 0 8px;
  }
  .detail_body {
    padding: 10px;
  }

  .position_group {
    display: block;
  }

  .project_status_container {
    top: 85%;
  }
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767px) {
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991px) {
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199px) {
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
}
</style>
