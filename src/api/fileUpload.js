import axios from "axios";
import { backend } from "./config.js";

function uploadProfileImg(data, token) {
  console.log("in 파일업로드 엑시오스 ", data.get("file"));
  return axios.put(`${backend.baseUrl}/image`, data, {
    headers: {
      Authorization: token,
      "Content-Type": "multipart/form-data"
    }
  });
}

export const fileUpload = {
  uploadProfileImg
};
