<template>
  <section id="portfolio" class="relative h-screen">
    <div class="absolute inset-x-0 object-cover right-0 lg:w-auto max-h-[80vh]">
      <img
        src="@/assets/images/ondaspg4.png"
        alt="Imagem de Fundo"
        class="w-full object-cover"
      />
    </div>
    <div class="absolute top-0 left-0 pt-5">
      <img
        src="@/assets/images/borboletapg4.png"
        alt="Imagem de Fundo"
        class="w-32 lg:w-48"
      />
    </div>

    <div
      class="relative flex flex-col lg:flex-row items-start lg:items-center justify-center h-full p-4 pt-20"
    >
      <div
        class="w-full lg:w-2/3 flex flex-col justify-center items-center mb-8 lg:mb-0"
      >
        <Slider @slideChange="updateText" />
      </div>

      <div
        class="w-full lg:w-1/3 flex flex-col lg:flex-row justify-center items-center text-center lg:text-left"
      >
        <div
          class="text-justify px-2 lg:flex lg:flex-col lg:items-start lg:justify-start lg:gap-2"
        >
          <h2 class="text-lg md:text-xl lg:text-2xl mb-3">About the Project</h2>
          <p class="text-sm md:text-base lg:text-sm mb-4 lg:mb-0">
            {{ currentText }}
          </p>

          <div
            v-if="currentSlide === 0"
            class="flex flex-wrap gap-2 mt-4 justify-center lg:justify-start"
          >
            <button
              class="w-12 h-12 border border-custom-gray rounded flex items-center justify-center text-xs text-custom-gray"
            >
              HTML
            </button>
            <button
              class="w-12 h-12 border border-custom-gray rounded flex items-center justify-center text-xs text-custom-gray"
            >
              CSS
            </button>
            <button
              class="w-12 h-12 border border-custom-gray rounded flex items-center justify-center text-xs text-custom-gray"
            >
              Bootstrap
            </button>
            <a
              href="https://milenahamerski.github.io/projeto-worldpackers/"
              target="_blank"
              class="ml-10 w-24 h-12 border border-custom-hover rounded hover:bg-custom-text transition duration-300 ease-in-out flex items-center justify-center text-xs text-custom-hover font-semibold"
            >
              Go to website
            </a>
          </div>

          <div
            v-if="currentSlide === 1"
            class="flex flex-wrap gap-2 mt-4 justify-center lg:justify-start"
          >
            <a
              href="https://spline.design/"
              target="_blank"
              class="w-12 h-12 border border-custom-gray rounded flex items-center justify-center text-xs text-custom-gray"
            >
              Spline
            </a>
            <a
              href="https://reactjs.org/"
              target="_blank"
              class="w-12 h-12 border border-custom-gray rounded flex items-center justify-center text-xs text-custom-gray"
            >
              React
            </a>
            <a
              href="https://milenahamerski.github.io/spline-404"
              target="_blank"
              class="ml-10 w-24 h-12 border border-custom-hover rounded hover:bg-custom-text transition duration-300 ease-in-out flex items-center justify-center text-xs text-custom-hover font-semibold"
            >
              Go to homepage
            </a>
          </div>

          <div
            v-if="currentSlide === 2"
            class="flex flex-wrap gap-2 mt-4 justify-center lg:justify-start"
          >
            <button
              class="w-12 h-12 border border-custom-gray rounded flex items-center justify-center text-xs text-custom-gray"
            >
              Vue.js
            </button>
            <a
              href="https://milenahamerski.github.io/portfolio/"
              target="_blank"
              class="ml-10 w-24 h-12 border border-custom-hover rounded hover:bg-custom-text transition duration-300 ease-in-out flex items-center justify-center text-xs text-custom-hover font-semibold"
            >
              Go to website
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Slider from "./Slider.vue";

export default {
  components: {
    Slider,
  },
  data() {
    return {
      currentText:
        "Seashellter is a project developed for the HTML/CSS and frameworks course in the Internet Systems program at UTFPR. It follows a mobile-first approach, ensuring the design is optimized for mobile devices and then adapted for larger screens.",
      texts: [
        "Seashellter is a project developed for the HTML/CSS and frameworks course in the Internet Systems program at UTFPR. It follows a mobile-first approach, ensuring the design is optimized for mobile devices and then adapted for larger screens.",
        "For my 404 project, I was inspired by The Truman Show and decided to create a unique error page experience. Built using React and Spline, a 3D design tool, the page features an interactive 3D environment embedded directly into the web.",
        "For my portfolio, I wanted to showcase more than just my skills as a developer—I wanted it to reflect my personality. All the drawings featured were created by me, adding a personal touch to the design. I combined elements that inspire me, like the music of Cigarettes After Sex, the aesthetics of the videogame Life is Strange, and the symbolism of butterflies.",
      ],
      currentSlide: 0,
    };
  },
  methods: {
    updateText(slideIndex) {
      this.currentSlide = slideIndex;
      this.currentText = this.texts[slideIndex] || this.texts[0];
    },
    openLink(link) {
      console.log(`Clicked on: ${link}`);
    },
  },
};
</script>
