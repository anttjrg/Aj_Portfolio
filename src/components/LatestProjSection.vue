<template>
    <section class="text-white mt-20" id="projects">
      <div class="px-4 xl:pl-16">
        <div class="mb-4 md:flex md:justify-between xl:pr-16">
          <h2 class="text-4xl font-bold text-white">My Latest Projects</h2>
          <div class="flex space-x-4 mb-4 mt-5 md:mt-0">
            <button
              class="hover:text-primary"
              v-for="category in ['all', 'Web Development', 'Mobile App']"
              :key="category"
              @click="selectedCategory = category"
            >
              {{ category }}
            </button>
          </div>
        </div>
      </div>
      <ul
        class="px-4 sm:py-16 xl:pr-6 grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3"
        data-aos="fade-right"
      >
        <li
          v-for="project in filteredProjects"
          :key="project.id"
          class="rounded-xl overflow-hidden shadow-lg bg-[#111a3e] border border-[#1f1641]"
        >
          <!-- Project Image with Overlay -->
          <div
            class="h-52 md:h-[24rem] relative group"
            :style="{ backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }"
          >
            <div
              class="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500"
            >
              <!-- Link Buttons -->
              <a
                class="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                :href="project.webURL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                  />
                </svg>
              </a>
              <a
                class="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                :href="project.gitURL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  class="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
                  />
                </svg>
              </a>
            </div>
          </div>
          <!-- Project Info -->
          <div class="text-white rounded-b-xl mt-3 py-6 px-4">
            <h3 class="text-lg font-semibold uppercase lg:text-xl">{{ project.title }}</h3>
            <p class="text-[#ADB7BE]">{{ project.description }}</p>
            <!-- Technologies -->
            <div class="flex flex-wrap mt-4">
              <div
                v-for="technology in project.technologies"
                :key="technology"
                class="text-center ml-1 mt-1 rounded-3xl bg-[#111827] text-sm text-white px-4 py-1"
                style="box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); border: 1px solid #111827;"
              >
                {{ technology }}
              </div>
            </div>
          </div>
        </li>
      </ul>
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
      category: "Web Developmet",
      image: petbook,
      title: "Petbook",
      description: "A social media platform tailored for pet lovers, where users can create profiles for their pets, share photos, track pet health, and connect with other pet owners.",
      technologies: ["Vue.js 3", "TailwindCSS"],
      gitURL: "#",
      webURL: "#",
    },
    {
      id: 2,
      category: "Mobile App",
      image: quiz,
      title: "Mobile Quiz App",
      description: "An interactive quiz application offering various categories, real-time leaderboards, and personalized quizzes. Ideal for learning or entertainment on the go.",
      technologies: ["Flutter", "Android Native (Kotlin/Java)"],
      gitURL: "#",
      webURL: "#",
    },
    {
      id: 3,
      category: "Web Development",
      image: watering,
      title: "Plant Watering System",
      description: "A smart system for automated plant watering. It monitors soil moisture levels and schedules watering through a mobile app.",
      technologies: ["AWS IoT", "Firebase for real-time monitoring"],
      gitURL: "#",
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
  