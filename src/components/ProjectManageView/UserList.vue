<template>
  <article>
    <v-container class="user_list_container">
      <h3>참여자 목록:</h3>

      <ul class="applicant_list">
        <div class="no_members" v-if="members.length === 0">
          현재 참여자가 없습니다.
        </div>
        <li class="list_item" v-for="member in members" :key="member.memberIdx">
          <user-list-item :member="member"></user-list-item>
        </li>
      </ul>
    </v-container>
  </article>
</template>

<script>
import UserListItem from "./UserListItem.vue";
export default {
  components: {
    UserListItem
  },

  props: {
    members: {
      type: Array,
      required: false
    }
  }
};
</script>

<style scoped>
ul {
  margin: 0;
  padding: 10px 0;
  list-style: none;
  background-color: #ebebed;
}

.list_item {
  margin-top: -1px;
  border-color: #b6b6b6;
  border-style: solid;
  border-width: 1px 0 1px 0;
}

.no_members {
  text-align: center;
}

.applicant_list {
  max-width: 100%;
  margin: 10px;
}
</style>
