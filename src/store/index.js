import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { login, getTaskList } from "../serve/index.js"

export default new Vuex.Store({
  state: {
    userInfo: {
      infoTimes: "11",
      userName: "admin001",
      token: "",
      userGrade: "",
      userRole: ""
    },
    taskList: []

  },
  mutations: {
    login(state, data) {
      state.userInfo = data
    },
    getTaskList(state, data) {
      state.taskList = data
    }
  },
  actions: {
    login(data) {
      return login(data).then(res => {
        this.commit("login", res.data.data)
      })
    },
    getTaskList(data) {
      return getTaskList(data).then(res => {
        this.commit("getTaskList", res.data.data)
      })
    }
  },
  modules: {
  }
})
