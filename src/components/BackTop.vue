<template>
    <button 
      v-if="isVisible" 
      @click="scrolltoTop" 
      class="fixed bottom-4 right-4 bg-gradient-to-r from-primary to-pink-500 text-white 
      rounded-full w-12 h-12 flex items-center justify-center text-xl cursor-pointer 
      transition-opacity duration-300 hover:bg-blue-600"
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
  