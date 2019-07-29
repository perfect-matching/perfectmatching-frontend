<template>
  <v-container class="user_list"
    >지원자 목록:
    <ul class="user_list">
      <li>
        <user-list-item></user-list-item>
      </li>
      <li>
        <user-list-item></user-list-item>
      </li>
      <li>
        <user-list-item></user-list-item>
      </li>
      <li>
        <user-list-item></user-list-item>
      </li>
      <li>
        <user-list-item></user-list-item>
      </li>
      <li>
        <user-list-item></user-list-item>
      </li>
    </ul>
  </v-container>
</template>

<script>
import UserListItem from "./UserListItem.vue";
export default {
  components: {
    UserListItem
  }
};
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

li {
  margin: 0;
  padding: 0;
  margin-bottom: 10px;
}
</style>
