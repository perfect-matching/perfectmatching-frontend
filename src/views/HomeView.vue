<template>
  <section class="home_section">
    <h2 class="section_title">메인 페이지</h2>
    <article class="news_slide">
      <h3 class="article_title news_header">새소식</h3>
      <carousel></carousel>
    </article>
    <article class="introduce">
      <introduce></introduce>
    </article>
  </section>
</template>

<script>
import Carousel from "../components/HomeView/Carousel.vue";
import Introduce from "../components/HomeView/Introduce.vue";

export default {
  components: { Carousel, Introduce }
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
