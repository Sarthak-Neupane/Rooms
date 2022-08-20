import { defineStore } from "pinia";

import actions from './actions'
import getters from './getters'

export const useAuthStore = defineStore("authStore", {
  state: () => {
    return {
      user: null,
      errorCode: null,
      errorMessage: null
    };
  },
  getters,
  actions
});
