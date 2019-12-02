import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
// import Protected from "@/modules/protected.vue";
import unreadRequest from "@/views/UnreadRequests.vue";
import pendingRequest from "@/views/PendingRequests.vue";
import approvedRequest from "@/views/ApprovedRequests.vue";
import rejectedRequest from "@/views/RejectedRequests.vue";
import store from '@/store/index'
import Notfound from '../modules/Notfound.vue'
import Sockets from '../modules/sample.vue'
// import Requests from '../views/Requests.vue'
// import Requests from '../components/RequestContainer.vue'
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
        path: "/unread-request",
        component: unreadRequest,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/pending-request",
        component: pendingRequest,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/approved-request",
        component: approvedRequest,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/rejected-request",
        component: rejectedRequest,
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
            next({ path: "login" });
        }
    }
    next();
});

export default router;