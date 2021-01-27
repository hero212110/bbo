const mutations = {
  fireNotify(state, { type, msg }) {
    state.isOpen = true
    state.type = type ? type : 'success'
    state.msg = msg ? msg : ''
  },
  shutNotify(state) {
    state.isOpen = false
  },
}

export default mutations
