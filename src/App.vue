<template>
  <div id="app">
    <Preloader />
  </div>
</template>

<script>
import Preloader from "./components/Preloader";
export default {
  name: "App",
  components: {
    Preloader
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}
</style>
