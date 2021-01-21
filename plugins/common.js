import statusList from '@/static/data/common/status.json'
import idList from '@/static/data/common/id.json'

import player2011 from '@/static/data/player/2011.json'
export default ({ app, store }, inject) => {
  inject('getPlayerList', (params) => {
    return player2011.brothers
  })

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
}
