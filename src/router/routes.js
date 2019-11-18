import router from './index.js'
import store from '../store'
const TOKEN = store.state.token
router.beforeEach((to, from, next) => {
    // console.log(to)
    // if (TOKEN) {
    //     next({
    //         path: "/"
    //     })
    // }
    next()
})

