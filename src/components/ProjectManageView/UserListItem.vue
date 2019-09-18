<template>
  <v-card class="user_card mx-auto" flat>
    <v-card-title>
      <v-avatar :tile="false" :size="36" color="white lighten-4">
        <img :src="member.profileImage" alt="avatar" />
      </v-avatar>
      <div class="my_nick">{{ member.memberNick }}</div>
      <v-spacer></v-spacer>
      <div class="create_date">하루 전</div>
    </v-card-title>
    <v-card-text class="content">{{ member.simpleProfile }}</v-card-text>
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
.my_nick {
  margin-left: 10px;
}
.create_date {
  color: #b6b6b6;
}
.content {
  padding: 10px 16px;
  color: #898989;
}
</style>
