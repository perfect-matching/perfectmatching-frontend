<template>
  <section class="join_section">
    <v-card>
      <h2 class="section_title">회원가입</h2>
      <edit-form :myProfile="myProfile"></edit-form>
    </v-card>
  </section>
</template>

<script>
import EditForm from "../components/UserForm/EditForm.vue";
export default {
  components: { EditForm },

  data() {
    return {
      myProfile: {
        nickname: "",
        email: "",
        password: "",
        summary: "",
        socialUrl: "",
        tags: [],
        investTime: 12
      }
    };
  }
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
