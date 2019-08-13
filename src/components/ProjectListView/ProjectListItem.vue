<template>
  <v-card class="project_card">
    <v-card-title primary-title>
      <div>
        <div class="leader_info">
          <v-avatar :tile="false" :size="56" color="grey lighten-4">
            <img
              src="https://vuetifyjs.com/apple-touch-icon-180x180.png"
              alt="avatar"
            />
          </v-avatar>
          <div class="leader_name">우우우</div>
        </div>

        <h3 class="headline mb-0">프로젝트 타이틀</h3>
        <v-chip color="primary" text-color="white" class="status"
          >진행중</v-chip
        >
        <div>{{ card_text }}</div>
      </div>
    </v-card-title>
  </v-card>
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
  max-width: 300px;
}

.leader_info {
}

.status {
  height: 28px;
}

.share_button {
  color: black;
}
</style>
