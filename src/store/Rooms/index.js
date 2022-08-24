import { defineStore } from "pinia";

import actions from './actions'
import getters from './getters'

export const useRoomStore = defineStore("roomStore", {
  state: () => {
    return {
      errorCode: null,
      errorMessage: null
    };
  },
  getters,
  actions
});
