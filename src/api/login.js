import axios from "axios";
import { backend } from "./config.js";

function authRequest(user) {
  console.log("요청함수 진입! user: ", user);
  return axios.post(`${backend.baseUrl}/login`, user);
}

export const auth = { authRequest };
