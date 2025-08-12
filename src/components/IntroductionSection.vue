<template>
  <section id="about" class="min-h-screen bg-gray-900 text-white relative overflow-hidden">
    <!-- Hero Section -->
    <div class="max-w-8xl mx-auto px-14 py-16">
      <!-- Main Hero Content -->
      <div class="grid lg:grid-cols-2 gap-120 items-center mb-20">
        <div class="space-y-8 lg:pl-32 flex flex-col justify-center">
          <h1 class="text-5xl lg:text-6xl font-bold leading-tight">
            <div class="whitespace-nowrap">
              <span class="text-white">I'm </span><span class="text-green-400">Anette Babatio</span>
            </div>
            <div class="text-white">Web & App Developer</div>
          </h1>
          <p class="text-gray-300 text-lg max-w-lg leading-relaxed">
            A Computer Engineering graduate and passionate about creating digital solutions. 
            I specialize in full-stack development, combining technical expertise with 
            creative design to build innovative web and mobile applications.
          </p>
          <div class="flex">
            <button class="bg-green-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-green-300 transition-colors">
              DISCOVER MY WORK
            </button>
          </div>
          
          <!-- Contact Information Section -->
          <div class="bg-gray-800 rounded-xl p-6 mt-8">
            <div class="grid grid-cols-2 gap-4">
              <!-- Email -->
              <div class="flex items-center space-x-3">
                <div class="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                  <svg class="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
                <span class="text-gray-300 text-sm">anette.e.babatio@gmail.com</span>
              </div>
              
              <!-- Phone -->
              <div class="flex items-center space-x-3">
                <div class="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                  <svg class="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                </div>
                <span class="text-gray-300 text-sm">+639532992920</span>
              </div>
              
              <!-- LinkedIn -->
              <div class="flex items-center space-x-3">
                <div class="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                  <svg class="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <span class="text-gray-300 text-sm">linkedin.com/in/anette-jorge-babatio</span>
              </div>
              
              <!-- GitHub -->
              <div class="flex items-center space-x-3">
                <div class="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                  <svg class="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <span class="text-gray-300 text-sm">github.com/anttjrg</span>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Hero Image -->
        <div class="relative flex justify-center items-center">
          <div class="relative">
            <!-- Simple image without hexagon -->
            <div class="w-[450px] h-[450px]">
              <img 
                src="../assets/AJ_profile2.png" 
                alt="AJ - Creative Developer" 
                class="w-full h-full object-cover object-center rounded-3xl"
              />
            </div>
            <!-- Experience Badge -->
            <div class="absolute -bottom-4 -right-4 bg-green-400 text-black px-6 py-3 rounded-full font-bold text-center shadow-lg z-10">
              <div class="text-2xl font-black">1</div>
              <div class="text-sm font-semibold">Year Experience</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats Section -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-0 bg-gray-800 rounded-2xl p-8">
        <div class="text-center">
          <div class="text-3xl font-bold text-green-400">5</div>
          <div class="text-gray-300">Projects</div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold text-green-400">1</div>
          <div class="text-gray-300">Year Exp</div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold text-green-400">1000+</div>
          <div class="text-gray-300">Hours of Code</div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold text-green-400">10+</div>
          <div class="text-gray-300">Technologies</div>
        </div>
      </div>
    </div>

    <!-- Background Elements -->
    <div class="absolute top-20 right-10 w-32 h-32 bg-green-400 opacity-10 rounded-full blur-3xl"></div>
    <div class="absolute bottom-20 left-10 w-48 h-48 bg-green-400 opacity-5 rounded-full blur-3xl"></div>
  </section>
</template>

<script setup>
// You can add any reactive data or methods here if needed
</script>

<style scoped>
/* Custom animations or additional styles can go here */
.container {
  max-width: 1200px;
}

/* Hexagonal container without shadow */
.hexagon-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hexagon-shadow {
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
  object-position: center top;
  transform: scale(1.1);
}

/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}

/* Custom hover effects */
.hover\:scale-105:hover {
  transform: scale(1.05);
}
</style>
