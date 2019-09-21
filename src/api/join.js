import axios from "axios";
import { backend } from "./config.js";

function emailCheck({ email }) {
  return axios.post(`${backend.baseUrl}/register/emailcheck`, { email });
}

function nicknameCheck({ nick }) {
  return axios.post(`${backend.baseUrl}/register/nickcheck`, { nick });
}

function joinUser(user) {
  console.log("in axios:", user);
  return axios.post(`${backend.baseUrl}/register`, user);
}

function getAllUserSkills() {
  return axios.get(`${backend.baseUrl}/tags`);
}

export const join = {
  emailCheck,
  nicknameCheck,
  joinUser,
  getAllUserSkills
};
