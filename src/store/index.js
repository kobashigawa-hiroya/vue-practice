import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0,
    
    
    users: [
      { id: 1, name: '木村', no:12 , email: "gmail"},
      { id: 2, name: '拓哉', no:13 , email: "gmail"},
      { id: 3, name: '宮崎', no:15 , email: "gmail"},
      { id: 4, name: '沖縄', no:152 , email: "gmail"},
      { id: 5, name: '斎藤', no:1 , email: "gmail"},
      { id: 6, name: '野原', no:126 , email: "gmail"}
    ]
  },
  mutations: {
    // increment( state ){
    //   state.count ++
    // },
    increment( state ){
      state.count ++
    },
    decrement( state ){
      state.count --
    },
    addCount( state, payload){//第２引数はオブジェクト
      state.count += payload.value
    }
  },
  actions: {
    incrementAction( {commit }){
      commit('incrementAction')
    },
    addCountAction( {commit}, payload){
        commit('addCount',payload)
    }
  },
  modules: {
  }
})
