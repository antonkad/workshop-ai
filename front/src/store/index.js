import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// root state object.
// each Vuex instance is just a single state tree.
const state = {
  startTime: 0
}

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
    setStartTime (time) {
      let start = new Date();
      state.startTime = start;
    }
}

// actions are functions that cause side effects and can involve
// asynchronous operations.
const actions = {
    setStart ({ commit }) {        
        commit('setStartTime')    
    }
}
// getters
const getters = {
    startTime: state => state.startTime
}

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})