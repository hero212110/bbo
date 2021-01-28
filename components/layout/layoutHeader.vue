<template>
  <v-app-bar app color="white" flat>
    <v-app-bar-nav-icon @click.stop="toggleDrawer"></v-app-bar-nav-icon>
    <v-toolbar-title>
      <v-avatar size="50" tile>
        <img src="/images/common/logo.png" alt="" />
      </v-avatar>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-filter</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
    <!-- <custom-marquee
      :announcementList="announcementList"
      :speed="80"
    ></custom-marquee> -->
  </v-app-bar>
</template>
<script>
import { mapState, mapGetters } from 'vuex'

import CustomMarquee from '@/components/common/CustomMarquee'
export default {
  components: { CustomMarquee },
  data: () => ({
    announcementList: [
      {
        text:
          '本網站使用之圖片和球員卡資料皆屬 netmarble Joybomb 、 netmarble Npark 所有 , 只供玩家查詢球員卡資料使用 , 不得用於商業用途',
      },
      {
        text:
          'The images and baseball player card data in this website are belong to netmarble Joybomb and netmarble Npark , do not use for commercial purpose',
      },
    ],
  }),
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
