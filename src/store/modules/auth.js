import jwt from "jsonwebtoken";
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
    },

    AUTH_LOGOUT(state) {
      state.status = "";
      state.token = "";
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
            var newToken = token.substring(7, token.length); // Bearer 삭제
            const decoded = jwt.decode(newToken, { complete: true });
            console.log(decoded);
            dispatch("GET_MY_PROFILE", { idx: decoded.payload.idx, token });
            resolve(res);
          })
          .catch(err => {
            commit("AUTH_ERROR", err);
            localStorage.removeItem("user-token"); // 로그인 실패시 가능성 있는 모든 토큰 삭제
            reject(err);
          });
      });
    },

    AUTH_LOGOUT({ commit, dispatch }) {
      return new Promise((resolve, reject) => {
        console.log("로그아웃 해뿟다");
        commit("AUTH_LOGOUT");
        // const token = localStorage.getItem("user-token");
        localStorage.removeItem("user-token");

        // auth.authLogout(token).then(res => { // 굳이 필요한 작업일까?
        //   console.log("엑시오스 로그아웃:", res);
        // });

        resolve();
      });
    }
  }
};
