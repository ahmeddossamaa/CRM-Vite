import {createRouter, createWebHistory} from "vue-router/dist/vue-router"
import {getAuth, getAuthToken, logout} from "../config/main.js"

import Dashboard from "../views/Dashboard.vue"
import Login from "../views/user/Login.vue"

const routes = [
    {
        path: '/',
        name: 'dashboard',
        component: Dashboard,
        meta: {
            auth: true,
        },
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            auth: false,
        }
    },
    {
        path: '/logout',
        name: 'logout',
        component: {
            beforeRouteEnter: async (to, from, next) => {
                await logout();
                next('/login');
            }
        },
        meta: {
            auth: true,
        }
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const redirectLink = '/';

router.beforeEach(async (to, from, next) => {
    let authToken = getAuthToken();

    if (to.meta.auth){
        if (!authToken){
            next('login');
        }else{
            next();
        }
    }else{
        if(authToken){
            next(from.path || redirectLink);
        }else{
            next();
        }
    }
});

export default router;
