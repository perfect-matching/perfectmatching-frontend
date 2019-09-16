import { auth } from "../../api/login.js";
import Swal from "sweetalert2";
import { handleException } from "../../utils/errorHandler.js";

export const authModule = {
  state: {
    token: localStorage.getItem("user-token") || "",
    status: "",
    loginModal: false
  },

  getters: {
    isAuthenticated(state) {
      return !!state.token;
    },
    authStatus(state) {
      return state.status;
    },

    loginModalStatus(state) {
      return state.loginModal;
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
    },

    TOGGLE_LOGIN_MODAL_STATUS(state) {
      state.loginModal = !state.loginModal;
    }
  },

  actions: {
    AUTH_REQUEST({ commit, dispatch }, { email, password }) {
      return new Promise((resolve, reject) => {
        console.log("드러왔다!");
        commit("AUTH_REQUEST");
        auth
          .authRequest({
            username: email,
            password: password
          })
          .then(res => {
            const token = res.headers.authorization;
            localStorage.setItem("user-token", token);
            commit("AUTH_SUCCESS", token);
            dispatch("GET_MY_PROFILE");
            resolve(res);
          })
          .catch(err => {
            Swal.fire({
              title: "로그인 실패",
              text: "이메일 혹은 패스워드를 확인해주세요.",
              type: "error",
              confirmButtonText: "확인"
            });
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
    },

    TOGGLE_LOGIN_MODAL({ commit }) {
      commit("TOGGLE_LOGIN_MODAL_STATUS");
    }
  }
};
