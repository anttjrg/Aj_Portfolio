<template>
  <section id="skills" class="min-h-screen bg-gray-900 text-white py-20">
    <div class="max-w-7xl mx-auto px-6">
      <div class="mb-20">
        <div class="flex items-center space-x-2 mb-8">
          <div class="w-3 h-3 bg-green-400 rounded-full"></div>
          <span class="text-green-400 uppercase tracking-wide">Skills</span>
        </div>
        
        <div class="grid lg:grid-cols-2 gap-12">
          <div class="space-y-6">
            <h2 class="text-4xl lg:text-5xl font-bold">
              My <span class="text-green-400">Expertise</span>
            </h2>
            <p class="text-gray-300 text-lg">
              I offer comprehensive development and design services to bring 
              your digital vision to life with modern technologies and best practices.
            </p>
          </div>
          
          <div class="space-y-4">
            <div class="flex items-center justify-between p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer">
              <div class="flex items-center space-x-4">
                <div class="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center text-black font-bold">01</div>
                <span class="text-lg">Web Development</span>
              </div>
              <span class="text-green-400">→</span>
            </div>
            
            <div class="flex items-center justify-between p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer">
              <div class="flex items-center space-x-4">
                <div class="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center text-black font-bold">02</div>
                <span class="text-lg">UI/UX Design</span>
              </div>
              <span class="text-green-400">→</span>
            </div>
            
            <div class="flex items-center justify-between p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer">
              <div class="flex items-center space-x-4">
                <div class="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center text-black font-bold">03</div>
                <span class="text-lg">Python Development</span>
              </div>
              <span class="text-green-400">→</span>
            </div>
            
            <div class="flex items-center justify-between p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer">
              <div class="flex items-center space-x-4">
                <div class="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center text-black font-bold">04</div>
                <span class="text-lg">Database Management</span>
              </div>
              <span class="text-green-400">→</span>
            </div>
            
            <div class="flex items-center justify-between p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer">
              <div class="flex items-center space-x-4">
                <div class="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center text-black font-bold">05</div>
                <span class="text-lg">Mobile App Development</span>
              </div>
              <span class="text-green-400">→</span>
            </div>
            
            <div class="flex items-center justify-between p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer">
              <div class="flex items-center space-x-4">
                <div class="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center text-black font-bold">06</div>
                <span class="text-lg">JavaScript/Vue.js</span>
              </div>
              <span class="text-green-400">→</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Skills section component
</script>

<style scoped>
/* Custom styles for skills section */
.hover\:scale-105:hover {
  transform: scale(1.05);
}
</style>
