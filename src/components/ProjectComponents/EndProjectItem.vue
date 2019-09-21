<template>
  <v-container class="project_detail_container">
    <v-card flat class="project_card">
      <div class="project_title">{{ project.title }}</div>
      <div class="project_date">
        {{ setDateFormat(project.startDate) }} -
        {{ setDateFormat(project.endDate) }}
      </div>
      <div class="project_summery">
        <div class="summery_title content_title">요약내용</div>
        <p>{{ project.summary }}}</p>
      </div>

      <div class="require_skill">
        <div class="skill_title content_title" v-if="project.tags.length !== 0">
          기술 스택
        </div>
        <v-chip v-for="skill in project.tags" :key="skill.idx">{{
          skill.text
        }}</v-chip>
      </div>

      <div class="github">
        <div class="github_title content_title" v-if="!!project.socialUrl">
          깃허브 저장소
        </div>
        <a :href="project.socialUrl">{{ project.socialUrl }}</a>
      </div>
      <br />

      <div class="project_detail">
        <div class="detail_title content_title">상세설명</div>
        <div v-html="project.content"></div>
      </div>

      <v-layout wrap v-if="this.$route.name == 'myProjects'">
        <v-spacer></v-spacer>
        <v-btn depressed color="grey" @click="remove">프로젝트 삭제</v-btn>
        <v-btn
          depressed
          color="grey"
          :to="`/my/done/${project.doneProjectIdx}/edit`"
          >프로젝트 수정</v-btn
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

    remove() {
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
              "프로젝트가 삭제되었습니다.",
              "success"
            );
            this.$store.dispatch("DELETE_DONE_PROJECT", {
              doneProjectIdx: this.project.doneProjectIdx,
              userIdx: this.project.userIdx
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
  border: 1px solid #dbdbdb;
}

.project_title {
  font-weight: bold;
  font-size: 30px;
}

.project_date {
  color: grey;
  margin-bottom: 20px;
}

.project_summery {
  color: #898989;
}

.content_title {
  font-weight: 600;
  font-size: 16px;
  color: black;
}

.require_skill {
  margin-bottom: 10px;
}

.v-chip {
  margin: 5px 5px 5px 0;
}
</style>
