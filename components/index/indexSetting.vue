<template>
  <v-col cols="12" sm="2">
    <v-sheet min-height="40vh" rounded="lg">
      <!--  -->
      <v-btn class="mx-2" fab dark small color="primary" @click="setSearchModal">
        <v-icon>fas fa-search</v-icon>
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
  },
}
</script>
<style lang="scss" scoped></style>
