<template>
  <v-app>
    <layout-header></layout-header>
    <v-main class="grey lighten-3">
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
import layoutHeader from '@/components/layout/layoutHeader'
export default {
  name: 'default',
  data: () => ({}),
  beforeMount() {
    this.$store.commit('player/INITIAL_STATE')
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
