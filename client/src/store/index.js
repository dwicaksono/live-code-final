import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import axios from 'axios'
const server = 'http://localhost:3000'
export default new Vuex.Store({
  state: {
    countries: [],
    dataReports: []
  },
  mutations: {
    FETCH_COUNTRIES(state, payload) {
      state.countries = payload
    },
    FETCH_REPORTS(state, payload) {
      // state.dataReports = payload
    },
    FETCH_REPORTS_1(state, payload) {
      state.dataReports = payload
    }
  },
  actions: {
    getCountry({ commit }) {
      axios({
        method: 'GET',
        url: `${server}/countries`,
        headers: {
          token: localStorage.token
        }
      })
        .then(({ data }) => {
          commit('FETCH_COUNTRIES', data)
        })
        .catch(err => {
          console.log(err.reponse)
        })
    },
    toReport({ commit }, data) {
      axios({
        method: "POST",
        url: `${server}/reports`,
        headers: {
          token: localStorage.token
        },
        data
      })
        .then(({ data }) => {
          commit('FETCH_REPORTS', data)
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    allReport({ commit }) {
      axios({
        method: "GET",
        url: `${server}/reports`,
        headers: {
          token: localStorage.token
        }

      })
        .then(({ data }) => {
          commit('FETCH_REPORTS_1', data)
        })
        .catch(err => {
          console.log(err.response)
        })
    }


  },
  modules: {
  }
})
