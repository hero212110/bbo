<template>
  <v-navigation-drawer v-model="player.drawer" absolute top temporary style="position:fixed; top:0; left:0">
    <v-list nav dense class="nav">
      <v-list-item-group v-model="group" color="indigo">
        <v-list-item class="px-2" style="pointer-events: none">
          <v-list-item-avatar>
            <v-img src="/images/common/logo.png"></v-img>
          </v-list-item-avatar>
          <v-list-item-title>全民打棒球PRO</v-list-item-title>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item
          v-for="link in links"
          :key="link.text"
          @click="$router.push(link.path)"
        >
          <v-list-item-icon>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
export default {
  data: () => ({
    group: null,
    links: [
      {
        path: '/',
        text: '打者能力值查詢',
        icon: 'fas fa-chart-bar',
      },
      { path: '/team', text: '隊伍打線模擬', icon: 'fas fa-running' },
    ],
  }),
  computed: {
    ...mapState(['player']),
  },
  watch: {
    group() {
      this.$store.commit('player/SET_DRAWER', false)
    },
  },
}
</script>
<style lang="scss" scoped></style>
