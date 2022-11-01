import main from "../config/main";
import constants from "../config/constants";
import cookies from "vue-cookies";

const auth = main.getAuth();

export default {
    getRequest: async (url, options = []) => {
        let authToken = '';
        if(cookies.get('auth')){
            authToken = cookies.get('auth').authToken;
        }
        window.axios.defaults.headers['Authorization'] = 'Bearer ' + authToken;
        return await window.axios.get(constants.BASE_URL + url).then(response => {
            return response.data;
        }).catch(err => {
            console.log("get", err);
            main.handler(err.response.status);
            return err;
        });
    },
    postRequest: async (url, data, options = []) => {
        let authToken = '';
        if(cookies.get('auth')){
            authToken = cookies.get('auth').authToken;
        }
        window.axios.defaults.headers['Authorization'] = 'Bearer ' + authToken;
        return await window.axios.post(constants.BASE_URL + url, data).then(response => {
            return response.data;
        }).catch(err => {
            console.log("post", err);
            main.handler(err.response.status);
            return err;
        });
    },
}
