const mutations = {
  INITIAL_STATE(state, val) {
    const default_state = {
      form: {},
      playerList: [],
      level: 0,
      member: {
        as: 0,
        year: 0,
        extra: null,
      },
      sort: {
        val: '',
        decrease: true,
      },
      loading: false,
    }
    state = JSON.parse(JSON.stringify(default_state))
  },
  SET_LOADING(state, val) {
    state.loading = val
  },
  SET_PLAYER_LIST(state, val) {
    state.playerList = JSON.parse(JSON.stringify(val))
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
  SET_EXTRA_MEMBER(state, val) {
    state.member.extra = val
  },
  SET_SORT_VAL(state, val) {
    state.sort.val = val
  },
  SET_SORT_DECREASE(state, val) {
    state.sort.decrease = val
  },
  REMOVE_PLAYER(state, val) {
    let tmp = JSON.parse(JSON.stringify(state.playerList))
    tmp = tmp.filter((item) => {
      return item.id != val
    })
    state.playerList = JSON.parse(JSON.stringify(tmp))
  },
  JUSTIFY_PLUS(state, val) {
    if (val) {
      state.level = 10
      state.member.as = 28
      state.member.year = 28
      state.member.extra = 'SPEED'
    } else {
      state.level = 0
      state.member.as = 0
      state.member.year = 0
      state.member.extra = null
    }
  },
}

export default mutations
