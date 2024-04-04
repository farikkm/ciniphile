<template>
  <Transition name="slide-fade">
    <div class="slider__info info-slider" v-if="selectedMovie && time">
      <img
        src="@img/common/close.svg"
        alt="close"
        class="info-slider__close"
        @click="selectedMovie = null"
      />

      <div class="info-slider__wrapper">
        <img
          :src="imageUrl + selectedMovie.backdrop_path"
          alt=""
          class="info-slider__img"
          v-if="selectedMovie.backdrop_path"
        />

        <img
          src="@img/common/no-image.svg"
          alt="no-image"
          class="info-slider__img"
          v-else
        />

        <div class="info-slider__content">
          <div class="info-slider__content-block">
            <div class="info-slider__text">
              <h2 class="info-slider__title">
                {{ selectedMovie.title || selectedMovie.name }}
              </h2>
              <p class="info-slider__subtitle">
                {{
                  selectedMovie.overview ||
                  "The overview of this serie does not exist :("
                }}
              </p>
              <div class="info-slider__janre">
                <p>
                  {{
                    selectedMovie.release_date?.substr(0, 4) ||
                    selectedMovie.first_air_date?.substr(0, 4)
                  }},
                  <span v-for="genre in selectedMovie.genres" :key="genre.id">{{
                    genre.name + ", "
                  }}</span>
                </p>
                <span v-if="selectedMovie.episode_run_time">{{
                  selectedMovie.episode_run_time.length == 0
                    ? "40мин."
                    : selectedMovie.episode_run_time + "мин."
                }}</span>
                <span v-else>{{ time }}</span>
              </div>
            </div>
            <Actors />
            <BtnMore :id="selectedMovie.id" :page="page"/>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
<script>
import { mapState } from "vuex";
export default {
  props: ["index", "selectedId", "selectedMovie", "page"],

  data() {
    return {
      time: null,
    };
  },

  computed: {
    ...mapState(["imageUrl"]),
  },

  methods: {
    getTime(mins) {
      let hours = Math.trunc(mins / 60);
      let minutes = mins % 60;
      this.time = hours + "ч. " + minutes + "м.";
    },
  },
  updated() {
    if (this.selectedMovie) this.getTime(this.selectedMovie.runtime);
  },
};
</script>

<style lang="scss">
.slide-fade-enter-active {
  transition: all 0.4s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(30px);
  opacity: 0;
}
</style>
