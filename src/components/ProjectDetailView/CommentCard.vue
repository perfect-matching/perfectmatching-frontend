<template>
  <v-card class="comment_card mx-auto" color="#fff" flat>
    <v-card-text v-if="!showUpdate" class="headline font-weight-bold">{{ comment.content }}</v-card-text>
    <v-textarea v-if="showUpdate" class="update_textarea" outline v-model="updatedContent"></v-textarea>
    <v-card-actions
      class="handle_button"
      v-if="comment.userIdx === this.$store.state.myModule.myProfile.userIdx"
    >
      <!-- 수정 폼 등장시 사용하는 버튼 그룹-->
      <v-layout class="submit_button_container" v-if="showUpdate">
        <v-spacer></v-spacer>
        <div class="mr-2">
          <v-btn depressed small @click="submit">작성 완료</v-btn>
        </div>
        <div class="mr-2">
          <v-btn depressed small @click="showUpdate = !showUpdate">취소</v-btn>
        </div>
      </v-layout>

      <!-- 글 수정, 삭제 버튼 그룹-->
      <v-layout class="handle_button_container" v-if="!showUpdate">
        <v-spacer></v-spacer>
        <div class="mr-2">
          <v-btn depressed small @click="showUpdate = !showUpdate">수정</v-btn>
        </div>
        <div class="mr-2">
          <v-btn depressed small @click="deleteComment">삭제</v-btn>
        </div>
      </v-layout>
    </v-card-actions>
    <v-card-actions>
      <v-list-tile class="grow">
        <v-list-tile-avatar color="white darken-3">
          <v-btn icon :to="`/profile/${comment.userIdx}`">
            <v-avatar :tile="false" :size="36">
              <img :src="comment.profileImageURL" alt="avatar" />
            </v-avatar>
          </v-btn>
        </v-list-tile-avatar>

        <v-list-tile-content>
          <router-link icon :to="`/profile/${comment.userIdx}`">
            <v-list-tile-title class="nick_name">
              {{
              comment.userName
              }}
            </v-list-tile-title>
          </router-link>
        </v-list-tile-content>
        <v-layout align-center justify-end>
          <span class="create_date subheading mr-2">
            {{
            setDateFormat(comment.createdDate)
            }}
          </span>
        </v-layout>
      </v-list-tile>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "commentCard",
  props: {
    comment: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      showUpdate: false,
      updatedContent: this.comment.content
    };
  },

  methods: {
    setDateFormat(date) {
      return this.$_moment(date).format("ll");
    },

    deleteComment() {
      this.$_swal
        .fire({
          title: "삭제 하시겠습니까?",
          text: "삭제하시면 다시 되돌릴 수 없습니다.",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "삭제"
        })
        .then(result => {
          if (result.value) {
            this.$_swal.fire(
              "삭제되었습니다!",
              "댓글이 삭제되었습니다.",
              "success"
            );
            this.$store.dispatch("DELETE_COMMENT", {
              idx: this.comment.commentIdx
            });
          }
        });
    },

    submit() {
      this.$store
        .dispatch("PUT_COMMENT_ON_PROJECT", {
          commentIdx: this.comment.commentIdx,
          content: this.updatedContent,
          projectIdx: this.$route.params.idx
        })
        .then(() => {
          this.showUpdate = false;
        });
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.headline {
  color: #898989;
  font-size: 17px !important;
}

.nick_name {
  color: #232323;
}

.create_date {
  color: #b6b6b6;
}

.update_textarea {
  margin: 10px 15px;
}
</style>
