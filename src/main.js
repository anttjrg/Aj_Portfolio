// src/main.js

import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './Router';  // Correct import without '/src'

createApp(App).use(router).mount('#app');
