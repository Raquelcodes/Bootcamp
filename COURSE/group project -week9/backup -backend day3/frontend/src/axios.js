import axios from 'axios';


const instance = axios.create({
    baseURL: "http://157.230.114.149/backend/"
});

instance.defaults.baseURL = "http://157.230.114.149/backend/";
instance.defaults.headers.post['Content-Type'] = 'application/json'

export default instance;