import { store } from "../store/index.js";

export function handleException(err) {
  store.dispatch("GET_ERROR", err.response);
}
