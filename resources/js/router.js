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
            component: Home,
            meta: { title: "Home" }
        },
        {
            path: "/about",
            name: "about",
            component: About,
            meta: { title: "About" }
        },
        {
            path: "/contact",
            name: "contact",
            component: Contact,
            meta: { title: "Contact" }
        },
        {
            path: "/portfolio",
            name: "portfolio",
            component: Portfolio,
            meta: { title: "Portfolio" }
        }
    ]
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;

    next();
});

export default router;
