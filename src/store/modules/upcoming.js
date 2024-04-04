import axios from "axios";

export default {
  namespaced: true,
  state: {
    path: "https://api.themoviedb.org/3/movie/upcoming",
    upcoming: null,
  },
  mutations: {
    getUpcoming(state, payload) {
      state.upcoming = payload;
    },
  },
  actions: {
    async getUpcoming({ commit, state, rootState }) {
      try {
        const response = await axios.get(
          `${state.path}?api_key=${rootState.apiKey}&language=ru-RU&page=1`
        );
        const results = response.data.results;
        const filteredResults = results.filter(
          (movie) => movie.backdrop_path != null && movie.overview != ''
        );
        commit("getUpcoming", filteredResults);
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters: {
    getUpcomingArray: (state) => state.upcoming,
  },
};
