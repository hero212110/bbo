<template>
  <v-app>
    <layout-header></layout-header>
    <layout-drawer></layout-drawer>
    <v-main class="grey lighten-3">
      <nuxt />
    </v-main>
    <team-speed-dial></team-speed-dial>
    <notify />
  </v-app>
</template>

<script>
import layoutHeader from '@/components/layout/layoutHeader'
import layoutDrawer from '@/components/layout/layoutDrawer'
import teamSpeedDial from '@/components/team/teamSpeedDial'
import Notify from '@/components/common/Notify'

export default {
  name: 'default',
  components: { layoutHeader, layoutDrawer, teamSpeedDial, Notify },
  data: () => ({}),
  mounted() {
    // this.$store.commit('player/INITIAL_STATE')
  },
  beforeDestroy() {
    this.$store.commit('player/CLEAR_PLAYER_LIST')
  },
}
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Catamaran:300,400,500,600,700,800,900');
@import url('https://fonts.googleapis.com/css?family=Heebo:300,400,500,600,700,800,900');
@import url('https://fonts.googleapis.com/css?family=Hind:300,400,500,600,700,800,900');
@import url('https://fonts.googleapis.com/css?family=Overpass:300,400,500,600,700,800,900');
* {
  font-family: Catamaran;
}
</style>
