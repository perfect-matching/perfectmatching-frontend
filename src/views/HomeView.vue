<template>
  <section class="home_section">
    <h2 class="section_title">퍼펙트 매칭</h2>
    <article class="news_slide">
      <h3 class="article_title news_header">새소식</h3>
      <carousel></carousel>
    </article>
    <article class="new_projects">
      <new-project-list></new-project-list>
    </article>
  </section>
</template>

<script>
import Carousel from "../components/HomeView/Carousel.vue";
import NewProjectList from "../components/HomeView/NewProjectList.vue";
export default {
  components: { Carousel, NewProjectList }
};
</script>
<style scoped>
.section_title {
  display: none;
}

.news_header {
  display: none;
}
</style>
