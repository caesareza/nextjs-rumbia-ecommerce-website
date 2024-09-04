import axios, { AxiosInstance } from 'axios'

const axiosInstance: AxiosInstance = axios.create({
    baseURL: 'https://fakestoreapi.com',
    timeout: 20000, // Timeout after 10 seconds
    headers: {
        'Content-Type': 'application/json',
    },
    // If you need to send cookies or use cross-site requests
    // withCredentials: true,
})

export default axiosInstance
