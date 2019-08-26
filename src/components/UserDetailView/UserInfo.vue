<template>
  <v-container>
    <v-flex class="user_info" text-xs-center>
      <div>
        <v-avatar :tile="false" :size="170" color="purple lighten-4">
          <img
            src="https://vuetifyjs.com/apple-touch-icon-180x180.png"
            alt="avatar"
          />
        </v-avatar>
        <div class="user_nick">{{ userProfile.nickname }}</div>
      </div>
      <v-btn class="email_btn" icon>
        <v-icon>mail_outline</v-icon>
      </v-btn>

      <div class="introduce">
        <p>{{ userProfile.summary }}</p>
      </div>
      <article class="skill_group">
        <h3 class="article_title">스킬</h3>
        <v-chip v-for="skill in userSkills" :key="skill.text">{{
          skill.text
        }}</v-chip>
      </article>

      <div class="time">
        <v-subheader class="pl-0">투자 시간</v-subheader>
        <v-slider
          :value="userProfile.investTime"
          thumb-label="always"
          min="0"
          max="24"
          readonly
        ></v-slider>
        <div>
          저는 하루 중
          <span style="color:red;">{{ userProfile.investTime }}시간</span> 정도
          사이드 프로젝트에 투자하고 싶어요 :D
        </div>
      </div>

      <div class="social_url">{{ userProfile.socialUrl }}</div>
    </v-flex>
  </v-container>
</template>

<script>
export default {
  name: "userInfo",
  props: {
    userProfile: {
      type: Object,
      require: true
    },
    userSkills: {
      type: Array,
      require: false
    }
  }
};
</script>

<style scoped>
.user_info {
  max-width: 500px;
  margin: 0 auto;
}

.email_btn {
  margin: 0;
}

.introduce {
}
</style>
