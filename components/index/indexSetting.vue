<template>
  <v-col cols="12" sm="2">
    <v-sheet min-height="40vh" rounded="lg">
      <v-btn color="blue" class="ma-2 white--text" @click="setSearchModal">
        <v-icon left>fas fa-search</v-icon>
        <span>詳細搜尋</span>
      </v-btn>
      <v-btn color="error" class="ma-2 white--text" @click="clearList">
        <v-icon left>fas fa-trash</v-icon>
        <span>清空列表</span>
      </v-btn>
    </v-sheet>
  </v-col>
</template>
<script>
export default {
  methods: {
    setSearchModal() {
      this.$emit('setSearchModal', true)
    },
    clearList() {
      this.$store.commit('player/CLEAR_PLAYER_LIST')
    },
  },
}
</script>
<style lang="scss" scoped></style>
