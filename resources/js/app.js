require("./bootstrap");

window.Vue = require("vue");

// Vue.component("App", require("./components/App.vue").default);

import router from "./router";

const app = new Vue({
    el: "#app",
    router
});
