<template>
  <div class="cont">
<<<<<<< HEAD
  
  
=======

    <!-- Add Employee Button -->
    <div>
    <!-- Add Employee Button -->
    <div class="mt-4 text-end">
      <button class="btn btn-primary" @click="openAddEmployeeModal">
        Add Employee
      </button>
    </div>

    <!-- Employee Modal -->
    <div v-if="isModalOpen" class="modal-overlay">
      <div class="modal-content">
        <h3>Add New Employee</h3>

        <form @submit.prevent="submitEmployee">
  <label>Employee ID:</label>
  <input v-model="newEmployee.employee_id" type="number" required />

  <label>Name:</label>
  <input v-model="newEmployee.name" type="text" required />

  <label>Position:</label>
  <input v-model="newEmployee.position" type="text" required />

  <label>Department:</label>
  <input v-model="newEmployee.department" type="text" required />

  <label>Salary:</label>
  <input v-model="newEmployee.salary" type="number" required />

  <label>Employment History:</label>
  <textarea v-model="newEmployee.employment_history" required></textarea>

  <label>Contact:</label>
  <input v-model="newEmployee.contact" type="email" required />

  <div class="modal-actions">
    <button type="submit" class="btn btn-success" @click= "postEmployees">Save</button>
    <button type="button" class="btn btn-danger" @click="closeModal">Cancel</button>
  </div>
</form>

      </div>
      </div>
      </div>
>>>>>>> 7e15018 (Updated the project with new functions and connections to the back end)
  <table class="table table-striped mt-4" border="1" cellspacing="0" cellpadding="8">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Position</th>
          <th>Department</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="employee in $store.state.employees" :key="employee">
          <td>{{ employee.employee_id }}</td>
          <td>{{ employee.name }}</td>
          <td>{{ employee.position }}</td>
          <td>{{ employee.department }}</td>
          <td>
            <button class="btn btn-info btn-sm" @click="showEmployeeDetails(index)">
              Show More
            </button>
            <button class="btn btn-danger btn-sm" @click="deleteEmployees(employee.employee_id)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
</div>
</template>

<script>
export default {
<<<<<<< HEAD
  // it runs code the moment the components load
  mounted() {
    this.$store.dispatch('getData')
  },
  methods: {
  deleteEmployees(employee_id) {
    this.$store.dispatch('deleteEmployees', employee_id)
  }
  }
}
=======
  // Runs code when the component loads
  mounted() {
    this.$store.dispatch("getData");
  },

  data() {
    return {
      isModalOpen: false,
      newEmployee: {
      employee_id: "",
      name: "",
      position: "",
      department: "",
      salary: "",
      employment_history: "",
      contact: "",
      },
    };
  },

  methods: {
    // Delete an Employee
    deleteEmployees(employee_id) {
      this.$store.dispatch("deleteEmployees", employee_id);
    },
    // Post Employees
    postEmployees(){
      this.$store.dispatch('postEmployees', this.newEmployee) // data function
    },

    // Open the Modal
    openAddEmployeeModal() {
      this.isModalOpen = true;
    },

    // Close the Modal
    closeModal() {
      this.isModalOpen = false;
      this.resetForm();
    },

    // Submit Employee Data (Replace with API Call)
    submitEmployee() {
      console.log("New Employee Data:", this.newEmployee);

      // Here, you would send data to the backend API (e.g., using Axios)
      // axios.post('/api/employees', this.newEmployee).then(response => {
      //   console.log("Employee Added:", response.data);
      // });

      // Close modal after submitting
      this.closeModal();
    },

    // Reset Form Fields
    resetForm() {
      this.newEmployee = {
        name: "",
        position: "",
        department: "",
        salary: "",
      };
    },
  },
};
>>>>>>> 7e15018 (Updated the project with new functions and connections to the back end)

// export default {
//   data() {
//     return {
//       employees: [
//         {
//           employeeId: 1,
//           name: "Sibongile Nkosi",
//           position: "Software Engineer",
//           department: "Development",
//           salary: 70000,
//           employmentHistory: "Joined in 2015, promoted to Senior in 2018",
//           contact: "sibongile.nkosi@moderntech.com",
//         },
//         {
//           employeeId: 2,
//           name: "Lungile Moyo",
//           position: "HR Manager",
//           department: "HR",
//           salary: 80000,
//           employmentHistory: "Joined in 2013, promoted to Manager in 2017",
//           contact: "lungile.moyo@moderntech.com",
//         },
//         {
//           employeeId: 3,
//           name: "Thabo Molefe",
//           position: "Quality Analyst",
//           department: "QA",
//           salary: 55000,
//           employmentHistory: "Joined in 2018",
//           contact: "thabo.molefe@moderntech.com",
//         },
//         {
//           employeeId: 4,
//           name: "Keshav Naidoo",
//           position: "Sales Representative",
//           department: "Sales",
//           salary: 60000,
//           employmentHistory: "Joined in 2020",
//           contact: "keshav.naidoo@moderntech.com",
//         },
//         {
//           employeeId: 5,
//           name: "Zanele Khumalo",
//           position: "Marketing Specialist",
//           department: "Marketing",
//           salary: 58000,
//           employmentHistory: "Joined in 2019",
//           contact: "zanele.khumalo@moderntech.com",
//         },
//         {
//           employeeId: 6,
//           name: "Sipho Zulu",
//           position: "UI/UX Designer",
//           department: "Design",
//           salary: 65000,
//           employmentHistory: "Joined in 2016",
//           contact: "sipho.zulu@moderntech.com",
//         },
//         {
//           employeeId: 7,
//           name: "Naledi Moeketsi",
//           position: "DevOps Engineer",
//           department: "IT",
//           salary: 72000,
//           employmentHistory: "Joined in 2017",
//           contact: "naledi.moeketsi@moderntech.com",
//         },
//         {
//           employeeId: 8,
//           name: "Farai Gumbo",
//           position: "Content Strategist",
//           department: "Marketing",
//           salary: 56000,
//           employmentHistory: "Joined in 2021",
//           contact: "farai.gumbo@moderntech.com",
//         },
//         {
//           employeeId: 9,
//           name: "Karabo Dlamini",
//           position: "Accountant",
//           department: "Finance",
//           salary: 62000,
//           employmentHistory: "Joined in 2018",
//           contact: "karabo.dlamini@moderntech.com",
//         },
//         {
//           employeeId: 10,
//           name: "Fatima Patel",
//           position: "Customer Support Lead",
//           department: "Support",
//           salary: 58000,
//           employmentHistory: "Joined in 2016",
//           contact: "fatima.patel@moderntech.com",
//         },
//       ],
//       searchQuery: "",
//       showModal: false,
//       showAddEmployeeModal: false,
//       selectedEmployee: null,
//       newEmployee: {
//         name: "",
//         position: "",
//         department: "",
//         salary: null,
//         employmentHistory: "",
//         contact: "",
//       },
//     };
//   },
//   computed: {
//     // Filters employees based on the search query
//     filteredEmployees() {
//       return this.employees.filter((employee) =>
//         employee.name.toLowerCase().includes(this.searchQuery.toLowerCase())
//       );
//     },
//   },
//   methods: {
//     // Deletes an employee by index
//     deleteEmployee(index) {
//       this.employees.splice(index, 1);
//     },
//     // Shows detailed information about an employee
//     showEmployeeDetails(index) {
//       this.selectedEmployee = { ...this.filteredEmployees[index] };
//       this.showModal = true;
//     },
//     // Closes the details modal
//     closeModal() {
//       this.showModal = false;
//       this.selectedEmployee = null;
//     },
//     // Opens the add employee modal
//     openAddEmployeeModal() {
//       this.showAddEmployeeModal = true;
//     },
//     // Closes the add employee modal and resets the form
//     closeAddEmployeeModal() {
//       this.showAddEmployeeModal = false;
//       this.resetNewEmployeeForm();
//     },
//     // Adds a new employee to the list
//     addEmployee() {
//       const newEmployeeId = this.employees.length + 1;
//       const employeeToAdd = {
//         employeeId: newEmployeeId,
//         ...this.newEmployee,
//       };
//       this.employees.push(employeeToAdd);
//       this.closeAddEmployeeModal();
//     },
//     // Resets the form for adding a new employee
//     resetNewEmployeeForm() {
//       this.newEmployee = {
//         name: "",
//         position: "",
//         department: "",
//         salary: null,
//         employmentHistory: "",
//         contact: "",
//       };
//     },
//   },
// };
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
}


.container {
  margin-top: 20px;
  
}

.modal-content {
  padding: 20px;
  border-radius: 5px;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
}

/* Media Queries */
@media (max-width: 576px) {
  .table {
    font-size: 0.8rem;
  }

  .modal-content {
    padding: 15px;
  }

  h1 {
    font-size: 1.5rem;
  }
}

@media (min-width: 577px) and (max-width: 768px) {
  .table {
    font-size: 0.9rem;
  }

  h1 {
    font-size: 2rem;
  }
}

@media (min-width: 769px) and (max-width: 992px) {
  .table {
    font-size: 1rem;
  }

  h1 {
    font-size: 2.5rem;
  }
}

@media (min-width: 993px) {
  .table {
    font-size: 1.1rem;
  }

  h1 {
    font-size: 3rem;
  }
}
</style>