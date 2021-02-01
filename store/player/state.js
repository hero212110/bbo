const state = () => ({
  form: {},
  drawer: false,
  playerList: [],
  starPlayerList: [],
  startingPlayerList: [null, null, null, null, null, null, null, null, null],
  currStartingPlayer: null,
  basicDialog: false,
  basicTeam: { id: null, val: null },
  basicYear: { id: null, val: null },
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
  swapMode: false,
  saveImg: false,
})

export default state
