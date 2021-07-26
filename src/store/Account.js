import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      data: [],
  },
  getters: {
    accounts: (state) => state.data,
  },
  mutations: {
    fetch(state, {res}) {
      state.data = res.data
    },
    add(state, {payload}) {
      state.data.push(payload)
    },
    edit(state, {payload}) {
      state.data[payload.index].Income = payload.Income
      state.data[payload.index].Expense = payload.Expense
      state.data[payload.index].Date = payload.Date
      state.data[payload.index].Detail = payload.Detail
    }
  },
  actions: {
    editAccount({commit}, payload) {
      commit('edit', {payload})
    },
    //commit เป็น keyword ไว้เรียก mutation
    fetchAccount ({commit}) {
      let res = require('@/Json/AccountData')
    commit("fetch", { res })
    },
    addAccount ({commit}, payload) {
      commit("add", {payload})
    },
  },
  modules: {

  }
})