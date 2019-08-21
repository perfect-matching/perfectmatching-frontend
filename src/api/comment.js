import axios from "axios";
import { backend } from "./config.js";

function getCommentsByProejectIdx(idx) {
  return axios.get(`${backend.baseUrl}/project/${idx}/comments`);
}
export const comment = { getCommentsByProejectIdx };
