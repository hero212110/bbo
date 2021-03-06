import statusList from '@/static/data/common/status.json'
import idList from '@/static/data/common/id.json'
import PlayerService from '@/service/mock/player'
export default ({ app, store }, inject) => {
  inject('getStatusText', (params) => {
    return statusList[params] || ''
  })

  inject('getIdText', (params) => {
    return idList[params] || ''
  })

  inject('getStatusColor', (params) => {
    let color = ''
    color =
      params > 110
        ? 'yellow'
        : params > 100
        ? '#7E44EC'
        : params > 90
        ? 'red'
        : params > 80
        ? 'orange'
        : params > 70
        ? '#0072E3'
        : 'gray'
    return color
  })

  inject('getLevelColor', (params) => {
    let color = 'none'
    color =
      params >= 10
        ? 'rainbow'
        : params >= 8
        ? 'gold'
        : params >= 5
        ? 'silver'
        : params >= 1
        ? 'copper'
        : 'none'
    return color
  })

  inject('getCardColor', (params) => {
    let color = ''
    color =
      params > 80
        ? 'purple'
        : params > 75
        ? 'red'
        : params > 70
        ? 'orange'
        : 'blue'
    return `${color}-card`
  })

  inject('id2ovr2color', (params) => {
    let fullPlayerList = JSON.parse(
      JSON.stringify(PlayerService.getFullPlayerList())
    )
    let player = fullPlayerList.find((item) => {
      if (item) return item.id == params
    })

    let ovr = player ? player.ovr : 0
    let color =
      ovr > 80 ? 'purple' : ovr > 75 ? 'red' : ovr > 70 ? 'orange' : 'blue'
    return `${color}-card`
  })

  inject('getWeatherIcon', (params) => {
    let icon = 'cloud'
    icon =
      params == 'sun'
        ? 'sun'
        : params == 'cloud'
        ? 'cloud'
        : params == 'snow'
        ? 'snowflake'
        : params == 'rain'
        ? 'umbrella'
        : 'circle'

    return icon
  })

  inject('isStarPlayer', (id) => {
    let list = JSON.parse(JSON.stringify(store.state.player.starPlayerList))
    if (list.length == 0) {
      return false
    } else {
      let idList = list.map((item) => item.id)
      return idList.includes(id) ? true : false
    }
  })

  inject('notify', ({ type, msg }) => {
    store.commit('notify/fireNotify', { type, msg })
  })
}
