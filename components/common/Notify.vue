<template>
  <v-snackbar v-model="show" :color="type" top :timeout="3000">
    {{ msg }}
    <v-btn
      icon
      class="close-btn"
      color="white"
      @click="$store.commit('notify/shutNotify')"
    >
      <v-icon small>fas fa-times</v-icon>
    </v-btn>
  </v-snackbar>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      show: false,
    }
  },
  computed: {
    ...mapState('notify', ['isOpen', 'type', 'msg']),
  },
  watch: {
    isOpen(v) {
      this.show = v
    },
    show(v) {
      if (v == false) this.$store.commit('notify/shutNotify')
    },
  },
}
</script>
<style lang="scss" scoped>
.close-btn {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
</style>
