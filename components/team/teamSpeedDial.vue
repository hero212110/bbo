<template>
  <div class="setting">
    <v-speed-dial v-model="fab" right bottom>
      <template v-slot:activator>
        <v-btn v-model="fab" color="blue darken-2" dark fab>
          <v-icon v-if="fab">fas fa-times</v-icon>
          <v-icon v-else>fas fa-tools</v-icon>
        </v-btn>
      </template>

      <v-btn
        fab
        dark
        small
        data-content="設定隊伍年度"
        color="primary"
        class="edit-basic"
        @click="showDialog"
      >
        <v-icon>fab fa-jedi-order</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        data-content="儲存隊伍圖片"
        color="success"
        class="edit-basic"
        @click="saveImg"
      >
        <v-icon>fas fa-save</v-icon>
      </v-btn>

      <v-btn
        fab
        dark
        small
        class="mode"
        :color="player.swapMode ? 'warning' : 'green'"
        :data-content="player.swapMode ? '關閉變更打序' : '啟用變更打序'"
        @click="setSwapMode(!player.swapMode)"
      >
        <v-icon>fas fa-pencil-alt</v-icon>
      </v-btn>

      <v-btn
        fab
        dark
        small
        data-content="清空先發名單"
        color="error"
        class="edit-basic"
        @click="clearStarting"
      >
        <v-icon>fas fa-eraser</v-icon>
      </v-btn>

      <v-btn
        fab
        dark
        small
        data-content="清空我的最愛"
        color="error"
        class="edit-basic"
        @click="clearBench"
      >
        <v-icon>far fa-star-half</v-icon>
      </v-btn>
    </v-speed-dial>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
export default {
  data: () => ({
    fab: false,
  }),
  computed: {
    ...mapState(['player']),
  },
  methods: {
    setSwapMode(val) {
      this.$store.commit('player/SET_SWAP_MODE', val)
    },
    showDialog() {
      this.$store.commit('player/SET_BASIC_DIALOG', true)
    },
    clearStarting() {
      this.$store.commit('player/CLEAR_STARTING_PLAYER')
    },
    clearBench() {
      this.$store.commit('player/CLEAR_STAR_PLAYER')
    },
    saveImg() {
      this.$store.commit('player/SAVE_IMG', true)
    },
  },
}
</script>
<style lang="scss" scoped>
.setting {
  .mode {
    &::after {
      content: attr(data-content);
      position: absolute;
      left: -240%;
      top: 50%;
      transform: translateY(-50%);
      box-shadow: none;
      padding: 5px 5px;
      border-radius: 6px;
      background: rgba($color: #484848, $alpha: 0.8);
      color: white;
      pointer-events: none;
    }
  }
  .edit-basic {
    &::after {
      content: attr(data-content);
      position: absolute;
      left: -240%;
      top: 50%;
      transform: translateY(-50%);
      box-shadow: none;
      padding: 5px 5px;
      border-radius: 6px;
      background: rgba($color: #484848, $alpha: 0.8);
      color: white;
      pointer-events: none;
    }
  }
}
</style>

<style lang="scss">
.setting .v-speed-dial {
  position: absolute;
}
.setting .v-btn--floating {
  position: relative;
}
</style>
