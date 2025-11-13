<template>
    <button 
      v-if="isVisible" 
      @click="scrolltoTop" 
      class="fixed bottom-4 right-4 bg-gradient-to-r from-green-600 to-green-800 text-white font-bold
      rounded-full w-12 h-12 flex items-center justify-center text-xl cursor-pointer 
      transition-all duration-300 hover:from-green-700 hover:to-green-900 hover:scale-105"
    >
      <!-- Add an up arrow or text here -->
      <span>&#8593;</span> <!-- Upward arrow for scroll-to-top -->
    </button>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  
  const isVisible = ref(false);
  
  const handleScroll = () => {
    // Show button when scroll is greater than 300px
    isVisible.value = window.scrollY > 300;
  };
  
  const scrolltoTop = () => {
    // Scroll to the top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  // Add scroll event listener when component is mounted
  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  });
  
  // Remove event listener when component is unmounted
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });
  </script>
  