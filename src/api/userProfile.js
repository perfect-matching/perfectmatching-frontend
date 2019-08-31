// 서비스를 사용하는 유저의 정보를 가져옴
import axios from "axios";
import { backend } from "./config.js";

function getUserProfileByIdx(userIdx) {
  return axios.get(`${backend.baseUrl}/profile/${userIdx}`);
}

function getUserSkillsByUserIdx(userIdx) {
  return axios.get(`${backend.baseUrl}/profile/${userIdx}/skills`);
}

function getUserProjectsByUserIdx(userIdx) {
  return axios.get(`${backend.baseUrl}/profile/${userIdx}/projects`);
}

export const userProfile = {
  getUserProfileByIdx,
  getUserSkillsByUserIdx,
  getUserProjectsByUserIdx
};
