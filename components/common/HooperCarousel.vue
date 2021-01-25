<template>
  <hooper
    :itemsToShow="shownPlayerCards"
    :autoPlay="false"
    :playSpeed="4500"
    :infiniteScroll="true"
    :wheelControl="true"
    :mouseDrag="false"
    class="bottom-carousel"
  >
    <slide v-for="item in player.starPlayerList" :key="item.id">
      <!-- <img
          @mousedown="down"
          @mouseup="up"
          :src="require(`../../static/images/common/logo.png`)"
          style="width: 100%; height: 173px; cursor: pointer"
          alt=""
        /> -->
      <div class="avatar-wrapper">
        <template v-if="player.starPlayerList.length > 0">
          <div
            :key="item.id"
            class="avatar-container ma-2"
            :class="$getCardColor(item.ovr)"
            draggable="true"
          >
            <div class="avatar-pic">
              <img
                :src="require(`../../static/images/player/${item.team}.png`)"
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
      </div>
    </slide>
    <hooper-navigation slot="hooper-addons"></hooper-navigation>
  </hooper>
</template>
<script>
import {
  Hooper,
  Slide,
  Progress as HooperProgress,
  Pagination as HooperPagination,
  Navigation as HooperNavigation,
} from 'hooper'
import 'hooper/dist/hooper.css'
import { mapState, mapGetters } from 'vuex'
export default {
  components: {
    Hooper,
    Slide,
    HooperProgress,
    HooperPagination,
    HooperNavigation,
  },
  data() {
    return {
      coordinate: {
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0,
        drag: false,
      },
    }
  },
  computed: {
    ...mapState(['player']),
    shownPlayerCards() {
      let tmp = document.body.clientWidth
      return tmp > 1600 ? 10 : tmp > 1200 ? 6 : tmp > 800 ? 4 : 3
    },
  },
  methods: {
    down(val) {
      this.coordinate.x1 = val.clientX
      this.coordinate.y1 = val.clientY
    },
    up(val) {
      this.coordinate.x2 = val.clientX
      this.coordinate.y2 = val.clientY
      let { x1, y1, x2, y2 } = this.coordinate
      //求出兩點間距離
      let d = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2)
      this.coordinate.drag = d == 0 || d <= 1 ? false : true
    },
  },
}
</script>
<style lang="scss">
.bottom-carousel {
  height: 173px;
  outline: none;
  overflow: hidden;
  .hooper-slide {
    width: 100%;
  }
  .hooper-prev {
    position: absolute;
    left: -10px;
    width: 24px;
    height: 28px;
    opacity: 0.8;
    outline: none !important;
    background: no-repeat;
    background-image: url('~@/static/images/common/arrow.svg');
    transform: scaleX(-1);
    &:hover {
      opacity: 1;
    }
  }
  .hooper-next {
    position: absolute;
    right: -15px;
    width: 24px;
    height: 28px;
    opacity: 0.8;
    outline: none !important;
    background: no-repeat;
    background-image: url('~@/static/images/common/arrow.svg');
    transform: scaleX(1);
    &:hover {
      opacity: 1;
    }
  }
  .icon-arrowLeft {
    display: none;
  }
  .icon-arrowRight {
    display: none;
  }
}

.avatar-wrapper {
  height: 100%;
  display: flex;
  // align-items: center;
  // justify-content: center;
  // flex-wrap: nowrap;
  .avatar-container {
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
