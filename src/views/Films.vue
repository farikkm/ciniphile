<template>
   <div class="page__films films">
      <ContentList content="movie" class="films__content"/>
   </div>
</template>
<script>
import ContentList from '@components/common/Content/ContentList.vue'
export default {
  components: { ContentList },
   
}
</script>
<style lang="scss">
   
</style>