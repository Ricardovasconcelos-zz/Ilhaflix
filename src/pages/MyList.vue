<template>
  <div>
    <Header />
    <div id="mylistContainer">
      <h1>MyListContent</h1>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
export default {
  name: "MyList",
  components: {
    Header
  }
};
</script>

<style>
#mylistContainer {
  width: 100%;
  height: 100%;
  border: 1px solid red;
}
</style>