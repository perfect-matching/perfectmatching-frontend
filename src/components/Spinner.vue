<template>
  <v-progress-linear
    :active="loading"
    :indeterminate="loading"
    absolute
    bottom
    color="deep-purple accent-4"
  ></v-progress-linear>
</template>
<script>
import bus from "../utils/bus.js";
export default {
  data() {
    return {
      loading: false
    };
  },

  methods: {
    startSpinner() {
      this.loading = true;
    },
    endSpinner() {
      this.loading = false;
    }
  },

  created() {
    // this.$store.dispatch( 토큰이 만료되었는지 확인하는 액션 );
    bus.$on("start:spinner", this.startSpinner);
    bus.$on("end:spinner", this.endSpinner);
  },

  beforeDestroy() {
    bus.$off("start:spinner", this.startSpinner);
    bus.$off("end:spinner", this.endSpinner);
  }
};
</script>
<style scoped>
/* .spinner {
  position: absolute;
  top: 20%;
  left: 45%;
  z-index: 99;
}
.v-progress-circular {
  margin: 1rem;
} */
</style>
