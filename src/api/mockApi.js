import axios from "axios";
import {message} from "antd";

const api = axios.create({
    // baseURL: "https://68c7ac8d5d8d9f5147328728.mockapi.io/",
    baseURL: "http://localhost:8080",
    headers: {'Content-Type': 'application/json'},
    timeout: 10_000
})

api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        const {status} = error.response;
        if (status === 404) {
            // alert(error.message);
            message
                .error(error.message, 1_1000)
                .then(r => {})
        }

        return Promise.reject(error);
    }
);

export {api}