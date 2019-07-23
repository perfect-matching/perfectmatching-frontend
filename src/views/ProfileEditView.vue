<template>
  <section class="profile_edit_section">
    <h2>회원 정보 수정</h2>
    <my-photo></my-photo>
    <edit-form></edit-form>
  </section>
</template>

<script>
import MyPhoto from "../components/MyProfileEditView/MyPhoto.vue";
import EditForm from "../components/MyProfileEditView/EditForm.vue";

export default {
  components: {
    MyPhoto,
    EditForm
  }
};
</script>

<style scoped>
</style>
