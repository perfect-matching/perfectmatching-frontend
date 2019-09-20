<template>
  <v-hover v-slot:default="{ hover }">
    <v-card class="project_card" flat :elevation="hover ? 3 : 0">
      <div class="deadline">{{ setFromNow(project.createdDate) }}</div>
      <v-layout class="leader_info" justify-center align-center>
        <v-avatar :tile="false" :size="40" color="grey lighten-4">
          <img :src="project.profileImage" alt="avatar" />
        </v-avatar>
        <div class="leader_name">{{ project.leader }}</div>
      </v-layout>

      <v-card-title class="headline justify-center">{{
        project.title
      }}</v-card-title>
      <v-chip
        class="status"
        :color="setChipColor(project.status)"
        text-color="white"
        >{{ project.status }}</v-chip
      >
      <div class="location">{{ project.location }}</div>

      <v-card-text>{{ project.summary }}</v-card-text>
      <div class="require_skill">
        <v-chip v-for="tag in project.tags" :key="tag.text">{{
          tag.text
        }}</v-chip>
      </div>
      <div class="position_group_title">구해요!</div>
      <v-layout class="need_positions" justify-center>
        <div class="position" v-if="project.developerRecruits">
          <div class="img_title">개발자</div>
          <img
            class="position_img developer_img"
            src="../../assets/monitor.svg"
            alt
          />
        </div>

        <div class="position" v-if="project.designerRecruits">
          <div class="img_title">디자이너</div>
          <img
            class="position_img designer_img"
            src="../../assets/paint-palette.svg"
            alt
          />
        </div>

        <div class="position" v-if="project.plannerRecruits">
          <div class="img_title">기획자</div>
          <img
            class="position_img planner_img"
            src="../../assets/workspace.svg"
            alt
          />
        </div>

        <div class="position" v-if="project.marketerRecruits">
          <div class="img_title">마케터</div>
          <img
            class="position_img developer_img"
            src="../../assets/megaphone.svg"
            alt
          />
        </div>

        <div class="position" v-if="project.etcRecruits">
          <div class="img_title">기타</div>
          <img
            class="position_img developer_img"
            src="../../assets/more.svg"
            alt
          />
        </div>
      </v-layout>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      require: true
    }
  },
  data: () => ({}),

  methods: {
    setLLFormat(date) {
      return this.$_moment(date).format("LL");
    },
    setFromNow(date) {
      return this.$_moment(date).fromNow();
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
.project_card {
  position: relative;
  width: 410px;
  min-height: 500px;

  padding-bottom: 20px;
  overflow-y: auto;
  border: 1px solid #dbdbdb;
}

.headline {
  padding-bottom: 0;
  font-weight: bold;
}

.deadline {
  top: -15px;
  background-color: #fafafa;
  padding: 0 3px 0 10px;
}

.leader_info {
  padding-top: 20px;
}

.leader_name {
  margin-left: 10px;
}

.location {
  font-weight: bold;
  color: #9a9a9a;
}

.create_date {
  color: #9a9a9a;
}

.card_content {
  text-align: left;
}

.status {
  margin: 5px 0 10px 0;
  height: 28px;
}

.summery {
  margin-top: 40px;
}

.require_skill {
  padding: 0 20px 20px 20px;
}

.position {
  margin: 5px;
}

.position_group_title {
  font-weight: bold;
}
.position_img {
  width: 40px;
  height: 40px;
  margin: 0 3px;
}

/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575px) {
  .project_card {
    max-width: 310px;
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
