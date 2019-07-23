import Vue from "vue";
import Router from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProjectDetailView from "../views/ProjectDetailView.vue";
import UserDetailView from "../views/UserDetailView.vue";
import MyPageView from "../views/MyPageView.vue";
import ProjectListView from "../views/ProjectListView.vue";
import ProfileEditView from "../views/ProfileEditView.vue";

Vue.use(Router);

export const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "home"
    },
    {
      path: "/home",
      name: "home",
      component: HomeView
    },
    {
      path: "/projects/:id",
      name: "projectDetail",
      component: ProjectDetailView
    },
    {
      path: "/users/:id",
      name: "userDetail",
      component: UserDetailView
    },
    {
      path: "/my",
      name: "myPage",
      component: MyPageView
    },
    {
      path: "/projects",
      name: "projectList",
      component: ProjectListView
    },
    {
      path: "/my/edit",
      name: "profileEdit",
      component: ProfileEditView
    }
  ]
});
