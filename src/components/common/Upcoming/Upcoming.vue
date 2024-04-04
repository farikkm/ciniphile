<template>
  <div class="home__upcoming upcoming" v-if="upcoming" :style="{ height: windowHeight + 'px' }">

    <UpcomingItem
      v-for="(movie, idx) in getUpcomingArray"
      :key="movie.backdrop_path"
      :movie="movie"
      :idx="idx"
      :slideView="slideView"
      :next="upcoming[idx + 1 == upcoming.length ? 0 : idx + 1]"
      @nextSlide="nextSlide"
    />

  </div>
</template>
<script>
import UpcomingItem from "./UpcomingItem.vue";

import { mapActions, mapGetters } from "vuex";
export default {
  // ==================================== //
  components: { UpcomingItem },
  // ==================================== //
  data() {
    return {
      slideView: 0,
      timeout: null,
      upcoming: null,
    };
  },
  // ======> Getting getters from vuex
  computed: {
    ...mapGetters("upcoming", ["getUpcomingArray"]),
  },
  // ==================================== //
  methods: {
    ...mapActions("upcoming", ["getUpcoming"]),
    slide() {
      if (this.upcoming.length - 1 === this.slideView) {
        this.slideView = 0;
      } else {
        this.slideView++;
      }
      this.timeout = setTimeout(this.slide, 10000);
    },
    nextSlide() {
      clearTimeout(this.timeout);
      this.slide();
    },
  },
  // ======> Рекурсия слайдов
  async mounted() {
    await this.getUpcoming();
    this.upcoming = this.getUpcomingArray;
    this.timeout = setTimeout(this.slide, 10000);
  },
  // ======> Window Height
  setup() {
    const windowHeight = window.innerHeight
    return { windowHeight }
  }
};
</script>
