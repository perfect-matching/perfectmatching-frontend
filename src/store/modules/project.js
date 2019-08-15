import { project } from "../../api/prorject.js";

export const projectModule = {
  state: {
    projects: [],
    projectDetail: {},
    nextUrl: ""
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
    // SET_PROJECTS(state, projects) {
    //   state.projects = projects.content;
    //   state.nextUrl = projects.links[1].href;
    // },

    SET_PROJECT_DETAIL(state, projectDetail) {
      state.projectDetail = projectDetail;
    }

    // ADD_MORE_PROJECTS(state, projects) {
    //   state.projects = state.projects.concat(projects.content);
    //   state.nextUrl = projects.links[1].href;
    // }
  },

  actions: {
    FETCH_PROJECTS({ commit }) {
      return project
        .getProjects()
        .then(({ data }) => {
          console.log(data.content);
          commit("SET_PROJECTS", data);
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

    // FETCH_NEXT_PROJECTS({ commit }, { nextUrl }) {
    //   return project
    //     .getNextProjects(nextUrl)
    //     .then(({ data }) => {
    //       commit("ADD_MORE_PROJECTS", data);
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // }
  }
};
