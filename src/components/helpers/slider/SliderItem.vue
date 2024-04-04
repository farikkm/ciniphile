<template>
  <Swiper
    :modules="modules"
    :space-between="23"
    :navigation="true"
    :breakpoints="swiperOptions.breakpoints"
    class="slider__swiper"
  >
    <!-- :speed="1000" :autoplay="{ delay: 1000, disableOnInteraction: true, }" -->
    <!-- ================================= Loop of Slides ============================== -->
    <SwiperSlide
      class="slider__item"
      v-for="(movie, idx) in currentSlider"
      :key="idx"
      @click="getMovie(movie, idx)"
    >
      <img
        :src="smallImageUrl + movie.poster_path"
        alt="slider-img"
        class="slider__img"
      />
    </SwiperSlide>
    <!-- ================================ Last Slide =============================== -->
    <SwiperSlide class="slider__item">
      <router-link to="/films">
        <img src="@img/common/arrow-right.svg" alt="arrow-right" />
        <span>Все {{ title }}</span>
      </router-link>
    </SwiperSlide>
    <!-- ============================================================================== -->
  </Swiper>

  <DetailedInfo 
    :index="index"
    :selectedId="selectedId"
    :selectedMovie="selectedMovie"
    :page="title != 'Фильмы' ? '/tv/' : undefined"
  />
</template>
<script>
import DetailedInfo from './DetailedInfo.vue';

import { mapState, mapActions } from 'vuex'

import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";

export default {
  components: { Swiper, SwiperSlide, DetailedInfo },
  // ============================================================================================= //
  props: {
    title: String,
    currentSlider: Array,
    smallImageUrl: String
  },

  data() {
    return {
      index: null,
      selectedId: null,
      selectedMovie: null,

      modules: [Navigation, Autoplay],
      swiperOptions: {
        breakpoints: {
          320: {
            slidesPerView: 1,
          },
          576: {
            slidesPerView: 2,
          },
          900: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
          1450: {
            slidesPerView: 4,
          },
          1600: {
            slidesPerView: 4,
          },
          1920: {
            slidesPerView: 5,
          },
          2560: {
            slidesPerView: 6,
          },
        },
      },
    };
  },

  methods: {
    ...mapActions('movie', ['getMovieById']),
    ...mapActions('serie', ['getSerieById']),

    async getMovie(movie, idx) {
      this.selectedId = movie.id;
      this.selectedMovie = null;
      this.index = idx

      if (this.title == "Фильмы") {
        await this.getMovieById(this.selectedId)
        this.selectedMovie = this.movie
      } else {
        await this.getSerieById(this.selectedId)
        this.selectedMovie = this.serie
      }
    },
  },

  computed: {
    ...mapState('movie', ['movie']),
    ...mapState('serie', ['serie'])
  }
};
</script>
<style lang="scss"></style>
