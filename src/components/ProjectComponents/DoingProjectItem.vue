<template>
  <v-hover>
    <v-card
      slot-scope="{ hover }"
      :class="`elevation-${hover ? 3 : 0}`"
      class="project_card mx-auto"
    >
      <v-layout class="project_leader_info" align-center text-align-left row>
        <v-avatar
          class="card_avatar"
          :tile="false"
          :size="45"
          color="grey lighten-4"
        >
          <img
            src="https://vuetifyjs.com/apple-touch-icon-180x180.png"
            alt="avatar"
          />
        </v-avatar>
        <div class="user_nick">{{ project.leaderNick }}</div>
        <v-spacer></v-spacer>
        <div class="create_date">{{ setDateFormat(project.createdDate) }}</div>
      </v-layout>
      <v-card-title class="card_title">{{ project.title }}</v-card-title>
      <v-chip
        class="status ma-2"
        :color="setChipColor(project.status)"
        text-color="white"
        >{{ project.status }}</v-chip
      >

      <v-card-text>{{ project.summary }}</v-card-text>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  },

  methods: {
    setDateFormat(date) {
      return this.$_moment(date).format("LL");
    },

    setChipColor(status) {
      const colors = {
        모집중: "primary",
        진행중: "green",
        완료: ""
      };

      return colors[status];
    }
  }
};
</script>

<style scoped>
.project_card {
  padding: 10px 10px 10px 10px;
  border: 1px solid #dbdbdb;
}
.project_leader_info {
  border-bottom: 1px solid #cfcfcf;
}

.card_avatar img {
  border: 7px solid #fff;
}

.user_nick {
  margin-left: 10px;
}

.create_date {
  margin-right: 10px;
  color: #9a9a9a;
}

.card_title {
  font-size: 23px;
  padding: 16px 16px 0 16px;
}

.status {
  margin: 0;
}
</style>
