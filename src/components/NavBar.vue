<template>
    <header class="flex justify-between items-center p-6 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
        <div class="flex items-center space-x-2">
            <div class="w-3 h-3 bg-green-400 rounded-full"></div>
            <div class="text-white text-3xl font-bold">AJ.DEV</div>
        </div>
        <!-- Mobile Toggle Button -->
        <div class="md:hidden z-30">
            <button type="button" 
                class="block focus:outline-none p-2"
                @click="isMenuOpen = !isMenuOpen">
                <span v-if="isMenuOpen" class="text-3xl text-green-400">
                    ✕
                </span>
                <span v-else class="text-3xl text-white">
                    ☰
                </span>
            </button>
        </div> 
        <!-- Navbar Link -->
        <nav
            :class="['md:flex md:items-center md:space-x-8 transition-all duration-300',
                isMenuOpen ? 'fixed inset-0 bg-gray-900/98 backdrop-blur-lg flex flex-col justify-center items-center z-40' : 'hidden md:block'
            ]"
        >
            <ul class="flex flex-col items-center space-y-8 md:flex-row md:space-x-8 md:space-y-0">
                <li v-for="item in Menu" :key="item.name">
                    <a href="javascript:void(0)" 
                        :class="[
                            'block transition-all duration-300 text-xl md:text-lg font-medium hover:scale-105',
                            item.name === 'Logout' 
                                ? 'text-red-400 hover:text-red-300 bg-red-400/10 hover:bg-red-400/20 px-4 py-2 rounded-full border border-red-400/30'
                                : 'text-white hover:text-green-400 relative group'
                        ]"
                        @click="item.name === 'Logout' ? logout() : scrollToSection(item.href)"
                    >
                        {{ item.name }}
                        <!-- Animated underline for non-logout items -->
                        <span v-if="item.name !== 'Logout'" 
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
    { name: 'Logout', href: '#logout' }, // Log out menu item
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

// Function to handle logout
const logout = () => {
    // Clear session storage or token (if you're using authentication)
    localStorage.removeItem('auth_token'); // Example for removing token from localStorage
    sessionStorage.clear(); // Clear session storage if used
    // Redirect to the login page or home page
    window.location.href = '/login'; // Change this URL to your login page
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

/* Mobile menu animations */
@media (max-width: 768px) {
    nav.fixed {
        animation: fadeInScale 0.3s ease-out forwards;
    }
}

@keyframes fadeInScale {
    from {
        opacity: 0;
        transform: scale(0.95);
    }
    to {
        opacity: 1;
        transform: scale(1);
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
