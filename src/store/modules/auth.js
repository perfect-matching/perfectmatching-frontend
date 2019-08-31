import { auth } from "../../api/login.js";

export const authModule = {
  state: {
    token: localStorage.getItem("user-token") || "",
    status: ""
  },

  getters: {
    isAuthenticated(state) {
      return !!state.token;
    },
    authStatus(state) {
      return state.status;
    }
  },

  mutations: {
    AUTH_REQUEST(state) {
      state.status = "loading";
    },

    AUTH_SUCCESS(state, token) {
      state.status = "success";
      state.token = token;
    },

    AUTH_ERROR(state) {
      state.status = "error";
    }
  },

  actions: {
    AUTH_REQUEST({ commit, dispatch }, { email, password }) {
      return new Promise((resolve, reject) => {
        console.log("드러왔다!");
        commit("AUTH_REQUEST");
        auth
          .authRequest({
            username: "test1@email.com",
            password: "testpassword"
          })
          .then(res => {
            const token = res.headers.authorization;
            localStorage.setItem("user-token", token);
            commit("AUTH_SUCCESS", token);
            // dispatch("USER_REQUEST");
            resolve(res);
          })
          .catch(err => {
            commit("AUTH_ERROR", err);
            localStorage.removeItem("user-token"); // 로그인 실패시 가능성 있는 모든 토큰 삭제
            reject(err);
          });
      });
    }
  }
};
