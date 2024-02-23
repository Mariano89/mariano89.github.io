import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import store from "./store";
import router from "./router";
import Vue3Marquee from "vue3-marquee";
import "./styles/global.scss";

createApp(App).use(store).use(router).use(Vue3Marquee).mount("#app");
