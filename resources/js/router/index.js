import {createRouter, createWebHistory} from "vue-router/dist/vue-router";
import App from "../views/App.vue";
import Dashboard from "../views/Dashboard.vue";
import Users from "../views/Users.vue";
import Login from "../views/user/Login.vue";
import Center from "../views/dashboard/Center.vue";

import cookies from "vue-cookies";
import {next} from "lodash/seq";

const routes = [
    {
        path: '/',
        name: 'dashboard',
        component: Dashboard,
        children: [
            {
                path: 'dashboard',
                name: 'center',
                component: Center,
            },
            {
                path: 'users',
                name: 'users',
                component: Users,
            },
        ],
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
        beforeRouteEnter: (to, from, next) => {
            console.log("test");
            next(redirectLink);
        },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const redirectLink = '/dashboard';

router.beforeEach(async (to, from, next) => {
    let auth = cookies.get('auth') || {};

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
