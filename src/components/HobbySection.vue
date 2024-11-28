<template>
  <section class="text-white mt-20" id="hobby" data-aos="zoom-in">
    <h2 class="text-5xl font-bold text-white text-left mb-6 px-4 xl:pl-16">Hobbies</h2>
    <div class="px-4 xl:px-16">
      <Carousel v-bind="settings" :Breakpoints="Breakpoints">
        <Slide v-for="element in hobby" :key="element.id">
          <div class="carousel__item p-6">
            <div class="w-full mx-auto bg-[#111a3e] shadow-lg border border-[#1f1641] p-6 text-white font-light mb-8">
              
              <!-- Image Above Text with Rectangle Shape -->
              <div class="flex justify-center mb-6">
                <img 
                  :src="element.image" 
                  alt="hobby image" 
                  class="w-full h-80 object-contain border-4 border-[#1f1641]" 
                  loading="lazy"
                />
              </div>
              
              <!-- Hobby Text Below Image with Larger Font Size -->
              <div class="text-center">
                <h6 class="font-bold text-lg uppercase text-white">{{ element.Name }}</h6>
                <p class="text-lg mt-4 text-white">{{ element.comment }}</p>
              </div>
            </div>
          </div>
        </Slide> 
        <template #addons>
          <Navigation/>
        </template>
      </Carousel>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { Carousel, Navigation, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

// Carousel settings
const settings = ref({
  itemsToShow: 1,
  snapAlign: "center",
});

// Breakpoints for responsive design
const Breakpoints = ref({
  700: {
    itemsToShow: 2.5,
    snapAlign: 'center',
  },
  1024: {
    itemsToShow: 3,
    snapAlign: 'start',
  },
});

// Hobby data
const hobby = ref([
  {
    id: 1,
    Name: 'Watching horror movies or documentaries',
    image: 'src/assets/image1.jpg',
    comment: 'When I have my free time, this is my go-to-bedrest day.',
  },
  {
    id: 2,
    Name: 'Joining events with my friends at school',
    image: 'src/assets/image2.jpg',
    comment: 'Some of my friends I take when there is a huge event in our school',
  },
  {
    id: 3,
    Name: 'Exploring Web-Application techniques',
    image: 'src/assets/image3.jpg',
    comment: 'Student duties that is a must to recollect your learnings from your professors',
  },
  {
    id: 4,
    Name: 'Traveling with my family or friends',
    image: 'src/assets/image4.jpg',
    comment: 'Do not forget to explore different places with your family or friends on breaks',
  },
  {
    id: 5,
    Name: 'Drinking Coffee to stay hydrated',
    image: 'src/assets/image5.jpg',
    comment: 'Got your coffee buddy to drink your water, kidding!',
  },
]);
</script>
