<template>
  <div class="wrap">
    <div class="bg-video">
      <video autoplay muted loop src="../assets/video.mp4"></video>
    </div>

    <div class="container">
      <h1>O Código Bill Gates</h1>
      <h3>55 min | Tecnologia | Janeiro 2020</h3>
      <h3>
        Bill Gates fala sobre a missão de vida ou morte para melhorar as condições
        de saneamento no mundo em desenvolvimento. E suas irmãs relembra a infância com ele.
      </h3>
      <Button>Assistir</Button>
      <Button>icon like</Button>
      <Button>icon dislike</Button>
      <h4>Criação: Davis Guggenheim</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "NextRealeses",
  data() {
    return {};
  }
};
</script>
<style>
.wrap {
  width: 100%;
  height: 90vh;
  position: relative;
  background: #1414147e;
  display: flex;
  align-items: center;
}
.wrap > .bg-video {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.wrap > .bg-video > video {
  width: 100%;
}
</style>
