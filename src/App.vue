<template>
<div class="wrapper">
  <Header />
  <main class="page">
    <router-view></router-view>
  </main>
  <Footer />
</div>
</template>
<script>
import Header from '@components/common/Header.vue';
import Footer from '@components/common/Footer.vue';

export default {
  components: { Header, Footer }
}
</script>
<style lang="scss">

</style>
