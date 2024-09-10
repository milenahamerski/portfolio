<template>
  <div
    id="socials"
    class="w-full h-screen relative flex flex-col justify-between"
    style="
      background-image: url('/src/assets/images/espiral.png');
      background-size: cover;
      background-position: center;
    "
  >
    <!-- Container para os botões centralizados -->
    <div class="flex justify-center items-center flex-grow">
      <div class="grid grid-cols-2 gap-4 pl-20 pt-20">
        <!-- Botão GitHub -->
        <button
          @click="openLink('github')"
          class="w-16 h-16 border border-custom-gray rounded hover:bg-custom-text transition duration-300 ease-in-out flex items-center justify-center"
        >
          <p class="text-custom-gray">GitHub</p>
        </button>
        <!-- Botão LinkedIn -->
        <button
          @click="openLink('linkedin')"
          class="w-16 h-16 border border-custom-gray rounded hover:bg-custom-text transition duration-300 ease-in-out flex items-center justify-center"
        >
          <p class="text-custom-gray">LinkedIn</p>
        </button>
        <!-- Botão Behance -->
        <button
          @click="openLink('behance')"
          class="w-16 h-16 border border-custom-gray rounded hover:bg-custom-text transition duration-300 ease-in-out flex items-center justify-center"
        >
          <p class="text-custom-gray">Behance</p>
        </button>
        <!-- Botão Email -->
        <button
          @click="openLink('email')"
          class="w-16 h-16 border border-custom-gray rounded hover:bg-custom-text transition duration-300 ease-in-out flex items-center justify-center"
        >
          <p class="text-custom-gray">Email</p>
        </button>
      </div>
    </div>

    <div class="mb-10 flex justify-center w-full">
      <button class="contact-button" @click="scrollToTop">Back to top</button>
    </div>
  </div>
</template>

<script setup>
function openLink(type) {
  switch (type) {
    case "github":
      window.open("https://github.com/milenahamerski", "_blank");
      break;
    case "linkedin":
      window.open("https://www.linkedin.com/in/milena-hamerski", "_blank");
      break;
    case "behance":
      window.open("https://www.behance.net/hamerskimilena", "_blank");
      break;
    case "email":
      window.location.href = "mailto:hamerskimilena@gmail.com";
      break;
    default:
      console.error("Unknown button type:", type);
  }
}

function scrollToTop() {
  const homeSection = document.getElementById("home");
  if (homeSection) {
    window.scrollTo({
      top: homeSection.offsetTop,
      behavior: "smooth",
    });
  }
}
</script>

<style scoped>
.contact-button {
  width: 10em;
  position: relative;
  height: 2.5em;
  border: 3px ridge #5697c2;
  outline: none;
  background-color: transparent;
  color: #fff8b8;
  transition: 1s;
  border-radius: 0.3em;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
}

.contact-button::after {
  content: "";
  position: absolute;
  top: -10px;
  left: 3%;
  width: 95%;
  height: 40%;
  background-color: #1e1e1e;
  transition: 0.5s;
  transform-origin: center;
}

.contact-button::before {
  content: "";
  transform-origin: center;
  position: absolute;
  top: 80%;
  left: 3%;
  width: 95%;
  height: 40%;
  background-color: #1e1e1e;
  transition: 0.5s;
}

.contact-button:hover::before,
.contact-button:hover::after {
  transform: scale(0);
}

.contact-button:hover {
  box-shadow: inset 0px 0px 25px #149cea;
}
</style>
