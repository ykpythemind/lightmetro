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
        :style="flashStyle(beat == count)" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    initialTempo: {
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
    }
  },
  data() {
    return {
      on: true,
      tempo: this.initialTempo,
      timer: null,
      beat: 1
    };
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
  methods: {
    flash() {
      // 1, 2, 3, 4, 1, 2, 3, 4...
      if (this.beat > 3) {
        this.beat = 1;
      } else {
        this.beat++;
      }
    },
    clickElm(elmNumber) {
      /* eslint-disable indent */
      // [FIXME] prettier auto fix indent
      switch (elmNumber) {
        case 1:
          this.tempo -= 5;
          break;
        case 2:
          this.tempo -= 1;
          break;
        case 3:
          this.tempo += 1;
          break;
        case 4:
          this.tempo += 5;
          break;
        /* eslint-enable indent */
      }
    },
    flashStyle(state) {
      return { backgroundColor: state ? this.color : '#000000' };
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
  height: 100px;
}
</style>
