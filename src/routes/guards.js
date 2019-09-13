import { store } from "../store/index.js";

let entryUrl = null;

async function needLogin(to, from, next) {
  if (store.state.authModule.token) {
    if (entryUrl) {
      const url = entryUrl;
      entryUrl = null;
      next(url);
    } else {
      next();
    }
  } else {
    console.log("로그인 하렴");
    entryUrl = to.path;
    store.dispatch("TOGGLE_LOGIN_MODAL");
    // next("/home");
  }
}

export { needLogin };
