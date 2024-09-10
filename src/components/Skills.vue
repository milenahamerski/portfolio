<template>
  <section
    id="skills"
    class="w-full min-h-screen relative snap-start mt-64 pt-20 flex flex-col"
  >
    <!-- Imagem de fundo superior -->
    <div class="absolute top-0 right-0 pt-5 pl-5 z-10">
      <img
        src="/src/assets/images/borboletaspg3.png"
        alt="Imagem de Fundo"
        class="w-48 lg:w-64"
      />
    </div>

    <div class="relative p-4 lg:p-32 flex flex-col flex-grow z-20">
      <div class="flex flex-col md:flex-row justify-between w-full h-full pl-6">
        <!-- Coluna de Tecnologias -->
        <div class="w-full md:w-1/2 flex flex-col mb-6">
          <div class="relative mb-6">
            <div class="absolute inset-y-0 left-0 flex">
              <div class="w-0.5 h-full bg-custom-hover"></div>
            </div>
            <h2 class="relative pl-4 text-xl md:text-2xl lg:text-xxl">
              TECHNOLOGIES
            </h2>
          </div>
          <div class="container"><Keyboard /></div>
        </div>

        <!-- Coluna de Idiomas -->
        <div
          class="w-full md:w-1/2 flex flex-col mb-12 languages-container"
          ref="languagesSection"
        >
          <div class="relative mb-6 flex items-start">
            <div class="absolute inset-y-0 left-0 flex items-center">
              <div class="w-0.5 h-full bg-custom-hover"></div>
            </div>
            <h2
              class="relative pl-4 text-xl md:text-2xl lg:text-xxl text-start"
            >
              LANGUAGES
            </h2>
          </div>
          <div class="container">
            <div class="skill-box">
              <span class="title">Portuguese</span>
              <div class="skill-bar">
                <span class="skill-per html">
                  <span class="tooltip">Native</span>
                </span>
              </div>
            </div>

            <div class="skill-box">
              <span class="title">English</span>
              <div class="skill-bar">
                <span class="skill-per css">
                  <span class="tooltip">Fluent</span>
                </span>
              </div>
            </div>

            <div class="skill-box">
              <span class="title">French</span>
              <div class="skill-bar">
                <span class="skill-per javascript">
                  <span class="tooltip">Fluent</span>
                </span>
              </div>
            </div>

            <div class="skill-box">
              <span class="title">Spanish</span>
              <div class="skill-bar">
                <span class="skill-per nodejs">
                  <span class="tooltip">Intermediate</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="absolute inset-x-0 bottom-0 z-10">
      <img
        src="/src/assets/images/ondaspg3.png"
        alt="Imagem de Fundo"
        class="w-full object-cover"
      />
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Keyboard from "./Keyboard.vue";

const languagesSection = ref(null);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Adiciona a classe de animação apenas uma vez
          if (!entry.target.classList.contains("animate-skills")) {
            entry.target.classList.add("animate-skills");
          }
        }
      });
    },
    {
      threshold: 0.5, // Ativar a 50% de visibilidade
    }
  );

  if (languagesSection.value) {
    observer.observe(languagesSection.value);
  }
});
</script>

<style scoped>
.container {
  position: relative;
  max-width: 500px;
  width: 100%;
  margin: 0 15px;
  padding: 10px 20px;
  border-radius: 7px;
  user-select: none;
  z-index: 20;
}

@media (max-width: 640px) {
  .container {
    min-width: 300px; /* Ajuste conforme necessário */
    width: auto; /* Garante que o contêiner não será comprimido */
  }
}

.container .skill-box {
  width: 100%;
  margin: 25px 0;
}

.skill-box .title {
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #fff8b8;
}

.skill-box .skill-bar {
  height: 8px;
  width: 100%;
  border-radius: 6px;
  margin-top: 6px;
  background: rgba(0, 0, 0, 0.4);
}

.skill-bar .skill-per {
  position: relative;
  display: block;
  height: 100%;
  width: 90%;
  border-radius: 6px;
  background: #5697c2;
  animation: progress 0.4s ease-in-out forwards;
  opacity: 0;
}

.skill-per.html {
  width: 100%;
  animation-delay: 0.1s;
}

.skill-per.css {
  width: 80%;
  animation-delay: 0.1s;
}

.skill-per.javascript {
  width: 80%;
  animation-delay: 0.2s;
}

.skill-per.nodejs {
  width: 50%;
  animation-delay: 0.3s;
}

@keyframes progress {
  0% {
    width: 0;
    opacity: 1;
  }

  100% {
    opacity: 1;
  }
}

.skill-per .tooltip {
  position: absolute;
  right: -14px;
  top: -28px;
  font-size: 9px;
  font-weight: 500;
  color: #fff;
  padding: 2px 6px;
  border-radius: 3px;
  background: #5697c2;
  z-index: 1;
}

.tooltip::before {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -2px;
  height: 10px;
  width: 10px;
  z-index: -1;
  background: #5697c2;
  transform: translateX(-50%) rotate(45deg);
}

.languages-container .skill-bar .skill-per {
  opacity: 0;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.6s ease-in-out;
}

/* Quando a animação é ativada (barra visível e crescendo da esquerda para a direita) */
.languages-container.animate-skills .skill-bar .skill-per {
  opacity: 1;
  transform: scaleX(1); /* Barra cresce até o valor completo */
}

/* Português - 100% */
.skill-per.html.portuguese {
  transform: scaleX(1); /* 100% */
}

/* Inglês - 80% */
.skill-per.css.english {
  transform: scaleX(0.8); /* 80% */
}

/* Francês - 80% */
.skill-per.javascript.french {
  transform: scaleX(0.8); /* 80% */
}

/* Espanhol - 50% */
.skill-per.nodejs.spanish {
  transform: scaleX(0.5); /* 50% */
}
</style>
