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
      console.log("뮤테이션 들어옴");
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
    },

    DELETE_COMMENT({ dispatch }, { idx }) {
      const token = localStorage.getItem("user-token");
      return comment
        .deleteComment(idx, token)
        .then(() => {
          const idx = router.currentRoute.params.idx;
          dispatch("FETCH_COMMENTS", { idx });
        })
        .catch(err => {
          console.log(err);
        });
    },

    // dispatch 로직 작성중
    PUT_COMMENT_ON_PROJECT({ dispatch }, { commentIdx, content, projectIdx }) {
      const token = localStorage.getItem("user-token");
      return comment
        .putCommentAtProject(commentIdx, { content, projectIdx }, token)
        .then(() => {
          console.log("완료!!");
          dispatch("FETCH_COMMENTS", { idx: projectIdx });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
