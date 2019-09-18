import axios from "axios";
import { backend } from "./config.js";

function applyToProject({ projectIdx, position, simpleProfile }, token) {
  return axios.post(
    `${backend.baseUrl}/project/apply`,
    {
      projectIdx,
      position,
      simpleProfile
    },
    {
      headers: { Authorization: token }
    }
  );
}

function confirmApplicants({ projectIdx, userIdx, status }, token) {
  return axios.put(
    `${backend.baseUrl}/project/matching`,
    { projectIdx, userIdx, status },
    {
      headers: { Authorization: token }
    }
  );
}

function applyCancel(projectIdx, token) {
  return axios.delete(`${backend.baseUrl}/project/cancel/${projectIdx}`, {
    headers: { Authorization: token }
  });
}

export const apply = {
  applyToProject,
  confirmApplicants,
  applyCancel
};
