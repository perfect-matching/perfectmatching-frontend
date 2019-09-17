import Vue from "vue";
import Vuex from "vuex";

import { projectModule } from "./modules/project.js";
import { commentModule } from "./modules/comment.js";
import { myModule } from "./modules/my.js";
import { userProfileModule } from "./modules/userProfile.js";
import { authModule } from "./modules/auth.js";
import { joinModule } from "./modules/join.js";
import { applyModule } from "./modules/apply.js";
import { errorModule } from "./modules/errorHandle.js";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    authModule,
    projectModule,
    commentModule,
    myModule,
    userProfileModule,
    joinModule,
    applyModule,
    errorModule
  }
});
