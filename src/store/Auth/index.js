import { defineStore } from "pinia";

import actions from './actions'
import getters from './getters'

export const useAuthStore = defineStore("authStore", {
  state: () => {
    return {
      user: JSON.parse(localStorage.getItem("User")),
      errorCode: null,
      errorMessage: null
    };
  },
  getters,
  actions
});
