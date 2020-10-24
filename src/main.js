import { createApp } from "vue";

import App from "@/App.vue";
import router from "@/main.routes";
import "@/main.scss";

import { FontAwesomeIcon } from "@/shared/plugins/font-awesome.plugin";

createApp(App)
  .use(router)
  .component("my-icon", FontAwesomeIcon)
  .mount("#app");
