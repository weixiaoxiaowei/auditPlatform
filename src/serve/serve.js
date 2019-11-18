import axios from "axios"
let baseURL = "";

const Axios = axios.create({

    baseURL: baseURL,
    timeout: 1000,
    responseType: 'json',
    withCredentials: false

})
Axios.interceptors.request.use(config => {
    return config
}, error => {
    return Promise.reject(error)
})

Axios.interceptors.response.use(res => {
    if (res.status == 200) {
        return Promise.resolve(res)
    }

}, error => {
    return Promise.reject(error)
})
export default Axios