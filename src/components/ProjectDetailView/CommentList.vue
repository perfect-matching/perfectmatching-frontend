<template>
  <v-container class="comment_container" fluid fill-height>
    <ul class="comment_list">
      <li class="list_item comment">
        <comment-card></comment-card>
      </li>
      <li class="list_item comment">
        <comment-card></comment-card>
      </li>
      <li class="list_item comment">
        <comment-card></comment-card>
      </li>
      <li class="list_item comment">
        <comment-card></comment-card>
      </li>
      <li class="list_item comment">
        <comment-card></comment-card>
      </li>
      <li class="list_item comment">
        <comment-card></comment-card>
      </li>
    </ul>
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
.comment_container {
  padding: 0;
}
.comment_list {
  width: 100%;
}
.list_item {
  margin-top: -1px;
  border-color: #b6b6b6;
  border-style: solid;
  border-width: 1px 0 1px 0;
}
</style>
