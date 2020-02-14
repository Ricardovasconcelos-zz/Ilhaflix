<template>
  <div>
    <Header />
    <div id="containerDetail">
      <div id="MovieDetail">
        <div v-show="showLoading" id="loadingSpinner">
          <Spinner />
        </div>
        <img :src="movie.Poster" />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import { Movies } from "../services/api";
import Spinner from "../components/Spinner";
export default {
  name: "Detail",
  data() {
    return {
      movie: [],
      showLoading: true
    };
  },
  components: {
    Header,
    Spinner
  },

  async mounted() {
    this.showLoading = true;
    try {
      const response = await Movies(`i=${this.$route.params.id}`).get();
      this.movie = response.data;
    } catch (error) {
      console.log(error);
    } finally {
      this.showLoading = false;
    }
  }
};
</script>

<style>
#containerDetail {
  border: 1px solid red;
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
#MovieDetail {
  border: 1px solid yellow;
  width: 80%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
