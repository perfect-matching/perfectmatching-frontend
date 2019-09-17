import { apply } from "../../api/apply.js";

export const applyModule = {
  state: {},

  getters: {},

  mutations: {},

  actions: {
    APPLY_TO_PROJECT({ commit }, { projectIdx, position, simpleProfile }) {
      const token = localStorage.getItem("user-token");
      return apply
        .applyToProject({ projectIdx, position, simpleProfile }, token)
        .then(({ data }) => {
          console.log("지원 완료!!");
        })
        .catch(err => console.log(err));
    },

    CONFIRM_APPLICANT({ dispatch }, { projectIdx, userIdx, status }) {
      const token = localStorage.getItem("user-token");
      return apply
        .confirmApplicants({ projectIdx, userIdx, status }, token)
        .then(({ data }) => {
          console.log("지원 완료!!");
          dispatch("GET_PROJECT_APPLICANTS_BY_IDX", { idx: projectIdx });
          dispatch("GET_MY_PROJECT_MEMBERS_BY_IDX", { idx: projectIdx });
        })
        .catch(err => console.log(err));
    }
  }
};
