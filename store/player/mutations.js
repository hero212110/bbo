const mutations = {
  INITIAL_STATE(state) {
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
    state = deepCopy(default_state)
  },
  SET_DRAWER(state, val) {
    state.drawer = val
  },
  SET_LOADING(state, val) {
    state.loading = val
  },
  SET_PLAYER_LIST(state, val) {
    state.playerList = deepCopy(val)
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
    let tmp = deepCopy(state.playerList)
    tmp = tmp.filter((item) => {
      return item.id != val
    })
    state.playerList = deepCopy(tmp)
  },
  STAR_PLAYER(state, val) {
    let tmp = deepCopy(state.starPlayerList)
    let arr = []
    tmp.forEach((item) => {
      arr.push(item.id)
    })

    if (arr.includes(val.id)) {
      let removed = tmp.filter((item) => {
        return item.id != val.id
      })
      state.starPlayerList = deepCopy(removed)
    } else {
      if (state.starPlayerList.length < 9) {
        let origin = deepCopy(state.playerList)
        let player = origin.find((item) => {
          return item.id == val.id
        })
        player.level = null
        player.extra = null
        state.starPlayerList.push(player)
      } else {
        this.$notify({ type: 'error', msg: '我的最愛上限為9名球員' })
      }
    }
  },
  CLEAR_STAR_PLAYER(state) {
    state.starPlayerList = []
  },
  CLEAR_STARTING_PLAYER(state) {
    state.startingPlayerList = deepCopy([
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ])
  },
  ADD_STARTING_PLAYER(state, { index, data }) {
    state.startingPlayerList.splice(index, 1, deepCopy(data))
  },
  REMOVE_STARTING_PLAYER(state, { index }) {
    state.startingPlayerList.splice(index, 1, null)
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
  SET_SWAP_MODE(state, val) {
    state.swapMode = val
    let swapOn = { type: 'success', msg: '變更打序模式已啟用' }
    let swapOff = { type: 'warning', msg: '變更打序模式已關閉' }
    this.$notify(val ? swapOn : swapOff)
  },
  SWAP_PLAYER(state, { p1, p2 }) {
    let player1 = deepCopy(state.startingPlayerList[p1])
    let player2 = deepCopy(state.startingPlayerList[p2])
    state.startingPlayerList.splice(p1, 1, player2)
    state.startingPlayerList.splice(p2, 1, player1)
  },
  SET_CURR_STARTING_PLAYER(state, val) {
    state.currStartingPlayer = val
  },
  UPDATE_CURR_STARTING_PLAYER_LEVEL(state, val) {
    let tmp = deepCopy(state.startingPlayerList[state.currStartingPlayer])
    tmp.level = val
    state.startingPlayerList.splice(state.currStartingPlayer, 1, tmp)
  },
  UPDATE_CURR_STARTING_PLAYER_EXTRA(state, val) {
    let tmp = deepCopy(state.startingPlayerList[state.currStartingPlayer])
    tmp.extra = val
    state.startingPlayerList.splice(state.currStartingPlayer, 1, tmp)
  },

  SET_BASIC_DIALOG(state, val) {
    state.basicDialog = val
  },
  UPDATE_BASIC_TEAM(state, { id }) {
    state.basicTeam.id = id
  },
  UPDATE_TEAM_YEAR(state, id) {
    state.basicYear.id = id
  },
  UPDATE_SAME_TEAM_PLAYERS(state, val) {
    state.basicTeam.val = val
  },
  UPDATE_SAME_YEAR_PLAYERS(state, val) {
    state.basicYear.val = val
  },
  RESET_BASIC_TEAM(state) {
    state.basicTeam = deepCopy({ id: null, val: null })
    state.basicYear = deepCopy({ id: null, val: null })
  },
}

export default mutations

function deepCopy(e) {
  return JSON.parse(JSON.stringify(e))
}
