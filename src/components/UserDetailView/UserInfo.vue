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
        <div class="info_change_btn">
          <v-btn
            depressed
            small
            to="/my/edit"
            v-if="this.$route.name === 'myPage'"
            >정보 수정</v-btn
          >
        </div>
      </div>
      <article class="user_article email">
        <v-btn class="email_btn" icon>
          <v-icon>mail_outline</v-icon>
        </v-btn>
        <br />
        {{ userProfile.email }}
      </article>

      <article class="user_article introduce">
        <h3>소개</h3>
        <p>{{ userProfile.summary }}</p>
      </article>
      <article v-if="userSkills.length !== 0" class="user_article skill_group">
        <h3 class="article_title">스킬</h3>
        <v-chip v-for="skill in userSkills" :key="skill.text">{{
          skill.text
        }}</v-chip>
      </article>

      <article class="user_article time">
        <h3>투자 시간</h3>
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
      </article>

      <article
        v-if="userProfile.socialUrl !== null"
        class="user_article social_url"
      >
        <h3>소셜 URL</h3>
        {{ userProfile.socialUrl }}
      </article>
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

.user_article {
  margin-bottom: 30px;
}
</style>
