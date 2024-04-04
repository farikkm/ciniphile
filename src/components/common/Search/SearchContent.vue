<template>
  <main class="search">
    <div class="search__container container">
      <SearchInput
        placeholder="Найти фильм, сериал..."
        @searchValue="updateInput"
      />

      <div class="search__wrapper" v-if="searchData">
        <div class="search__items">
          <router-link :to="`/${movie}/${item.id}`" class="search__item item-search">
            <img
              :src="imageUrl + item.poster_path"
              alt="search-img"
              class="item-search__img"
            />
          </router-link>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import SearchInput from "./SearchInput.vue";
import { mapState } from "vuex";
export default {
  components: { SearchInput },
  computed: {
    ...mapState("search", ["searchData"]),
    ...mapState(["imageUrl"]),
  },
  methods: {
    updateInput(value) {
      if (value != "") {
        this.$store.dispatch("search/getSearchData", value);
        console.log(this.searchData);
         console.log(value );
      }
    },
  },
};
</script>
<style lang="scss">
</style>