const data = require("./data.json")


module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "~@/assets/baseColor.scss";`
            }
        }
    },
    devServer: {
        before(app) {
            app.post('/api/login', (req, res) => {
                res.json({
                    errno: 0, data: data.userInfo
                })
            })
            app.post('/api/getTaskList', (req, res) => {
                res.json({
                    errno: 0, data: data.taskList
                })
            })
        }
    }

}