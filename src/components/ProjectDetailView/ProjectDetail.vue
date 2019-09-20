<template>
  <div class="prject_info" grow>
    <v-layout class="project_status_container" align-center justify-center>
      <v-chip class="status" color="primary" text-color="white">
        {{ project.status }}
      </v-chip>
    </v-layout>
    <div class="detail_header" justify-center>
      <h3 class="project_title">{{ project.title }}</h3>
      <v-layout class="proejct_detail" justify-center>
        {{ project.location }} &nbsp;|&nbsp; 프로젝트 개설일:
        {{ setDateFormat(project.createDate) }}
        &nbsp;|&nbsp; 개발자 :{{ project.currentDeveloper }}/{{
          project.developerRecruits
        }}
        디자이너:{{ project.currentDesigner }}/{{
          project.designerRecruits
        }}
        기획자:{{ project.currentPlanner }}/{{
          project.plannerRecruits
        }}
        마케터:{{ project.currentMarketer }}/{{
          project.marketerRecruits
        }}
        기타:{{ project.currentEtc }}/{{ project.etcRecruits }}
      </v-layout>
    </div>
    <div class="project_summary">{{ project.summary }}</div>
    <div class="project_content">{{ project.content }}</div>
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
          project.leaderIdx !== this.$store.state.myModule.myProfile.userIdx
        "
        class="apply_btn"
        block
        color="secondary"
        dark
        :to="`/projects/${project.projectIdx}/application`"
        >지원 하기</v-btn
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
  margin: 0px 0px 70px 0px; /* 모바일 때 좌우 마진을 20px씩 추가하기*/
  padding: 10px;
  border: 3px solid black;
}
.detail_header::after {
  position: absolute;
  left: 10%;

  background-color: #fafafa;
  content: "";
  display: inline-block;
  width: 80%;
  height: 15px;
}

.proejct_detail {
  padding: 0 7px;
}

.project_content,
.project_summary {
  padding: 40px 18px;
}

.project_status_container {
  margin: 100px 0 10px 0;
}

.status {
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
</style>
