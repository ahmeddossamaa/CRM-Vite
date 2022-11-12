import {getAuthToken, handler} from "../config/main"
import {BASE_URL} from "../config/constants"

const setBearerToken = () => {
    const authToken = getAuthToken();
    window.axios.defaults.headers['Authorization'] = `Bearer ${authToken}`;
}

export const getRequest = async (url, options = []) => {
    setBearerToken();

    return window.axios.get(BASE_URL + url).then(response => {
        return response.data;
    }).catch(err => {
        handler(err.response.status);
        return err;
    });
}

export const postRequest = async (url, data, options = []) => {
    setBearerToken();

    return window.axios.post(BASE_URL + url, data).then(response => {
        return response.data;
    }).catch(err => {
        handler(err.response.status);
        return err;
    });
}
