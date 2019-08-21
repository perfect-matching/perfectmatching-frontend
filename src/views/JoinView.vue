<template>
  <section class="join_section">
    <v-card>
      <h2 class="section_title">회원가입</h2>
      <join-form></join-form>
    </v-card>
  </section>
</template>

<script>
import JoinForm from "../components/JoinView/JoinForm.vue";
export default {
  components: { JoinForm }
};
</script>

<style scoped>
.join_section {
  margin: 0 auto;
  padding: 20px 0 50px 0;
  max-width: 800px;
}

.v-card {
  padding: 25px;
}

.section_title {
  margin-bottom: 20px;
}
</style>
