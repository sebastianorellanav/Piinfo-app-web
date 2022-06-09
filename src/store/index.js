import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false
  },
  mutations: {
    make_login(state){
      state.isLogin = true;
    },
    make_logout(state){
      state.isLogin = false;
    }
  },
  actions: {
  },
  modules: {
  }
})
