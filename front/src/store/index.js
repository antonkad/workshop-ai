import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// root state object.
// each Vuex instance is just a single state tree.
const state = {
  startTime: 0,
  lastClickTime: 0,
  timeClicksGap: [],
  averageTimeBetweenClicks: 0,
  homeReturn: 0,
  backAction: 0
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
    },
    incrementBackHome () {
        state.homeReturn++
    },
    incrementBack () {
        state.backAction++
    },    
    setAverageTimeClicks(state, time){       
        if(state.timeClicksGap.length == 0){
            var timeDiff = Math.abs(state.startTime.getTime() - time.getTime());
            state.lastClickTime = time;
            state.averageTimeBetweenClicks =  timeDiff;
            state.timeClicksGap.push(timeDiff);
        } else {
            var timeDiff = Math.abs(time.getTime() - state.lastClickTime.getTime());
            state.timeClicksGap.push(timeDiff);
            state.lastClickTime = time;
            var average = arr => arr.reduce( ( p, c ) => p + c, 0 ) / arr.length;
            state.averageTimeBetweenClicks =  average(state.timeClicksGap);
        }
        
    }
}

// actions are functions that cause side effects and can involve
// asynchronous operations.
const actions = {
    incrementBackHome ({ commit }) {        
        commit('incrementBackHome')    
    },
    setStart ({ commit }) {        
        commit('setStartTime')    
    },
    setAverageTime ({ commit, state }, time) {        
        commit('setAverageTimeClicks', time);
    }
}
// getters
const getters = {
    startTime: state => state.startTime,
    averageTimeBetweenClicks: state => state.averageTimeBetweenClicks,
    homeReturn: state => state.homeReturn,
    backAction: state => state.backAction
}

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})