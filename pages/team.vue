<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-sheet min-height="65vh" rounded="lg" droppable class="pa-2">
          <div class="player-wrapper">
            <ul>
              <li v-for="i in 9" :key="i">
                <div class="player-container">
                  {{ i }}
                </div>
              </li>
            </ul>
          </div>
        
        </v-sheet>
      </v-col>

      <v-col cols="12">
        <v-sheet
          min-height="20vh"
          rounded="lg"
           class="avatar-wrapper"
        >
          <!-- <hooper-carousel></hooper-carousel> -->
          <!--  -->
            <template v-if="player.starPlayerList.length > 0">
              <div
                v-for="item in player.starPlayerList"
                :key="item.id"
                class="avatar-container ma-2"
                :class="$getCardColor(item.ovr)"
                draggable="true"
              >
                <div class="avatar-pic">
                  <img
                    :src="require(`../static/images/player/${item.team}.png`)"
                    alt=""
                  />
                  <span class="avatar-ovr">{{ item.ovr }}</span>

                  <v-icon small class="avatar-weather" :class="item.weather">
                    fas fa-{{ $getWeatherIcon(item.weather) }}
                  </v-icon>
                  <span class="avatar-field">
                    {{ item.field.toUpperCase() }}
                  </span>
                  <span :class="$getLevelColor(item.level)">
                    +{{ item.level }}
                  </span>
                </div>

                <div class="avatar-name">
                  <span>
                    {{ `${item.year.substr(2, 2)}${item.name}` }}
                  </span>
                </div>
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
export default {
  components: {
    HooperCarousel,
  },
  data: () => ({}),
  computed: { ...mapState(['player']) },
  watch: {},
  methods: {},
}
</script>
<style lang="scss" scoped>
.player-wrapper {
  width: 100%;
  min-height: 500px;
  background: lightblue;
  > ul {
    padding-left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    > li {
      width: calc(100% / 9);
      .player-container {
        background: #aaa;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
.avatar-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  height: 100%;
  overflow-x: scroll;
  padding: 0;
  margin: 0;
  .avatar-container {
    width: 6%;
    // width: 20%;
    // min-height: 139px;
    max-height: 170px;
    position: relative;
    border-radius: 4px;
    color: white;
    font-size: 1em;
    border: 0.5px solid #6c6c6c;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.7);
    @media screen and(max-width: 500px) {
      font-size: 0.6em;
    }
    &.purple-card {
      @include purple-bg;
    }
    &.red-card {
      @include red-bg;
    }
    &.orange-card {
      @include orange-bg;
    }
    &.blue-card {
      @include blue-bg;
    }
    .avatar-pic {
      width: 100%;
      height: 80%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      pointer-events: none;
      > img {
        width: 80%;
        min-height: 100%;
      }
      .avatar-ovr {
        position: absolute;
        top: 0;
        right: 2%;
        text-shadow: 0 0 5px black;
      }
      .avatar-weather {
        position: absolute;
        top: 16%;
        right: 2%;
        transform: translateX(4%);
        &.sun {
          color: red;
        }
        &.cloud {
          color: #f0f0f0;
        }
        &.snow {
          color: #66b3ff;
        }
        &.rain {
          color: #0080ff;
        }
        &.none {
          color: green;
        }
      }
      .avatar-field {
        position: absolute;
        bottom: 2%;
        right: 2%;
        text-shadow: 0 0 5px black;
      }
      > span:last-child {
        position: absolute;
        left: 2%;
        bottom: 2%;
        font-weight: 700;
        font-size: 1em;
        padding: 2px 6px;
        border: 0.5px solid #3c3c3c;
        border-radius: 4px;
        &.none {
          display: none;
        }
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
      }
    }
    .avatar-name {
      width: 100%;
      height: 20%;
      display: flex;
      justify-content: center;
      align-items: center;
      > span {
        font-size: 100%;
        @media screen and(max-width: 500px) {
          font-size: 150%;
        }
      }
    }
  }
}
</style>
