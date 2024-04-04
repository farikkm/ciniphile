<template>
   <div class="page__home home" v-show="upcoming !== null">
      <Upcoming />

      <Slider title="Фильмы" rout="films" />
      <Slider title="Сериалы" rout="series" />
      
      <TopSlider />
   </div>
</template>
<script>
import Upcoming from '@components/common/Upcoming/Upcoming.vue'
import Slider from '@components/helpers/slider/Slider.vue'
import TopSlider from '../components/helpers/TopSlider.vue'

import { mapState } from 'vuex'
export default {
  components: { Upcoming, Slider, TopSlider },
  computed: {
    ...mapState('upcoming', ['upcoming'])
  }
}
</script>
<style lang="scss">
   
</style>