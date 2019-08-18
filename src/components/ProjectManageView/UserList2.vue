<template>
  <article>
    <v-container class="user_list">
      <h3>지원자 목록:</h3>
      <v-layout wrap justify-center>
        <v-flex>
          <ul class="developer_list applicant_list">
            개발자
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
        </v-flex>
        <v-flex>
          <ul class="designer_list applicant_list">
            디자이너
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
        </v-flex>
        <v-flex>
          <ul class="planner_list applicant_list">
            기획자
            <li>
              <user-list-item></user-list-item>
            </li>
          </ul>
        </v-flex>
        <v-flex>
          <ul class="marketer_list applicant_list">
            마케터
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
        </v-flex>
      </v-layout>
    </v-container>
  </article>
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
  padding: 10px;
  list-style: none;
  background-color: #ebebed;
}

li {
  margin: 0;
  padding: 0;
  margin-bottom: 10px;
}

.applicant_list {
  max-width: 406px; /* 반응형 필요, 위 라인이 3개가 될 때 위의 라인과 크기가 일정하도록*/
  margin: 10px;
}
</style>
