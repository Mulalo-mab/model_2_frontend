<template>
  <h1>LEAVE - REQUEST</h1>
  {{ $store.state.leave }}

  <div class="p-6">
    <div class="container mx-auto">
      <h1 class="text-2xl font-bold text-center mb-6">Employee Leave Requests</h1>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="leave in $store.state.leave" :key="leave" class="p-4 border rounded-lg shadow-lg bg-white">
          <h2 class="text-lg font-semibold">Employee ID: {{ leave.employee_id }}</h2>
          <p class="text-gray-700"><strong>Date:</strong> {{ leave.date }}</p>
          <p class="text-gray-700"><strong>Reason:</strong> {{ leave.reason }}</p>
          <!--<p :class="getStatusClass(leave.status)"><strong>Status:</strong> {{ leave.status }}</p> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // it runs code the moment the comp load
  mounted(){
    this.$store.dispatch('getLeaves')
  }
}
// export default {
//   data() {
//     return {
//       // New leave request data
//       newRequestDate: "",
//       newRequestReason: "",
//       // Employees data
//       employees: [
//       {
//           employeeId: 1,
//           name: "Sibongile Nkosi",
//           isEmployee: true, // This flag can be used to show the time off request form to employees
//           attendance: [
//             { date: "2024-11-25", status: "Present" },
//             { date: "2024-11-26", status: "Absent" },
//             { date: "2024-11-27", status: "Present" },
//             { date: "2024-11-28", status: "Present" },
//             { date: "2024-11-29", status: "Present" },
//           ],
//           leaveRequests: [
//             { date: "2024-11-22", reason: "Sick Leave", status: "Approved" },
//             { date: "2024-12-01", reason: "Personal", status: "Pending" },
//           ],
//         },
//         {
//           employeeId: 2,
//           name: "Lungile Moyo",
//           isEmployee: true, // This flag can be used to show the time off request form to employees
//           attendance: [
//             { date: "2024-11-25", status: "Present" },
//             { date: "2024-11-26", status: "Present" },
//             { date: "2024-11-27", status: "Absent" },
//             { date: "2024-11-28", status: "Present" },
//             { date: "2024-11-29", status: "Present" },
//           ],
//           leaveRequests: [
//             { date: "2024-11-15", reason: "Family Responsibility", status: "Denied" },
//             { date: "2024-12-02", reason: "Vacation", status: "Approved" },
//           ],
//         },
//         {
//           employeeId: 3,
//           name: "Thabo Molefe",
//           isEmployee: true, // This flag can be used to show the time off request form to employees
//           attendance: [
//             { date: "2024-11-25", status: "Present" },
//             { date: "2024-11-26", status: "Present" },
//             { date: "2024-11-27", status: "Present" },
//             { date: "2024-11-28", status: "Absent" },
//             { date: "2024-11-29", status: "Present" },
//           ],
//           leaveRequests: [
//             { date: "2024-11-10", reason: "Medical Appointment", status: "Approved" },
//             { date: "2024-12-05", reason: "Personal", status: "Pending" },
//           ],
//         },
//         {
//           employeeId: 4,
//           name: "Keshav Naidoo",
//           isEmployee: true, // This flag can be used to show the time off request form to employees
//           attendance: [
//             { date: "2024-11-25", status: "Absent" },
//             { date: "2024-11-26", status: "Present" },
//             { date: "2024-11-27", status: "Present" },
//             { date: "2024-11-28", status: "Present" },
//             { date: "2024-11-29", status: "Present" },
//           ],
//           leaveRequests: [
//             { date: "2024-11-20", reason: "Bereavement", status: "Approved" },
//           ],
//         },
//         {
//           employeeId: 5,
//           name: "Zanele Khumalo",
//           isEmployee: true, // This flag can be used to show the time off request form to employees
//           attendance: [
//             { date: "2024-11-25", status: "Present" },
//             { date: "2024-11-26", status: "Present" },
//             { date: "2024-11-27", status: "Absent" },
//             { date: "2024-11-28", status: "Present" },
//             { date: "2024-11-29", status: "Present" },
//           ],
//           leaveRequests: [
//             { date: "2024-12-01", reason: "Childcare", status: "Pending" },
//           ],
//         },
//         {
//           employeeId: 6,
//           name: "Sipho Zulu",
//           isEmployee: true, // This flag can be used to show the time off request form to employees
//           attendance: [
//             { date: "2024-11-25", status: "Present" },
//             { date: "2024-11-26", status: "Present" },
//             { date: "2024-11-27", status: "Absent" },
//             { date: "2024-11-28", status: "Present" },
//             { date: "2024-11-29", status: "Present" },
//           ],
//           leaveRequests: [
//             { date: "2024-11-18", reason: "Sick Leave", status: "Approved" },
//           ],
//         },
//         {
//           employeeId: 7,
//           name: "Naledi Moeketsi",
//           isEmployee: true, // This flag can be used to show the time off request form to employees
//           attendance: [
//             { date: "2024-11-25", status: "Present" },
//             { date: "2024-11-26", status: "Present" },
//             { date: "2024-11-27", status: "Present" },
//             { date: "2024-11-28", status: "Absent" },
//             { date: "2024-11-29", status: "Present" },
//           ],
//           leaveRequests: [
//             { date: "2024-11-22", reason: "Vacation", status: "Pending" },
//           ],
//         },
//         {
//           employeeId: 8,
//           name: "Farai Gumbo",
//           isEmployee: true, // This flag can be used to show the time off request form to employees
//           attendance: [
//             { date: "2024-11-25", status: "Present" },
//             { date: "2024-11-26", status: "Absent" },
//             { date: "2024-11-27", status: "Present" },
//             { date: "2024-11-28", status: "Present" },
//             { date: "2024-11-29", status: "Present" },
//           ],
//           leaveRequests: [
//             { date: "2024-12-02", reason: "Medical Appointment", status: "Approved" }
//             ],
//         },
//         {
//             employeeId: 9,
//             name: "Karabo Dlamini",
//             isEmployee: true, // This flag can be used to show the time off request form to employees
//             attendance: [
//                 {date: "2024-11-25", status: "Present"},
//                 {date: "2024-11-26", status: "Present"},
//                 {date: "2024-11-27", status: "Present"},
//                 {date: "2024-11-28", status: "Absent" },
//                 {date: "2024-11-29",  status: "Present" }
//             ],
//             leaveRequests: [
//                 {date: "2024-11-19", reason: "Childcare", status: "Denied"}
//             ]
//         },
//         {
//             employeeId: 10,
//             name: "Fatima Patel",
//             isEmployee: true, // This flag can be used to show the time off request form to employees
//             attendance: [
//                 {date: "2024-11-25", status: "Present"},
//                 {date: "2024-11-26", status: "Present"},
//                 {date: "2024-11-27", status: "Absent"},
//                 {date: "2024-11-28", status: "Present"},
//                 {date: "2024-11-29", status: "Present" }
//             ],
//             leaveRequests: [
//                 {date: "2024-12-03", reason: "Vacation", status: "Pending"
//                 }
//             ]
//         }
//       ],
//     };
//   },
//   methods: {
//     // Submit a leave request
//     submitLeaveRequest(employee) {
//       // Create the new leave request object
//       const newRequest = {
//         date: this.newRequestDate,
//         reason: this.newRequestReason,
//         status: "Pending",
//       };

//       // Add the request to the employee's leaveRequests array
//       employee.leaveRequests.push(newRequest);

//       // Reset form fields
//       this.newRequestDate = "";
//       this.newRequestReason = "";
//     },

//     // Approve a leave request
//     approveLeave(employee, request) {
//       const attendanceRecord = employee.attendance.find(
//         (day) => day.date === request.date
//       );

//       if (attendanceRecord) {
//         attendanceRecord.status = "On Leave";
//       }

//       request.status = "Approved";
//     },

//     // Deny a leave request
//     denyLeave(employee, request) {
//       request.status = "Denied";
//     },

//     // Get CSS class based on status
//     getStatusClass(status) {
//       switch (status) {
//         case "Present":
//           return "text-success";
//         case "Absent":
//           return "text-danger";
//         case "On Leave":
//           return "text-warning";
//         default:
//           return "";
//       }
//     },
//   },
// };
</script>

<style scoped>
.grid {
  display: grid;
  gap: 1rem;
}
.border {
  border: 1px solid #ddd;
}
.rounded-lg {
  border-radius: 8px;
}
.shadow-lg {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.bg-white {
  background-color: white;
}
.text-green-600 {
  color: green;
}
.text-yellow-600 {
  color: goldenrod;
}
.text-red-600 {
  color: red;
}
</style>
