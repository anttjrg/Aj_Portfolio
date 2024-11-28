<template>
  <div class="login-container">
    <div class="login-form">
      <h2 class="text-center text-white font-bold text-2xl mb-8">Login</h2>
      <form @submit.prevent="handleLogin" class="form">
        <div class="form-group">
          <label for="username" class="text-white">Username</label>
          <input
            type="text"
            id="username"
            v-model="username"
            required
            placeholder="Enter your username"
            class="input-field"
          />
        </div>
        <div class="form-group">
          <label for="password" class="text-white">Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            required
            placeholder="Enter your password"
            class="input-field"
          />
        </div>
        <button type="submit" class="submit-btn">Login</button>
      </form>
      <p v-if="error" class="error-message">{{ error }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      error: ''
    };
  },
  methods: {
    handleLogin() {
      const validUsername = 'admin'; // Define valid username
      const validPassword = '12345'; // Define valid password

      // Check if username or password are empty
      if (this.username === '' || this.password === '') {
        this.error = 'Username and password are required.';
        return;
      }

      // Check if username and password match
      if (this.username === validUsername && this.password === validPassword) {
        // Emit the login success event to parent (App.vue)
        this.$emit('login-success');
      } else {
        this.error = 'Invalid credentials, please try again.'; // Show error if login fails
      }
    }
  }
};
</script>

<style scoped>
/* Background gradient with violet and blue colors */
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #6a4c9c, #3b82f6); /* Violet to Blue gradient */
}

.login-form {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
}

h2 {
  font-size: 2rem;
  color: #6a4c9c; /* Violet for the title */
  margin-bottom: 2rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  font-size: 1rem;
  font-weight: bold;
  color: #3b82f6; /* Blue color for labels */
  display: block;
  margin-bottom: 0.5rem;
}

.input-field {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  background-color: #f4f7fc;
  transition: border-color 0.3s ease;
}

.input-field:focus {
  border-color: #3b82f6; /* Blue focus border */
  outline: none;
}

.submit-btn {
  width: 100%;
  padding: 12px;
  background-color: #3b82f6; /* Blue button */
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-btn:hover {
  background-color: #2563eb; /* Darker blue on hover */
}

.error-message {
  color: red;
  font-size: 0.9rem;
  margin-top: 1rem;
  text-align: center;
}
</style>
