<template>
  <div id="app">
    <Preloader />
    <Header />
  </div>
</template>

<script>
import Preloader from "./components/Preloader";
import Header from "./components/Header";
export default {
  name: "App",
  components: {
    Preloader,
    Header
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
body {
  background-color: #141414;
}
</style>
