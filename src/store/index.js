import { createStore } from 'vuex'
import upcoming from './modules/upcoming'
import popularMovies from './modules/popularMovies'
import popularSeries from './modules/popularSeries'
import topRate from './modules/topRate'
import movie from './modules/movie'
import serie from './modules/serie'
import search from './modules/search'

export default createStore({
  state: {
    apiKey: 'e6d6038adef1968391f39db3fc0d42fb',
    imageUrl: 'https://image.tmdb.org/t/p/original',
    smallImageUrl: 'https://image.tmdb.org/t/p/w500'
  },
  modules: {
    upcoming, popularMovies, popularSeries, topRate, movie, serie, search
  }
})
