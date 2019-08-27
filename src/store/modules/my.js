import { my } from "../../api/my.js";
import { project } from "../../api/prorject.js";

export const myModule = {
  state: {
    myProfile: {},
    mySkills: [],
    myDoingProjects: [],
    myDoneProjects: [],
    myProject: {}
  },
  getters: {
    fetchedMyProfile(state) {
      return state.myProfile;
    },

    fetchedMySkills(state) {
      return state.mySkills;
    },

    fetchedMyDoingProjects(state) {
      return state.myDoingProjects;
    },

    fetchedMyDoneProjects(state) {
      return state.myDoneProjects;
    },

    fetchedMyProject(state) {
      return state.myProject;
    }
  },
  mutations: {
    SET_MY_PROFILE(state, data) {
      state.myProfile = data;
    },

    SET_MY_SKILLS(state, data) {
      state.mySkills = data;
    },

    SET_MY_DOING_PROJECTS(state, data) {
      state.myDoingProjects = data;
    },

    SET_DONE_PROJECTS(state, data) {
      state.myDoneProjects = data;
    },

    SET_MY_PROJECT(state, data) {
      state.myProject = data;
    }
  },
  actions: {
    GET_MY_PROFILE({ commit }, { idx }) {
      return my
        .getUserProfileByIdx(idx)
        .then(({ data }) => {
          commit("SET_MY_PROFILE", data);
        })
        .catch(err => {
          console.log(err);
        });
    },

    GET_MY_SKILLS_BY_IDX({ commit }, { idx }) {
      return my
        .getUserSkillsByUserIdx(idx)
        .then(({ data }) => {
          const mySkills = data._embedded.datas;
          commit("SET_MY_SKILLS", mySkills);
        })
        .catch(err => console.log(err));
    },

    GET_MY_DOING_PROJECTS_BY_IDX({ commit }, { idx }) {
      return my
        .getUserProjectsByUserIdx(idx)
        .then(({ data }) => {
          const myDoingProjects = data._embedded.datas;
          commit("SET_MY_DOING_PROJECTS", myDoingProjects);
        })
        .catch(err => console.log(err));
    },

    GET_MY_DONE_PROJECTS_BY_IDX({ commit }, { idx }) {
      return my
        .getDoneProjectsByUserIdx(idx)
        .then(({ data }) => {
          const myDoneProjects = data._embedded.datas;
          commit("SET_DONE_PROJECTS", myDoneProjects);
        })
        .catch(err => console.log(err));
    },

    GET_MY_PROJECT_BY_IDX({ commit }, { idx }) {
      return project
        .getProjectByIdx(idx)
        .then(({ data }) => {
          commit("SET_MY_PROJECT", data);
        })
        .catch(err => console.log(err));
    }
  }
};
