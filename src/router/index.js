import Vue from 'vue'
import VueRouter from 'vue-router'

// import Home from '../views/Home.vue'
import Login from '../views/login/index.vue'


Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {}
  },
  {
    path: '/index',
    name: 'index',
    component: () => import(/* webpackChunkName: "about" */ '../views/index/index.vue'),
    children: [
      {
        path: "home",
        name: "home",
        component: () => import(/* webpackChunkName: "about" */ '../views/home/index.vue'),
      },
      {
        path: 'pendingList',
        name: 'pendingList',
        component: () => import(/* webpackChunkName: "about" */ '../views/pendingList/index.vue'),
      },
    ]
  },

  {
    path: "*",
    redirect: "/login"
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
