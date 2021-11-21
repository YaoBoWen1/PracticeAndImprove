import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: '识界'
  },
  mutations: {
    changeName(state, name){
      state.name = name
    }
  },
  actions: {
    CHANGE({commit, state}, datas){ //解构写法 {commit, state} = context
      console.log(state, datas)
      commit('changeName', datas.data)
    },
    changeAgain({commit, state}, datas){ //方法名字小写也可
      console.log(state, datas)
      commit('changeName', datas.data)
    }
  },
  modules: {
  }
})
