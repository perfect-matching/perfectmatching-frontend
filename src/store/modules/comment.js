import { comment } from "../../api/comment.js";
import { router } from "../../routes/index.js";
import { handleException } from "../../utils/errorHandler.js";

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
          commit("SET_COMMENTS", {}); // 이전 댓글 state를 지워야함
        });
    },

    POST_COMMENT_ON_PROJECT({ dispatch }, { content, projectIdx }) {
      const token = localStorage.getItem("user-token");
      return comment
        .postCommentAtProject({ content, projectIdx }, token)
        .then(() => {
          const idx = router.currentRoute.params.idx;
          dispatch("FETCH_COMMENTS", { idx });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
