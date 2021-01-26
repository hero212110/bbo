<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-sheet min-height="65vh" rounded="lg" droppable class="pa-2">
          <div class="player-wrapper">
            <ul>
              <li
                v-for="(item, index) in player.startingPlayerList"
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

                    <player-card v-if="item" :playerData="item"></player-card>
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
        <v-sheet min-height="20vh" rounded="lg" class="bench-wrapper">
          <!-- <hooper-carousel></hooper-carousel> -->
          <template v-if="player.starPlayerList.length > 0">
            <div
              v-for="item in player.starPlayerList"
              :key="item.id"
              class="ma-2"
            >
              <player-card
                :playerData="item"
                @click.native="addStartingPlayer(item)"
              ></player-card>
            </div>
          </template>
        </v-sheet>
      </v-col>
    </v-row>
    
  </v-container>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
import HooperCarousel from '@/components/common/HooperCarousel'
import playerCard from '@/components/common/playerCard'
export default {
  components: {
    HooperCarousel,
    playerCard,
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
  },
  watch: {},
  methods: {
    selectCard(val) {
      //
      if (val != this.currCard) {
        this.currCard = val
      } 
      //
      else {
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
              > div {
              }
            }
          }
        }
      }
    }
  }
}
.bench-wrapper {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  height: 100%;
  padding: 0;
  margin: 0;
  > div {
    width: 8%;
    min-width: 8%;
    max-height: 170px;
    position: relative;
  }
}
</style>
