import axios from "axios";
import { backend } from "./config.js";

function emailCheck(email) {
  console.log("요청함수 진입! user: ", email);
  return axios.post(`${backend.baseUrl}/register/emailcheck`, email);
}

function nicknameCheck(nick) {
  // {
  //     "nick" : "admin"
  //   }
  return axios.post(`${backend.baseUrl}/register/nickcheck`, nick);
}

function joinUser(user) {
  console.log("in axios:", user);
  return axios.post(`${backend.baseUrl}/register`, user);
}

function getAllUserSkills() {
  return axios.get(`${backend.baseUrl}/userskills`);
}

export const join = {
  emailCheck,
  nicknameCheck,
  joinUser,
  getAllUserSkills
};
