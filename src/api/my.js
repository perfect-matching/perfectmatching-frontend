// 로그인 한 유저의 데이터를 불러옴
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

// GET 개설한 프로젝트들
function getLeadingProjectByUserIdx(userIdx, token) {
  return axios.get(`${backend.baseUrl}/profile/${userIdx}/myprojects`, {
    headers: { Authorization: token }
  });
}

// GET 참여중인 프로젝트들
function getDoingProjectsByUserIdx(userIdx, token) {
  return axios.get(`${backend.baseUrl}/profile/${userIdx}/projects`, {
    headers: { Authorization: token }
  });
}

function getDoneProjectsByUserIdx(userIdx, token) {
  return axios.get(`${backend.baseUrl}/profile/${userIdx}/doneprojects`, {
    headers: { Authorization: token }
  });
}

export const my = {
  getUserProfileByIdx,
  getUserSkillsByUserIdx,
  getLeadingProjectByUserIdx,
  getDoingProjectsByUserIdx,
  getDoneProjectsByUserIdx
};
