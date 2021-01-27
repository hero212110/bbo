<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-sheet min-height="65vh" rounded="lg" droppable class="pa-2">
          <div class="player-wrapper">
            <ul>
              <li
                v-for="(item, index) in upgradedStartingPlayerList"
                :key="index"
              >
                <div class="player-container">
                  <div class="order">
                    <span>{{ index + 1 }}</span>
                    <span v-if="item != null">
                      {{
                        `${
                          item.field ? item.field.toUpperCase() : ''
                        } ${$getIdText(item.side)}`
                      }}
                    </span>
                    <span v-else> 無 </span>
                  </div>
                  <div
                    class="card"
                    :class="{ active: index == currCard }"
                    @click="selectCard(index)"
                  >
                    <v-icon
                      v-if="index == currCard && item != null"
                      small
                      color="error"
                      class="close-player"
                      @click="removeStartingPlayer"
                    >
                      fas fa-times-circle
                    </v-icon>

                    <v-icon
                      v-if="index == currCard"
                      color="yellow"
                      class="add-player"
                      >fas fa-baseball-ball</v-icon
                    >
                    <template v-if="item">
                      <input
                        type="text"
                        class="level-input"
                        v-model="startingLevel[index].level"
                        :class="$getLevelColor(item.level ? item.level : 0)"
                      />
                    </template>

                    <player-card
                      v-if="item"
                      :playerData="item"
                      :customLevel="true"
                    ></player-card>
                  </div>
                  <div class="status">
                    <ul>
                      <li
                        v-for="status in statusList"
                        :key="status"
                        :data-content="item ? item[status] : ''"
                      >
                        <div
                          :style="{
                            width: `${item ? item[status] / 1.2 : 0}%`,
                            background: `${
                              item ? $getStatusColor(item[status]) : ''
                            }`,
                          }"
                        ></div>
                      </li>
                    </ul>
                  </div>

                  <div class="plus">
                    <ul>
                      <li v-for="i in 3" :key="i">
                        <div></div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </v-sheet>
      </v-col>

      <v-col cols="12">
        <v-sheet min-height="20vh" rounded="lg">
          <!-- <hooper-carousel></hooper-carousel> -->
          <div class="bench-wrapper">
            <ul v-if="player.starPlayerList.length > 0">
              <li v-for="item in player.starPlayerList" :key="item.id">
                <div class="player-container">
                  <player-card
                    :playerData="item"
                    @click.native="addStartingPlayer(item)"
                    :customLevel="true"
                  ></player-card>
                </div>
              </li>
            </ul>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
    <team-dialog></team-dialog>
  </v-container>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
import HooperCarousel from '@/components/common/HooperCarousel'
import playerCard from '@/components/common/playerCard'
import teamDialog from '@/components/team/teamDialog'
export default {
  components: {
    HooperCarousel,
    playerCard,
    teamDialog,
  },
  data: () => ({
    statusList: [
      'power',
      'contact',
      'base_speed',
      'defense_speed',
      'defense_range',
      'throw_power',
      'throw_skill',
      'dex',
    ],
    currCard: null,
  }),
  computed: {
    ...mapState(['player']),
    ...mapGetters('player', {
      upgradedStartingPlayerList: 'GetUpgradedStartingPlayerList',
    }),
    startingLevel: {
      get() {
        return this.$store.state.player.startingPlayerList
      },
      set(level) {
        this.$store.commit('player/UPDATE_CURR_STARTING_PLAYER_LEVEL', level)
      },
    },
  },
  watch: {
    currCard(val) {
      this.$store.commit('player/SET_CURR_STARTING_PLAYER', val)
    },
  },
  methods: {
    selectCard(val) {
      if (val != this.currCard) {
        //if swap => swapPlayer
        if (this.player.swapMode && this.currCard != null) {
          // console.log(this.currCard, val)
          this.$store.commit('player/SWAP_PLAYER', {
            p1: this.currCard,
            p2: val,
          })
          this.currCard = null
        }
        //else 改變currCard
        else {
          this.currCard = val
        }
      } else {
        this.currCard = null
      }
    },

    addStartingPlayer(val) {
      if (this.currCard != null) {
        this.$store.commit('player/ADD_STARTING_PLAYER', {
          index: this.currCard,
          data: val,
        })
      }
    },
    removeStartingPlayer() {
      if (this.currCard != null) {
        this.$store.commit('player/REMOVE_STARTING_PLAYER', {
          index: this.currCard,
        })
      }
    },
  },
  mounted() {},
}
</script>
<style lang="scss" scoped>
.player-wrapper {
  width: 100%;
  padding: 10px 2%;
  height: 65vh;
  background: #e7e8ea;
  > ul {
    padding-left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    > li {
      width: calc(90% / 9);
      margin: 1% 1%;
      height: 100%;
      .player-container {
        height: 100%;
        .order {
          margin-bottom: 5px;
          width: 100%;
          height: 5%;
          border-radius: 8px;
          background: #535353;
          display: flex;
          justify-content: space-between;
          align-items: center;
          > span {
            // height: 100%;
            border-radius: 8px;
            text-align: center;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            &:first-child {
              width: 30%;
              height: 100%;
              background: whitesmoke;
            }
            &:last-child {
              width: 70%;
              color: white;
            }
          }
        }
        .card {
          width: 100%;
          height: 30%;
          background: #d3d4d6;
          border-radius: 8px;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          position: relative;
          &.active {
            border: solid 2px yellow;
          }
          .level-input {
            display: block;
            position: absolute;
            left: 0;
            bottom: 20%;
            width: 30%;
            border-radius: 8px;
            z-index: 3;
            text-align: center;
            text-shadow: 0 0 10px black !important;
            color: white;
            border: 1px solid #bebebe;
            background: rgba($color: #484848, $alpha: 0.8);
            &.copper {
              @include copper;
            }
            &.silver {
              @include silver;
            }
            &.gold {
              @include gold;
            }
            &.rainbow {
              @include rainbow;
            }
            &:focus {
              border: 1px solid yellow;
              box-shadow: none;
              color: white;
            }
          }
          .close-player {
            position: absolute;
            left: 0;
            top: 0;
            z-index: 1;
          }
          .add-player {
            @include center;
          }
        }
        .status {
          margin-top: 10px;
          width: 100%;
          height: 40%;
          > ul {
            padding-left: 0;
            list-style: none;
            height: 100%;
            display: flex;
            flex-wrap: wrap;
            > li {
              width: 100%;
              height: calc(100% -4px / 8);
              margin: 2px 2px;
              border-radius: 6px;
              background: #d3d4d6;
              text-align: center;
              position: relative;
              > div {
                height: 100%;
                border-radius: inherit;
                background: orange;
              }
              &::after {
                content: attr(data-content);
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                border-radius: inherit;
                color: white;
                text-shadow: 0 0 5px black;
              }
            }
          }
        }
        .plus {
          margin-top: 10px;
          width: 100%;
          height: 15%;
          > ul {
            padding-left: 0;
            list-style: none;
            height: 100%;
            display: flex;
            flex-wrap: wrap;
            > li {
              width: 100%;
              height: calc(100% -4px / 3);
              margin: 2px 2px;
              border-radius: 6px;
              background: #d3d4d6;
            }
          }
        }
      }
    }
  }
}
.bench-wrapper {
  width: 100%;
  padding: 10px 2%;
  height: 20vh;
  background: #e7e8ea;
  > ul {
    padding-left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    > li {
      width: calc(90% / 9);
      margin: 1% 1%;
      height: 100%;
      .player-container {
        height: 100%;
      }
    }
  }
}
</style>
