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
  SET_LEVEL(state, val) {
    state.level += val
  },
  SET_AS_MEMBER(state, val) {
    state.member.as = val
  },
  SET_YEAR_MEMBER(state, val) {
    state.member.year = val
  },
}

export default mutations
