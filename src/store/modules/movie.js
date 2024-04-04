import axios from "axios";

export default {
  namespaced: true,
  state: {
    path: "https://api.themoviedb.org/3/movie/",
    movie: null,
  },
  mutations: {
    getMovieById(state, payload) {
      state.movie = payload
    }
  },
  actions: {
    async getMovieById({ commit, state, rootState }, movieID) {
      try {
        const response = await axios.get(
          `${state.path}${movieID}?language=ru-RU&api_key=${rootState.apiKey}`
        );
        const results = response.data
        commit('getMovieById', results)
      } catch (error) {
        console.log("Произошла ошибка при получение фильма по ID", error);
      }
    },
  },
  getters: {},
};
