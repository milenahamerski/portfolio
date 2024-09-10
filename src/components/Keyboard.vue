<template>
  <div class="keyboard-container flex flex-col items-start">
    <div class="keyboard flex flex-col">
      <div class="flex">
        <div class="w-3/4">
          <div>
            <div class="flex space-x-2 mb-2">
              <button
                class="w-24 h-16 border border-custom-gray rounded overflow-hidden hover:bg-custom-text transition duration-300 ease-in-out"
                @click="
                  setMessage(
                    'Figma is a collaborative web application for interface design'
                  )
                "
              >
                <p
                  class="absolute inset-1 w-10 h-10 object-cover text-custom-gray"
                >
                  Figma
                </p>
              </button>
              <button
                class="w-16 h-16 border border-custom-gray rounded relative overflow-hidden hover:bg-custom-text transition duration-300 ease-in-out"
                @click="
                  setMessage(
                    'Vue.js is a progressive JavaScript framework for building user interfaces'
                  )
                "
              >
                <p
                  class="absolute inset-1 w-10 h-10 object-cover text-custom-gray"
                >
                  Vue.js
                </p>
              </button>
              <button
                class="w-16 h-16 border border-custom-gray rounded relative overflow-hidden hover:bg-custom-text transition duration-300 ease-in-out"
                @click="
                  setMessage(
                    'JavaScript is a versatile scripting language used primarily for web development'
                  )
                "
              >
                <p
                  class="absolute inset-1 w-10 h-10 object-cover text-custom-gray"
                >
                  JS
                </p>
              </button>
              <button
                class="w-16 h-16 border border-custom-gray rounded relative overflow-hidden hover:bg-custom-text transition duration-300 ease-in-out"
                @click="
                  setMessage(
                    'TypeScript is a superset of JavaScript that adds static types'
                  )
                "
              >
                <p
                  class="absolute inset-1 w-10 h-10 object-cover text-custom-gray"
                >
                  TS
                </p>
              </button>
            </div>

            <div class="flex space-x-2 mb-2 -p-2">
              <button
                class="w-16 h-16 border border-custom-gray rounded relative overflow-hidden hover:bg-custom-text transition duration-300 ease-in-out"
                @click="
                  setMessage(
                    'Angular is a platform and framework for building single-page client applications using HTML and TypeScript'
                  )
                "
              >
                <p
                  class="absolute inset-1 w-10 h-10 object-cover text-custom-gray"
                >
                  Angular
                </p>
              </button>
              <button
                class="w-16 h-16 border border-custom-gray rounded hover:bg-custom-text transition duration-300 ease-in-out relative"
                @click="
                  setMessage(
                    'Spline is an online 3D design tool that allows users to create interactive 3D web experiences easily, similar to Blender but focused on web integration.'
                  )
                "
              >
                <p class="absolute top-1 left-1 text-custom-gray">Spline</p>
              </button>

              <button
                class="w-16 h-16 border border-custom-gray rounded hover:bg-custom-text transition duration-300 ease-in-out"
              ></button>
              <button
                class="w-16 h-16 border border-custom-gray rounded hover:bg-custom-text transition duration-300 ease-in-out"
              ></button>
              <button
                class="w-16 h-16 border border-custom-gray rounded hover:bg-custom-text transition duration-300 ease-in-out"
              ></button>
            </div>
          </div>
        </div>
        <div>
          <div class="flex mb-2">
            <button class="svg-button">
              <img
                src="/src/assets/images/enter.svg"
                alt="Enter"
                width="77"
                height="60"
                class="svg-img"
              />
            </button>
          </div>
        </div>
      </div>

      <div class="flex justify-start">
        <button
          class="w-[400px] h-16 border border-custom-gray hover:bg-custom-text rounded transition duration-300 ease-in-out"
        ></button>
      </div>
    </div>

    <div v-if="message" class="mt-4 text-custom-text text-sm">
      {{ message }}
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const message = ref("");

function setMessage(description) {
  message.value = description;
}
</script>

<style scoped>
.svg-button .svg-img {
  transition: opacity 0.8s ease-in-out;
}

.svg-button:hover .svg-img {
  content: url("/src/assets/images/enterFill.svg");
}

.keyboard-container {
  text-align: center;
}

.keyboard {
  position: relative;
}

.tooltip {
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: #333;
  color: #fff;
  padding: 5px;
  border-radius: 3px;
  font-size: 12px;
  white-space: nowrap;
  z-index: 10;
}
</style>
