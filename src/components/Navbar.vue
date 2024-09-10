<template>
  <div
    class="bg-custom-bg text-custom-text font-sans-narrow p-1 pr-8 fixed top-0 left-0 w-full flex items-center shadow-md z-50"
  >
    <div class="flex-grow flex items-center justify-start">
      <img src="/src/assets/images/logo.svg" alt="Logo" class="w-28 h-auto" />
    </div>
    <!-- Botão do Menu Hamburguer -->
    <button
      @click="toggleMenu"
      class="lg:hidden flex items-center p-2"
      aria-label="Open menu"
    >
      <svg
        class="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>
    </button>
    <!-- Menu Hamburguer -->
    <div
      :class="{ block: isMenuOpen, hidden: !isMenuOpen }"
      class="lg:hidden fixed top-0 left-0 w-full h-full bg-custom-bg flex flex-col items-center justify-center space-y-8"
    >
      <a
        href="#home"
        @click.prevent="
          scrollToSection('home');
          toggleMenu();
        "
        class="text-custom-text text-lg hover:text-custom-hover transition-colors duration-300"
      >
        {{ $t("message.home") }}
      </a>
      <a
        href="#about"
        @click.prevent="
          scrollToSection('about');
          toggleMenu();
        "
        class="text-custom-text text-lg hover:text-custom-hover transition-colors duration-300"
      >
        {{ $t("message.about") }}
      </a>
      <a
        href="#skills"
        @click.prevent="
          scrollToSection('skills');
          toggleMenu();
        "
        class="text-custom-text text-lg hover:text-custom-hover transition-colors duration-300"
      >
        {{ $t("message.skills") }}
      </a>
      <a
        href="#portfolio"
        @click.prevent="
          scrollToSection('portfolio');
          toggleMenu();
        "
        class="text-custom-text text-lg hover:text-custom-hover transition-colors duration-300"
      >
        {{ $t("message.portfolio") }}
      </a>
      <a
        href="#socials"
        @click.prevent="
          scrollToSection('socials');
          toggleMenu();
        "
        class="text-custom-text text-lg hover:text-custom-hover transition-colors duration-300"
      >
        {{ $t("message.socials") }}
      </a>
    </div>
    <!-- Links de Navegação para Desktop -->
    <ul class="hidden lg:flex space-x-8 items-center font-bold">
      <li>
        <a
          href="#home"
          @click.prevent="scrollToSection('home')"
          class="text-custom-text text-lg hover:text-custom-hover transition-colors duration-300"
        >
          {{ $t("message.home") }}
        </a>
      </li>
      <li>
        <a
          href="#about"
          @click.prevent="scrollToSection('about')"
          class="text-custom-text text-lg hover:text-custom-hover transition-colors duration-300"
        >
          {{ $t("message.about") }}
        </a>
      </li>
      <li>
        <a
          href="#skills"
          @click.prevent="scrollToSection('skills')"
          class="text-custom-text text-lg hover:text-custom-hover transition-colors duration-300"
        >
          {{ $t("message.skills") }}
        </a>
      </li>
      <li>
        <a
          href="#portfolio"
          @click.prevent="scrollToSection('portfolio')"
          class="text-custom-text text-lg hover:text-custom-hover transition-colors duration-300"
        >
          {{ $t("message.portfolio") }}
        </a>
      </li>
      <li>
        <a
          href="#socials"
          @click.prevent="scrollToSection('socials')"
          class="text-custom-text text-lg hover:text-custom-hover transition-colors duration-300"
        >
          {{ $t("message.socials") }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth",
    });
  }
}
</script>

<style scoped>
/* Adicione qualquer estilo específico para o menu hamburguer aqui */
</style>
