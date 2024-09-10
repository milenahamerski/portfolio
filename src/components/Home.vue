<template>
  <div id="home" class="w-full h-screen relative snap-start">
    <div id="app"></div>

    <div
      class="relative w-screen h-screen flex items-center justify-center sm:justify-center lg:justify-end"
    >
      <div
        class="absolute flex flex-col items-center sm:items-center lg:items-start lg:w-1/3 lg:pl-10"
      >
        <div
          id="inicio"
          class="text-center sm:text-left text-custom-text mt-6 sm:-mt-40 mr-10"
        >
          <div class="text-lg sm:text-xxxl lg:text-xxxl">
            <p class="font-bold">
              {{ $t("message.hello") }}
            </p>
            <p class="font-regular mt-4 text-base sm:text-lg lg:text-lg">
              {{ $t("message.subtext") }}
            </p>
          </div>
          <div
            class="mt-10 flex justify-center sm:justify-center lg:justify-start w-full"
          >
            <button @click="goToSocials" class="contact-button">
              Contact me
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div id="sobre" class="absolute top-0 left-0 pl-3 ml-3">
    <img
      src="/src/assets/images/borboletapg.1.png"
      alt="Borboleta"
      class="w-64 lg:w-80"
    />
  </div>

  <div
    class="milena-img absolute bottom-0 left-1/4 pl-16 sm:left-8 sm:pl-4 lg:left-1/4 lg:pl-16"
  >
    <img
      src="/src/assets/images/imgMilena.png"
      alt="milena"
      class="w-48 lg:w-72 opacity-95"
    />
  </div>

  <div id="portfolio-img" class="absolute bottom-0 right-0 pr-4 ml-5">
    <img
      src="/src/assets/images/binariospg1.png"
      alt="binarios"
      class="w-64 lg:w-80"
    />
  </div>

  <div id="contact" class="contact-img absolute bottom-0 left-20 pl-4">
    <img
      src="/src/assets/images/imgfundopg.1.png"
      alt="Imagem de Fundo"
      class="w-64 lg:w-[900px]"
    />
  </div>
</template>

<script setup>
function goToSocials() {
  const socialsSection = document.getElementById("socials");
  if (socialsSection) {
    window.scrollTo({
      top: socialsSection.offsetTop,
      behavior: "smooth",
    });
  }
}
</script>

<style scoped>
button {
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

button::after {
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

button::before {
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

button:hover::before,
button:hover::after {
  transform: scale(0);
}

button:hover {
  box-shadow: inset 0px 0px 25px #149cea;
}

@media (max-width: 639px) {
  #inicio {
    margin-top: -20px; /* Ajuste a margem para subir o texto */
  }
  .milena-img {
    left: 20%;
  }
  .milena-img img {
    width: 10rem;
  }

  .contact-img {
    left: -2%;
  }

  .contact-img img {
    width: 31rem;
  }

  .contact-button {
    z-index: 6;
  }
}
</style>
