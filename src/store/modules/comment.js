import { comment } from "../../api/comment.js";

export const commentModule = {
  state: {
    comments: {}
  },

  getters: {
    fetchedComments(state) {
      return state.comments;
    }
  },

  mutations: {
    SET_COMMENTS(state, commentDatas) {
      state.comments = commentDatas;
    }
  },

  actions: {
    FETCH_COMMENTS({ commit }, { idx }) {
      const token = localStorage.getItem("user-token");
      return comment
        .getCommentsByProejectIdx(idx, token)
        .then(({ data }) => {
          commit("SET_COMMENTS", data._embedded.datas);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
