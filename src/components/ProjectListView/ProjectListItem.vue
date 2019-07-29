<template>
  <v-hover>
    <v-card
      slot-scope="{ hover }"
      :class="`elevation-${hover ? 12 : 2}`"
      class="project_card"
    >
      <!-- <v-img
          src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
          aspect-ratio="2.75"
      ></v-img>-->
      <v-layout class="project_leader_info" align-center row>
        <v-flex>
          <v-avatar
            class="card_avatar"
            :tile="false"
            :size="70"
            color="grey lighten-4"
          >
            <img
              src="https://vuetifyjs.com/apple-touch-icon-180x180.png"
              alt="avatar"
            />
          </v-avatar>
        </v-flex>
        <v-flex class="user_nick">권영근 jkljkl1793</v-flex>
      </v-layout>

      <v-card-title class="project_info" primary-title>
        <h3 class="project_info_item headline mb-0">Kangaroo Valley Safari</h3>
        <div class="project_info_item">
          <div class="project_date project_info_item">2019년 02월 20일</div>
          <v-chip
            class="status project_info_item"
            small
            color="grey"
            text-color="white"
            >마감</v-chip
          >
        </div>
        <div class="project_info_item proejct_summery">
          <p>{{ card_text }}</p>
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
        "Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat."
    };
  }
};
</script>

<style scoped>
h3 {
  margin: 10px 0;
}
.project_card {
  max-width: 350px;
  position: relative;
  margin: 0 auto;
}

.project_leader_info {
  position: absolute;
  top: 20px;
  left: -30px;
}

.card_avatar img {
  border: 7px solid #fff;
}

.project_info {
  padding-top: 100px;
}

.project_info_item {
  margin-bottom: 10px;
}

.user_nick {
  margin-left: 5px;
}

.status {
  margin: 0;
}

.proejct_summery {
}
</style>
