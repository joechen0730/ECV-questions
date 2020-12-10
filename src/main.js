import { createApp } from "vue";
import App from "./App.vue";
import Axios from "axios";
import VueAxios from "vue-axios";
import "bootstrap";

window.$ = window.jQuery = require("jquery");
const app = createApp(App);
app.use(VueAxios, Axios);
app.mount("#app");
