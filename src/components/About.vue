<template>
  <section id="about" class="w-full h-screen relative snap-start m-0 p-0">
    <div class="img-fundo absolute top-0 left-24">
      <img
        src="/src/assets/images/fundopg2.png"
        alt="Imagem de Fundo"
        class="w-64 lg:w-[900px]"
      />
    </div>
    <div class="absolute top-0 right-0 pr-4 ml-5">
      <img
        src="/src/assets/images/binariospg2.png"
        alt="binarios"
        class="w-64 lg:w-80"
      />
    </div>
    <div class="absolute top-0 right-0 px-6 py-16 mx-4 my-24">
      <img src="/src/assets/images/pc.png" alt="Logo PC" style="width: 400px" />
    </div>

    <div class="p-4 md:p-8 lg:p-52 pt-20 h-full flex flex-col justify-between">
      <div class="flex flex-col flex-grow">
        <div class="relative mb-6">
          <div class="absolute inset-y-0 left-0 flex items-center">
            <div class="w-0.5 h-full bg-custom-hover"></div>
          </div>
          <h2 class="relative pl-4 text-xl md:text-xl lg:text-xl">EDUCATION</h2>
        </div>
        <div class="text-custom-text text-sm md:text-base lg:text-lg">
          <p class="font-semibold">
            Federal University of Technology – Guarapuava, Paraná
          </p>
          <p
            class="text-xs md:text-sm lg:text-base font-light text-custom-gray"
          >
            Set 2023 – 2026 (expected): Technologist in Internet Systems,
            Information Technology
          </p>
        </div>
      </div>

      <!-- Seção de Experiência de Trabalho -->
      <div class="flex flex-col flex-grow mt-10 md:mt-16 lg:mt-20 mb-6">
        <div class="relative mb-6">
          <div class="absolute inset-y-0 left-0 flex items-center">
            <div class="w-0.5 h-full bg-custom-hover"></div>
          </div>
          <h2 class="relative pl-4 text-xl md:text-xl lg:text-lg">
            WORK EXPERIENCE
          </h2>
        </div>
        <div class="text-custom-text text-sm md:text-base lg:text-lg">
          <div class="relative">
            <p class="font-semibold">Developer</p>
            <p
              class="text-xs md:text-sm lg:text-base font-light text-custom-gray"
            >
              Fiqon Tecnologia Exponencial LTDA - Guarapuava, Paraná
            </p>
            <span
              class="inline-block bg-custom-hover text-custom-text p-2 rounded-lg text-xs md:text-sm lg:text-sm font-light mt-4"
            >
              Jul 2023 – Jul 2024
            </span>
          </div>
          <div class="p-4 md:p-6 lg:p-8 pt-6 md:pt-8 lg:pt-10">
            <ul
              class="list-disc list-inside text-xs md:text-sm lg:text-base text-custom-text"
            >
              <li>
                Integration of various systems, such as CRMs, ERPs, databases,
                and e-commerce platforms, using APIs and web services - to
                ensure efficient communication between platforms.
              </li>
              <li>
                Skills in creating and maintaining RESTful APIs with Node.js and
                Express.js, along with studies for developing APIs in ADVPL.
              </li>
              <li>
                Development of responsive and user-friendly interfaces using
                frameworks like Bootstrap.
              </li>
              <li>
                Proficiency in JavaScript to develop advanced solutions that
                meet specific client demands.
              </li>
              <li>
                Performing robust testing before deployment to ensure the
                quality and functionality of developed solutions.
              </li>
              <li>
                Active participation in client meetings, ensuring clear and
                effective communication.
              </li>
            </ul>
          </div>
        </div>

        <div
          class="text-custom-text text-sm md:text-base lg:text-lg pt-6 md:pt-8 lg:pt-10"
        >
          <div class="relative">
            <p class="font-semibold">Care Assistant</p>
            <p
              class="text-xs md:text-sm lg:text-base font-light text-custom-gray"
            >
              The Beeches Residential Home - Canterbury, England
            </p>
            <span
              class="inline-block bg-custom-hover text-custom-text p-2 rounded-lg md:text-sm lg:text-sm font-light mt-4"
            >
              Mai 2020 – Out 2022
            </span>
          </div>
          <div class="p-4 md:p-6 lg:p-8 pt-6 md:pt-8 lg:pt-10">
            <ul
              class="list-disc list-inside text-xs md:text-sm lg:text-base text-custom-text"
            >
              <li>
                Provided personal care and daily assistance for residents.
              </li>
              <li>
                Resolved issues related to residents' well-being and comfort.
              </li>
              <li>
                Improved English through regular communication with residents
                and colleagues.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Lógica específica do componente, se necessário
</script>

<style scoped>
.pt-62 {
  padding-top: 300px;
}

@media (max-width: 639px) {
  .img-fundo {
    left: 1%;
    z-index: 5;
  }

  .img-fundo img {
    width: 31rem;
  }
}
</style>
