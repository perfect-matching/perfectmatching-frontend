import Vue from "vue";
import Router from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProjectItemView from "../views/ProjectItemView.vue";

Vue.use(Router);

export const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/projects/:id",
      name: "proejectItem",
      component: ProjectItemView
    }
  ]
});
