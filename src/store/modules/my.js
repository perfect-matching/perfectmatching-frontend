import jwt from "jsonwebtoken";
import { my } from "../../api/my.js";
import { project } from "../../api/prorject.js";
import { fileUpload } from "../../api/fileUpload.js";
import { handleException } from "../../utils/errorHandler.js";

export const myModule = {
  state: {
    myProfile: {},
    mySkills: [],
    myLeadingProjects: [],
    myDoingProjects: [],
    myDoneProjects: [],
    myProject: {},
    myProjectApplicants: [],
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

    fetchedMyLeadingProjects(state) {
      return state.myLeadingProjects;
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

    fetchedMyProjectApplicants(state) {
      return state.myProjectApplicants;
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

    SET_MY_LEADING_PROJECTS(state, data) {
      state.myLeadingProjects = data;
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
    },

    SET_APPLICANTS(state, applicants) {
      state.myProjectApplicants = applicants;
    }
  },

  actions: {
    GET_MY_PROFILE({ commit }) {
      const token = localStorage.getItem("user-token");
      const newToken = token.substring(7, token.length); // Bearer 삭제
      const decoded = jwt.decode(newToken, { complete: true });
      localStorage.setItem("user-idx", decoded.payload.idx);
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

    GET_MY_LEADING_PROJECTS_BY_IDX({ commit }, { idx }) {
      const token = localStorage.getItem("user-token");
      return my
        .getLeadingProjectByUserIdx(idx, token)
        .then(({ data }) => {
          const myLeadingProjects = data._embedded.datas;
          commit("SET_MY_LEADING_PROJECTS", myLeadingProjects);
        })
        .catch(err => {
          console.log(err);
          commit("SET_MY_LEADING_PROJECTS", []);
        });
    },

    GET_MY_DOING_PROJECTS_BY_IDX({ commit }, { idx }) {
      const token = localStorage.getItem("user-token");
      return my
        .getDoingProjectsByUserIdx(idx, token)
        .then(({ data }) => {
          const myDoingProjects = data._embedded.datas;
          commit("SET_MY_DOING_PROJECTS", myDoingProjects);
        })
        .catch(err => {
          console.log(err);
          commit("SET_MY_DOING_PROJECTS", []);
        });
    },

    GET_MY_DONE_PROJECTS_BY_IDX({ commit }, { idx }) {
      const token = localStorage.getItem("user-token");
      return my
        .getDoneProjectsByUserIdx(idx, token)
        .then(({ data }) => {
          const myDoneProjects = data._embedded.datas;
          commit("SET_DONE_PROJECTS", myDoneProjects);
        })
        .catch(err => {
          console.log(err);
          commit("SET_DONE_PROJECTS", []);
        });
    },

    GET_MY_PROJECT_BY_IDX({ commit, dispatch }, { idx }) {
      const token = localStorage.getItem("user-token");
      return project
        .getProjectByIdx(idx, token)
        .then(({ data }) => {
          commit("SET_MY_PROJECT", data);
          dispatch("FETCH_PROJECT_USED_SKILLS", { idx });
        })
        .catch(err => console.log(err));
    },

    GET_PROJECT_APPLICANTS_BY_IDX({ commit }, { idx }) {
      const token = localStorage.getItem("user-token");
      return project
        .getApplicantsByProjectIdx(idx, token)
        .then(({ data }) => {
          const applicants = data._embedded.datas;
          commit("SET_APPLICANTS", applicants);
        })
        .catch(err => {
          commit("SET_APPLICANTS", []);
        });
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
    },

    PUT_MY_PHOTO({ dispatch }, { formData }) {
      const token = localStorage.getItem("user-token");
      return fileUpload
        .uploadProfileImg(formData, token)
        .then(({ data }) => {
          dispatch("GET_MY_PROFILE");
        })
        .catch(err => {
          console.log(err);
        });
    },

    DELETE_MY_PHOTO({ dispatch }) {
      const token = localStorage.getItem("user-token");
      return fileUpload
        .deleteProfileImg(token)
        .then(({ data }) => {
          dispatch("GET_MY_PROFILE");
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
