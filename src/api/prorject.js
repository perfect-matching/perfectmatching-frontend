import axios from "axios";
import { backend } from "./config.js";

function getProjects() {
  return axios.get(`${backend.baseUrl}/projects`);
}

function getNextProjects(url) {
  return axios.get(url);
}

function getProjectByIdx(idx, token) {
  return axios.get(`${backend.baseUrl}/project/${idx}`, {
    headers: { Authorization: token }
  });
}

function getProjectsWithQueries(location) {
  return axios.get(`${backend.baseUrl}/projects?location=${location}`);
}

function getDoneProjectByIdx(doneProjectIdx, token) {
  return axios.get(`${backend.baseUrl}/doneproject/${doneProjectIdx}`, {
    headers: { Authorization: token }
  });
}

function postProject(project) {
  return axios.post(`${backend.baseUrl}/project`, project);
}

function getProjectTags(token) {
  return axios.get(`${backend.baseUrl}/tags`, {
    headers: { Authorization: token }
  });
}

function getProjectMemebersByIdx(idx, token) {
  return axios.get(`${backend.baseUrl}/project/${idx}/members`, {
    headers: { Authorization: token }
  });
}

function getProjectUsedSkillsByIdx(idx, token) {
  return axios.get(`${backend.baseUrl}/usedskill/${idx}`, {
    headers: { Authorization: token }
  });
}

export const project = {
  postProject,
  getProjects,
  getNextProjects,
  getProjectByIdx,
  getProjectsWithQueries,
  getDoneProjectByIdx,
  getProjectTags,
  getProjectMemebersByIdx,
  getProjectUsedSkillsByIdx
};
