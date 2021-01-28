<template>
  <v-container>
    <v-row>
      <index-main-content></index-main-content>
      <index-setting @setSearchModal="setSearchModal"></index-setting>
      <index-search-dialog
        :searchDialog="searchDialog"
        @setSearchModal="setSearchModal"
      ></index-search-dialog>
    </v-row>
  </v-container>
</template>
<script>
import indexMainContent from '@/components/index/indexMainContent'
import indexSetting from '@/components/index/indexSetting'
import indexSearchDialog from '@/components/index/indexSearchDialog'
export default {
  head() {
    return {
      title: '全民打棒球PRO | 打者資料查詢'
    };
  },
  components: { indexMainContent, indexSetting, indexSearchDialog },
  data: () => ({
    searchDialog: false,
  }),
  watch: {},
  methods: {
    setSearchModal(val) {
      this.searchDialog = val
    },
  },
}
</script>
