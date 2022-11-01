import {createRouter, createWebHistory} from "vue-router/dist/vue-router";
import App from "../views/App.vue";
import Dashboard from "../views/Dashboard.vue";
import Users from "../views/Users.vue";
import User from "../views/User.vue";
import Login from "../views/user/Login.vue";
import Center from "../views/dashboard/Center.vue";

import cookies from "vue-cookies";
import main from "../config/main";

const routes = [
    {
        path: '/',
        name: 'home',
        component: Dashboard,
        meta: {
            auth: true,
        }
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
                await main.logout();
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
    let auth = main.getAuth();

    if (to.meta.auth){
        if (!auth.authToken){
            next('login');
        }else{
            if(to.name === 'dashboard'){
                next(redirectLink);
            }else {
                next();
            }
        }
    }else{
        if(auth.authToken){
            next(from.path || redirectLink);
        }else{
            next();
        }
    }
});

export default router;
