import axios from "axios";

export default {
  namespaced: true,
  state: {
    path: "https://api.themoviedb.org/3/tv/",
    serie: null,
  },
  mutations: {
    getSerieById(state, payload) {
      state.serie = payload
    }
  },
  actions: {
    async getSerieById({ commit, state, rootState }, serieID) {
      try {
        const response = await axios.get(
          `${state.path}${serieID}?language=ru-RU&api_key=${rootState.apiKey}&page=1`
        );
        const results = response.data
        commit('getSerieById', results)
      } catch (error) {
        console.log("Произошла ошибка при получение сериалов", error);
      }
    },
  },
  getters: {},
};