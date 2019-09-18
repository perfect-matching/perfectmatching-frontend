<template>
  <v-hover v-slot:default="{ hover }">
    <v-card class="project_card" flat :elevation="hover ? 3 : 0">
      <div class="deadline">{{ setFromNow(project.createdDate) }}</div>
      <v-layout class="leader_info" justify-center align-center>
        <v-avatar :tile="false" :size="40" color="grey lighten-4">
          <img
            src="https://vuetifyjs.com/apple-touch-icon-180x180.png"
            alt="avatar"
          />
        </v-avatar>
        <div class="leader_name">{{ project.leader }}</div>
      </v-layout>

      <v-card-title class="headline justify-center">
        {{ project.title }}
      </v-card-title>
      <v-chip
        class="status"
        :color="setChipColor(project.status)"
        text-color="white"
        >{{ project.status }}</v-chip
      >
      <div class="location">{{ project.location }}</div>
      <!-- <div class="create_date">
        {{ setLLFormat(project.deadline) }} 까지 모집
      </div>-->
      <v-card-text>{{ project.summary }}</v-card-text>
      <div class="require_skill">
        <v-chip v-for="tag in project.tags" :key="tag.text">
          {{ tag.text }}
        </v-chip>
      </div>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      require: true
    }
  },
  data: () => ({
    tags: [
      "Work",
      "Home Improvement",
      "Vacation",
      "Food",
      "Drawers",
      "Shopping",
      "Art",
      "Tech",
      "Creative Writing"
    ]
  }),

  methods: {
    setLLFormat(date) {
      return this.$_moment(date).format("LL");
    },
    setFromNow(date) {
      return this.$_moment(date).fromNow();
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
  position: relative;
  width: 410px;
  min-height: 439px;
  overflow-y: auto;
  border: 1px solid #dbdbdb;
}

.headline {
  padding-bottom: 0;
  font-weight: bold;
}

.deadline {
  top: -15px;

  background-color: #fafafa;
  padding: 0 3px 0 10px;
}

.leader_info {
  padding-top: 20px;
}

.leader_name {
  margin-left: 10px;
}

.location {
  font-weight: bold;
  color: #9a9a9a;
}

.create_date {
  color: #9a9a9a;
}

.card_content {
  text-align: left;
}

.status {
  margin: 5px 0 10px 0;
  height: 28px;
}

.summery {
  margin-top: 40px;
}

.require_skill {
  padding: 0 20px 20px 20px;
}
</style>
