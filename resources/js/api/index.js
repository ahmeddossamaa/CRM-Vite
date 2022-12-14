import {getAuthToken, handler} from "../config/main"
import {BASE_URL} from "../config/constants"

const setBearerToken = () => {
    const authToken = getAuthToken()
    window.axios.defaults.headers['Authorization'] = `Bearer ${authToken}`
}

export const getRequest = async (url, options = []) => {
    setBearerToken()
    /*let responseDiv = document.getElementById('loading')
    responseDiv.innerHTML = "loading"*/

    return window.axios.get(BASE_URL + url).then(response => {
        return response.data || response
    }).catch(err => {
        handler(err.response.status)
        return err
    })/*.finally(() => {
        responseDiv.innerHTML = "Done"
    })*/
}

export const postRequest = async (url, data = {}, options = []) => {
    setBearerToken()
    /*let responseDiv = document.getElementById('loading')
    responseDiv.innerHTML = "loading"*/

    return window.axios.post(BASE_URL + url, data).then(response => {
        return response.data || response
    }).catch(err => {
        handler(err.response.status)
        return err
    })/*.finally(() => {
        responseDiv.innerHTML = "Done"
    })*/
}
