import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/about",
            name: "about",
            component: About
        },
        {
            path: "/contact",
            name: "contact",
            component: Contact
        },
        {
            path: "/portfolio",
            name: "portfolio",
            component: Portfolio
        }
    ]
});

export default router;
