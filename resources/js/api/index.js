import cookies from "vue-cookies";

const baseURL = 'http://127.0.0.1:8000/api/';
const auth = cookies.get('auth') || {};

export default {
    getRequest: async (url, options = []) => {
        options['Authorization'] = 'Bearer ' + auth.authToken;

        return await window.axios.get(baseURL + url, options).then(response => {
            return response.data;
        }).catch(err => {
            console.log(err);
            return err;
        });
    },
    postRequest: async (url, data, options = []) => {
        options['Authorization'] = 'Bearer ' + auth.authToken;

        return await window.axios.post(baseURL + url, data, options).then(response => {
            return response.data;
        }).catch(err => {
            console.log(err);
            return err;
        });
    },
}
