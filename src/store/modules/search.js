import axios from "axios";

export default {
  namespaced: true,
  state: {
    path: "https://api.themoviedb.org/3/search/multi",
    searchData: null,
  },
  mutations: {
   getSearchData(state, payload) {
      state.searchData = payload
    }
  },
  actions: {
    async getSearchData({ commit, state, rootState }, search) {
      try {
        const response = await axios.get(
          `${state.path}?language=ru-RU&api_key=${rootState.apiKey}&query=${search}`
        );
        const results = response.data.results
        commit('getSearchData', results)
      } catch (error) {
        console.log("Произошла ошибка при получение фильма по ID", error);
      }
    },
  },
  getters: {},
};