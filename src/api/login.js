import axios from "axios";
// import { backend } from "./config.js";

function authRequest(body) {
  /*
    body 양식
    {
        "username": "test1@email.com",
        "password": "testpassword"
    }
     */
  return axios.post("https://donghun-dev.kro.kr:8084/api/login", body);
}
export const comment = { authRequest };
