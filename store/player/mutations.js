const mutations = {
  SET_LOADING(state, val) {
    state.loading = val
  },
  SET_PLAYER_LIST(state, val) {
    state.playerList = val
  },
  CLEAR_PLAYER_LIST(state) {
    state.playerList = []
  },
}

export default mutations
