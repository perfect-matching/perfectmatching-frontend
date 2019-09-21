import axios from "axios";
import { backend } from "./config.js";

function getProjects() {
  return axios.get(`${backend.baseUrl}/projects`);
}

function getNextProjects(url) {
  console.log(url);
  console.log(axios.get(url));
  return axios.get(url);
}

function getProjectByIdx(idx, token) {
  return axios.get(`${backend.baseUrl}/project/${idx}`, {
    headers: { Authorization: token }
  });
}

// 프로젝트 상태 변경
// PROJECT -> 진행중   COMPLETE -> 완료
function changeProjectStatus({ projectIdx, status }, token) {
  return axios.put(
    `${backend.baseUrl}/project/${projectIdx}/status?status=${status}`,
    project,
    {
      headers: { Authorization: token }
    }
  );
}

function getProjectsWithQueries(location, position, tag) {
  const encodedTag = encodeURIComponent(tag);
  return axios.get(
    `${backend.baseUrl}/projects?location=${location}&position=${position}&tag=${encodedTag}`
  );
}

function getDoneProjectByIdx(doneProjectIdx, token) {
  return axios.get(`${backend.baseUrl}/doneproject/${doneProjectIdx}`, {
    headers: { Authorization: token }
  });
}

function getProjectTags(token) {
  return axios.get(`${backend.baseUrl}/tags`, {
    headers: { Authorization: token }
  });
}

function getProjectUsedSkillsByIdx(idx, token) {
  return axios.get(`${backend.baseUrl}/usedskill/${idx}`, {
    headers: { Authorization: token }
  });
}

function postNewProject(project, token) {
  return axios.post(`${backend.baseUrl}/project`, project, {
    headers: { Authorization: token }
  });
}

// 참여 확정된 멤버
function getProjectMemebersByIdx(idx, token) {
  return axios.get(`${backend.baseUrl}/project/${idx}/members`, {
    headers: { Authorization: token }
  });
}

// 지원한 멤버 (참여확정 x)
function getApplicantsByProjectIdx(projectIdx, token) {
  return axios.get(`${backend.baseUrl}/project/${projectIdx}/joinmembers`, {
    headers: { Authorization: token }
  });
}

function getApplyProjects(userIdx, token) {
  return axios.get(`${backend.baseUrl}/profile/${userIdx}/applyprojects`, {
    headers: { Authorization: token }
  });
}

function postDoneProject(doneProject, token) {
  return axios.post(`${backend.baseUrl}/doneproject`, doneProject, {
    headers: { Authorization: token }
  });
}

function putProject(projectIdx, project, token) {
  console.log("넘긴 put 값", project);
  return axios.put(`${backend.baseUrl}/project/${projectIdx}`, project, {
    headers: { Authorization: token }
  });
}

function putDoneProject(doneProjectIdx, doneProject, token) {
  return axios.put(
    `${backend.baseUrl}/doneproject/${doneProjectIdx}`,
    doneProject,
    {
      headers: { Authorization: token }
    }
  );
}

function deleteProject(projectIdx, token) {
  return axios.delete(`${backend.baseUrl}/project/${projectIdx}`, {
    headers: { Authorization: token }
  });
}

function deleteDoneProject(doneProjectIdx, token) {
  return axios.delete(`${backend.baseUrl}/doneproject/${doneProjectIdx}`, {
    headers: { Authorization: token }
  });
}

export const project = {
  getProjects,
  getNextProjects,
  getProjectByIdx,
  getProjectsWithQueries,
  getDoneProjectByIdx,
  getProjectTags,
  getProjectUsedSkillsByIdx,
  postNewProject,
  postDoneProject,
  putProject,
  putDoneProject,
  deleteDoneProject,
  deleteProject,
  getProjectMemebersByIdx,
  getApplicantsByProjectIdx,
  changeProjectStatus,
  getApplyProjects
};
