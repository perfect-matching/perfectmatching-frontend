import axios from "axios";
import { backend } from "./config.js";

function getProjects() {
  return axios.get(`${backend.baseUrl}/projects`);
}

function getProjectById(id) {
  return axios.get(`${backend.baseUrl}/projects/${id}`);
}

export const project = {
  getProjects,
  getProjectById
};
