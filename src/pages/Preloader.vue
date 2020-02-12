<template>
  <transition name="fade">
    <div v-if="show" class="preloader">
      <div class="divImg">
        <img class="logoPreloader" :src="image" />
      </div>
      <RingLoader :color="'#E50931'" />
    </div>
  </transition>
</template>

<script>
import RingLoader from "@bit/joshk.vue-spinners-css.ring-loader";

import image from "../assets/logo-big.png";
export default {
  name: "Preloader",
  data() {
    return {
      show: true,
      image: image
    };
  },
  mounted() {
    if (this.show) this.showToggle();
  },
  components: {
    RingLoader
  },
  methods: {
    showToggle() {
      setTimeout(() => {
        this.show = false;
        this.$router.push("/Main");
      }, 4000);
    }
  }
};
</script>

<style>
.preloader {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #141414;
  z-index: 9999;
}
.divImg {
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}

@media only screen and (max-width: 900px) {
  .logoPreloader {
    width: 200px;
  }
}
</style>
