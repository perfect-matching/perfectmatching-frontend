<template>
  <v-card class="user_card mx-auto" flat>
    <v-card-title>
      <router-link :to="`/profile/${member.memberIdx}`">
        <v-layout align-center>
          <v-avatar :tile="false" :size="36" color="white lighten-4">
            <img :src="member.profileImage" alt="avatar" />
          </v-avatar>
          <div class="my_nick">{{ member.memberNick }}</div>
        </v-layout>
      </router-link>
      <v-spacer></v-spacer>
      <div class="create_date">하루 전</div>
    </v-card-title>
    <v-layout>
      <v-card-text class="content">{{ member.simpleProfile }}</v-card-text>
      <div class="position" v-if="member.position === '리더'">
        <div class="img_title">리더</div>
        <img
          class="position_img developer_img"
          src="../../assets/crown.svg"
          alt
        />
      </div>
      <div class="position" v-if="member.position === '개발자'">
        <div class="img_title">개발자</div>
        <img
          class="position_img developer_img"
          src="../../assets/monitor.svg"
          alt
        />
      </div>
      <div class="position" v-else-if="member.position === '디자이너'">
        <div class="img_title">디자이너</div>
        <img
          class="position_img designer_img"
          src="../../assets/paint-palette.svg"
          alt
        />
      </div>

      <div class="position" v-else-if="member.position === '기획자'">
        <div class="img_title">기획자</div>
        <img
          class="position_img planner_img"
          src="../../assets/workspace.svg"
          alt
        />
      </div>

      <div class="position" v-else-if="member.position === '마케터'">
        <div class="img_title">마케터</div>
        <img
          class="position_img developer_img"
          src="../../assets/megaphone.svg"
          alt
        />
      </div>

      <div class="position" v-else-if="member.position === '기타'">
        <div class="img_title">기타</div>
        <img
          class="position_img developer_img"
          src="../../assets/more.svg"
          alt
        />
      </div>
    </v-layout>

    <v-card-actions v-if="this.$route.name != 'applyProjectManage'">
      <v-spacer></v-spacer>
      <v-btn flat text @click="apply">수락</v-btn>
      <v-btn flat @click="decline">거절</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: {
    member: {
      type: Object,
      required: false
    }
  },

  methods: {
    apply() {
      this.$store.dispatch("CONFIRM_APPLICANT", {
        projectIdx: this.$route.params.idx,
        userIdx: this.member.memberIdx,
        status: "매칭"
      });
    },
    decline() {
      this.$store.dispatch("CONFIRM_APPLICANT", {
        projectIdx: this.$route.params.idx,
        userIdx: this.member.memberIdx,
        status: "거절"
      });
    }
  }
};
</script>

<style scoped>
a {
  color: black;
  text-decoration: none;
}
.my_nick {
  margin-left: 10px;
}
.create_date {
  color: #b6b6b6;
}
.content {
  padding: 0 16px;
  color: #898989;
}

.position {
  text-align: center;
  margin-right: 20px;
  width: 80px;
}

.position_img {
  width: 40px;
  height: 40px;
}
</style>
