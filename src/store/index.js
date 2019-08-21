import Vue from "vue";
import Vuex from "vuex";

import { projectModule } from "./modules/project.js";
import { commentModule } from "./modules/comment.js";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    projectModule,
    commentModule
  }
});
