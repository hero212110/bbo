<template>
  <v-col cols="12">
    <v-sheet min-height="20vh" rounded="lg">
      <div class="bench-wrapper">
        <ul v-if="player.starPlayerList.length > 0">
          <li v-for="(item, index) in player.starPlayerList" :key="index">
            <div class="player-container">
              <player-card
                :playerData="item"
                @click.native="addStartingPlayer(item)"
                :customLevel="true"
                :individualLevel="true"
              ></player-card>
            </div>
          </li>
        </ul>
        <div v-else class="no-bench">
          <v-icon color="primary">fas fa-sad-tear</v-icon>
          我的最愛中沒有任何球員
        </div>
      </div>
    </v-sheet>
  </v-col>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
import playerCard from '@/components/common/playerCard'
export default {
  components: { playerCard },
  computed: {
    ...mapState(['player']),
  },
  methods: {
    addStartingPlayer(val) {
      if (this.player.currStartingPlayer != null) {
        this.$store.commit('player/ADD_STARTING_PLAYER', {
          index: this.player.currStartingPlayer,
          data: val,
        })
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.bench-wrapper {
  width: 100%;
  padding: 10px 2%;
  height: 20vh;
  background: #e7e8ea;
  position: relative;
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
  .no-bench {
    @include center;
    font-family: Catamaran;
    font-weight: 600;
  }
}
</style>
