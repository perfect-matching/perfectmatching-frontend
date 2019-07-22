<template>
  <v-container class="project_list_container">
    <v-layout>
      <v-flex xs12 sm4>
        <drop-down :title="'지역'"></drop-down>
      </v-flex>
      <v-flex xs12 sm4>
        <drop-down :title="'직군'"></drop-down>
      </v-flex>
    </v-layout>
    <v-layout class="info_bar">
      <v-flex>주최자</v-flex>
      <v-flex xs5>프로젝트 명</v-flex>
      <v-flex xs2>모집 마감일</v-flex>
      <v-flex xs2>모집 공고일</v-flex>
      <v-flex xs1>상태</v-flex>
    </v-layout>
    <v-layout>
      <v-flex>
        <ul class="project_list">
          <li class="list_item">
            <project-list-item></project-list-item>
          </li>
          <li class="list_item">
            <project-list-item></project-list-item>
          </li>
          <li class="list_item">
            <project-list-item></project-list-item>
          </li>
          <li class="list_item">
            <project-list-item></project-list-item>
          </li>
          <li class="list_item">
            <project-list-item></project-list-item>
          </li>
          <li class="list_item">
            <project-list-item></project-list-item>
          </li>
          <li class="list_item">
            <project-list-item></project-list-item>
          </li>
          <li class="list_item">
            <project-list-item></project-list-item>
          </li>
          <li class="list_item">
            <project-list-item></project-list-item>
          </li>
          <li class="list_item">
            <project-list-item></project-list-item>
          </li>
          <li class="list_item">
            <project-list-item></project-list-item>
          </li>
          <li class="list_item">
            <project-list-item></project-list-item>
          </li>
        </ul>
        <v-btn block color="secondary" dark>더 보기</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import DropDown from "./DropDown.vue";
import ProjectListItem from "./ProjectListItem.vue";
export default {
  components: {
    DropDown,
    ProjectListItem
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}

.info_bar {
  text-align: center;
}
.list_item {
  margin-bottom: 5px;
}
</style>
