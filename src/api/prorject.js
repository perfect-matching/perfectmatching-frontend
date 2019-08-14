import axios from "axios";
import { backend } from "./config.js";

function getProjects() {
  return axios.get(`${backend.baseUrl}/projects`);
}

function getProjectByIdx(idx) {
  return axios.get(`${backend.baseUrl}/project/${idx}`);
}

export const project = {
  getProjects,
  getProjectByIdx
};
