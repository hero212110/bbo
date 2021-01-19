import levelList from '@/static/data/upgrade/level.json'
import teamList from '@/static/data/upgrade/team.json'
import extraList from '@/static/data/upgrade/extra.json'

const getters = {
  GetUpgradedPlayerList: (state) => {
    let statusList = [
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

    return tmp
  },
}

export default getters
