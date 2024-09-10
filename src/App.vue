<template>
  <Navbar />
  <Home />
  <About />
  <Skills />
  <Portfolio />
  <Socials />
</template>

<script setup>
//import Keyboard from "./components/Keyboard.vue";
import Home from "./components/Home.vue";
import Navbar from "./components/Navbar.vue";
import About from "./components/About.vue";
import Skills from "./components/Skills.vue";
import Portfolio from "./components/Portfolio.vue";
import Socials from "./components/Socials.vue";
</script>
<style scoped>
html {
  scroll-behavior: smooth;
}
</style>
