const state = () => ({
  form: {},
  playerList: [],
  starPlayerList: [],
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
})

export default state
