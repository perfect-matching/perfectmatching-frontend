<template>
  <v-container fluid fill-height>
    <v-layout class="comment_list_container">
      <v-flex>
        <ul>
          <li>
            <comment-card></comment-card>
          </li>
          <li>
            <comment-card></comment-card>
          </li>
          <li>
            <comment-card></comment-card>
          </li>
          <li>
            <comment-card></comment-card>
          </li>
          <li>
            <comment-card></comment-card>
          </li>
          <li>
            <comment-card></comment-card>
          </li>
          <li>
            <comment-card></comment-card>
          </li>
          <li>
            <comment-card></comment-card>
          </li>
          <li>
            <comment-card></comment-card>
          </li>
        </ul>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import CommentCard from "./CommentCard.vue";
export default {
  components: {
    CommentCard
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}
.comment_list_container {
  border: 2px solid red;
  height: 100px;
}
</style>
