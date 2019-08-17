<template>
  <v-hover v-slot:default="{ hover }">
    <v-card class="project_card" :elevation="hover ? 5 : 1">
      <v-card-title primary-title>
        <div>
          <div class="deadline">{{ setFromNow(project.createdDate) }}</div>
          <v-layout class="leader_info" align-center>
            <v-avatar :tile="false" :size="40" color="grey lighten-4">
              <img
                src="https://vuetifyjs.com/apple-touch-icon-180x180.png"
                alt="avatar"
              />
            </v-avatar>
            <div class="leader_name">{{ project.leader }}</div>
          </v-layout>
          <div class="card_content">
            <h3 class="headline mb-0">{{ project.title }}</h3>
            <div class="create_date">
              {{ setLLFormat(project.deadline) }} 까지 모집
            </div>
            <v-chip color="primary" text-color="white" class="status">{{
              project.status
            }}</v-chip>
            <div class="summery">{{ project.summary }}</div>
          </div>
        </div>
      </v-card-title>
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

  methods: {
    setLLFormat(date) {
      return this.$_moment(date).format("LL");
    },
    setFromNow(date) {
      return this.$_moment(date).fromNow();
    }
  }
};
</script>

<style scoped>
.project_card {
  position: relative;
  max-width: 410px;
  border: 2px solid black;
}

.headline {
  margin-top: 17px;
}

.deadline {
  position: absolute;
  top: -10px;
  right: 5px;
  background-color: #fff;
  padding: 0 3px 0 10px;
}

.leader_info {
  position: absolute;
  top: -20px;
  width: 135px; /* 닉네임 입력 최대 숫자가 정해지면 max-width로 설정할 것*/
  margin-bottom: 10px;
  padding-left: 5px;
  background-color: #fff;
}

.leader_name {
  margin-left: 10px;
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
</style>
