<template>
  <div class="slider-container relative w-full">
    <transition name="fade" mode="out-in">
      <div :key="currentIndex" class="slider-content">
        <img :src="currentImg" class="slider-img" />
      </div>
    </transition>
    <a class="prev" @click="prev">&#10094;</a>
    <a class="next" @click="next">&#10095;</a>
  </div>
</template>

<script>
import seashellter from "@/assets/images/seashellter.png";
import notFound from "@/assets/images/404.png";
import portfolio from "@/assets/images/portfolio.png";

export default {
  name: "Slider",
  data() {
    return {
      images: [seashellter, notFound, portfolio],
      currentIndex: 0,
    };
  },
  methods: {
    next() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      this.$emit("slideChange", this.currentIndex);
    },
    prev() {
      this.currentIndex =
        (this.currentIndex - 1 + this.images.length) % this.images.length;
      this.$emit("slideChange", this.currentIndex);
    },
  },
  computed: {
    currentImg() {
      return this.images[this.currentIndex];
    },
  },
};
</script>

<style scoped>
.slider-container {
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: auto;
  overflow: hidden;
}

.slider-img {
  width: 100%;
  height: 400px;
  object-fit: cover;
}

.slider-content {
  position: relative;
}

.slider-caption {
  position: absolute;
  bottom: 10px;
  left: 10px;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 5px;
  border-radius: 4px;
}

.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  user-select: none;
}

.next {
  right: 10px;
}

.prev {
  left: 10px;
}

.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.9);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
