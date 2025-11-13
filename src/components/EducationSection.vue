<template>
  <section id="education" class="bg-gray-900 text-white pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-8 sm:pb-12 md:pb-16 lg:pb-20 relative overflow-hidden">
    <!-- Background Design Elements -->
    <div class="absolute top-10 left-10 w-32 h-32 bg-green-400 opacity-10 rounded-full blur-3xl"></div>
    <div class="absolute bottom-20 right-20 w-48 h-48 bg-green-400 opacity-5 rounded-full blur-3xl"></div>
    <div class="absolute top-1/2 left-0 w-1 h-32 bg-gradient-to-b from-green-400 to-transparent opacity-30"></div>
    <div class="absolute top-1/3 right-0 w-1 h-24 bg-gradient-to-t from-green-400 to-transparent opacity-30"></div>
    
    <div class="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 flex justify-center">
      <!-- Education Container Box -->
      <div class="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 w-full max-w-4xl shadow-2xl relative grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-4 sm:gap-6 md:gap-8 items-start">
        <!-- Education Section -->
        <div>
          <div class="space-y-4 sm:space-y-6">
            <div class="flex items-center space-x-2 mb-3 sm:mb-4">
              <div class="w-3 h-3 bg-green-400 rounded-full"></div>
              <span class="text-green-400 uppercase tracking-wide">Education</span>
            </div>
            <h2 class="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-relaxed">
              <div class="whitespace-nowrap">Technological Institute of the Philippines, Manila</div>
              <span class="text-green-400">Computer Engineering</span>
            </h2>
            <span class="text-green-400 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold">Major in Cyber Security</span>
              <span class="text-green-400 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold"> (2021 - 2025)</span>
          </div>
        </div>
        
        <!-- TIP Logo on the right -->
        <div class="flex justify-center lg:justify-end">
          <div class="bg-gray-700 rounded-xl p-4">
            <img 
              src="../assets/TIP.png" 
              alt="TIP Manila Campus" 
              class="w-20 h-20 lg:w-24 lg:h-24 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Education section component
</script>

<style scoped>
/* Custom styles for education section */
</style>
