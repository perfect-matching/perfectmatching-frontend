import axios from "axios";
import { backend } from "./config.js";

function getUserById(id) {
    return axios.get(`${backend.baseUrl}/users/${id}`);
}

export const project = {
    getUserById
};
