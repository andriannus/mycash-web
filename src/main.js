import { createApp } from "vue";

import App from "@/app/app.component.vue";
import router from "@/app/app.routes";

import { FontAwesomeIcon } from "@/shared/plugins/font-awesome.plugin";

createApp(App)
  .use(router)
  .component("my-icon", FontAwesomeIcon)
  .mount("#app");
