<template>
  <v-col cols="12" sm="10">
    <v-sheet rounded="lg">
      <v-container class="wrapper">
        <v-row>
          <!-- 有資料 -->
          <template v-if="shownPlayerList.length > 0">
            <v-col
              v-for="(item, i) in shownPlayerList"
              :key="i"
              cols="12"
              lg="4"
              md="4"
              sm="3"
            >
              <div class="player-block">
                <div class="header">
                  <span>{{ item.year }} {{ item.name }}</span>
                  <span>{{ $getIdText(item.field) }} {{ item.ovr }}</span>
                </div>
                <div class="left">
                  <div class="avatar-container">
                    <img
                      :src="
                        require(`../../static/images/player/${item.team}.png`)
                      "
                      alt=""
                    />
                    <span class="avatar-ovr">{{ item.ovr }}</span>
                    <v-icon small class="avatar-weather" :class="item.weather">
                      fas fa-{{ $getWeatherIcon(item.weather) }}
                    </v-icon>
                    <span class="avatar-field">{{
                      item.field.toUpperCase()
                    }}</span>
                    <span class="avatar-name">
                      {{ `${item.year.substr(2, 2)}${item.name}` }}
                    </span>

                    <span :class="$getLevelColor(player.level)">
                      +{{ player.level }}
                    </span>
                  </div>

                  <div class="avatar-info">
                    <span>{{ $getIdText(item.team) }}</span>
                    <span>{{ $getIdText(item.side) }}</span>
                    <span>{{ $getIdText(item.type) }}</span>
                  </div>
                </div>
                <div class="right">
                  <ul>
                    <li v-for="status in statusList" :key="status">
                      <span>{{ $getStatusText(status) }}</span>
                      <span :style="{ color: $getStatusColor(item[status]) }">
                        {{ item[status] }}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </v-col>
            <v-col cols="12" sm="12">
              <div style="width: 100%; height: 50px">
                <ul class="custom-pagnition">
                  <li
                    @click="currPagination = 1"
                    :class="{
                      'custom-pagnition-li-disabled': currPagination == 1,
                      'custom-hover-pagnition': currPagination != 1,
                    }"
                  >
                    <!-- <span>First</span> -->
                    <v-icon>fa-angle-double-left</v-icon>
                  </li>
                  <li
                    @click="prev"
                    :class="{
                      'custom-pagnition-li-disabled': currPagination == 1,
                      'custom-hover-pagnition': currPagination != 1,
                    }"
                  >
                    <v-icon>fas fa-angle-left</v-icon>
                  </li>
                  <li
                    v-for="(item, index) in shownPagnitionList"
                    :key="index"
                    @click="currPagination = item"
                    :class="{
                      'custom-pagnition-li-active': item == currPagination,
                      'custom-hover-pagnition': item != currPagination,
                    }"
                  >
                    <span>{{ item }}</span>
                  </li>
                  <li
                    @click="next"
                    :class="{
                      'custom-pagnition-li-disabled':
                        currPagination == pagnitionList.length,
                      'custom-hover-pagnition':
                        currPagination != pagnitionList.length,
                    }"
                  >
                    <v-icon>fas fa-angle-right</v-icon>
                  </li>
                  <li
                    @click="currPagination = pagnitionList.length"
                    :class="{
                      'custom-pagnition-li-disabled':
                        currPagination == pagnitionList.length,
                      'custom-hover-pagnition':
                        currPagination != pagnitionList.length,
                    }"
                  >
                    <v-icon>fas fa-angle-double-right</v-icon>
                  </li>
                </ul>
              </div>
            </v-col>
          </template>
          <!-- 無資料 -->
          <template v-else>
            <v-col cols="12" sm="12">
              <div class="no-content-block">
                <div v-if="player.loading" class="spinner">
                  <div class="rect1"></div>
                  <div class="rect2"></div>
                  <div class="rect3"></div>
                  <div class="rect4"></div>
                  <div class="rect5"></div>
                </div>
                <template v-else>
                  <img src="/images/common/logo.png" alt="" />
                  <p>請設定詳細搜尋項目或球員名稱</p>
                </template>
              </div>
            </v-col>
          </template>
        </v-row>
      </v-container>
    </v-sheet>
  </v-col>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
export default {
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
    currPagination: 1,
    paginationLimit: 5,
  }),
  computed: {
    ...mapState(['player']),
    ...mapGetters('player', {
      upgradedPlayerList: 'GetUpgradedPlayerList',
    }),
    shownPlayerList() {
      let tmp =
        this.upgradedPlayerList.length > 0 ? this.upgradedPlayerList : []
      let c = this.currPagination
      let result = []
      if (c == 1) {
        result = tmp.slice(0, 12)
      } else {
        if (c != this.upgradedPlayerList.length) {
          result = tmp.slice(12 * (c - 1), 12 * c)
        }
        //last page
        else {
          result = tmp.slice(12 * (c - 1), 12 * (c - 1) + (tmp.length % 12) - 1)
        }
      }
      return result
    },
    pagnitionList() {
      let tmp =
        this.upgradedPlayerList.length > 0 ? this.upgradedPlayerList : []
      let len = Math.ceil(tmp.length / 12)
      let arr = []
      for (let i = 0; i < len; i++) {
        arr.push(i + 1)
      }
      return arr
    },
    shownPagnitionList() {
      let tmp = this.pagnitionList
      let l = tmp.length
      let c = this.currPagination
      let arr = []
      if (tmp.length <= 5) {
        arr = tmp
      } else {
        if (c < 4) {
          arr = tmp.filter((item, index) => {
            if (index < 5) return item
          })
        } else {
          arr =
            tmp.length - c <= 2
              ? [l - 4, l - 3, l - 2, l - 1, l]
              : [c - 2, c - 1, c, c + 1, c + 2]
        }
      }
      return arr
    },
  },
  watch: {
    'player.loading'(val) {
      this.currPagination = 1
    },
  },
  methods: {
    prev() {
      if (this.currPagination > 1) this.currPagination -= 1
    },
    next() {
      if (this.currPagination < this.pagnitionList.length)
        this.currPagination += 1
    },
  },
}
</script>
<style lang="scss" scoped>
.wrapper {
  background: #e0e0e0;
  // font-family: Arial, Helvetica, sans-serif;
  font-family: Microsoft JhengHei;
  min-height: 90vh;
  position: relative;
  .player-block {
    display: flex;
    flex-wrap: wrap;
    border: 1.5px solid orange;
    border-radius: 4px;
    font-weight: 600;
    .header {
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding: 10px 7% 10px 10px;
      border-bottom: 1.5px solid #bebebe;
      margin-bottom: 10px;
    }
    .left {
      display: flex;
      flex-wrap: wrap;
      width: 40%;
      padding: 0 10px 10px 10px;
      .avatar-container {
        width: 100%;
        position: relative;
        color: white;
        > img {
          width: 100%;
        }
        .avatar-ovr {
          position: absolute;
          top: 0;
          right: 1%;
          font-size: 1vw;
          -webkit-text-stroke: 0.5px black;
        }
        .avatar-weather {
          position: absolute;
          top: 15%;
          right: 3%;
          transform: translateX(3%);
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
            color: blue;
          }
          &.none {
            color: green;
          }
        }
        .avatar-field {
          position: absolute;
          bottom: 20%;
          right: 1%;
          font-size: 1vw;
          -webkit-text-stroke: 0.8px black;
        }
        .avatar-name {
          position: absolute;
          bottom: 5%;
          left: 17%;
          font-size: 1vw;
        }
        > span:last-child {
          position: absolute;
          left: 2%;
          bottom: 22%;
          font-weight: 700;
          font-size: 1vw;
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
      .avatar-info {
        > span {
          font-size: 0.5em;
          display: block;
          width: 100%;
        }
      }
    }
    .right {
      display: flex;
      flex-wrap: wrap;
      width: 60%;
      font-size: 0.5em;
      > ul {
        list-style: none;
        width: 100%;
        padding: 0 10%;
        > li {
          display: flex;
          justify-content: space-between;
          width: 100%;
          margin-bottom: 2px;
          > span {
            text-align: center;
            &:first-child {
              text-overflow: ellipsis;
            }
            &:last-child {
              background: black;
              color: red;
              padding: 2px 8px;
              border-radius: 5px;
              width: 45px;
              max-width: 45px;
            }
          }
        }
      }
    }
  }
  .custom-pagnition {
    cursor: pointer;
    color: white;
    display: flex;
    justify-content: center;
    > li {
      float: left;
      height: 38px;
      list-style: none;
      margin-right: 10px;
      text-align: center;
      border: white solid 1px;
      background: linear-gradient(45deg, white, #c4cace, #bec2cb);
      color: black;
      padding: 2px 18px 2px 18px;
      border-radius: 10px;
      cursor: pointer;
      display: flex;
      justify-content: center;
      > span {
        font-size: 20px;
        height: 38px;
      }
      &.custom-hover-pagnition:hover {
        background: linear-gradient(45deg, white, #ffd306, #eac100);
        color: white;
      }
      &.custom-pagnition-li-default {
        background-image: none;
        color: black;
      }
      &.custom-pagnition-li-active {
        background: linear-gradient(45deg, white, #ffd306, #eac100);
        color: white;
      }
      &.custom-pagnition-li-disabled {
        background: none;
        color: rgba(160, 156, 156, 0.667);
        // border: none !important;
        cursor: not-allowed;
        opacity: 0.5;
      }
    }
  }
  .no-content-block {
    text-align: center;
    @include center;
    pointer-events: none;
    .spinner {
      margin: 100px auto;
      width: 100px;
      height: 40px;
      text-align: center;
      font-size: 10px;
      > div {
        background-color: yellow;
        height: 100%;
        width: 6px;
        display: inline-block;
        -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;
        animation: sk-stretchdelay 1.2s infinite ease-in-out;
      }
      .rect2 {
        -webkit-animation-delay: -1.1s;
        animation-delay: -1.1s;
      }
      .rect3 {
        -webkit-animation-delay: -1s;
        animation-delay: -1s;
      }
      .rect4 {
        -webkit-animation-delay: -0.9s;
        animation-delay: -0.9s;
      }
      .rect5 {
        -webkit-animation-delay: -0.8s;
        animation-delay: -0.8s;
      }
    }
    @-webkit-keyframes sk-stretchdelay {
      0%,
      40%,
      100% {
        -webkit-transform: scaleY(0.4);
      }
      20% {
        -webkit-transform: scaleY(1);
      }
    }
    @keyframes sk-stretchdelay {
      0%,
      40%,
      100% {
        transform: scaleY(0.4);
        -webkit-transform: scaleY(0.4);
      }
      20% {
        transform: scaleY(1);
        -webkit-transform: scaleY(1);
      }
    }
    > img {
      width: 100%;
      display: block;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      opacity: 0.5;
    }
    p {
      display: block;
      margin: 200px 0 0 0;
      color: black;
      font-weight: 600;
      opacity: 0.8;
    }
  }
}
</style>
