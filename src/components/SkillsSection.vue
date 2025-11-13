<template>
  <section id="skills" class="bg-gray-900 text-white -mt-16 pt-20 pb-16">
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
            <p class="text-gray-300 text-lg text-justify">
              I offer comprehensive development and design services for web and mobile applications, 
              delivering clean, user-friendly designs, seamless functionality, and optimized performance 
              using modern technologies and industry best practices. I ensure each project is developed 
              with reliability, enabling businesses to achieve their goals effectively.
            </p>
            
            <!-- Technology Icons Grid -->
            <div class="mt-8">
              <div class="grid grid-cols-3 gap-4">
                <!-- CSS3 -->
                <div class="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 hover:bg-gray-700/50 transition-all duration-300 hover:scale-105">
                  <div class="flex flex-col items-center space-y-2">
                    <div class="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                      <svg class="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
                      </svg>
                    </div>
                    <span class="text-xs font-medium text-gray-300">CSS3</span>
                  </div>
                </div>
                
                <!-- Figma -->
                <div class="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 hover:bg-gray-700/50 transition-all duration-300 hover:scale-105">
                  <div class="flex flex-col items-center space-y-2">
                    <div class="w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-lg flex items-center justify-center">
                      <svg class="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M15.332 8.668a3.333 3.333 0 0 0 0-6.663H8.668a3.333 3.333 0 0 0 0 6.663 3.333 3.333 0 0 0 0 6.665 3.333 3.333 0 0 0 0 6.664A3.334 3.334 0 0 0 12.001 18c0-1.837 1.496-3.333 3.331-3.333a3.333 3.333 0 0 0 0-6.665zM12 8.668a3.334 3.334 0 0 1-3.332-3.333A3.334 3.334 0 0 1 12 2.002V8.668z"/>
                      </svg>
                    </div>
                    <span class="text-xs font-medium text-gray-300">Figma</span>
                  </div>
                </div>
                
                <!-- HTML5 -->
                <div class="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 hover:bg-gray-700/50 transition-all duration-300 hover:scale-105">
                  <div class="flex flex-col items-center space-y-2">
                    <div class="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                      <svg class="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
                      </svg>
                    </div>
                    <span class="text-xs font-medium text-gray-300">HTML5</span>
                  </div>
                </div>
                
                <!-- JavaScript -->
                <div class="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 hover:bg-gray-700/50 transition-all duration-300 hover:scale-105">
                  <div class="flex flex-col items-center space-y-2">
                    <div class="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                      <svg class="w-8 h-8 text-black" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.094-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
                      </svg>
                    </div>
                    <span class="text-xs font-medium text-gray-300">JavaScript</span>
                  </div>
                </div>
                
                <!-- SQL -->
                <div class="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 hover:bg-gray-700/50 transition-all duration-300 hover:scale-105">
                  <div class="flex flex-col items-center space-y-2">
                    <div class="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                      <svg class="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                      </svg>
                    </div>
                    <span class="text-xs font-medium text-gray-300">SQL</span>
                  </div>
                </div>
                
                <!-- React -->
                <div class="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 hover:bg-gray-700/50 transition-all duration-300 hover:scale-105">
                  <div class="flex flex-col items-center space-y-2">
                    <div class="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center">
                      <svg class="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.36-.034-.47 0-.92.014-1.36.034.45-.572.905-1.096 1.36-1.564zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.66.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.36.034.47 0 .92-.014 1.36-.034-.45.572-.905 1.096-1.36 1.564-.455-.468-.91-.992-1.36-1.564z"/>
                      </svg>
                    </div>
                    <span class="text-xs font-medium text-gray-300">React</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="space-y-4">
            <div class="flex items-center justify-between p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer">
              <div class="flex items-center space-x-4">
                <div class="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center text-black font-bold">01</div>
                <span class="text-lg">Web Development</span>
              </div>
            </div>
            
            <div class="flex items-center justify-between p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer">
              <div class="flex items-center space-x-4">
                <div class="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center text-black font-bold">02</div>
                <span class="text-lg">UI/UX Design</span>
              </div>
            </div>
            
            <div class="flex items-center justify-between p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer">
              <div class="flex items-center space-x-4">
                <div class="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center text-black font-bold">03</div>
                <span class="text-lg">Python Development</span>
              </div>
            </div>
            
            <div class="flex items-center justify-between p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer">
              <div class="flex items-center space-x-4">
                <div class="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center text-black font-bold">04</div>
                <span class="text-lg">Database Management</span>
              </div>
            </div>
            
            <div class="flex items-center justify-between p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer">
              <div class="flex items-center space-x-4">
                <div class="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center text-black font-bold">05</div>
                <span class="text-lg">Mobile App Development</span>
              </div>
            </div>
            
            <div class="flex items-center justify-between p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer">
              <div class="flex items-center space-x-4">
                <div class="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center text-black font-bold">06</div>
                <span class="text-lg">JavaScript/Vue.js</span>
              </div>
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
