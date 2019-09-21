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

function deleteProfileImg(token) {
  return axios.delete(`${backend.baseUrl}/image`, {
    headers: {
      Authorization: token
    }
  });
}

export const fileUpload = {
  uploadProfileImg,
  deleteProfileImg
};
