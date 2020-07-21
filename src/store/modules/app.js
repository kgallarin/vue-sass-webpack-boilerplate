import router from '@routes'

export default {
  namespaced: true,
  state: {
    isAuthenticated: false,
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight,
    isModal: false
  },
  getters: {
    GET_WINDOW_HEIGHT(state) {
      return state.windowHeight;
    },
    GET_WINDOW_WIDTH(state) {
      return state.windowWidth;
    }
  },
  mutations: {
    SET_WINDOW_HEIGHT(state, payload) {
      state.windowHeight = payload
    },
    SET_WINDOW_WIDTH(state, payload) {
      state.windowWidth = payload
    }
  },
  actions: {
  }
};
