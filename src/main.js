import { createApp } from "vue";
import App from "./App.vue";
import "./assets/bootstrap.min.css";
import router from "./routes/index";

createApp(App)
  .use(router)
  .mount("#app");
