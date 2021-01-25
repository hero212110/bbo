import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  window.onNuxtReady(() => {
    createPersistedState({ key: 'vuex', storage: window.localStorage })(store)
  })
}
