<template>
   <router-link :to="page + id" class="btn-more">
      <img src="@img/common/btnBar.svg" alt="btnBar">
      <span>Подробнее</span>
   </router-link>
</template>
<script>
export default {
   name: 'BtnMore',
   props: {
      id: Number,
      page: {
         type: String,
         default: '/movie/'
      }
   }
}
</script>