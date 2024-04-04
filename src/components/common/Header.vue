<template>
  <header class="header">
    <div class="header__container">
      <div class="header__body">
        <div class="header__logo">
          <router-link to="/">
            <img src="@img/common/logo.svg" alt="logo" />
          </router-link>
        </div>
        <nav class="header__menu menu">
         <div class="menu__burger" @click="burgerActive">
            <span></span>
         </div>
          <ul class="menu__list" :class="{ _active: burger }" @click="closeBurger">
            <li class="menu__item" v-for="link in links" :key="link.path">
               <router-link :to="link.path" class="menu__link">
                  <span>{{ link.title }}</span>
                  <div class="menu__link_decor"></div>
               </router-link>
            </li>
            <li class="menu__item_search">
               <router-link to="/search">
                  <img src="@img/common/search.svg" alt="search">
                  <div class="menu__link_decor"></div>
               </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      burger: false,
      links: [
        { title: "Главная", path: "/" },
        { title: "Фильмы", path: "/films" },
        { title: "Сериалы", path: "/series" },
      ],
    };
  },
  methods: {
    burgerActive() {
      this.burger = true,
      document.body.classList.add('_lock')
    },
    closeBurger() {
      this.burger = false,
      document.body.classList.remove('_lock')
    }
  },
};
</script>
<style></style>
