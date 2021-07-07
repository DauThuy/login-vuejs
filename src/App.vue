<template>
  <div id="app">
    <!-- <h1>Login</h1> -->
    <!-- <Home /> -->
    <!-- <Login /> -->

    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
// import { response } from 'express';
// import Home from './components/Home.vue'
// import Login from './components/Login.vue'

export default {
  name: 'App',
  components: {
    // Home,
    // Login
  },

  async created() {
    const response = await axios.get('user');

    // this.user = response.data;
    this.$store.dispatch('user', response.data);
  }
}
</script>

<style>

</style>
