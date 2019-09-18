<template>
  <v-card class="user_card mx-auto" flat>
    <v-card-title>
      <router-link :to="`/profile/${member.memberIdx}`">
        <v-layout align-center>
          <v-avatar :tile="false" :size="36" color="black lighten-4">
            <img
              src="https://vuetifyjs.com/apple-touch-icon-180x180.png"
              alt="avatar"
            />
          </v-avatar>
          <div class="my_nick">{{ member.memberNick }}</div>
        </v-layout>
      </router-link>
      <v-spacer></v-spacer>
      <div class="create_date">하루 전</div>
    </v-card-title>
    <v-card-text class="content">{{ member.simpleProfile }}</v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn flat text @click="apply">수락</v-btn>
      <v-btn flat @click="decline">거절</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: {
    member: {
      type: Object,
      required: false
    }
  },

  methods: {
    apply() {
      this.$store.dispatch("CONFIRM_APPLICANT", {
        projectIdx: this.$route.params.idx,
        userIdx: this.member.memberIdx,
        status: "매칭"
      });
    },
    decline() {
      this.$store.dispatch("CONFIRM_APPLICANT", {
        projectIdx: this.$route.params.idx,
        userIdx: this.member.memberIdx,
        status: "거절"
      });
    }
  }
};
</script>

<style scoped>
a {
  color: black;
  text-decoration: none;
}
.my_nick {
  margin-left: 10px;
}
.create_date {
  color: #b6b6b6;
}
.content {
  padding: 0 16px;
  color: #898989;
}
</style>
