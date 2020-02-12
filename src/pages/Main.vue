<template>
  <div id="app">
    <Header />
    <NextReleases />
  </div>
</template>

<script>
import Header from "../components/Header";
import NextReleases from "../components/NextReleases";
export default {
  name: "App",
  components: {
    Header,
    NextReleases
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
  height: 100vh;
}
</style>
