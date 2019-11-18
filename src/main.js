import Vue from 'vue'
import ElementUI from 'element-ui'

import App from './App.vue'
import router from './router'
import store from './store'

import "./router/routes.js"
import "./assets/reset.css"
import "element-ui/lib/theme-chalk/index.css"
import "./assets/baseColor.scss"


Vue.config.productionTip = false
Vue.use(ElementUI)



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
