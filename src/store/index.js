import { createStore } from 'vuex'

export default createStore({
  state: {
    // for variable
<<<<<<< HEAD
    employees:null
=======
    employees:null,
    attendence: null,
    leave:null
>>>>>>> 7e15018 (Updated the project with new functions and connections to the back end)
  },
  // commit
  mutations: {
    setEmployees(state,payload){
      state.employees = payload
<<<<<<< HEAD
=======
    }, 
    setPayrolls(state,payload){
      state.employees = payload
    },

    setAttendence(state,payload){
      state.attendence = payload
    },

    setLeave(state,payload){
      state.leave = payload
>>>>>>> 7e15018 (Updated the project with new functions and connections to the back end)
    }
  },
  // dispatch
  actions: {
<<<<<<< HEAD
=======
    // employee get
>>>>>>> 7e15018 (Updated the project with new functions and connections to the back end)
    async getData({commit},payload){
      let {employees} = await (await fetch('http://localhost:4000/employee')).json()


      // let employees = await fetch('http://localhost:4000/employee')
      // let info = await employees.json()
      //console.log(employees);
      commit('setEmployees', employees)
    },
<<<<<<< HEAD
=======
    // employee delete
>>>>>>> 7e15018 (Updated the project with new functions and connections to the back end)
    async deleteEmployees({ commit }, employee_id) {
      await fetch('http://localhost:4000/employee/' + employee_id, {
        method: 'DELETE'
      })
      location.reload()
      //console.log(employee_id)
<<<<<<< HEAD
=======
    },
    // employee post
    async postEmployees({commit}, employee){
      console.log(employee);
      await fetch('http://localhost:4000/employee', {
        method: 'POST',
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify({
          employee_id: employee.employee_id,
          name: employee.name,  
          position: employee.position,
          department: employee.department,
          salary: employee.salary,
          employment_history: employee.employment_history,
          contact: employee.contact
        }),
      })
      location.reload()
      
    },

    // Payroll
    async getPayroll({commit},payload){
      let {employees} = await (await fetch('http://localhost:4000/payroll')).json()
      commit('setPayrolls',employees)
    },

    // Attendence Get
    async getAttendance({commit},payload){
      let {attendence} = await (await fetch('http://localhost:4000/attendence')).json()
      commit('setAttendence', attendence)
    },

    // Leave get
    async getLeaves({commit},payload){
      let {leave} = await (await fetch('http://localhost:4000/leave')).json()
      //console.log(leave);
      commit('setLeave', leave)
>>>>>>> 7e15018 (Updated the project with new functions and connections to the back end)
    }
    
  },
  modules: {
  }
})
