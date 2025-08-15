<template>
  <section id="projects" class="min-h-screen bg-gray-900 text-white py-20">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Projects Header Section -->
      <div class="text-center space-y-6 mb-16">
        <div class="flex items-center justify-center space-x-2 mb-8">
          <div class="w-3 h-3 bg-green-400 rounded-full"></div>
          <span class="text-green-400 uppercase tracking-wide">Projects</span>
        </div>
        <h2 class="text-4xl lg:text-6xl font-bold">
          <span class="text-green-400">Learn</span> + 
          <span class="text-green-400">Build</span> + 
          <span class="text-green-400">Innovate</span>
        </h2>
        <p class="text-gray-300 text-lg max-w-2xl mx-auto">
          Explore my latest projects showcasing innovative solutions across web development, mobile applications, and IoT systems.
        </p>
        
        <!-- Category Filter -->
        <div class="flex justify-center space-x-4 mt-8">
          <button
            v-for="category in ['all', 'Web Development', 'Mobile App', 'IoT Systems']"
            :key="category"
            @click="selectedCategory = category"
            :class="[
              'px-6 py-2 rounded-full transition-all duration-300',
              selectedCategory === category 
                ? 'bg-green-400 text-black font-semibold' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
            ]"
          >
            {{ category }}
          </button>
        </div>
      </div>

      <!-- Projects Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16" data-aos="fade-up">
        <div
          v-for="project in filteredProjects"
          :key="project.id"
          class="bg-white text-black rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 shadow-lg"
        >
          <!-- Project Image -->
          <div class="relative mb-4 group">
            <img 
              :src="project.image" 
              :alt="project.title"
              class="w-full h-48 object-cover rounded-lg"
            />
            <!-- Overlay with Links -->
            <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-80 rounded-lg transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <div class="flex space-x-4">
                <a
                  :href="project.webURL"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors"
                >
                  <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </a>
                <a
                  :href="project.gitURL"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors"
                >
                  <svg class="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <!-- Project Content -->
          <h3 class="font-bold mb-2 text-xl">{{ project.title }}</h3>
          <p class="text-gray-600 text-sm mb-4">{{ project.description }}</p>
          
          <!-- Technologies -->
          <div class="flex flex-wrap gap-2">
            <span
              v-for="technology in project.technologies"
              :key="technology"
              class="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full font-medium"
            >
              {{ technology }}
            </span>
          </div>
        </div>
      </div>

      <!-- Final CTA Section -->
      <div class="bg-green-400 text-black rounded-3xl p-8 text-center">
        <h3 class="text-2xl font-bold mb-4">Let's Work Together!</h3>
        <p class="mb-6">Ready to bring your ideas to life? Let's create something amazing together.</p>
        <button class="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors">
          Contact Me
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import petbook from '../assets/petbook.jpg';
import quiz from '../assets/quiz.png';
import watering from '../assets/water.jpg';

const Projects = ref([
  {
    id: 1,
    category: "Web Development",
    image: petbook,
    title: "Petbook",
    description: "A social media platform tailored for pet lovers, where users can create profiles for their pets, share photos, track pet health, and connect with other pet owners.",
    technologies: ["Vue.js 3", "TailwindCSS", "Node.js"],
    gitURL: "https://github.com/anttjrg",
    webURL: "#",
  },
  {
    id: 2,
    category: "Mobile App",
    image: quiz,
    title: "Mobile Quiz App",
    description: "An interactive quiz application offering various categories, real-time leaderboards, and personalized quizzes. Ideal for learning or entertainment on the go.",
    technologies: ["Flutter", "Kotlin", "Firebase"],
    gitURL: "https://github.com/anttjrg",
    webURL: "#",
  },
  {
    id: 3,
    category: "IoT Systems",
    image: watering,
    title: "Plant Watering System",
    description: "A smart system for automated plant watering. It monitors soil moisture levels and schedules watering through a mobile app.",
    technologies: ["AWS IoT", "Firebase", "Arduino"],
    gitURL: "https://github.com/anttjrg",
    webURL: "#",
  },
]);

const selectedCategory = ref("all");
const filteredProjects = computed(() => {
  if (selectedCategory.value === "all") {
    return Projects.value;
  }
  return Projects.value.filter((project) =>
    project.category.toLowerCase().includes(selectedCategory.value.toLowerCase())
  );
});
</script>

<style scoped>
/* Custom hover effects */
.hover\:scale-105:hover {
  transform: scale(1.05);
}

/* Animation for project cards */
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
