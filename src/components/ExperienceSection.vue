<template>
  <section class="text-white mt-18" id="skills">
    <div class="absolute right-0 top-[110rem] h-full w-full justify-end">
      <span class="flex opacity-20">
        <span class="w-16 h-32 rounded-1 full flex bg-primary blur-2xl"></span>
        <span class="w-16 h-32 rounded-1 full flex bg-light-blue blur-3xl mt-14"></span>
      </span>
    </div>
    <div class="flex flex-col items-center py-8 px-4 xl:px-16">
      <!-- "My Skills" Header -->
      <h2 class="text-4xl font-bold text-white mb-8 text-center w-full md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto">My
        <span class="text-[#8B5CF6]">Skills</span>
      </h2>
      <!-- Skills List -->
      <div class="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto">
        <div class="mt-8" v-for="skill in Skills" :key="skill.id">
          <div class="flex items-end justify-between" data-aos="fade-right">
            <h4 class="font-semibold uppercase text-white">
              {{ skill.name }}
            </h4>
            <h3 class="text-2xl font-bold text-white">{{ skill.width }}</h3>
          </div>
          <div class="mt-2 h-1 w-full bg-dark-blue rounded-full">
            <div class="h-1 rounded-full bg-primary" :style="`width :${skill.width}`"></div>
          </div>
        </div>
      </div>
    </div>

    <div data-aos="flip-left" class="flex justify-center items-center"> <!-- Flex to center the section -->
      <!-- "My Education" Header -->
      <h2 class="text-4xl font-bold text-white mb-8 md:text-center md:mt-0 mt-8">My 
        <span class="text-[#8B5CF6]">Experiences</span>
      </h2>
      <!-- Education List -->
      <div class="space-y-6 py-6" data-aos="fade-left">
        <div v-for="element in Experiences" :key="element.id" class="flex items-center rounded-xl p-4 bg-dark-blue shadow-lg border border-tertiary mx-auto"> <!-- Added mx-auto to center the item -->
          <div class="flex items-center space-x-4 w-full">
            <!-- Logo Container with smaller size -->
            <div class="w-auto">
              <img 
                :src="element.id === 3 ? vaLogo : tiplogo" 
                :alt="element.id === 3 ? 'Virtual Assistant Logo' : 'T.I.P Logo'" 
                class="rounded-full w-12 h-12 object-cover" /> <!-- Reduced size of the logo -->
            </div>
            <!-- Text Container -->
            <div class="text-container w-full">
              <h3 class="text-xl font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                {{ element.role }}
              </h3>
              <p class="text-white">{{ element.company }}</p>
              <p class="text-white">{{ element.date }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import tiplogo from '../assets/tip.jpg';  // T.I.P logo
import vaLogo from '../assets/va.png';    // Virtual Assistant logo

const Skills = ref([
  { id: 1, name: 'HTML & CSS', width: '70%' },
  { id: 2, name: 'Python', width: '80%' },
  { id: 3, name: 'JavaScript', width: '75%' },
  { id: 4, name: 'Figma', width: '90%' },
]);

const Experiences = ref([
  { id: 1, role: 'Virtual Assistant of a Social Media', company: 'PeaksightAgency', date: 'November 2024 - onwards' },
  { id: 2, role: 'Student Assistant of Library in T.I.P', company: 'Technological Institute of the Philippines - Manila', date: 'July 2024 - December 2024' },
  { id: 3, role: 'Student Assistant of RDMO in T.I.P', company: 'Technological Institute of the Philippines - Manila', date: 'January 2023 - May 2024' },
]);
</script>

<style scoped>
/* Style for the circular logo */
img.rounded-full {
  border-radius: 50%; /* Make the image circular */
  width: 50px;  /* Adjust image size */
  height: 50px; /* Adjust image size */
}

/* Flexbox for aligning the image and text */
div.flex-items-center {
  display: flex;
  align-items: center;  /* Vertically align the image and text */
  gap: 12px;  /* Adjust space between image and text */
}

/* Optional: Style the text container */
div.text-container {
  display: flex;
  flex-direction: column;
  justify-content: center;  /* Vertically center the text */
}

/* Optional: Style for Experience section to make it look cleaner */
section {
  padding-top: 40px; /* Add space at the top */
}

/* For each experience item */
div.flex {
  margin-bottom: 1rem; /* Space between items */
  width: auto; /* Ensure the box is not stretched */
  height: auto; /* Let the height adapt to content */
}

/* Centering the Experiences container */
div[data-aos="flip-left"] {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; /* Ensure the items are stacked vertically */
}

/* Center each experience item */
div[data-aos="fade-left"] {
  display: flex;
  flex-direction: column;
  align-items: center; /* Centers all experiences */
}

</style>
