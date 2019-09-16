import { join } from "../../api/join.js";
import { handleException } from "../../utils/errorHandler.js";

export const joinModule = {
  state: {
    dbUserSkills: []
  },

  getters: {
    fetchedDbUserSkills(state) {
      return state.dbUserSkills;
    }
  },

  mutations: {
    SET_DB_USER_SKILLS(state, datas) {
      state.dbUserSkills = datas;
    }
  },

  actions: {
    CHECK_EMAIL({ commit }, { email }) {
      return join
        .emailCheck({ email })
        .then(({ data }) => {
          console.log("이메일 체크! :", data);
          return true;
        })
        .catch(err => {
          console.log(err);
          return false;
        });
    },

    CHECK_NICK({ commit }, { nick }) {
      return join
        .nicknameCheck({ nick })
        .then(() => {
          console.log("닉네임 체크");
          return true;
        })
        .catch(err => {
          console.log("err");
          return false;
        });
    },

    JOIN_USER({ commit }, { user }) {
      console.log("가입 액션", user);
      return join
        .joinUser(user)
        .then(({ data }) => {
          console.log("가입성공", data);
        })
        .catch(err => {
          console.log("가입실패:", err);
        });
    },

    FETCH_USER_SKILLS({ commit }) {
      return join
        .getAllUserSkills()
        .then(({ data }) => {
          const skills = data._embedded.datas;
          commit("SET_DB_USER_SKILLS", skills);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
