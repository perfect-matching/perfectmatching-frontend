<template>
  <v-container>
    <v-flex class="my_page" text-xs-center>
      <article class="my_profile">
        <h3 class="article_title">프로필</h3>
        <v-avatar :tile="false" :size="170" color="black lighten-4">
          <img
            src="https://vuetifyjs.com/apple-touch-icon-180x180.png"
            alt="avatar"
          />
        </v-avatar>
        <div class="my_nick">후아 닉네임!</div>
        <div class="info_change_btn">
          <v-btn depressed small to="/my/edit">정보 수정</v-btn>
        </div>
        <article class="email">
          <h4>email</h4>

          <a href>
            <v-layout justify-center align-center>
              <v-icon>mail_outline</v-icon>
              <span>jkljkl17@naver.com</span>
            </v-layout>
          </a>
        </article>

        <article class="introduce">
          <h4 class="article_title">자기소개</h4>
          <p class="introduce_content">
            안녕하세요~~~ 저는 프론트엔드 개발자이고, vue.js 좋아해요
          </p>
        </article>
      </article>

      <article class="skill_group">
        <h3 class="article_title">스킬</h3>
        <v-chip v-for="tag in tags" :key="tag">{{ tag }}</v-chip>
      </article>

      <div class="time">
        <v-subheader class="pl-0">투자시간(?)</v-subheader>
        <v-slider
          v-model="time"
          thumb-label="always"
          min="0"
          max="24"
          readonly
        ></v-slider>
        <div>
          저는 하루 중
          <span style="color:red;">{{ time }}시간</span> 정도 사이드 프로젝트에
          투자하고 싶어요 :D
        </div>
      </div>
    </v-flex>
  </v-container>
</template>

<script>
export default {
  name: "userInfo",
  data: () => ({
    tags: [
      "Work",
      "Home Improvement",
      "Vacation",
      "Food",
      "Drawers",
      "Shopping",
      "Art",
      "Tech",
      "Creative Writing"
    ],
    time: 3
  }),

  methods: {}
};
</script>

<style scoped>
.my_page {
  max-width: 500px;
  margin: 0 auto;
}

.introduce_content {
  text-align: left;
}

.my_nick {
  font-size: 20px;
}

.email_btn {
  margin: 0;
}
</style>
