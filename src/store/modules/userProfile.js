import { userProfile } from "../../api/userProfile.js";
import { handleException } from "../../utils/errorHandler.js";

export const userProfileModule = {
  state: {
    userProfile: {},
    userSkills: [],
    userProjects: [],
    DoneProjects: []
  },

  getters: {
    fetchedUserProfile(state) {
      return state.userProfile;
    },

    fetchedUserSkills(state) {
      return state.userSkills;
    },

    fetchedUserProjects(state) {
      return state.userProjects;
    },

    fetchedDoneProjects(state) {
      return state.DoneProjects;
    }
  },

  mutations: {
    SET_USER_PROFILE(state, userDatas) {
      state.userProfile = userDatas;
    },

    SET_USER_SKILLS(state, datas) {
      state.userSkills = datas;
    },

    SET_USER_PROJECTS(state, datas) {
      state.userProjects = datas;
    },

    SET_DONE_PROJECTS(state, datas) {
      state.DoneProjects = datas;
    }
  },

  actions: {
    GET_USER_PROFILE_BY_IDX({ commit }, { idx }) {
      const token = localStorage.getItem("user-token");
      return userProfile
        .getUserProfileByIdx(idx, token)
        .then(({ data }) => {
          commit("SET_USER_PROFILE", data);
        })
        .catch(err => {
          console.log(err);
        });
    },

    GET_USER_SKILLS_BY_USER_IDX({ commit }, { idx }) {
      const token = localStorage.getItem("user-token");
      return userProfile
        .getUserSkillsByUserIdx(idx, token)
        .then(({ data }) => {
          const userSkills = data._embedded.datas;
          commit("SET_USER_SKILLS", userSkills);
        })
        .catch(err => console.log(err));
    },

    GET_USER_PROJECTS_BY_USER_IDX({ commit }, { idx }) {
      const token = localStorage.getItem("user-token");
      return userProfile
        .getUserProjectsByUserIdx(idx, token)
        .then(({ data }) => {
          const userProjects = data._embedded.datas;
          commit("SET_USER_PROJECTS", userProjects);
        })
        .catch(err => console.log(err));
    },

    GET_DONE_PROJECTS_BY_USER_IDX({ commit }, { idx }) {
      const token = localStorage.getItem("user-token");
      return userProfile
        .getDoneProjectsByUserIdx(idx, token)
        .then(({ data }) => {
          const doneProjects = data._embedded.datas;
          commit("SET_DONE_PROJECTS", doneProjects);
        })
        .catch(err => console.log(err));
    }
  }
};
