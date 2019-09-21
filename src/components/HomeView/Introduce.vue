<template>
  <div>
    <div class="title_container">
      <h1 class="main_title">PERFECT MATCHING</h1>
      <p class="sub_title">더 쉬운 사이드 프로젝트 매칭</p>
    </div>
    <div class="description_container" style="max-width:800px">
      <div class="main_description">
        <h3>
          퍼펙트 매칭은 자신이 하고 싶은 사이드 프로젝트에 필요한 인원을 보다
          쉽게 찾을 수 있게 도와드리는 플랫폼입니다.
          <br />기획자, 개발자, 마케터, 디자이너 등 다양한 직군의 팀원들을 모집
          할 수 있어 매끄러운 프로젝트 진행을 도와드립니다. <br />퍼펙트 매칭
          플랫폼을 이용해서 아이디어를 보다 쉽게 펼쳐보세요!
        </h3>
      </div>

      <div class="qna_description_container">
        <div class="qna_description">
          <span>
            <img class="qna_description_img" src="../../assets/question.png" />
            퍼펙트 매칭은 어떤 플랫폼인가요?
          </span>
          <p>
            자신이 기획한 프로젝트를 다른 직군의 사람들과 함께 할 수 있도록
            매칭시켜주는 플랫폼입니다.
          </p>
        </div>
        <div class="qna_description">
          <span>
            <img class="qna_description_img" src="../../assets/question.png" />
            프로젝트에 처음 참여 해 보는데 어떤 도움을 받을 수 있나요?
          </span>
          <p>
            퍼펙트 매칭에서는 개발자만이 아닌 여러 직군을 모집하기 때문에보다 더
            다양한 프로젝트를 접할 수 있도록 되어있습니다. 그리고지역별
            필터링으로 원하는 지역의 사람들이 모인 프로젝트 참가도가능해
            오프라인 만남도 가능하므로 처음 참가 하시는분들도 새로운 경험을 쌓을
            수 있습니다.
          </p>
        </div>
        <div class="qna_description">
          <span>
            <img class="qna_description_img" src="../../assets/question.png" />
            다른 유사서비스와 어떤점이 다른가요?
          </span>
          <p>
            다른 유사서비스는 개발자 위주의 서비스를 지원하고 필터링이 적용되지
            않는 것이 많습니다. 퍼펙트 매칭은 다양한 직군의 분들이 사용할 수
            있도록 하고 지역별, 직군별 필터를 사용해 사용자분들에게 도움이 될 수
            있도록 만들어졌습니다.
          </p>
        </div>
        <div class="qna_description">
          <img class="qna_description_img" src="../../assets/question.png" />
          <span>프로젝트와 기업간의 컨텍도 맡아 주시나요?</span>
          <p>
            아니요. 저희는 단순히 프로젝트의 팀원 매칭을 조금 더 쉽게 해 드리는
            플랫폼으로써, 팀원 매칭을 주로 둡니다. 영리적 상황이 발생 할
            경우에는 프로젝트 참가자들의 상의를 통해 결정해 주시기 바랍니다.
          </p>
        </div>
      </div>

      <div class="recommend_description_container">
        <img class="recommend_intro_img" src="../../assets/recommend.png" />
        <br />
        <img class="arrow_img" src="../../assets/arrow.png" />
        아이디어는 있는데 혼자서 다 하기엔 벅차다는 생각이 드시는 분
        <br />
        <img class="arrow_img" src="../../assets/arrow.png" />
        프로젝트에 참여는 하고 싶은데 찾기 어렵다고 생각하시는 분
        <br />
        <img class="arrow_img" src="../../assets/arrow.png" />
        여가시간을 조금 더 효율적으로 사용해 보고싶으신 분
        <br />
        <img class="arrow_img" src="../../assets/arrow.png" />
        프로젝트 관련 경험을 쌓고 싶으신 분
      </div>
      <div class="button_container">
        <v-btn class="intro_btn new_project" to="/new/project"
          >프로젝트 개설하기</v-btn
        >
        <v-btn class="intro_btn new_project" to="/projects"
          >프로젝트 참가하기</v-btn
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
input {
  width: 330px;
  background-color: #2e9afe;
  border: none;
  color: #fff;
  padding: 15px 0;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 18px;
  margin: 4px;
  cursor: pointer;
  border-radius: 10px;
}

span {
  font-size: 1.3em;
}

.title_container {
  text-align: center;
}

.main_title {
  display: block;
  font-size: 2em;
  margin-top: 0.67em;
  margin-bottom: 0;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
  color: #2e9afe;
}

.sub_title {
  display: block;
  font-size: 1.5em;
  margin-bottom: 0.83em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
}

.description_container {
  margin: 0 auto;
  padding: 30px;
}

.main_description {
  margin: 0px 0px 50px 0px;
}

.qna_description_container {
  display: block;
  font-size: 1.17em;
  margin-top: 1em;
  margin-bottom: 50px;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
}

.qna_description_img {
  width: 30px;
  height: auto;
}

.recommend_description_container {
  padding: 0px 0px 50px 0px;
  margin: 0 auto;
}

.recommend_intro_img {
  width: 100%;
  height: auto;
}

.recommend_description_container .arrow_img {
  width: 20px;
  height: auto;
}

.button_container {
  text-align: center;
  padding: 0px 0px 50px 0px;
}

.intro_btn {
  min-width: 220px;
  background-color: #2e9afe !important;
  color: #fff !important;
  border-radius: 10px;
  font-size: 18px;
  height: 50px;
}
</style>
