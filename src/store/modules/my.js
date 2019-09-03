import jwt from "jsonwebtoken";
import { my } from "../../api/my.js";
import { project } from "../../api/prorject.js";
import { handleException } from "../../utils/errorHandler.js";

export const myModule = {
  state: {
    myProfile: {},
    mySkills: [],
    myDoingProjects: [],
    myDoneProjects: [],
    myProject: {},
    myProjectMembers: [],
    myDoneProject: {}
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
    },

    fetchedMyProjectMembers(state) {
      return state.myProjectMembers;
    },

    fetchedMyDoneProject(state) {
      return state.myDoneProject;
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
    },

    SET_MY_DONE_PROJECT(state, data) {
      state.myDoneProject = data;
    },

    SET_MY_PROJECT_MEMBERS(state, members) {
      state.myProjectMembers = members;
    }
  },

  actions: {
    GET_MY_PROFILE({ commit }) {
      const token = localStorage.getItem("user-token");
      const newToken = token.substring(7, token.length); // Bearer 삭제
      const decoded = jwt.decode(newToken, { complete: true });
      return my
        .getUserProfileByIdx(decoded.payload.idx, token)
        .then(({ data }) => {
          commit("SET_MY_PROFILE", data);
        })
        .catch(err => {
          console.log(err);
        });
    },

    GET_MY_SKILLS_BY_IDX({ commit }) {
      const token = localStorage.getItem("user-token");
      const newToken = token.substring(7, token.length); // Bearer 삭제
      const decoded = jwt.decode(newToken, { complete: true });
      return my
        .getUserSkillsByUserIdx(decoded.payload.idx, token)
        .then(({ data }) => {
          const mySkills = data._embedded.datas;
          commit("SET_MY_SKILLS", mySkills);
        })
        .catch(err => console.log(err));
    },

    GET_MY_DOING_PROJECTS_BY_IDX({ commit }, { idx }) {
      const token = localStorage.getItem("user-token");
      return my
        .getUserProjectsByUserIdx(idx, token)
        .then(({ data }) => {
          const myDoingProjects = data._embedded.datas;
          commit("SET_MY_DOING_PROJECTS", myDoingProjects, token);
        })
        .catch(err => console.log(err));
    },

    GET_MY_DONE_PROJECTS_BY_IDX({ commit }, { idx }) {
      const token = localStorage.getItem("user-token");
      return my
        .getDoneProjectsByUserIdx(idx, token)
        .then(({ data }) => {
          const myDoneProjects = data._embedded.datas;
          commit("SET_DONE_PROJECTS", myDoneProjects);
        })
        .catch(err => console.log(err));
    },

    GET_MY_PROJECT_BY_IDX({ commit }, { idx }) {
      const token = localStorage.getItem("user-token");
      return project
        .getProjectByIdx(idx, token)
        .then(({ data }) => {
          commit("SET_MY_PROJECT", data);
        })
        .catch(err => console.log(err));
    },

    GET_MY_PROJECT_MEMBERS_BY_IDX({ commit }, { idx }) {
      const token = localStorage.getItem("user-token");
      return project
        .getProjectMemebersByIdx(idx, token)
        .then(({ data }) => {
          const members = data._embedded.datas;
          commit("SET_MY_PROJECT_MEMBERS", members);
        })
        .catch(err => {
          // 멤버가 없어도 일로 옴
          commit("SET_MY_PROJECT_MEMBERS", []);
          console.log(err);
        });
    },

    GET_MY_DONE_PROJECT_BY_IDX({ commit }, { doneProjectIdx }) {
      const token = localStorage.getItem("user-token");
      return project
        .getDoneProjectByIdx(doneProjectIdx, token)
        .then(({ data }) => {
          commit("SET_MY_DONE_PROJECT", data);
        })
        .catch(err => console.log(err));
    }
  }
};
