<template>
  <v-container>
    <v-row>
      <team-starting></team-starting>
      <team-bench></team-bench>
    </v-row>
    <team-dialog></team-dialog>
  </v-container>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
import { Message } from 'element-ui'
import teamBench from '@/components/team/teamBench'
import teamStarting from '@/components/team/teamStarting'
import teamDialog from '@/components/team/teamDialog'
export default {
  head() {
    return {
      title: '全民打棒球PRO | 隊伍打線模擬',
    }
  },
  components: {
    teamStarting,
    teamBench,
    teamDialog,
  },
  data: () => ({}),
  computed: {
    ...mapState(['player']),
  },
  watch: {},
  methods: {},
  mounted() {
    if (document.body.clientWidth < 500) {
      Message({
        message: '打線模擬只適用於PC',
        type: 'warning',
        duration: 3 * 1000,
      })
    }
  },
}
</script>
<style lang="scss" scoped></style>
