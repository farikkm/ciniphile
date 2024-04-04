<template>
  <Transition name="slide" mode="out-in">
    <div class="upcoming__wrapper" v-if="idx === slideView">
      <img
        :src="imageUrl + movie.backdrop_path"
        class="upcoming__img"
        alt="bg"
      />
      <div class="upcoming__text">
        <h1 class="upcoming__title">{{ movie.title }}</h1>
        <p class="upcoming__subtitle">
          {{ movie.overview }}
        </p>
        <BtnMore :id="movie.id"/>
      </div>
      <div class="upcoming__next next-upcoming" @click="$emit('nextSlide')">
        <div class="next-upcoming__text">
          <p class="next-upcoming__subtitle">Следующий</p>
          <h5 class="next-upcoming__title">{{ next.title }}</h5>
        </div>
        <img
          :src="imageUrl + next.backdrop_path"
          class="next-upcoming__img"
          alt="minibg"
        />
        <div class="next-upcoming__line"></div>
      </div>
    </div>
  </Transition>
</template>
<script>
import { mapState } from "vuex";
export default {
  props: {
    movie: {
      type: Object,
      required: true,
    },
    idx: {
      type: Number,
      required: true,
    },
    slideView: {
      type: Number,
      required: true,
    },
    next: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapState(["imageUrl"]),
  },
};
</script>
<style lang="scss" scoped>
.slide-enter-active, .slide-leave-active {
  transition: .4s linear;
}
.slide-enter-from {
  opacity: 0;
  transform: scale(1);
}
.slide-leave-to {
  opacity: 0;
  transform: scale(1.2);
}
</style>
