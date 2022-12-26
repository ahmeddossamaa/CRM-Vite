import {getAuthToken, handler} from "../config/main"
import {BASE_URL, BIS_URL} from "../config/constants"
import {useStore} from "vuex"

const store = useStore()

const setBearerToken = () => {
    window.axios.defaults.headers['Authorization'] = `Bearer ${getAuthToken()}`
}

export const getRequest = async (url, isBis = false) => {
    setBearerToken()

    return window.axios.get((isBis? BIS_URL: BASE_URL) + url).then(response => {
        return response.data || response
    }).catch(err => {
        handler(err.response.status)
        return err
    })
}

export const postRequest = async (url, data = {}, isBis = false) => {
    setBearerToken()

    return window.axios.post((isBis? BIS_URL: BASE_URL) + url, data).then(response => {
        return response.data || response
    }).catch(err => {
        handler(err.response.status)
        return err
    })
}
