import axios from "axios";
import { backend } from "./config.js";

function getCommentsByProejectIdx(idx, token) {
  return axios.get(`${backend.baseUrl}/project/${idx}/comments`, {
    headers: { Authorization: token }
  });
}

function postCommentAtProject(content, token) {
  return axios.post(
    `${backend.baseUrl}/comment`,
    { content },
    {
      headers: { Authorization: token }
    }
  );
}
export const comment = {
  getCommentsByProejectIdx,
  postCommentAtProject
};
