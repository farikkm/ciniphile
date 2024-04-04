<template>
  <div class="content container">
    <h2 class="content__title">
      {{ content == "movie" ? "Все фильмы" : "Все сериалы" }}
    </h2>

    <div class="content__items">
      <ContentItem
        v-for="item in allContent"
        :key="item.id"
        :item="item"
        :content="content"
        class="content__item"
      />
    </div>
  </div>

  <div class="loading" v-if="loading">
    <div class="loading__spinner"></div>
  </div>
</template>
<script>
import ContentItem from "./ContentItem.vue"

import { mapState } from "vuex"
export default {
  components: { ContentItem },
  props: ["content"],

  data() {
    return {
      allContent: [],
      page: 1,
      loading: false,
    }
  },

  methods: {
    async getContent() {
      if (!this.loading) {
        this.loading = true
        let action =
          this.content == "movie"
            ? "popularMovies/getPopularMovies"
            : "popularSeries/getPopularSeries"

        await this.$store.dispatch(`${action}`, this.page)

        let data =
          this.content == "movie" ? this.popularMovies : this.popularSeries

        this.allContent.push(...data)

        setTimeout(() => {
          this.loading = false
          this.page++
        }, 2000)
      }
    },
  },

  computed: {
    ...mapState("popularMovies", ["popularMovies"]),
    ...mapState("popularSeries", ["popularSeries"]),
  },

  mounted() {
    this.getContent()
    window.addEventListener("scroll", () => {
      if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
        this.getContent()
      }
    })
  },
}
</script>
<style lang="scss"></style>
