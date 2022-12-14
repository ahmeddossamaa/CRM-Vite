import cookies from "vue-cookies"
import {postRequest} from "../api"
import router from "../router"

export const getAuth = () => {
    return cookies.get('auth') || {}
}

export const getAuthToken = () => {
    return getAuth().authToken
}

export const logout = () => {
    postRequest('auth/logout').then(async () => {
        await clearAuth()
    })
}

export const clearAuth = async () => {
    cookies.remove('auth')
    await router.push({name: 'login'})
}

export const handler = async (status) => {
    switch (status) {
        case 401:
            await router.push({name: 'logout'})
            break
    }
}
