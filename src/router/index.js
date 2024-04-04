import { createRouter, createWebHistory } from "vue-router";
import Home from '@/views/Home.vue'

// -> Lazy loading 
import { Films, Series, Search, FilmID, SerieID } from './lazyLoadingConst'

const routes = [
   { path: '/', name: 'Home', component: Home },
   { path: '/films', name: 'Films', component: Films },
   { path: '/series', name: 'Series', component: Series },
   { path: '/search', name: 'Search', component: Search },
   { path: '/movie/:id', name: "MovieID", component: FilmID },
   { path: '/tv/:id', name: "SerieID", component: SerieID },
]

const router = createRouter({
   history: createWebHistory(),
   routes,
   scrollBehavior() {
      return { top: 0 }
   }
})

export default router;