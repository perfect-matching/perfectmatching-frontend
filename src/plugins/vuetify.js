import Vue from "vue";
import Vuetify, {
  VTextField,
  VTooltip,
  VToolbar,
  VCard,
  VIcon,
  VBtn
} from "vuetify/lib";
import "vuetify/src/stylus/app.styl";
import { TiptapVuetifyPlugin } from "tiptap-vuetify";
// don't forget to import styles
import "tiptap-vuetify/dist/main.css";

Vue.use(Vuetify, {
  iconfont: "md",
  theme: {
    primary: "#1976D2",
    secondary: "#424242",
    accent: "#82B1FF",
    error: "#FF5252",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FFC107"
  },
  components: {
    VTextField,
    VTooltip,
    VToolbar,
    VCard,
    VIcon,
    VBtn
  }
});

Vue.use(TiptapVuetifyPlugin, {
  // optional, default to 'md' (default vuetify icons before v2.0.0)
  iconsGroup: "md"
});
