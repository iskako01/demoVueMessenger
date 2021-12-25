import { createApp } from "vue";
import App from "./App.vue";
import store from "./store/store";
import router from "./router/router";
import "./assets/style/styles.scss";
import "material-design-icons";
createApp(App).use(router).use(store).mount("#app");
