import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    isAuthenticated: false
  }),
  getters: {
    getUser: (state) => state.user,
    userName: state => {
      if (state.user && state.user.displayName) {
        return state.user.displayName || ''
      }
    }
  },
  actions: {
    increment () {
      // this.counter++
    }
  }
})
