import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    barColor: 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)',
    barImage: 'https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-1.jpg',
    drawer: null,
    allPosts: [],
    postResult: {},
  },
  mutations: {
    SET_BAR_IMAGE (state, payload) {
      state.barImage = payload
    },
    SET_DRAWER (state, payload) {
      state.drawer = payload
    },
    SET_POSTS (state, payload) {
      state.allPosts = payload
    },
    SET_RESULTS (state, payload) {
      state.postResult = payload
    },
  },
  actions: {
createPost ({ commit, state }, payload) {
  fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then(response => response.json())
            .then(json => console.log(json))
            .catch(error => {
              console.error('Error:', error)
})
},
getPosts ({ commit, state }) {
  if (localStorage.getItem('userPosts') !== null) {
    commit('SET_POSTS', JSON.parse(localStorage.getItem('userPosts')))
  } else {
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => {
    localStorage.setItem('userPosts', JSON.stringify(json))
    commit('SET_POSTS', json)
  }).catch(error => {
    console.error('Error:', error)
})
  }
},

searchPosts ({ commit, state }, payload) {
  if (localStorage.getItem(`${payload.query}`) !== null) {
    commit('SET_RESULTS', JSON.parse(localStorage.getItem(`${payload.query}`)))
  } else {
  fetch(`https://jsonplaceholder.typicode.com/posts/${payload.query}`)
  .then((response) => response.json())
  .then((json) => {
    localStorage.setItem(`${payload.query}`, JSON.stringify(json))
    commit('SET_RESULTS', json)
  console.log(json)
}).catch(error => {
  console.error('Error:', error)
})
  }
  },

  },

})
