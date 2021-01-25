<template>
  <v-app-bar app color="white" flat>
    <v-container class="py-0 fill-height">
      <v-avatar class="mr-10" size="50" tile>
        <img src="/images/common/logo.png" alt="" />
      </v-avatar>

      <v-btn
        v-for="link in links"
        :key="link.text"
        text
        @click="$router.push(link.path)"
        :color="$route.path == link.path ? 'success' : ''"
      >
        {{ link.text }}
      </v-btn>

      <v-spacer></v-spacer>

      <v-responsive max-width="260">
        <v-text-field
          dense
          flat
          hide-details
          rounded
          solo-inverted
        ></v-text-field>
      </v-responsive>
    </v-container>
    <!-- <custom-marquee
      :announcementList="announcementList"
      :speed="80"
    ></custom-marquee> -->
  </v-app-bar>
</template>
<script>
import CustomMarquee from '@/components/common/CustomMarquee'
export default {
  components: { CustomMarquee },
  data: () => ({
    links: [
      { path: '/', text: '全民打棒球PRO 打者能力值查詢' },
      { path: '/team', text: '隊伍打線模擬' },
    ],
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
}
</script>
<style lang="scss" scoped></style>
