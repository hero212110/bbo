<template>
  <v-col cols="12">
    <v-sheet min-height="65vh" rounded="lg" droppable class="pa-2">
      <div class="player-wrapper">
        <ul>
          <li
            v-for="(item, index) in upgradedStartingPlayerList"
            :key="index"
            :class="{ active: index == currCard }"
            @click="selectCard(index)"
          >
            <div class="player-container">
              <div class="order">
                <span>{{ index + 1 }}</span>
                <span v-if="item != null">
                  {{
                    `${item.field ? item.field.toUpperCase() : ''} ${$getIdText(
                      item.side
                    )}`
                  }}
                </span>
                <span v-else> 無 </span>
              </div>
              <div class="card">
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
                    type="number"
                    min="0"
                    max="10"
                    class="level-input"
                    v-model.number="startingLevel[index].level"
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
                    v-for="(status, i) in statusList"
                    :key="status"
                    :data-content="item ? item[status] : ''"
                    :data-label="labelList[i]"
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
                  <li v-for="i in 2" :key="i">
                    <div>
                      <template v-if="item">
                        <select
                          v-model="startingExtra[index].extra"
                          :class="{ 'no-visible': i != 1 }"
                        >
                          <option :value="null">選擇額外加成⌵</option>
                          <option value="SPEED">力5打5速5速5</option>
                          <option value="THROW">力5打5速5傳5</option>
                        </select>
                      </template>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </v-sheet>
  </v-col>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
import playerCard from '@/components/common/playerCard'
export default {
  components: { playerCard },
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
    labelList: ['力量', '打擊', '跑速', '守速', '守範', '傳力', '傳技', '敏捷'],
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
    startingExtra: {
      get() {
        return this.$store.state.player.startingPlayerList
      },
      set(extra) {
        this.$store.commit('player/UPDATE_CURR_STARTING_PLAYER_EXTRA', extra)
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
    removeStartingPlayer() {
      if (this.currCard != null) {
        this.$store.commit('player/REMOVE_STARTING_PLAYER', {
          index: this.currCard,
        })
      }
    },
  },
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
      position: relative;
      &.active {
        .card {
          border: solid 2px yellow;
        }
      }
      &:first-child {
        .status > ul > li {
          &::before {
            content: attr(data-label);
            position: absolute;
            left: -30%;
            top: 50%;
            transform: translateY(-50%);
            font-size: 0.6em;
            font-weight: 600;
          }
        }
        .plus > ul > li:first-child > div {
          &::before {
            content: '額外';
            position: absolute;
            left: -30%;
            top: 50%;
            transform: translateY(-50%);
            font-size: 0.6em;
            font-weight: 600;
          }
        }
      }
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
          input[type='number']::-webkit-outer-spin-button,
          input[type='number']::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
          input[type='number'] {
            -moz-appearance: textfield;
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
              height: calc((100% - 10px) / 8);
              margin: 2px 0;
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
          margin-top: 30px;
          width: 100%;
          height: 20%;
          > ul {
            padding-left: 0;
            list-style: none;
            height: 100%;
            > li {
              width: 100%;
              height: calc((100% - 10px) / 3);
              margin: 5px 0px;
              border-radius: 6px;
              background: rgba($color: #484848, $alpha: 0.8);
              > div {
                width: 100%;
                height: 100%;
                border: solid 1px grey;
                border-radius: inherit;
                position: relative;
                > select {
                  width: 100%;
                  height: 100%;
                  appearance: none;
                  -webkit-appearance: none;
                  padding: 1% 10%;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  color: white;
                  > option {
                    background: rgba($color: #484848, $alpha: 0.8);
                  }
                  &.no-visible {
                    visibility: hidden;
                    pointer-events: none;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
