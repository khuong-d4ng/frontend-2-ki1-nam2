import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUpView from '../views/SignUpView.vue'
import LoginView from '../views/LoginView.vue'
import AdminPage from '@/components/AdminPage.vue'; // Import AdminPage component
import UserView from '../views/UserView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUpView, // Sử dụng component SignUp cho route này
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView // Sử dụng component LoginPage cho route này
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminPage // Sử dụng component AdminPage cho route này
  },
  {
    path: '/user',
    name: 'user',
    component: UserView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
