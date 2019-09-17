<template>
  <article>
    <v-container class="user_list_container">
      <h3>지원자 목록:</h3>

      <ul class="applicant_list">
        <li
          class="list_item"
          v-for="applicant in applicants"
          :key="applicant.memberIdx"
        >
          <applicants-list-item :member="applicant"></applicants-list-item>
        </li>
      </ul>
    </v-container>
  </article>
</template>

<script>
import ApplicantsListItem from "./ApplicantsListItem.vue";
export default {
  components: {
    ApplicantsListItem
  },

  props: {
    applicants: {
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

.applicant_list {
  max-width: 100%;
  margin: 10px;
}
</style>
