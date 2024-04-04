import axios from "axios";

export default {
  namespaced: true,
  state: {
    path: "https://api.themoviedb.org/3/movie/top_rated",
    topRate: null,
  },
  mutations: {
    getTopRate(state, payload) {
      state.topRate = payload
    }
  },
  actions: {
    async getTopRate({ commit, state, rootState }) {
      try {
        const response = await axios.get(
          `${state.path}?language=ru-RU&api_key=${rootState.apiKey}&page=1`
        );
        const results = response.data.results
        const top10 = []
        results.forEach(result => {
          if(top10.length < 10) top10.push(result)
        });
        commit('getTopRate', top10)
      } catch (error) {
        console.log("Произошла ошибка при получение топовых фильмов", error);
      }
    },
  },
  getters: {},
};
