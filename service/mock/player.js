import player2011 from '@/static/data/player/2011.json'
import player2012 from '@/static/data/player/2012.json'
const fullPlayer = {
  player2011,
  player2012,
}
class PlayerService {
  static async getPlayerList(params) {
    console.log(params)
    try {
      let minYeaR = params.year[0]
      let maxYeaR = params.year[1]
      console.log(fullPlayer)
      console.log(fullPlayer['player2011'])

      let arr = []

      for (let i = minYeaR; i <= maxYeaR; i++) {
        console.log(i)
        if (fullPlayer[`player${i}`]) {
          arr = arr.concat(fullPlayer[`player${i}`].brothers)
        }
      }

      // return player2011.brothers
      return arr
    } catch (error) {
      return error
    }
  }
}
export default PlayerService
