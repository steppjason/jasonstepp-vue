import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
import ref from "vue-ref";
import store from "@/store";

import "@/assets/styles/style.scss";


createApp(App).use(store).use(router).use(ref).mount("#app");
