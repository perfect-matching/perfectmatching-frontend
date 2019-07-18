import { project } from "../../api/prorject.js";

export const projectModule = {
  state: {
    projectItem: {}
  },
  getters: {},
  mutations: {
    SET_PROJECT_ITEM(state, projectData) {}
  },
  actions: {
    FETCH_PROJECT_ITEM({ commit }, { id }) {
      return project.getProjectById(id).then(({ data }) => {
        console.log(data);
      });
    }
  }
};
