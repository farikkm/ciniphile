<template>
   <router-link :to="`/${content}/${item.id}`" class="item-content">
      <img :src="imageUrl + item.poster_path" alt="" class="item-content__img">
      <span>{{ item.title }}</span>
   </router-link>
</template>
<script>
import { mapState } from 'vuex'
export default {
   props: ['item', 'content'],
   computed: {
      ...mapState(['imageUrl'])
   }
}
</script>
<style lang="scss">
   
</style>