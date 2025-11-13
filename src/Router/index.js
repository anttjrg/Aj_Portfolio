import { createRouter, createWebHistory } from 'vue-router';
import IntroductionSection from '../components/IntroductionSection.vue';  // Make sure this is the correct path

const routes = [
  {
    path: '/Introduction-section',
    name: 'IntroductionSection',  // Make sure this name matches the one in the router push
    component: IntroductionSection
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
