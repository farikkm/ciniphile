<template>
  <section class="home__slider slider" v-if="currentSlider">
    <div class="slider__title">
      <router-link :to="'/' + rout">{{ title }}</router-link>
      <img src="@img/common/arrow-right.svg" alt="arrow-right" />
    </div>

    <SliderItem 
      :title="title" 
      :currentSlider="currentSlider" 
      :smallImageUrl="smallImageUrl"
      class="slider"
    />
  </section>
</template>

<script>
import { mapActions, mapState } from "vuex";
import SliderItem from "./SliderItem.vue";

export default {
  components: { SliderItem },
  props: {
    title: String,
    rout: String,
  },

  // ========================================> METHODS <===================================================== //

  methods: {
    ...mapActions("popularMovies", ["getPopularMovies"]),
    ...mapActions("popularSeries", ["getPopularSeries"]),
  },

  // ========================================> COMPUTED <===================================================== //

  computed: {
    ...mapState("popularMovies", ["popularMovies"]),
    ...mapState("popularSeries", ["popularSeries"]),
    ...mapState(["smallImageUrl"]),

    currentSlider() {
      return this.rout == "films" ? this.popularMovies : this.popularSeries;
    },
  },

  // ========================================> MOUNTED <===================================================== //
  
  async mounted() {
    await this.getPopularMovies();
    await this.getPopularSeries();
  },
};
</script>
<style lang="scss"></style>
