import axios from "axios";
import { backend } from "./config.js";

function authRequest(user) {
  return axios.post(`${backend.baseUrl}/login`, user);
}

function authLogout(token) {
  return axios.post(
    `${backend.baseUrl}/login`,
    {},
    { headers: { Authorization: token } }
  );
  // return delete axios.defaults.headers.common["Authorization"];
}

export const auth = {
  authRequest,
  authLogout
};
