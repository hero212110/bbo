<template>
  <div class="avatar-container" :class="$id2ovr2color(playerData.id)">
    <div class="avatar-pic">
      <img
        :src="require(`../../static/images/player/${playerData.team}.png`)"
        onerror="this.src='/images/player/no-players.png'"
        alt=""
      />
      <span class="avatar-ovr">{{ playerData.ovr }}</span>

      <v-icon small class="avatar-weather" :class="playerData.weather">
        fas fa-{{ $getWeatherIcon(playerData.weather) }}
      </v-icon>
      <span class="avatar-field">
        {{ playerData.field.toUpperCase() }}
      </span>
      <span
        v-if="!customLevel"
        class="level"
        :class="$getLevelColor(player.level)"
      >
        +{{ player.level }}
      </span>
      <span
        v-if="individualLevel"
        class="level"
        :class="$getLevelColor(playerData.level)"
      >
        +{{ playerData.level }}
      </span>
    </div>

    <div class="avatar-name">
      <span>
        {{ `${playerData.year.substr(2, 2)}${playerData.name}` }}
      </span>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'

export default {
  props: {
    playerData: {
      type: Object,
      default: {},
    },
    customLevel: {
      type: Boolean,
      default: false,
    },
    individualLevel: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapState(['player']),
  },
}
</script>
<style lang="scss" scoped>
.avatar-container {
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 4px;
  color: white;
  font-size: 1em;
  border: 0.5px solid #6c6c6c;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.7);
  cursor: pointer;
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
      max-width: 100%;
      max-height: 100%;
      display: block;
      margin: auto;
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
    .level {
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
      white-space: nowrap;
      font-size: 100%;
      @media screen and(max-width: 500px) {
        font-size: 150%;
      }
    }
  }
}
</style>
