import {getAuthToken, handler} from "../config/main"
import {BASE_URL, BIS_URL} from "../config/constants"
import {useStore} from "vuex"

const store = useStore()

const setBearerToken = () => {
    const authToken = getAuthToken()
    window.axios.defaults.headers['Authorization'] = `Bearer ${authToken}`
}

export const getRequest = async (url, options = [], isBis = false) => {
    setBearerToken()
    /*let responseDiv = document.getElementById('loading')
    responseDiv.innerHTML = "loading"*/

    // store.commit('mutateLoading')
    return window.axios.get((isBis? BIS_URL: BASE_URL) + url).then(response => {
        // console.log("response", response);
        // store.commit('mutateLoading')
        return response.data || response
    }).catch(err => {
        // console.log("err", err);
        // store.commit('mutateError')
        handler(err.response.status)
        return err
    })/*.finally(() => {
        responseDiv.innerHTML = "Done"
    })*/
}

export const postRequest = async (url, data = {}, options = [], isBis = false) => {
    setBearerToken()
    /*let responseDiv = document.getElementById('loading')
    responseDiv.innerHTML = "loading"*/

    return window.axios.post((isBis? BIS_URL: BASE_URL) + url, data).then(response => {
        return response.data || response
    }).catch(err => {
        handler(err.response.status)
        return err
    })/*.finally(() => {
        responseDiv.innerHTML = "Done"
    })*/
}
