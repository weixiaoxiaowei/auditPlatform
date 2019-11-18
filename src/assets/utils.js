import moment from "moment"
//时间格式化
const formatTime = (time, formatStr = "") => {
    return moment(time).format(formatStr)
}
export {
    formatTime
}