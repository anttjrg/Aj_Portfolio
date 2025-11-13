<template>
  <div class="bg-gradient-to-r from-[#6a4c9c] via-[#570cac] to-[#ffe47a]">
    <Suspense>
      <template #default>
        <div>
          <!-- Check if user is logged in -->
            <Navbar />
            <IntroductionSection />
            <EducationSection />
            <SkillsSection />
            <ExperienceSection />
            <ProjectSection />
            <Footer />
            <BackTop />
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


</script>