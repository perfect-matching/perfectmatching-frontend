import axios from "axios";
import { backend } from "./config.js";

function getProjects() {
  return axios.get(`${backend.baseUrl}/projects`);
}

function getNextProjects(url) {
  return axios.get(url);
}

function getProjectByIdx(idx) {
  return axios.get(`${backend.baseUrl}/project/${idx}`);
}

function getProjectsWithQueries(location) {
  return axios.get(`${backend.baseUrl}/projects/?location=${location}`);
}

export const project = {
  getProjects,
  getNextProjects,
  getProjectByIdx,
  getProjectsWithQueries
};
