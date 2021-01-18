import player2011 from '@/static/data/player/2011.json'
import player2012 from '@/static/data/player/2012.json'
const fullPlayer = {
  player2011,
  player2012,
}
class PlayerService {
  static async getPlayerList(params) {
    console.log(params)
    let { field, name, ovr, team, weather, type, year } = params
    try {
      let minYeaR = year[0]
      let maxYeaR = year[1]
      let players = []

      for (let i = minYeaR; i <= maxYeaR; i++) {
        fullPlayer[`player${i}`] &&
          (players = players.concat(fullPlayer[`player${i}`]))
      }

      players = filterSelection('field', field, players)
      players = filterSelection('team', team, players)
      players = filterSelection('weather', weather, players)
      players = filterSelection('type', type, players)
      players = filterRange('ovr', ovr, players)
      players = filterText('name', name, players)
      console.log(players)
      return players
    } catch (error) {
      return error
    }
  }
}
export default PlayerService

function filterSelection(type, key, list) {
  //選擇all 不過濾直接返回
  if (key.includes('all')) {
    return list
  }
  //進行過濾
  else {
    //['brothers','lions']
    console.log(list)
    list = list.filter((item) => {
      if (key.includes(item[type])) {
        return item
      }
    })
    return list
  }
}

function filterRange(type, key, list) {
  let min = key[0]
  let max = key[1]
  //若為min和max 不過濾直接返回
  if (min == 56 && max == 92) {
    return list
  }
  //進行過濾
  else {
    list = list.filter((item) => {
      if (item[type] >= min && item[type] <= max) {
        return item
      }
    })
    return list
  }
}

function filterText(type, key, list) {
  let pattern = key
  //關鍵字不符 ,直接返回
  if (!pattern) {
    return list
  }
  //進行pattern matching
  else {
    list = list.filter((item) => {
      if (item[type].indexOf(pattern) != -1) {
        return item
      }
    })
    return list
  }
}
