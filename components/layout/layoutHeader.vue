<template>
  <v-app-bar app color="white" flat>
    <custom-marquee
      :announcementList="announcementList"
      :speed="80"
    ></custom-marquee>
  </v-app-bar>
</template>
<script>
import CustomMarquee from '@/components/common/CustomMarquee'
export default {
  components: { CustomMarquee },
  data: () => ({
    links: ['全民打棒球PRO 打者能力值查詢'],
    announcementList: [
      {
        text:
          '本網站使用之球員卡資料皆屬 netmarble Joybomb 、 netmarble Npark 所有 , 只供玩家查詢球員卡資料使用 , 不得用於商業用途',
      },
      {
        text:
          'The baseball player card data in this website are belong to netmarble Joybomb and netmarble Npark , do not use for commercial purpose',
      },
    ],
  }),
}
</script>
<style lang="scss" scoped></style>
