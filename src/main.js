import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import Moment from "./plugins/moment.js";
import Swal from "./plugins/sweetAlert.js";
import vuelidateErrorExtractor from "vuelidate-error-extractor";

import { router } from "./routes/index.js";
import { store } from "./store/index.js";

Vue.config.productionTip = false;
Vue.use(Moment);
Vue.use(Swal);
Vue.use(vuelidateErrorExtractor);

new Vue({
  router,
  store,
  beforeCreate() {
    this.$store.dispatch("GET_MY_PROFILE");
  },

  render: h => h(App)
}).$mount("#app");
