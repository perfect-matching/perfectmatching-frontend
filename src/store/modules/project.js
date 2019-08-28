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
    SET_PROJECTS(state, projects) {
      state.projects = projects.datas;
      state.nextUrl = projects.nextUrl;
    },

    SET_PROJECT_DETAIL(state, projectDetail) {
      state.projectDetail = projectDetail;
    },

    ADD_MORE_PROJECTS(state, projects) {
      state.projects = state.projects.concat(projects.datas);
      state.nextUrl = projects.nextUrl;
    }
  },

  actions: {
    FETCH_PROJECTS({ commit }) {
      return project
        .getProjects()
        .then(({ data }) => {
          const projects = {
            datas: data._embedded.datas,
            nextUrl: data._links.next.href
          };
          commit("SET_PROJECTS", projects);
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
    },

    FETCH_NEXT_PROJECTS({ commit }, { nextUrl }) {
      return project.getNextProjects(nextUrl).then(({ data }) => {
        const projects = {
          datas: data._embedded.datas,
          nextUrl: data._links.next.href
        };
        commit("ADD_MORE_PROJECTS", projects);
      });
    },

    FETCH_PROJECTS_WITH_QURIES({ commit }, { location }) {
      return project
        .getProjectsWithQueries(location)
        .then(({ data }) => {
          const projects = {
            datas: data._embedded.datas,
            nextUrl: data._links.next.href
          };

          commit("SET_PROJECTS", projects);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
