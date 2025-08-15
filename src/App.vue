<template>
  <div class="bg-gradient-to-r from-[#6a4c9c] via-[#570cac] to-[#ffe47a]">
    <Suspense>
      <template #default>
        <div>
          <!-- Check if user is logged in -->
          <div v-if="isLoggedIn">
            <!-- Components rendered after login -->
            <Navbar />
            <IntroductionSection />
            <EducationSection />
            <SkillsSection />
            <ExperienceSection />
            <ProjectSection />
            <Footer />
            <BackTop />
          </div>
          <div v-else>
            <Login @login-success="onLoginSuccess" />
          </div>
        </div>
      </template>

      <template #fallback>
        <div class="flex justify-center items-center min-h-screen bg-light-blue">
          <LoadingSection />
        </div>
      </template>
    </Suspense>
  </div>
</template>

<script setup>
import { ref } from 'vue';  
import { defineAsyncComponent } from 'vue';

const Navbar = defineAsyncComponent(() => import('@/components/NavBar.vue'));
const IntroductionSection = defineAsyncComponent(() => import('@/components/IntroductionSection.vue'));
const EducationSection = defineAsyncComponent(() => import('@/components/EducationSection.vue'));
const SkillsSection = defineAsyncComponent(() => import('@/components/SkillsSection.vue'));
const ExperienceSection = defineAsyncComponent(() => import('@/components/ExperienceSection.vue'));
const ProjectSection = defineAsyncComponent(() => import('@/components/ProjectSection.vue'));
const Footer = defineAsyncComponent(() => import('@/components/Footer.vue'));
const BackTop = defineAsyncComponent(() => import('@/components/BackTop.vue'));
import LoadingSection from './components/LoadingSection.vue';
import Login from './components/Login.vue';  // Import Login component

// Login state
const isLoggedIn = ref(false);  // Track whether the user is logged in

// Handle successful login
const onLoginSuccess = () => {
  isLoggedIn.value = true;  // Set login state to true
};
</script>