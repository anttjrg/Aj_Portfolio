<template>
  <section class="text-white mt-20 relative" id="contact">
    <h2 class="text-4xl font-bold text-white text-left mb-4 px-4 xl:pl-16">Let's Connect</h2>

    <div class="grid md:grid-cols-2 gap-4 px-4 xl:px-16 mt-8" data-aos="zoom-in-up">
      <!-- Contact Information -->
      <div>
        <p class="text-[#B0B5C1]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Culpa accusamus aspernatur labore illum tempora architecto sint vero commodi eveniet mollitia eaque exercitationem eos dicta amet possimus, 
          reiciendis provident qui nobis.
        </p>
        <div class="col-lg-4 col-md-4 mb-lg-0 mt-5">
          <!-- Email -->
          <div class="flex mb-10 items-center">
            <div class="p-2"
              style="background: #2D2F3B; width: 50px; height: 46px; display: flex; justify-content: center; border-radius: 50%;
              overflow: hidden; border: 1px solid #2D2F3B; backdrop-filter: blur(9px); -webkit-backdrop-filter: blur(9px);">
              <img src="https://img.icons8.com/metro/50/ffffff/new-post.png" alt="new-post" class="w-6">
            </div>
            <div class="ml-5 text-white">
              <h4>Email</h4>
              <p>majbabatio@tip.edu.ph</p>
            </div>
          </div>
          <!-- Phone -->
          <div class="flex mb-10 items-center">
            <div class="p-2"
              style="background: #2D2F3B; width: 50px; height: 46px; display: flex; justify-content: center; border-radius: 50%;
              overflow: hidden; border: 1px solid #2D2F3B; backdrop-filter: blur(9px); -webkit-backdrop-filter: blur(9px);">
              <img src="https://img.icons8.com/ios-filled/50/ffffff/phone.png" alt="phone" class="w-6">
            </div>
            <div class="ml-5 text-white">
              <h4>Phone</h4>
              <p>+639532992920</p>
            </div>
          </div>
          <!-- LinkedIn -->
          <div class="flex mb-10 items-center">
            <div class="p-2"
              style="background: #2D2F3B; width: 50px; height: 46px; display: flex; justify-content: center; border-radius: 50%;
              overflow: hidden; border: 1px solid #2D2F3B; backdrop-filter: blur(9px); -webkit-backdrop-filter: blur(9px);">
              <img src="https://img.icons8.com/ios-filled/50/ffffff/Linkedin.png" alt="linkedin" class="w-6">
            </div>
            <div class="ml-5 text-white">
              <h4>LinkedIn</h4>
              <p>www.LinkedIn.com</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Contact Form -->
      <div class="justify-center items-start mt-6 md:mt-0">
        <form class="bg-[#1E2232] p-6 rounded-lg border border-[#2D2F3B]" data-aos="zoom-in-up">
          <div class="mb-4">
            <label for="email" class="text-white block mb-1 text-sm font-medium">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              class="bg-[#2D2F3B] placeholder-gray-400 text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:ring-[#8B5CF6] focus:border-[#8B5CF6]"
              placeholder="email@gmail.com"
              required
            />
          </div>
          <div class="mb-4">
            <label for="subject" class="text-white block mb-1 text-sm font-medium">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              class="bg-[#2D2F3B] placeholder-gray-400 text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:ring-[#8B5CF6] focus:border-[#8B5CF6]"
              placeholder="Subject"
              required
            />
          </div>
          <div class="mb-4">
            <label for="message" class="text-white block mb-1 text-sm font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              class="bg-[#2D2F3B] placeholder-gray-400 text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:ring-[#8B5CF6] focus:border-[#8B5CF6]"
              placeholder="Let's talk about..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            class="w-full px-6 py-3 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#4F46E5] text-white hover:bg-[#6D47D5] transition-all border-2 border-transparent"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>

    <!-- Background Decorative Element -->
    <div class="bg-gradient-to-tr opacity-25 from-[#570cac] to-[#8B5CF6] blur-2xl h-20 w-80 z-0 absolute -top-1/2 -left-4 transform -translate-x-2/3 translate-y-1/2"></div>
  </section>
</template>
