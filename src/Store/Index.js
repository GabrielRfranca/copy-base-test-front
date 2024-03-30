import { createStore } from 'vuex';

const store = createStore({
  state: {
    responseData: null,
    success: false
  },
  mutations: {
    setResponseData(state, data) {
      state.responseData = data;
    },
    setSuccess(state, value) {
      state.success = value;
    }
  }
});

export default store;