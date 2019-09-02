import { store } from "../store/index.js";

async function needLogin(to, from, next) {
  if (store.state.authModule.token) {
    console.log("to: ", to);
    console.log("너 로그인한 유저구나!");

    next();
  } else {
    console.log("로그인 하렴");
    next("/home");
  }
}

export { needLogin };
