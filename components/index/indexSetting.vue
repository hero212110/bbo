<template>
  <v-col cols="12" sm="2">
    <v-sheet min-height="40vh" rounded="lg">
      <ul class="setting-list">
        <li>
          <v-btn color="blue" class="ma-2 white--text" @click="setSearchModal">
            <v-icon left>fas fa-search</v-icon>
            <span>詳細搜尋</span>
          </v-btn>
          <v-btn color="error" class="ma-2 white--text" @click="clearList">
            <v-icon left>fas fa-trash</v-icon>
            <span>清空列表</span>
          </v-btn>
        </li>
        <li>
          <div>
            <v-btn
              small
              fab
              color="error"
              class="ma-2 white--text"
              @click="minusLevel"
            >
              <v-icon>fas fa-minus</v-icon>
            </v-btn>
            <span>當前等級 : {{ player.level }}</span>
            <v-btn
              small
              fab
              color="success"
              class="ma-2 white--text"
              @click="addLevel"
            >
              <v-icon>fas fa-plus</v-icon>
            </v-btn>
          </div>
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
          <v-select
            style="padding-left: 5%"
            v-model="yearVal"
            :items="yearList"
            label="相同年度"
            prepend-icon="far fa-clock"
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
    asList: [0, 28],
    yearList: [0, 15, 20, 24, 28],
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
  }
}
</style>
