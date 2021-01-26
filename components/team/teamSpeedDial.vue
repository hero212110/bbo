<template>
  <div class="setting">
    <v-speed-dial v-model="fab" right bottom>
      <template v-slot:activator>
        <v-btn v-model="fab" color="blue darken-2" dark fab>
          <v-icon v-if="fab">fas fa-times</v-icon>
          <v-icon v-else>fas fa-tools</v-icon>
        </v-btn>
      </template>
      <v-btn fab dark small color="red">
        <v-icon>fas fa-user-cog</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="green"
        @click="setSwapMode(!player.swapMode)"
      >
        <v-icon>
          {{
            player.swapMode ? 'fas fa-pencil-alt' : 'fas fa-exchange-alt'
          }}</v-icon
        >
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
  },
}
</script>
<style lang="scss">
.setting .v-speed-dial {
  position: absolute;
}
.setting .v-btn--floating {
  position: relative;
}
</style>
