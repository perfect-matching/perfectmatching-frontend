<template>
  <v-hover>
    <v-card
      slot-scope="{ hover }"
      :class="`elevation-${hover ? 3 : 0}`"
      class="project_card mx-auto"
    >
      <v-layout class="project_leader_info" align-center text-align-left row>
        <v-avatar
          class="card_avatar"
          :tile="false"
          :size="45"
          color="grey lighten-4"
        >
          <img
            src="https://vuetifyjs.com/apple-touch-icon-180x180.png"
            alt="avatar"
          />
        </v-avatar>
        <div class="user_nick">jkljkl1793</div>
        <v-spacer></v-spacer>
        <div class="create_date">1년 전</div>
      </v-layout>
      <v-card-title class="card_title"
        >사이드 프로젝트 팀원 매칭 플랫폼</v-card-title
      >
      <v-chip class="status ma-2" color="red" text-color="white">진행중</v-chip>

      <v-card-text>
        우리는 이러이러한 요약정보를 가지고 있다우리는 이러이러한 요약정보를
        가지고 있다우리는 이러이러한 요약정보를 가지고 있다우리는 이러이러한
        요약정보를 가지고 있다우리는 이러이러한 요약정보를 가지고 있다
      </v-card-text>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  data() {
    return {
      card_text:
        "Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat."
    };
  }
};
</script>

<style scoped>
.project_card {
  padding: 10px 10px 10px 10px;
  border: 1px solid #dbdbdb;
}
.project_leader_info {
  border-bottom: 1px solid #cfcfcf;
}

.card_avatar img {
  border: 7px solid #fff;
}

.user_nick {
  margin-left: 10px;
}

.create_date {
  margin-right: 10px;
  color: #9a9a9a;
}

.card_title {
  font-size: 23px;
  padding: 16px 16px 0 16px;
}

.status {
  margin: 0;
}
</style>
