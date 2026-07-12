import axios from 'axios';

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",// Replace with your backend API URL
});

export default api;