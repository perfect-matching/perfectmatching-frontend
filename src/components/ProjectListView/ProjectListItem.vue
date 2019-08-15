<template>
  <v-hover v-slot:default="{ hover }">
    <v-card class="project_card" :elevation="hover ? 5 : 1">
      <v-card-title primary-title>
        <div>
          <div class="deadline">1시간 전</div>
          <v-layout class="leader_info" align-center>
            <v-avatar :tile="false" :size="40" color="grey lighten-4">
              <img
                src="https://vuetifyjs.com/apple-touch-icon-180x180.png"
                alt="avatar"
              />
            </v-avatar>
            <div class="leader_name">우우우</div>
          </v-layout>

          <h3 class="headline mb-0">사이드 프로젝트 팀원 구하기</h3>
          <div class="create_date">2019년 02월 10일 까지 모집</div>
          <v-chip color="primary" text-color="white" class="status"
            >진행중</v-chip
          >
          <div class="summery">{{ card_text }}</div>
        </div>
      </v-card-title>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  data() {
    return {
      card_text:
        "Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, , ut putant invenire splendide mel, , ut putant invenire splendide mel, "
    };
  }
};
</script>

<style scoped>
.project_card {
  position: relative;
  max-width: 300px;
  border: 2px solid black;
}

.deadline {
  position: absolute;
  top: -10px;
  right: 5px;
  1text-align: right;
  background-color: #fff;
  padding: 0 3px 0 10px;
}

.leader_info {
  position: absolute;
  top: -20px;
  width: 120px; /* 닉네임 입력 최대 숫자가 정해지면 max-width로 설정할 것*/
  margin-bottom: 10px;
  padding-left: 5px;
  background-color: #fff;
}

.leader_name {
  margin-left: 10px;
}

.status {
  margin: 5px 0 10px 0;
  height: 28px;
}

.share_button {
  color: black;
}
</style>
