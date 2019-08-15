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
      return comment
        .getCommentsByProejectIdx(idx)
        .then(({ data }) => {
          commit("SET_COMMENTS", data.content);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
