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
import ProjectManageView from "../views/ProjectManageView.vue";
import NewProjectView from "../views/NewProjectView.vue";
import ApplicationView from "../views/ApplicationView.vue";
import CompleteProjectView from "../views/CompleteProjectView.vue";

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
      component: ProjectListView
    },
    {
      path: "/project/:idx",
      name: "projectDetail",
      component: ProjectDetailView
    },
    {
      path: "/new/project",
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
    },
    {
      path: "/new/complete",
      name: "completeProjectForm",
      component: CompleteProjectView
    }
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});
