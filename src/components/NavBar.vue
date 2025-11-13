<template>
    <header class="flex justify-between items-center p-3 sm:p-4 md:p-6 lg:p-6 xl:p-8 2xl:p-10 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
        <div class="flex items-center space-x-2">
        </div>
        <!-- Mobile Toggle Button -->
        <div class="md:hidden z-30">
            <button type="button" 
                class="block focus:outline-none p-2"
                @click="isMenuOpen = !isMenuOpen">
                <span v-if="isMenuOpen" class="text-2xl sm:text-3xl text-green-400">
                    ✕
                </span>
                <span v-else class="text-2xl sm:text-3xl text-white">
                    ☰
                </span>
            </button>
        </div> 
        <!-- Navbar Link -->
        <nav
            :class="['md:flex md:items-center md:space-x-8 transition-all duration-500',
                isMenuOpen ? 'fixed inset-0 bg-black/60 backdrop-blur-3xl flex justify-center items-center z-40 min-h-screen' : 'hidden md:block'
            ]"
            @click="closeMenuOnOutsideClick"
        >
            <!-- Mobile Menu Container -->
            <div v-if="isMenuOpen" class="bg-gray-900/90 backdrop-blur-3xl rounded-3xl border border-gray-700/60 shadow-2xl p-6 sm:p-8 mx-4 max-w-md w-80 md:hidden transform translate-y-0 relative" @click.stop>
                <!-- Close Button -->
                <button 
                    @click="isMenuOpen = false"
                    class="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-300 p-2 hover:bg-gray-700/50 rounded-full"
                >
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
                
                <ul class="flex flex-col items-center space-y-8 sm:space-y-12 mt-4">
                    <li v-for="item in Menu" :key="item.name">
                        <a href="javascript:void(0)" 
                            :class="[
                                'block transition-all duration-300 text-xl sm:text-2xl font-medium hover:scale-105 text-center',
                                item.name === 'Exit' 
                                    ? 'text-red-400 hover:text-red-300 bg-red-400/10 hover:bg-red-400/20 px-6 sm:px-8 py-3 rounded-full border border-red-400/30'
                                    : 'text-white hover:text-green-400 relative group px-4 py-2'
                            ]"
                            @click="item.name === 'Exit' ? Exit() : scrollToSection(item.href)"
                        >
                            {{ item.name }}
                            <!-- Animated underline for non-logout items -->
                            <span v-if="item.name !== 'Exit'" 
                                class="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </li>
                </ul>
            </div>
            
            <!-- Desktop Menu -->
            <ul class="hidden md:flex md:items-center md:space-x-8 lg:space-x-12 xl:space-x-16 2xl:space-x-20">
                <li v-for="item in Menu" :key="item.name">
                    <a href="javascript:void(0)" 
                        :class="[
                            'block transition-all duration-300 md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl font-medium hover:scale-105',
                            item.name === 'Exit' 
                                ? 'text-red-400 hover:text-red-300 bg-red-400/10 hover:bg-red-400/20 px-4 md:px-6 lg:px-8 xl:px-10 py-2 md:py-3 rounded-full border border-red-400/30'
                                : 'text-white hover:text-green-400 relative group'
                        ]"
                        @click="item.name === 'Exit' ? Exit() : scrollToSection(item.href)"
                    >
                        {{ item.name }}
                        <!-- Animated underline for non-logout items -->
                        <span v-if="item.name !== 'Exit'" 
                            class="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script setup>
import { ref } from 'vue';

const Menu = ref([
    { name: 'About Me', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Exit', href: '#Exit' }, 
]);

const isMenuOpen = ref(false);

// Function to scroll to section
const scrollToSection = (href) => {
    isMenuOpen.value = false;
    const section = document.querySelector(href);
    if (section) {
        const navbarHeight = 80; // Approximate navbar height
        const targetPosition = section.offsetTop - navbarHeight;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
};

// Function to exit/close the site
const Exit = () => {
    // Show confirmation dialog first
    if (confirm("Are you sure you want to leave this site?")) {
        // Try to close the window first
        window.close();
        
        // If window.close() fails (most common), navigate to Google as fallback
        setTimeout(() => {
            window.location.href = "https://www.google.com";
        }, 100);
    }
};

// Function to close menu when clicking outside
const closeMenuOnOutsideClick = (event) => {
    // Close menu only if clicking on the overlay (not the menu container)
    if (event.target === event.currentTarget) {
        isMenuOpen.value = false;
    }
};

</script>

<style scoped>
/* Modern navbar styling */
header {
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
}

/* Smooth transitions */
* {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Enhanced backdrop blur for mobile menu */
nav.fixed {
    backdrop-filter: blur(30px) saturate(180%);
    -webkit-backdrop-filter: blur(30px) saturate(180%);
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
}

/* Mobile menu container animations */
@media (max-width: 768px) {
    nav.fixed {
        animation: fadeInBlur 0.6s ease-out forwards;
    }
    
    nav.fixed > div {
        animation: slideInCenter 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        position: relative;
        top: 0;
        margin: auto;
    }
}

@keyframes fadeInBlur {
    from {
        opacity: 0;
        backdrop-filter: blur(0px) saturate(100%);
        -webkit-backdrop-filter: blur(0px) saturate(100%);
    }
    to {
        opacity: 1;
        backdrop-filter: blur(30px) saturate(180%);
        -webkit-backdrop-filter: blur(30px) saturate(180%);
    }
}

@keyframes slideInCenter {
    from {
        opacity: 0;
        transform: scale(0.85) translateY(-30px);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
    }
    to {
        opacity: 1;
        transform: scale(1) translateY(0);
        backdrop-filter: blur(50px);
        -webkit-backdrop-filter: blur(50px);
    }
}

/* Hover effects */
.group:hover .absolute {
    transform: scaleX(1);
}

/* Custom scrollbar for better UX */
::-webkit-scrollbar {
    width: 6px;
}

::-webkit-scrollbar-track {
    background: transparent;
}

::-webkit-scrollbar-thumb {
    background: #10b981;
    border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
    background: #059669;
}
</style>
