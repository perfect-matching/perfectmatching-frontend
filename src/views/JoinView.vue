<template>
  <section class="join_section">
    <v-card>
      <h2 class="section_title">회원가입</h2>
      <my-photo></my-photo>
      <edit-form></edit-form>
    </v-card>
  </section>
</template>

<script>
import MyPhoto from "../components/UserForm/MyPhoto.vue";
import EditForm from "../components/UserForm/EditForm.vue";
export default {
  components: { MyPhoto, EditForm }
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
