import player2007 from '@/static/data/player/2007.json'
import player2008 from '@/static/data/player/2008.json'
import player2009 from '@/static/data/player/2009.json'
import player2011 from '@/static/data/player/2011.json'
import player2010 from '@/static/data/player/2010.json'
import player2012 from '@/static/data/player/2012.json'
import player2013 from '@/static/data/player/2013.json'
import player2014 from '@/static/data/player/2014.json'
import player2015 from '@/static/data/player/2015.json'
import player2016 from '@/static/data/player/2016.json'
import player2017 from '@/static/data/player/2017.json'
import player2018 from '@/static/data/player/2018.json'
import player2019 from '@/static/data/player/2019.json'

const fullPlayer = {
  player2007,
  player2008,
  player2009,
  player2010,
  player2011,
  player2012,
  player2013,
  player2014,
  player2015,
  player2016,
  player2017,
  player2018,
  player2019,
}
class PlayerService {
  static async getPlayerList(params) {
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
