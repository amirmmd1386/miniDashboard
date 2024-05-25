import axios from "axios";
export const jsAxios = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 5000
})