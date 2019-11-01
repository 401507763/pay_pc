import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 登陆是否过期
    isLogin: false,
    // 用户名
    uname: ""
  },
  getters: {
    isLogin: state => {
      return state.isLogin;
    },
    uname:state=>{
      return state.uname;
    }
  },
  mutations: {
    setIsLogin(state, isLogin) {
      state.isLogin = isLogin;
    },
    setUname(state, uname) {
      state.uname = uname;
    }
  },
  actions: {}
});
