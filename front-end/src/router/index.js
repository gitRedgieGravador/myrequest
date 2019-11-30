import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Protected from "@/modules/protected.vue";
import store from '@/store/index'
import Notfound from '../modules/Notfound.vue'
import Sockets from '../modules/sample.vue'
import Form from '../modules/Form.vue'
import AllRequest from '../modules/AllRequest.vue'


Vue.use(VueRouter);
/* eslint-disable */
const routes = [{
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/login",
        name: "login",
        component: Login
    },
    {
        path: "/protected",
        component: Protected,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/socket',
        component: Sockets
    },
    {
        path: "/protected",
        component: Protected,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/form',
        name: 'form',
        component: Form,
        // meta: {
        //     requiresAuth: true
        // }
    },
    {
        path: '/allrequest',
        name: 'allrequest',
        component: AllRequest,
        // meta: {
        //     requiresAuth: true
        // }
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
            next({ path: "login" });
        }
    }
    next();
});

export default router;