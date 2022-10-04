import axios from "axios";
import cookies from "vue-cookies";

axios.defaults.headers.common['Authorization'] = cookies.get('authToken') || '';
axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';

export default axios;
