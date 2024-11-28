<template>
  <div class="bg-gradient-to-r from-[#6a4c9c] via-[#570cac] to-[#ffe47a]">
    <Suspense>
      <template #default>
        <div>
          <!-- Check if user is logged in -->
          <div v-if="isLoggedIn">
            <!-- Components rendered after login -->
            <Navbar />
            <AjSection />
            <AboutSection />
            <ExperienceSection />
            <LatestProjSection />
            <ContactSection />
            <HobbySection />
            <Footer />
            <BackTop />
          </div>
          <div v-else>
            <!-- Display the login page if not logged in -->
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
import { ref } from 'vue';  // Import ref to handle reactive state
import { defineAsyncComponent } from 'vue';

// Components
const Navbar = defineAsyncComponent(() => import('@/components/NavBar.vue'));
const AjSection = defineAsyncComponent(() => import('@/components/AjSection.vue'));
const AboutSection = defineAsyncComponent(() => import('@/components/AboutSection.vue'));
const ExperienceSection = defineAsyncComponent(() => import('@/components/ExperienceSection.vue'));
const LatestProjSection = defineAsyncComponent(() => import('@/components/LatestProjSection.vue'));
const ContactSection = defineAsyncComponent(() => import('@/components/ContactSection.vue'));
const HobbySection = defineAsyncComponent(() => import('@/components/HobbySection.vue'));
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