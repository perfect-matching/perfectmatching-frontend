// 서비스를 사용하는 유저의 정보를 가져옴
import axios from "axios";
import { backend } from "./config.js";

function getUserProfileByIdx(userIdx, token) {
  return axios.get(`${backend.baseUrl}/profile/${userIdx}`, {
    headers: { Authorization: token }
  });
}

function getUserSkillsByUserIdx(userIdx, token) {
  return axios.get(`${backend.baseUrl}/profile/${userIdx}/skills`, {
    headers: { Authorization: token }
  });
}

function getUserProjectsByUserIdx(userIdx, token) {
  return axios.get(`${backend.baseUrl}/profile/${userIdx}/projects`, {
    headers: { Authorization: token }
  });
}

function getDoneProjectsByUserIdx(userIdx, token) {
  return axios.get(`${backend.baseUrl}/profile/${userIdx}/doneprojects`, {
    headers: { Authorization: token }
  });
}

export const userProfile = {
  getUserProfileByIdx,
  getUserSkillsByUserIdx,
  getUserProjectsByUserIdx,
  getDoneProjectsByUserIdx
};
