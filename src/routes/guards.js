import { store } from "../store/index.js";

function needLogin(to, from, next, action) {
  if (store.state.authModule.token) {
    // const token = localStorage.getItem("user-token");
    console.log("너 로그인한 유저구나!");
    // store.dispatch(action, { token });
    next();
  } else {
    alert("로그인하렴");
    console.log("로그인 하렴");
    next("/home");
  }
}

export { needLogin };
