// 로그인 한 유저의 데이터를 불러옴
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

function getDoneProjectsByUserIdx(userIdx) {
  return axios.get(`${backend.baseUrl}/profile/${userIdx}/doneprojects`);
}

export const my = {
  getUserProfileByIdx,
  getUserSkillsByUserIdx,
  getUserProjectsByUserIdx,
  getDoneProjectsByUserIdx
};
