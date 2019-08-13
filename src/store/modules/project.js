import { project } from "../../api/prorject.js";

export const projectModule = {
  state: {
    projects: {}
  },
  getters: {
    FETCHED_PROJECTS(state) {
      return state.projects;
    }
  },
  mutations: {
    SET_PROJECTS(state, projectDatas) {
      state.projects = projectDatas;
    }
  },
  actions: {
    FETCH_PROJECTS({ commit }) {
      return project
        .getProjects()
        .then(({ data }) => {
          commit("SET_PROJECTS", data._embedded.projectsDTOList);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
