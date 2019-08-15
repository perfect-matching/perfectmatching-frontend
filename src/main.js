import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import Moment from "./plugins/moment.js";

import { router } from "./routes/index.js";
import { store } from "./store/index.js";

Vue.config.productionTip = false;
Vue.use(Moment);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
