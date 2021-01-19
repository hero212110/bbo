<template>
  <div class="v-marquee" @click="$emit('click', $event)">
    <div
      :style="{ 'animation-duration': time, 'animation-name': name }"
      :class="animate ? 'running' : 'pause'"
      @mouseenter="pauseAnimation"
      @mouseleave="runAnimation"
    >
      <slot>
        <div v-html="newContent"></div>
      </slot>
    </div>
  </div>
</template>

<script>
let count = 0
export default {
  props: {
    speed: {
      type: Number,
      default: 50,
    },
    announcementList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    count++
    return {
      animate: {
        type: Boolean,
        default: true,
      },
      time: 0,
      name: `marquee${count}`,
    }
  },
  computed: {
    newContent() {
      let txt = ''
      const space = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
      this.announcementList.forEach((item) => {
        txt += `${item.text}${space}`
      })
      return txt
    },
  },
  watch: {
    content() {
      this.start()
    },
    speed() {
      this.start()
    },
  },
  methods: {
    getTime() {
      return (
        Math.max(this.$el.firstChild.offsetWidth, this.$el.offsetWidth) /
          this.speed +
        's'
      )
    },
    prefix(key, value) {
      return ['-webkit-', '-moz-', '-ms-', '']
        .map((el) => `${el + key}:${value};`)
        .join('')
    },
    keyframes() {
      const from = this.prefix(
        'transform',
        `translateX(${this.$el.offsetWidth}px)`
      )
      const to = this.prefix(
        'transform',
        `translateX(-${this.$el.firstChild.offsetWidth}px)`
      )
      const v = `@keyframes ${this.name} {
                from { ${from} }
                to { ${to} }
            }`

      let styleEl = document.createElement('style')
      styleEl.innerHTML = v
      document.head.appendChild(styleEl)
    },
    start() {
      this.$nextTick(() => {
        this.time = this.getTime()
        this.keyframes()
      })
    },
    pauseAnimation() {
      this.animate = false
    },
    runAnimation() {
      this.animate = true
    },
  },
  mounted() {
    this.start()
  },
}
</script>
<style lang="scss" scoped>
.v-marquee {
  font-size: 14px;
  font-weight: 500;
  color: black;
  white-space: nowrap;
  overflow: hidden;
  > div {
    display: inline-block;
    animation: marquee linear infinite;
  }
  .pause {
    animation-play-state: paused;
  }
  .running {
    animation-play-state: running;
  }
}
</style>
