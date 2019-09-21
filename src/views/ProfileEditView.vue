<template>
  <section class="profile_edit_section">
    <v-card>
      <h2 class="section_title">회원 정보 수정</h2>
      <my-photo :profileImage="myProfile.profileImage"></my-photo>
      <edit-form :myProfile="myProfile"></edit-form>
    </v-card>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import MyPhoto from "../components/UserForm/MyPhoto.vue";
import EditForm from "../components/UserForm/EditForm.vue";

export default {
  components: {
    MyPhoto,
    EditForm
  },

  computed: {
    ...mapGetters({
      myProfile: "fetchedMyProfile",
      mySkills: "fetchedMySkills"
    })
  },

  created() {
    this.$store.dispatch("GET_MY_PROFILE");
    this.$store.dispatch("GET_MY_SKILLS_BY_IDX");
  }
};
</script>

<style scoped>
.profile_edit_section {
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
