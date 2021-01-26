const state = () => ({
  form: {},
  playerList: [],
  starPlayerList: [],
  startingPlayerList: [null, null, null, null, null, null, null, null, null],
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
})

export default state
