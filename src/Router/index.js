import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Login.vue';
import AjSection from '../components/AjSection.vue';  // Make sure this is the correct path

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/aj-section',
    name: 'AjSection',  // Make sure this name matches the one in the router push
    component: AjSection
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
