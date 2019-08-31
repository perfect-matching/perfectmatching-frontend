<template>
  <section class="error_section">
    <h2 class="section_title" v-if="error.status === null">404</h2>
    <h2 class="section_title" v-else>{{ error.status }}</h2>
    <p class="error_message" v-if="error.status === null">
      어..처음보는 요청인데..
    </p>
    <p class="error_message">{{ error.message }}</p>
  </section>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      error: "fetchedError"
    })
  }
};
</script>
<style scoped>
.error_section {
  text-align: center;
}
.section_title {
  font-size: 100px;
}
</style>
