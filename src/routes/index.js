import Vue from "vue";
import Router from "vue-router";
import HomeView from "../views/HomeView.vue";
import JoinView from "../views/JoinView.vue";
import ProjectDetailView from "../views/ProjectDetailView.vue";
import UserDetailView from "../views/UserDetailView.vue";
import MyPageView from "../views/MyPageView.vue";
import ProjectListView from "../views/ProjectListView.vue";
import ProfileEditView from "../views/ProfileEditView.vue";
import MyProjectsView from "../views/MyProjectsView.vue";
import MyProjectEditView from "../views/MyProjectEditView.vue";
import ProjectManageView from "../views/ProjectManageView.vue";
import NewProjectView from "../views/NewProjectView.vue";
import ApplicationView from "../views/ApplicationView.vue";
import DoneProjectView from "../views/DoneProjectView.vue";
import DoneProjectEditView from "../views/DoneProjectEditView.vue";
import DoneProjectStateChangeView from "../views/DoneProjectStateChangeView.vue";
import ErrorView from "../views/ErrorView.vue";
import bus from "../utils/bus.js";
import { store } from "../store/index.js";
import { needLogin } from "./guards.js";

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
      path: "/join",
      name: "join",
      component: JoinView
    },
    {
      path: "/projects",
      name: "projectList",
      component: ProjectListView,
      beforeEnter: (to, from, next) => {
        bus.$emit("start:spinner");
        store.dispatch("FETCH_PROJECTS").then(() => {
          bus.$emit("end:spinner");
          next();
        });
      }
    },
    {
      path: "/project/:idx",
      name: "projectDetail",
      component: ProjectDetailView,
      beforeEnter: needLogin
    },
    {
      path: "/new/project",
      name: "NewProjectView",
      component: NewProjectView,
      beforeEnter: needLogin
    },
    {
      path: "/profile/:idx",
      name: "userDetail",
      component: UserDetailView,
      beforeEnter: needLogin
    },
    {
      path: "/my",
      name: "myPage",
      component: MyPageView,
      beforeEnter: needLogin
    },
    {
      path: "/my/edit",
      name: "profileEdit",
      component: ProfileEditView,
      beforeEnter: needLogin
    },
    {
      path: "/my/projects",
      name: "myProjects",
      component: MyProjectsView,
      beforeEnter: needLogin
    },
    {
      path: "/my/projects/:idx",
      name: "projectManage",
      component: ProjectManageView,
      beforeEnter: needLogin
    },
    {
      path: "/my/projects/:idx/edit",
      name: "editProject",
      component: MyProjectEditView,
      beforeEnter: needLogin
    },
    {
      path: "/projects/:idx/application",
      name: "projectApplication",
      component: ApplicationView,
      beforeEnter: needLogin
    },
    {
      path: "/my/projects/:idx/done",
      name: "doneProjectStateChange",
      component: DoneProjectStateChangeView,
      beforeEnter: needLogin
    },
    {
      path: "/new/done",
      name: "newDoneProject",
      component: DoneProjectView,
      beforeEnter: needLogin
    },
    {
      path: "/my/done/:idx/edit",
      name: "editDoneProject",
      component: DoneProjectEditView,
      beforeEnter: needLogin
    },
    {
      path: "*",
      name: "Error",
      component: ErrorView
    }
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});
