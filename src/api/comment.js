import axios from "axios";
import { backend } from "./config.js";

function getCommentsByProejectIdx(idx, token) {
  return axios.get(`${backend.baseUrl}/project/${idx}/comments`, {
    headers: { Authorization: token }
  });
}

function postCommentAtProject({ content, projectIdx }, token) {
  return axios.post(
    `${backend.baseUrl}/comment`,
    { content, projectIdx },
    {
      headers: { Authorization: token }
    }
  );
}

function putCommentAtProject(commentIdx, { content, projectIdx }, token) {
  return axios.put(
    `${backend.baseUrl}/comment/${commentIdx}`,
    { content, projectIdx },
    {
      headers: { Authorization: token }
    }
  );
}

function deleteComment(commentIdx, token) {
  return axios.delete(`${backend.baseUrl}/comment/${commentIdx}`, {
    headers: { Authorization: token }
  });
}

export const comment = {
  getCommentsByProejectIdx,
  postCommentAtProject,
  deleteComment,
  putCommentAtProject
};
