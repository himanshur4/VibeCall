import axios from "axios";
// const BASE_URL=import.meta.env.MODE==="development"?"http://localhost:5001/api":"/api"
export const axiosInstance=axios.create({
    baseURL:import.meta.env.VITE_BACKEND_URL,
    withCredentials:true, //send cookies with the request
})   