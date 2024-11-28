<template>
  <section class="mt-18 relative" id="about">
    <!-- Gradient Background Decoration -->
    <div class="absolute inset-0 -z-10">
      <div class="h-full w-full bg-gradient-to-b from-[#3b82f6] via-[#570cac] to-[#1c1130]"></div>
    </div>
    <div class="relative py-16 px-8">
      <!-- Single Header (Ensure this is not duplicated) -->
      <div class="text-center">
        <h2 class="text-4xl font-bold text-white mb-8 text-center w-full md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto">
          My <span class="text-[#8B5CF6]">Education</span>
        </h2>
      </div>
      <!-- Education Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-12 items-center justify-items-center z-10 relative">
        <div v-for="element in education" :key="element.id" class="education-card">
          <div class="flex flex-col items-center text-center">
            <!-- Logo -->
            <img
              v-for="(logo, index) in element.logos"
              :key="index"
              :src="logo"
              alt="school logo"
              class="logo mb-4"
            />
            <!-- School Info -->
            <h3 class="education-school">{{ element.School }}</h3>
            <p class="text-lg text-white">{{ element.Program }}</p>
            <p class="text-lg text-white">{{ element.Year }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import adslLogo from "../assets/adsl.jpg";
import tipLogo from "../assets/tip.jpg";

const education = ref([
  {
    id: 1,
    logos: [adslLogo],
    School: "Academia De San Lorenzo Inc.",
    Program: "Elementary",
    Year: "2009 - 2014",
  },
  {
    id: 2,
    logos: [adslLogo],
    School: "Academia De San Lorenzo Inc.",
    Program: "Junior High School",
    Year: "2014 - 2017",
  },
  {
    id: 3,
    logos: [adslLogo],
    School: "Academia De San Lorenzo Inc.",
    Program: "Senior High School - ABM",
    Year: "2017 - 2019",
  },
  {
    id: 4,
    logos: [tipLogo],
    School: "Technological Institute of the Philippines",
    Program: "BS Computer Engineering",
    Year: "2021 - onwards",
  },
]);

onMounted(() => {
  console.log('About section mounted');
});
</script>

<style scoped>
#about {
  position: relative;
  overflow: hidden; /* Ensures the gradient stays visible within the section */
  min-height: 100vh; /* Ensures the section takes up at least full viewport height */
}

/* Gradient Background */
.absolute.inset-0.-z-10 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -10;
  background: linear-gradient(to bottom, #3b82f6, #570cac, #1c1130);
  height: 100%;
  width: 100%;
}

/* Education Card Styling */
.education-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Centers content vertically */
  padding: 20px;
  background-color: #2d1a5a;
  border: 2px solid #3b82f6;
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, background-color 0.3s ease;
  height: 100%; /* Ensure cards have uniform height */
  min-height: 300px; /* Set a minimum height for all cards */
  width: 100%; /* Make the card width flexible */
  max-width: 400px; /* Set a maximum width for uniformity */
}

.education-card:hover {
  transform: scale(1.05);
  background-color: #3b82f6;
}

/* School Text */
.education-school {
  font-size: 1.5rem;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 8px;
  color: #ffffff;
}

/* Program and Year Text */
.text-lg {
  font-size: 1.125rem;
  color: #d1d5db;
}

/* Logo Styling */
.logo {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid #ffffff;
}

/* Responsive Grid Layout */
@media (min-width: 640px) {
  .sm\:grid-cols-2 {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .lg\:grid-cols-2 { /* 2x2 grid for larger screens */
    grid-template-columns: repeat(2, 1fr);
  }

  .xl\:grid-cols-3 { /* 3x3 grid for extra large screens */
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
