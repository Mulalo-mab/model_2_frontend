import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '@/views/LoginView.vue';
import HomeView from '../views/HomeView.vue';
import EmployeeView from '@/views/EmployeeView.vue';
import PayrollView from '@/views/PayrollView.vue';
<<<<<<< HEAD
import TimeoffView from '@/views/TimeoffView.vue';
=======
import LeaveView from '@/views/LeaveView.vue';
import AttendanceView from '@/views/AttendanceView.vue';
>>>>>>> 7e15018 (Updated the project with new functions and connections to the back end)

const routes = [
  {
    path: '/',
    redirect: '/login', // Redirect root path to the login page
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/employee',
    name: 'employee',
    component: EmployeeView,
  },
  {
    path: '/payroll',
    name: 'payroll',
    component: PayrollView,
  },
  {
<<<<<<< HEAD
    path: '/timeoff',
    name: 'timeoff',
    component: TimeoffView,
=======
    path: '/attendance',
    name: 'attendance',
    component: AttendanceView
  },
  {
    path: '/leave',
    name: 'leave',
    component: LeaveView,
>>>>>>> 7e15018 (Updated the project with new functions and connections to the back end)
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
