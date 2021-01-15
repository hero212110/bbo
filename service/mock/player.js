import player2011 from '@/static/data/player/2011.json'
class PlayerService {
  static async getPlayerList(params) {
    console.log(params)
    console.log(player2011.brothers)
    return player2011.brothers
    // try {
    //   return player2011.brothers
    // } catch (error) {
    //   return error
    // }
  }
}
export default PlayerService
