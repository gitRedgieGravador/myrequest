import Vue from "vue";
import VueRouter from "vue-router";
//import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Protected from "@/modules/protected.vue";
import store from '@/store/index'
import Notfound from '../modules/Notfound.vue'
import Sockets from '../modules/sample.vue'
import Educator from '../views/Educator.vue'
Vue.use(VueRouter);
/* eslint-disable */
const routes = [{
        path: "/",
        name: "home",
        component: Login
    },
    // {
    //     path: "/login",
    //     name: "login",
    //     component: Login
    // },
    {
        path: "/protected",
        component: Protected,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/educator",
        component: Educator,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/socket',
        component: Sockets
    },
    {
        path: '*',
        component: Notfound
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(route => route.meta.requiresAuth)) {
        if (store.getters.isLoggedIn) {
            next();
        } else {
            next({ path: "/" });
        }
    }
    next();
});

export default router;