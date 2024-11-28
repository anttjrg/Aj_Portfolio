<template>
    <header class="flex justify-between items-center p-6 bg-opacity-50 relative z-20">
        <div class="text-white text-3xl font-bold">T.I.P</div>
        <!-- Mobile Toggle Button -->
        <div class="md:hidden z-30">
            <button type="button" 
                class="block focus:outline-none"
                @click="isMenuOpen = !isMenuOpen">
                <span v-if="isMenuOpen" class="text-5xl">
                    <img src="https://img.icons8.com/ios-filled/100/ffffff/delete-sign.png" alt="close">
                </span>
                <span v-else class="text-5xl">
                    <img src="https://img.icons8.com/ios-filled/100/ffffff/menu--v6.png" alt="menu">
                </span>
            </button>
        </div> 
        <!-- Navbar Link -->
        <nav
            :class="['fixed inset-0 z-20 flex flex-col items-center justify-center bg-transparent md:relative md:bg-transparent md:flex md:justify-between md:flex-row',
                isMenuOpen ? 'block':'hidden'
            ]"
        >
            <ul class="flex flex-col items-center space-y-5 md:flex-row md:space-x-5 md:space-y-0">
                <li v-for="item in Menu" :key="item.name">
                    <a href="javascript:void(0)" 
                        class="block text-white transition hover:text-[#8B5CF6] ease-linear text-2xl md:text-lg"
                        @click="item.name === 'Logout' ? logout() : scrollToSection(item.href)"
                    >
                        {{ item.name }}
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
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Hobby', href: '#hobby' },
    { name: 'Contact', href: '#contact' },
    { name: 'Logout', href: '#logout' }, // Log out menu item
]);

const isMenuOpen = ref(false);

// Function to scroll to section
const scrollToSection = (href) => {
    isMenuOpen.value = false;
    const section = document.querySelector(href);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
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
/* Navbar styling */
nav {
    background: transparent; /* Make the background transparent */
    /* border-bottom: 2px solid #4F46E5; */ /* Removed border for emphasis */
}

/* Mobile Menu Styling */
.md:hidden {
    display: block;
}

ul li a {
    color: white; /* White text for visibility */
    transition: color 0.3s ease;
}

ul li a:hover {
    color: #8B5CF6; /* Violet on hover */
}

/* Remove dark background from mobile menu */
nav ul {
    background-color: transparent; /* Remove the dark background */
    padding: 2rem 0;
    border-radius: 8px;
}

/* Fix text visibility when scrolling */
header {
    position: relative;
    z-index: 20; /* Ensure the text stays on top */
}
</style>
