<template>
  <section id="projects" class="min-h-screen bg-gray-900 text-white py-10 sm:py-16 md:py-20 lg:py-24 xl:py-28">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
      <!-- Projects Header Section -->
      <div class="text-center space-y-4 sm:space-y-6 md:space-y-8 mb-8 sm:mb-12 md:mb-16 lg:mb-20">
        <div class="flex items-center justify-center space-x-2 mb-8">
          <div class="w-3 h-3 bg-green-400 rounded-full"></div>
          <span class="text-green-400 uppercase tracking-wide">Projects</span>
        </div>
        <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold">
          <span class="text-green-400">Learn</span> + 
          <span class="text-green-400">Build</span> + 
          <span class="text-green-400">Innovate</span>
        </h2>
        <p class="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto">
          Explore my latest projects showcasing innovative solutions across web development, mobile applications, and IoT systems.
        </p>
        
        <!-- Category Filter -->
        <div class="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-6 mt-6 sm:mt-8 md:mt-10">
          <button
            v-for="category in ['All', 'Web Development', 'Mobile App', 'IoT Systems']"
            :key="category"
            @click="selectedCategory = category"
            :class="[
              'px-3 sm:px-4 md:px-6 lg:px-8 py-1.5 sm:py-2 md:py-3 rounded-full transition-All duration-300 text-xs sm:text-sm md:text-base lg:text-lg',
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
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10 mb-10 sm:mb-14 md:mb-16 lg:mb-20" data-aos="fade-up">
        <div
          v-for="project in filteredProjects"
          :key="project.id"
          class="bg-gray-800 text-white rounded-xl p-4 sm:p-6 md:p-8 lg:p-10 hover:transform hover:scale-105 transition-All duration-300 shadow-lg border-2 border-green-400 flex flex-col h-full">
        
          <!-- Project Image -->
          <div class="relative mb-4 group">
            <img 
              :src="project.image" 
              :alt="project.title"
              class="w-full h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 object-cover rounded-lg">
            
            <!-- Overlay with Links -->
            <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-80 rounded-lg transition-All duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
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
          <div class="flex-1 flex flex-col">
            <h3 class="font-bold mb-2 sm:mb-3 md:mb-4 text-lg sm:text-xl md:text-2xl lg:text-3xl text-green-400">{{ project.title }}</h3>
            <p class="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg mb-3 sm:mb-4 md:mb-6 flex-1">{{ project.description }}</p>
            
            <!-- Technologies -->
            <div class="flex flex-wrap gap-1 sm:gap-2 md:gap-3 mt-auto">
              <span
                v-for="technology in project.technologies"
                :key="technology"
                class="px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 bg-green-100 text-green-800 text-xs sm:text-sm md:text-base rounded-full font-medium">
              
                {{ technology }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Final CTA Section -->
      <div class="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 text-center">
        <h3 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 text-green-400">Let's Work Together!</h3>
        <p class="mb-4 sm:mb-6 md:mb-8 text-sm sm:text-base md:text-lg lg:text-xl">We can transform your vision into reality.</p>
        <button @click="scrollToAbout" class="bg-white text-black px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-2 sm:py-3 md:py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors text-sm sm:text-base md:text-lg lg:text-xl">
          Contact Me
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";

// Navigate to About Me section
const scrollToAbout = () => {
  const aboutSection = document.getElementById('about');
  if (aboutSection) {
    aboutSection.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
};
import petbook from '../assets/petbook.jpg';
import quiz from '../assets/quiz.png';
import watering from '../assets/water.jpg';
import Kaching from '../assets/Image10.png';
import worxsnap from '../assets/Worxsnap.jpg';
import KachingWeb from '../assets/KachingWeb.jpg';

const Projects = ref([
  {
    id: 1,
    category: "Web Development",
    image: petbook,
    title: "Petbook",
    description: "A social media platform tailored for pet lovers, where users can create profiles for their pets, share photos, track pet health, and connect with other pet owners.",
    technologies: ["HTML", "TailwindCSS", "Node.js"],
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
  {
    id: 4,
    category: "Mobile App",
    image: Kaching,
    title: "Kaching Mobile",
    description: "Point of Sale (POS) system tailored for small and medium-sized businesses to improve sales tracking, inventory management, expense monitoring, and employee clock-in/out tracking. ",
    technologies: ["React js", "React Native", "Expo Sqlite", "Drizzle ORM"],
    gitURL: "https://github.com/anttjrg",
    webURL: "#",
  },
  {
    id: 5,
    category: "Mobile App",
    image: worxsnap,
    title: "WorxSnap HRIS Application",
    description: "Human Resource Information System (HRIS) application aimed at streamlining HR operations. Key features included payroll management, leave applications, attendance tracking, and calendar-based meeting reminders. ",
    technologies: ["React js", "React Native", "Axios"],
    gitURL: "https://github.com/anttjrg", 
  },
  {
    id: 6,
    category: "Web Development",
    image: KachingWeb,
    title: "Kaching Web",
    description: "The website serves as an introduction to KaChing!’s products, highlighting its key features, benefits, and upcoming availability on the Play Store and App Store, helping business owners prepare to streamline their operations and grow efficiently.",
    technologies: ["HTML", "TailwindCSS", "Next js"],
    gitURL: "https://github.com/anttjrg", 
  }
]);

const selectedCategory = ref("All");
const filteredProjects = computed(() => {
  if (selectedCategory.value === "All") {
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
