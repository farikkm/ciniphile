<template>
   <input 
      type="text" 
      class="search__input"
      :placeholder="placeholder"
      v-model="value"
      autofocus
      @input="$emit('searchValue', value)"
   />
</template>
<script>
export default {
   props: ['placeholder'],
   data() {
      return {
         value: ''
      }
   },
}
</script>
<style lang="scss">
   
</style>