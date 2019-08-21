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
        <div class="user_nick">user nick name</div>
      </div>
      <v-btn class="email_btn" icon>
        <v-icon>mail_outline</v-icon>
      </v-btn>

      <div class="introduce">
        <p>안녕하세요~~~ 전 스프링부트를 주로 다루고 있어요~</p>
      </div>
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
  })
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
