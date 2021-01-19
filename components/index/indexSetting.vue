<template>
  <v-col cols="12" sm="2">
    <v-sheet min-height="40vh" rounded="lg">
      <ul class="setting-list">
        <li>
          <v-btn color="blue" class="ma-2 white--text" @click="setSearchModal">
            <v-icon left>fas fa-search</v-icon>
            <span>詳細搜尋</span>
          </v-btn>
        </li>
        <li>
          <v-btn color="error" class="ma-2 white--text" @click="clearList">
            <v-icon left>fas fa-trash</v-icon>
            <span>清空列表</span>
          </v-btn>
        </li>
        <li>
          <v-btn class="ma-2 white--text rainbow" @click="justifyPlus(true)">
            <v-icon left>fas fa-fire</v-icon>
            <span>最高加成</span>
          </v-btn>
        </li>
        <li>
          <v-btn class="ma-2 white--text copper" @click="justifyPlus(false)">
            <v-icon left>fas fa-broom</v-icon>
            <span>清除加成</span>
          </v-btn>
        </li>
        <li style="width: 40%">
          <div>
            <span>當前等級 : {{ player.level }}</span>
          </div>
        </li>
        <li>
          <v-btn
            small
            fab
            color="primary"
            class="ma-2 white--text"
            @click="minusLevel"
          >
            <v-icon>fas fa-minus</v-icon>
          </v-btn>
          <v-btn
            small
            fab
            color="success"
            class="ma-2 white--text"
            @click="addLevel"
          >
            <v-icon>fas fa-plus</v-icon>
          </v-btn>
        </li>
        <li style="width: 90%">
          <v-select
            v-model="asVal"
            :items="asList"
            label="相同隊伍"
            prepend-icon="fas fa-users"
            dense
            solo
          ></v-select>
        </li>
        <li style="width: 90%">
          <v-select
            v-model="yearVal"
            :items="yearList"
            label="相同年度"
            prepend-icon="far fa-clock"
            dense
            solo
          ></v-select>
        </li>
        <li style="width: 90%">
          <v-select
            v-model="extraVal"
            :items="extraList"
            label="額外加成"
            prepend-icon="fas fa-star"
            dense
            solo
          ></v-select>
        </li>
      </ul>
    </v-sheet>
  </v-col>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
export default {
  data: () => ({
    asVal: 0,
    yearVal: 0,
    extraVal: null,
    asList: [0, 28],
    yearList: [0, 15, 20, 24, 28],
    extraList: [
      { text: '無加成', value: null },
      { text: '力5打5速5速5', value: 'SPEED' },
      { text: '力5打5速5傳5', value: 'THROW' },
    ],
  }),
  computed: {
    ...mapState(['player']),
  },
  watch: {
    asVal(val) {
      this.$store.commit('player/SET_AS_MEMBER', val)
    },
    yearVal(val) {
      this.$store.commit('player/SET_YEAR_MEMBER', val)
    },
    extraVal(val) {
      this.$store.commit('player/SET_EXTRA_MEMBER', val)
    },
    'player.member': {
      handler(val) {
        this.asVal = val.as
        this.yearVal = val.year
        this.extraVal = val.extra
      },
      deep: true,
    },
  },
  methods: {
    setSearchModal() {
      this.$emit('setSearchModal', true)
    },
    clearList() {
      this.$store.commit('player/CLEAR_PLAYER_LIST')
    },
    addLevel() {
      if (this.player.level < 10) {
        this.$store.commit('player/SET_LEVEL', 1)
      }
    },
    minusLevel() {
      if (this.player.level > 0) {
        this.$store.commit('player/SET_LEVEL', -1)
      }
    },
    justifyPlus(val) {
      this.$store.commit('player/JUSTIFY_PLUS', val)
    },
  },
}
</script>
<style lang="scss" scoped>
.setting-list {
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-weight: 600;
  > li {
    display: flex;
    justify-content: center;
    align-items: center;
    .rainbow {
      @include rainbow;
    }
    .copper {
      @include copper;
    }
  }
}
</style>
