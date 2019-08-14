<template>
  <div class="prject_info" grow>
    <v-layout class="project_status_container" align-center justify-center>
      <v-chip class="status" color="primary" text-color="white">진행중</v-chip>
      <div class="create_date">2019.02.03 - 2019.03.02</div>
    </v-layout>
    <div class="detail_header" justify-center>
      <h3 class="project_title">사이드 프로젝트 팀원 플랫폼 팀원 구해요</h3>
      <v-layout class="proejct_detail" justify-center>
        부산광역시 &nbsp;|&nbsp; 모집 마감일: 2019년 01월 01일 &nbsp;|&nbsp;
        개발자:3 디자이너:3 기획자:3 마케터:3 기타:0
      </v-layout>
    </div>

    <div class="project_content">
      <h4>우리는~~</h4>
      <strong>룰루랄라</strong>
      <br />
      <img src="../../assets/test.jpg" alt="테스트 이미지" />
      <p>우리는 이런 프로젝트야~~</p>
      <p>우리는 이런 프로젝트야~~</p>
      <p>우리는 이런 프로젝트야~~</p>
      <p>우리는 이런 프로젝트야~~</p>
      <p>우리는 이런 프로젝트야~~</p>
      <p>우리는 이런 프로젝트야~~</p>
      <p>우리는 이런 프로젝트야~~</p>
      <p>우리는 이런 프로젝트야~~</p>
      <p>우리는 이런 프로젝트야~~</p>
      <p>우리는 이런 프로젝트야~~</p>
      <p>우리는 이런 프로젝트야~~</p>
      <p>우리는 이런 프로젝트야~~</p>
      <p>우리는 이런 프로젝트야~~</p>
      <p>우리는 이런 프로젝트야~~</p>
      <p>우리는 이런 프로젝트야~~</p>
      <p>우리는 이런 프로젝트야~~</p>
      <p>우리는 이런 프로젝트야~~</p>
      <p>우리는 이런 프로젝트야~~</p>
      <p>우리는 이런 프로젝트야~~</p>
      <p>우리는 이런 프로젝트야~~</p>
      <p>우리는 이런 프로젝트야~~</p>
      <p>우리는 이런 프로젝트야~~</p>
      <p>우리는 이런 프로젝트야~~</p>
      <p>우리는 이런 프로젝트야~~</p>
      <p>우리는 이런 프로젝트야~~</p>
      <p>우리는 이런 프로젝트야~~</p>
      <p>우리는 이런 프로젝트야~~</p>
      <p>우리는 이런 프로젝트야~~</p>
      <p>우리는 이런 프로젝트야~~</p>
      <p>우리는 이런 프로젝트야~~</p>
      <p>우리는 이런 프로젝트야~~</p>
      <p>우리는 이런 프로젝트야~~</p>
      <p>우리는 이런 프로젝트야~~</p>
      <p>우리는 이런 프로젝트야~~</p>
      <p>우리는 이런 프로젝트야~~</p>
    </div>
    <div class="leader_info">
      <div>팀장</div>
      <router-link to="/users/1">
        <v-avatar :tile="false" :size="56" color="grey lighten-4">
          <img src="https://vuetifyjs.com/apple-touch-icon-180x180.png" alt="avatar" />
        </v-avatar>
      </router-link>

      <div>nick_name</div>

      <v-btn icon>
        <v-icon>mail_outline</v-icon>
      </v-btn>

      <v-btn class="apply_btn" block color="secondary" dark to="/projects/:id/application">지원 하기</v-btn>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
img {
  max-width: 100%;
  height: auto;
}
.project_dtail_container {
  width: 100%;
}
.detail_header {
  position: relative;
  text-align: center;
  margin: 0px 0px 70px 0px; /* 모바일 때 좌우 마진을 20px씩 추가하기*/
  padding: 10px;
  border: 3px solid black;
}
.detail_header::after {
  position: absolute;
  left: 10%;

  background-color: #fff;
  content: "";
  display: inline-block;
  width: 80%;
  height: 15px;
  1border: 1px solid red;
}
/* .detail_header {
  text-align: center;
  padding: 100px 0 70px 0;
  border-bottom: 1px solid #b6b6b6;
} */

.proejct_detail {
  padding: 0 7px;
}

.project_content {
  padding: 40px 18px;
}

.project_status_container {
  margin: 100px 0 10px 0;
}

.status {
  height: 28px;
}

.project_title {
  font-size: 30px;
}

.planned_date {
  margin-bottom: 10px;
}

.prject_info {
  1margin-right: 5px;
}

.leader_info {
  width: 100%;
  text-align: center;
}
</style>
