import Vue from "vue";
import Router from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProjectDetailView from "../views/ProjectDetailView.vue";
import UserDetailView from "../views/UserDetailView.vue";
import MyPageView from "../views/MyPageView.vue";
import ProjectListView from "../views/ProjectListView.vue";
import ProfileEditView from "../views/ProfileEditView.vue";
import MyProjectsView from "../views/MyProjectsView.vue";
import ProjectManageView from "../views/ProjectManageView.vue";
import NewProjectView from "../views/NewProjectView.vue";
import ApplicationView from "../views/ApplicationView.vue";

Vue.use(Router);

export const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "projects"
    },
    {
      path: "/home",
      name: "home",
      component: HomeView
    },
    {
      path: "/projects",
      name: "projectList",
      component: ProjectListView
    },
    {
      path: "/projects/:id",
      name: "projectDetail",
      component: ProjectDetailView
    },
    {
      path: "/project/new",
      name: "NewProjectView",
      component: NewProjectView
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
      path: "/my/edit",
      name: "profileEdit",
      component: ProfileEditView
    },
    {
      path: "/my/projects",
      name: "myProjects",
      component: MyProjectsView
    },
    {
      path: "/my/projects/:id",
      name: "projectManage",
      component: ProjectManageView
    },
    {
      path: "/projects/:id/application",
      name: "projectApplication",
      component: ApplicationView
    }
  ]
});
