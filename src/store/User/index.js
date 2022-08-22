import { defineStore } from "pinia";

import actions from './actions'
import getters from './getters'

export const useUserStore = defineStore("userStore", {
  state: () => {
    return {
      error: false,
        errorCode: null,
        errorMessage: null
    };
  },
  getters,
  actions
});
