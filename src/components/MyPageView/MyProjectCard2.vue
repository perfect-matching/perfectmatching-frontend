<template>
  <v-card class="project_card" to="manage/projects/1">
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
      aspect-ratio="2.75"
    ></v-img>

    <v-card-title primary-title class="card_container">
      <h3 class="headline mb-0">
        엄청나게 긴
        프로젝트명이야아앙아ㅇ아아아아아아앙아앙아아아아아아아아아아아아아아아아아ㅏ아ㅡ마르ㅏㅁㅇㄹ아아앙아일므ㅏㅣㅡㄷ지ㅏㅡㄹ마ㅣ르다짐라ㅣㄷㄹㅁ랃르자므림르ㅏㅏ
      </h3>
    </v-card-title>
    <div class="card_content gray--text">
      <div class="create_date">2019년 03월 21일</div>
      <v-chip class="status" small color="grey" text-color="white">마감</v-chip>
    </div>
  </v-card>
</template>

<script>
export default {};
</script>

<style scoped>
.project_card {
  width: 100%;
}
.card_container {
  width: 100%;
}
.headline {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.card_content {
  margin-right: 15px;
  text-align: right;
}
</style>
