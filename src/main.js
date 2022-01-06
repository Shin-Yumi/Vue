import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

createApp(App).use(store).use(router).mount("#app"); //리액트의 상태관리 시스템 (리덕스) 와 똑같은게 store
