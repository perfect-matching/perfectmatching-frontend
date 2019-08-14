import { project } from "../../api/prorject.js";

export const projectModule = {
  state: {
    projects: {},
    projectDetail: {}
  },

  getters: {
    fetchedProjects(state) {
      return state.projects;
    },
    fetchedProjectDetail(state) {
      return state.projectDetail;
    }
  },

  mutations: {
    SET_PROJECTS(state, projectDatas) {
      state.projects = projectDatas;
    },

    SET_PROJECT_DETAIL(state, projectDetail) {
      state.projectDetail = projectDetail;
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
    },

    FETCH_PROJECT_BY_IDX({ commit }, { idx }) {
      return project
        .getProjectByIdx(idx)
        .then(({ data }) => {
          commit("SET_PROJECT_DETAIL", data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
