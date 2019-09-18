<template>
  <v-container class="project_detail_container">
    <v-card flat class="project_card">
      <v-chip class="status" color="green" text-color="white">{{
        project.status
      }}</v-chip>
      <div class="project_title">{{ project.title }}</div>
      <div class="deadline">{{ setDateFormat(project.createdDate) }} 개설</div>
      <div class="require_skill">
        <v-chip v-for="tag in project.tags" :key="tag.idx">
          {{ tag.text }}
        </v-chip>
      </div>
      <div class="project_content">
        <p>{{ project.summary }}</p>
        <p>{{ project.content }}</p>
      </div>

      <v-layout wrap>
        <div
          class="leading_project_btns"
          v-if="this.$route.name === 'leadingProjectManage'"
        >
          <v-btn depressed color="grey" @click="remove">프로젝트 삭제</v-btn>
          <v-btn
            depressed
            color="grey"
            :to="`/my/projects/${project.projectIdx}/edit`"
            >프로젝트 수정</v-btn
          >
          <v-btn
            v-if="project.status === '모집중'"
            depressed
            color="grey"
            @click="changeStatus"
            >프로젝트 진행하기</v-btn
          >
          <v-btn
            v-else-if="project.status === '진행중'"
            depressed
            color="grey"
            :to="`/my/projects/${project.projectIdx}/done`"
            >프로젝트 완료</v-btn
          >
        </div>

        <v-spacer></v-spacer>
        <v-btn
          depressed
          color="grey"
          v-if="this.$route.name === 'doingProjectManage'"
          >지원 취소</v-btn
        >
      </v-layout>
    </v-card>
  </v-container>
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

    changeStatus() {
      this.$store.dispatch("CHANGE_PROJECT_STATUS", {
        projectIdx: this.project.projectIdx,
        status: "progress"
      });
    },

    remove() {
      this.$_swal
        .fire({
          title: "삭제하시겠습니까?",
          text: "한번 삭제한 프로젝트는 다시 복구 할 수 없습니다.",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "삭제"
        })
        .then(result => {
          if (result.value) {
            this.$_swal.fire(
              "삭제 완료",
              "프로젝트가 삭제되었습니다.",
              "success"
            );
            this.$store
              .dispatch("DELETE_PROJECT", {
                projectIdx: this.project.projectIdx
              })
              .then(() => {
                this.$router.push("/my/projects");
              });
          }
        });
    }
  }
};
</script>

<style scoped>
.project_card {
  padding: 20px;
}

.project_title {
  font-weight: bold;
  font-size: 30px;
}

.deadline {
  margin-bottom: 20px;
}

.project_content {
  color: #898989;
}

.require_skill {
  margin-bottom: 10px;
}
</style>
