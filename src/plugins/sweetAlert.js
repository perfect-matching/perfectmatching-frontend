import Swal from "sweetalert2";

export default {
  install(Vue) {
    Vue.prototype.$_swal = Swal;
  }
};
