import axios from 'axios';

const api = axios.create({
    baseURL: 'http://megahack.dev4.com.br/'
});

export default api;