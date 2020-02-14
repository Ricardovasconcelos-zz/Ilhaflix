<template>
  <div id="newMovies">
    <h1>{{ typeDescription }}</h1>
    <div id="slide">
      <carousel
        :per-page="4"
        :navigate-to="0"
        :mouse-drag="true"
        :paginationEnabled="false"
        :navigationEnabled="true"
        :navigationClickTargetSize="9"
      >
        <slide v-bind:key="movie.imdbID" v-for="movie in movies" id="divs">
          <div>
            <img :src="movie.Poster" id="imagem" alt />
          </div>
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

import { Movies } from "../services/api";

export default {
  name: "Movies",

  data() {
    return {
      movies: []
    };
  },
  props: ["typeMovie", "typeDescription"],
  components: {
    Carousel,
    Slide
  },

  async mounted() {
    const response = await Movies(this.typeMovie).get();

    this.movies = response.data.Search;
  }
};
</script>
<style>
#newMovies {
  width: 90%;
  height: 100%;
  text-align: center;
  margin: auto;
}
#newMovies h1 {
  color: #cacaca;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-top: 15px;
  padding-left: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
#divs {
  margin-top: 23px;
  padding-left: 20px;
  flex: 1;
}
#imagem {
  border-radius: 15px;
  transition: 0.5s;
  height: 300px;
  margin-bottom: 20px;
  width: 200px;
}
#imagem:hover {
  transform: scale(1.1);
  cursor: pointer;
}
@media only screen and (max-width: 599px) {
  #imagem {
    height: 150px;
    width: 100px;
  }
}
</style>
