import axios from "axios";
const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    credentials: 'include'
});

// Add response interceptor to handle 401 errors
axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response?.status === 401) {
            // Redirect to login page on 401 unauthorized
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);   