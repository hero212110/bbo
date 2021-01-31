import levelList from '@/static/data/upgrade/level.json'
import teamList from '@/static/data/upgrade/team.json'
import extraList from '@/static/data/upgrade/extra.json'
import historyObj from '@/static/data/upgrade/history.json'
const statusList = [
  'ovr',
  'power',
  'contact',
  'base_speed',
  'defense_speed',
  'defense_range',
  'throw_power',
  'throw_skill',
  'dex',
]
const getters = {
  GetUpgradedPlayerList: (state) => {
    let tmp = JSON.parse(JSON.stringify(state.playerList))

    if (state.level) {
      tmp.forEach((item) => {
        let arr = levelList[item.type][state.level]
        for (let i = 0; i < statusList.length; i++) {
          item[statusList[i]] += arr[i]
        }
      })
    }

    if (state.member.as) {
      tmp.forEach((item) => {
        let arr = teamList.ALLSTAR[state.member.as]
        for (let i = 0; i < statusList.length; i++) {
          item[statusList[i]] += arr[i]
        }
      })
    }

    if (state.member.year) {
      tmp.forEach((item) => {
        let arr = teamList.YEAR[state.member.year]
        for (let i = 0; i < statusList.length; i++) {
          item[statusList[i]] += arr[i]
        }
      })
    }

    if (state.member.extra) {
      tmp.forEach((item) => {
        let arr = extraList[state.member.extra]
        for (let i = 0; i < statusList.length; i++) {
          item[statusList[i]] += arr[i]
        }
      })
    }

    if (state.sort.val) {
      tmp.sort(function (a, b) {
        if (state.sort.decrease) {
          return b[state.sort.val] - a[state.sort.val]
        } else {
          return a[state.sort.val] - b[state.sort.val]
        }
      })
    }

    return tmp
  },

  GetUpgradedStartingPlayerList: (state) => {
    let tmp = JSON.parse(JSON.stringify(state.startingPlayerList))

    tmp.forEach((item, index) => {
      if (item) {
        if (item.level) {
          let arr = levelList[item.type][item.level]
          for (let i = 0; i < statusList.length; i++) {
            item[statusList[i]] += arr[i]
          }
        }
        if (item.extra) {
          let arr = extraList[item.extra]
          for (let i = 0; i < statusList.length; i++) {
            item[statusList[i]] += arr[i]
          }
        }
        if (state.basicTeam.id && state.basicTeam.val) {
          let obj = JSON.parse(JSON.stringify(historyObj))
          if (obj[state.basicTeam.id].includes(item.team)) {
            let arr = teamList.ALLSTAR[state.basicTeam.val]
            for (let i = 0; i < statusList.length; i++) {
              item[statusList[i]] += arr[i]
            }
          }
        }
        if (state.basicYear.val && item.year == state.basicYear.id) {
          let arr = teamList.YEAR[state.basicYear.val]
          for (let i = 0; i < statusList.length; i++) {
            item[statusList[i]] += arr[i]
          }
        }
      }
    })

    return tmp
  },
}

export default getters
