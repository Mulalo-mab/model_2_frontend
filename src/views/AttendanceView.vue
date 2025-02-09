<template>
   <div class="p-4">
    <h2 class="text-xl font-bold mb-4 text-center">Employee Attendance</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        v-for="attendence in $store.state.attendence"
        :key="attendence"
        class="border p-4 rounded-lg shadow-lg bg-white text-gray-800"
      >
        <p class="text-lg font-semibold">Employee ID: {{ attendence.employment_id }}</p>
        <p class="text-gray-600"><strong>Date:</strong> {{ attendence.date }}</p>
        <p :class="getStatusClass(attendence.status)">
          <strong>Status:</strong> {{ attendence.status }}
        </p>
      </div>
    </div>
  </div>

</template>

<script>
export default{
 mounted(){
    this.$store.dispatch('getAttendance')
  },

  methods: {
    getStatusClass(status) {
      return status === "Present"
        ? "text-green-600 font-bold"
        : status === "Absent"
        ? "text-red-600 font-bold"
        : "text-gray-600";
    }
  }
}
</script>

<style>
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
.text-gray-800 {
  color: #333;
}
.text-gray-600 {
  color: #666;
}
</style>