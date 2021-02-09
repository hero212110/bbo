<template>
  <v-app-bar app color="white" flat>
    <v-app-bar-nav-icon @click.stop="toggleDrawer"></v-app-bar-nav-icon>
    <v-toolbar-title>
      <v-avatar
        tile
        size="50"
        style="cursor: pointer"
        @click="$router.push('/')"
      >
        <img src="/images/common/logo.png" alt="" />
      </v-avatar>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <!-- <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-filter</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn> -->
  </v-app-bar>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
export default {
  data: () => ({}),
  computed: {
    ...mapState(['player']),
  },
  methods: {
    toggleDrawer() {
      this.$store.commit('player/SET_DRAWER', !this.player.drawer)
    },
  },
}
</script>
<style lang="scss" scoped></style>
