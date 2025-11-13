<template>
  <section id="about" class="bg-gray-900 text-white relative overflow-hidden">
    <!-- Hero Section -->
    <div class="max-w-8xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-14 2xl:px-16 pt-8 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-24 2xl:pt-28 pb-0">
      <!-- Main Hero Content -->
      <div class="relative grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 2xl:gap-32 items-start mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-28">
        <!-- Hero Image - Mobile First -->
        <div class="relative flex justify-center items-center order-1 md:absolute md:top-0 md:right-0 md:z-10 lg:relative lg:order-2">
          <div class="relative">
            <!-- Simple image without hexagon -->
            <div class="w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] xl:w-[450px] xl:h-[450px] 2xl:w-[500px] 2xl:h-[500px]">
              <img 
                src="../assets/AJ_profile2.png" 
                alt="AJ - Creative Developer" 
                class="w-full h-full object-cover object-center rounded-3xl"
              />
            </div>
            <!-- Experience Badge -->
            <div class="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 bg-green-400 text-black px-3 py-2 sm:px-4 sm:py-2 md:px-4 md:py-2 lg:px-6 lg:py-3 xl:px-8 xl:py-4 rounded-full font-bold text-center shadow-lg z-10">
              <div class="text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-3xl font-black">6</div>
              <div class="text-xs sm:text-xs md:text-xs lg:text-sm xl:text-base font-semibold">Months Experience</div>
            </div>
          </div>
        </div>
        
        <div class="space-y-6 sm:space-y-6 md:space-y-4 lg:space-y-5 xl:space-y-8 2xl:space-y-10 md:mt-10 lg:mt-0 lg:pl-4 xl:pl-16 2xl:pl-24 flex flex-col justify-start order-2 md:order-1">
          <h1 class="text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-tight md:mr-80 lg:mr-0 xl:mr-0 2xl:mr-0">
            <div class="whitespace-nowrap">
              <span class="text-white">I'm </span><span class="text-green-400">Anette Babatio</span>
            </div>
            <div class="text-white">Web & App Developer</div>
          </h1>
          <p class="text-gray-300 text-sm sm:text-base md:text-sm lg:text-base xl:text-lg 2xl:text-xl max-w-lg md:max-w-sm lg:max-w-sm xl:max-w-2xl 2xl:max-w-3xl leading-relaxed text-justify md:mr-40 lg:mr-0 xl:mr-0 2xl:mr-0">
            A Computer Engineering graduate and passionate about creating digital solutions. 
            I specialize in full-stack development, combining technical expertise with 
            creative design to build innovative web and mobile applications.
          </p>
          <div class="flex flex-col sm:flex-row md:flex-row lg:flex-row space-y-4 sm:space-y-0 md:space-y-0 lg:space-y-0 sm:space-x-4 md:space-x-3 lg:space-x-4 xl:space-x-6 2xl:space-x-6 md:mr-40 lg:mr-0 xl:mr-0 2xl:mr-0">
            <button @click="scrollToProjects" class="bg-green-400 text-black px-6 sm:px-8 md:px-6 lg:px-8 xl:px-10 py-2 sm:py-3 md:py-2 lg:py-3 rounded-full font-semibold hover:bg-green-300 transition-colors text-sm sm:text-base md:text-sm lg:text-base">
              DISCOVER MY WORK
            </button>
            <button @click="downloadCV" class="bg-transparent text-white px-6 sm:px-8 md:px-6 lg:px-8 xl:px-10 py-2 sm:py-3 md:py-2 lg:py-3 rounded-full font-semibold border-2 border-green-400 hover:bg-green-400 hover:text-black transition-colors text-sm sm:text-base md:text-sm lg:text-base">
              DOWNLOAD MY CV
            </button>
          </div>
          
          <!-- Contact Information - Moved inside text container for xl/2xl -->
          <div class="xl:block 2xl:block hidden">
            <div class="bg-gray-800 rounded-xl p-4 sm:p-6 md:p-4 lg:p-5 xl:p-8 2xl:p-10 mt-6 sm:mt-8 md:mt-6 lg:mt-8 xl:mt-8 2xl:mt-10">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                <!-- Email -->
                <a href="mailto:anette.e.babatio@gmail.com" class="flex items-center space-x-3 hover:bg-gray-700 rounded-lg p-2 transition-colors cursor-pointer group">
                  <div class="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                    <svg class="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </div>
                  <span class="text-gray-300 text-sm hover:text-white transition-colors select-text">anette.e.babatio@gmail.com</span>
                </a>
                
                <!-- Phone -->
                <a href="tel:+639532992920" class="flex items-center space-x-3 hover:bg-gray-700 rounded-lg p-2 transition-colors cursor-pointer group">
                  <div class="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                    <svg class="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                    </svg>
                  </div>
                  <span class="text-gray-300 text-sm hover:text-white transition-colors select-text">+639532992920</span>
                </a>
                
                <!-- LinkedIn -->
                <a href="https://www.linkedin.com/in/anette-jorge-babatio-1830ba308/" target="_blank" rel="noopener noreferrer" class="flex items-center space-x-3 hover:bg-gray-700 rounded-lg p-2 transition-colors cursor-pointer">
                  <div class="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                    <svg class="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd"></path>
                    </svg>
                  </div>
                  <span class="text-gray-300 text-sm hover:text-white transition-colors select-text">linkedin.com/in/anette-jorge-babatio</span>
                </a>
                
                <!-- GitHub -->
                <a href="https://github.com/anttjrg" target="_blank" rel="noopener noreferrer" class="flex items-center space-x-3 hover:bg-gray-700 rounded-lg p-2 transition-colors cursor-pointer">
                  <div class="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                    <svg class="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd"></path>
                    </svg>
                  </div>
                  <span class="text-gray-300 text-sm hover:text-white transition-colors select-text">github.com/anttjrg</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Contact Information Section - Below both image and text for md/lg, hidden for xl/2xl -->
        <div class="md:col-span-2 lg:col-span-2 xl:hidden 2xl:hidden order-3">
          <div class="bg-gray-800 rounded-xl p-4 sm:p-6 md:p-4 lg:p-5 mt-6 sm:mt-8 md:mt-6 lg:mt-8">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
              <!-- Email -->
              <a href="mailto:anette.e.babatio@gmail.com" class="flex items-center space-x-3 hover:bg-gray-700 rounded-lg p-2 transition-colors cursor-pointer group">
                <div class="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                  <svg class="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
                <span class="text-gray-300 text-sm hover:text-white transition-colors select-text">anette.e.babatio@gmail.com</span>
              </a>
              
              <!-- Phone -->
              <a href="tel:+639532992920" class="flex items-center space-x-3 hover:bg-gray-700 rounded-lg p-2 transition-colors cursor-pointer group">
                <div class="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                  <svg class="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                </div>
                <span class="text-gray-300 text-sm hover:text-white transition-colors select-text">+639532992920</span>
              </a>
              
              <!-- LinkedIn -->
              <a href="https://www.linkedin.com/in/anette-jorge-babatio-1830ba308/" target="_blank" rel="noopener noreferrer" class="flex items-center space-x-3 hover:bg-gray-700 rounded-lg p-2 transition-colors cursor-pointer">
                <div class="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                  <svg class="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <span class="text-gray-300 text-sm hover:text-white transition-colors select-text">linkedin.com/in/anette-jorge-babatio</span>
              </a>
              
              <!-- GitHub -->
              <a href="https://github.com/anttjrg" target="_blank" rel="noopener noreferrer" class="flex items-center space-x-3 hover:bg-gray-700 rounded-lg p-2 transition-colors cursor-pointer">
                <div class="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                  <svg class="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <span class="text-gray-300 text-sm hover:text-white transition-colors select-text">github.com/anttjrg</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats Section -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 -mt-6 sm:-mt-8 md:-mt-4 lg:mt-0 mb-0 bg-gray-800 rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 xl:p-10">
        <div class="text-center py-2 sm:py-3 md:py-4">
          <div class="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-green-400">6</div>
          <div class="text-gray-300 text-sm sm:text-sm md:text-base lg:text-lg mt-1">Projects</div>
        </div>
        <div class="text-center py-2 sm:py-3 md:py-4">
          <div class="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-green-400">6</div>
          <div class="text-gray-300 text-sm sm:text-sm md:text-base lg:text-lg mt-1">Months Exp</div>
        </div>
        <div class="text-center py-2 sm:py-3 md:py-4">
          <div class="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-green-400">100+</div>
          <div class="text-gray-300 text-sm sm:text-sm md:text-base lg:text-lg mt-1">Hours of Code</div>
        </div>
        <div class="text-center py-2 sm:py-3 md:py-4">
          <div class="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-green-400">10+</div>
          <div class="text-gray-300 text-sm sm:text-sm md:text-base lg:text-lg mt-1">Technologies</div>
        </div>
      </div>
    </div>

    <!-- Background Elements -->
    <div class="absolute top-20 right-10 w-32 h-32 bg-green-400 opacity-10 rounded-full blur-3xl"></div>
    <div class="absolute bottom-20 left-10 w-48 h-48 bg-green-400 opacity-5 rounded-full blur-3xl"></div>
  </section>
</template>

<script setup>
// CV Download functionality
const downloadCV = () => {
  const link = document.createElement('a');
  link.href = '/Anette_Babatio_CV.pdf'; 
  link.download = 'Anette_Babatio_CV.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// Navigate to Projects section
const scrollToProjects = () => {
  const projectsSection = document.getElementById('projects');
  if (projectsSection) {
    projectsSection.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}

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
