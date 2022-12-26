import {createRouter, createWebHistory} from "vue-router/dist/vue-router"
import {getAuthToken, logout} from "../config/main.js"
import Dashboard from "../views/Dashboard.vue"
import Login from "../views/user/Login.vue"
import Index from "../components/modules/projects/Index.vue"
import Show from "../components/modules/projects/Show.vue"
import {APP_NAME} from "../config/constants"
import TestComponent from "../components/tests/TestComponent.vue";

const redirectLink = '/'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Dashboard,
        meta: {
            auth: true,
        },
        children: [
            {
                path: 'projects',
                name: 'projects',
                component: Index,
            },
            {
                path: ':id',
                name: 'project',
                props: true,
                component: Show,
            },
            {
                path: 'test',
                name: 'test',
                component: TestComponent,
            },
        ],
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
                await logout()
                next('/login')
            }
        },
        meta: {
            auth: true,
        }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach(async (to, from, next) => {
    let authToken = getAuthToken()

    // document.title = `${APP_NAME} | ${to.name.charAt(0).toUpperCase() + to.name.slice(1)}`;

    if (to.meta.auth){
        if (!authToken){
            next('login')
        }else{
            next()
        }
    }else{
        if(authToken){
            next(from.path || redirectLink)
        }else{
            next()
        }
    }
})

export default router
