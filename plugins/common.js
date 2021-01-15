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
      params > 111
        ? 'yellow'
        : params > 101
        ? 'purple'
        : params > 91
        ? 'red'
        : params > 81
        ? 'orange'
        : params > 71
        ? '#0072E3'
        : 'gray'
    return color
  })

  //   inject('getProductText', (params) => {
  //     let textList = []
  //     let productCodeList = []
  //     productCodeConversionTable.forEach((item) => {
  //       textList.push(item.text)
  //       productCodeList.push(item.productCode)
  //     })
  //     return textList[productCodeList.indexOf(params)] || ''
  //   })
}
