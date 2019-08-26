import { userProfile } from "../../api/userProfile.js";

export const userProfileModule = {
  state: {
    userProfile: {},
    userSkills: [],
    userProjects: []
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
    }
  },

  actions: {
    GET_USER_PROFILE_BY_IDX({ commit }, { idx }) {
      return userProfile
        .getUserProfileByIdx(idx)
        .then(({ data }) => {
          commit("SET_USER_PROFILE", data);
        })
        .catch(err => {
          console.log(err);
        });
    },

    GET_USER_SKILLS_BY_USER_IDX({ commit }, { idx }) {
      return userProfile
        .getUserSkillsByUserIdx(idx)
        .then(({ data }) => {
          const userSkills = data._embedded.datas;
          commit("SET_USER_SKILLS", userSkills);
        })
        .catch(err => console.log(err));
    },

    GET_USER_PROJECTS_BY_USER_IDX({ commit }, { idx }) {
      return userProfile
        .getUserProjectsByUserIdx(idx)
        .then(({ data }) => {
          const userProjects = data._embedded.datas;
          commit("SET_USER_PROJECTS", userProjects);
        })
        .catch(err => console.log(err));
    }
  }
};
