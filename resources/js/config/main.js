import cookies from "vue-cookies";
import api from "../api";
import router from "../router";

const getAuth = () => {
    return cookies.get('auth') || {};
}

const logout = () => {
    api.postRequest('auth/logout').then(async (r) => {
        await clearAuth();
    });
}

const clearAuth = async () => {
    cookies.remove('auth');
}

const handler = async (status) => {
    switch (status) {
        case 401:
            await router.push({name: 'logout'});
            break;
    }
}

export default {
    getAuth,
    logout,
    clearAuth,
    handler,
}
