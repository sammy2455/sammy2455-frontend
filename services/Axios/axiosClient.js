import axios from "axios";

const instance = axios.create({
    baseURL: process.env.API_HOST,
    timeout: 1000,
    headers: {'Accept': 'application/json'}
});

export default instance;