import { createStore } from 'vuex'

export default createStore({
  state: {
    // for variable
    employees:null
  },
  // commit
  mutations: {
    setEmployees(state,payload){
      state.employees = payload
    }
  },
  // dispatch
  actions: {
    async getData({commit},payload){
      let {employees} = await (await fetch('http://localhost:4000/employee')).json()


      // let employees = await fetch('http://localhost:4000/employee')
      // let info = await employees.json()
      //console.log(employees);
      commit('setEmployees', employees)
    },
    async deleteEmployees({ commit }, employee_id) {
      await fetch('http://localhost:4000/employee/' + employee_id, {
        method: 'DELETE'
      })
      location.reload()
      //console.log(employee_id)
    }
    
  },
  modules: {
  }
})
