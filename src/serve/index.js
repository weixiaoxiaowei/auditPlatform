import axios from "./serve.js"
const login = (params) => {
    return axios.post("/api/login", params)
}
const getTaskList = (params) => {
    return axios.post("/api/getTaskList", params)
}
export {
    login, getTaskList
} 