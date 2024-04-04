<template>
  <div class="home__top top">
    <div class="top__wrapper">
      <div class="top__title">
        <span>топ</span>
        <span>10</span>
      </div>

      <Swiper
        :modules="modules"
        :space-between="23"
        :navigation="true"
        :breakpoints="swiperOptions.breakpoints"
        class="top__slider"
      >
        <SwiperSlide
          v-for="(movie, idx) in topRate"
          :key="idx"
          @click="getTopRateItem(movie, idx)"
        >
        <div>
        <div class="top__slide">
          <div class="top__item item-top">
            <h2 class="item-top__title">
              {{ idx + 1 }}
            </h2>
            <div class="item-top__img">
              <img :src="smallImageUrl + movie.poster_path" alt="test" />
            </div>
          </div>
        </div>
        </div>

        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
export default {
  components: { Swiper, SwiperSlide },
  // ============================================================================================= //
  data() {
    return {
      modules: [Navigation, Autoplay],
      swiperOptions: {
        breakpoints: {
          320: {
            slidesPerView: 1,
          },
          576: {
            slidesPerView: 1,
          },
          900: {
            slidesPerView: 1,
          },
          1200: {
            slidesPerView: 2,
          },
          1450: {
            slidesPerView: 2,
          },
          1600: {
            slidesPerView: 2,
          },
          1920: {
            slidesPerView: 3,
          },
          2560: {
            slidesPerView: 4,
          },
        },
      },
    };
  },
  // ============================================================================================= //
  methods: {
    ...mapActions("topRate", ["getTopRate"]),
    getTopRateItem(movie, idx) {
      console.log(movie, idx);
    },
  },
  computed: {
    ...mapState("topRate", ["topRate"]),
    ...mapState(["smallImageUrl"]),
  },
  async mounted() {
    await this.getTopRate();
  },
};
</script>
<style lang="scss"></style>
