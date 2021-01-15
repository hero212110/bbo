import PlayerService from '~/service/mock/player'
const actions = {
  async fetchPlayerList({ commit }, params) {
    let data = await PlayerService.getPlayerList(params)
    setTimeout(() => {
      commit('SET_PLAYER_LIST', data)
      commit('SET_LOADING', false)
    }, 2000)
  },
}

export default actions
