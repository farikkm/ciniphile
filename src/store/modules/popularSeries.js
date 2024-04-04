import axios from "axios";

export default {
  namespaced: true,
  state: {
    path: "https://api.themoviedb.org/3/tv/popular",
    popularSeries: null,
  },
  mutations: {
    getPopular(state, payload) {
      state.popularSeries = payload
    }
  },
  actions: {
    async getPopularSeries({ commit, state, rootState }, page = 1) {
      try {
        const response = await axios.get(
          `${state.path}?language=ru-RU&api_key=${rootState.apiKey}&page=${page}`
        );
        const results = response.data.results
        commit('getPopular', results)
      } catch (error) {
        console.log("Произошла ошибка при получение сериалов", error);
      }
    },
  },
  getters: {},
};