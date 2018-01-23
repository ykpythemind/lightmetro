<template>
  <div>
    <div class="header">
      {{ name }}
      <strong>
        {{ tempo }}
      </strong>
    </div>
    <div class="outer">
      <div
        v-for="count in 4"
        :key="count"
        class="base"
        @click="clickElm(count)"
        :style="style(beat == count)" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tempo: {
      require: true,
      type: Number,
      default: 120
    },
    name: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: '#222222'
    },
    id: {
      type: Number,
      default: 0
    },
    allMetroCount: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      on: true,
      timer: null,
      beat: 1
    };
  },
  computed: {
    height() {
      const h = 500 / this.allMetroCount;
      return h > 170 ? 170 : h;
    }
  },
  watch: {
    // tempoが変わる度に呼び出される
    tempo() {
      clearInterval(this.timer);
      this.timer = null;
      this.newTimer();
    }
  },
  mounted() {
    this.newTimer(this.flash);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  methods: {
    flash() {
      // 1, 2, 3, 4, 1, 2, 3, 4...
      if (this.beat > 3) {
        this.beat = 1;
      } else {
        this.beat++;
      }
    },
    setTempo(plus) {
      this.$emit('setTempo', plus, this.id);
    },
    clickElm(elmNumber) {
      /* eslint-disable indent */
      // [FIXME] prettier auto fix indent
      switch (elmNumber) {
        case 1:
          this.setTempo(-5);
          break;
        case 2:
          this.setTempo(-1);
          break;
        case 3:
          this.setTempo(+1);
          break;
        case 4:
          this.setTempo(+5);
          break;
        /* eslint-enable indent */
      }
    },
    flashBackgroundStyle(state) {
      return state ? this.color : '#000000';
    },
    style(state) {
      return {
        backgroundColor: this.flashBackgroundStyle(state),
        height: `${this.height}px`
      };
    },
    newTimer() {
      if (this.timer) {
        return;
      }
      this.timer = setInterval(this.flash, 60000.0 / this.tempo);
    }
  }
};
</script>

<style scoped>
.header {
  background-color: #59c944;
  color: #0b2230;
  font-size: 18px;
  width: 100%;
}
.base {
  width: 25%;
  height: 100%;
  border-right: 1px solid #59c944;
  border-bottom: 1px solid #59c944;
  cursor: pointer;
}
.base:last-child {
  border-right: none;
}
.outer {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
</style>
