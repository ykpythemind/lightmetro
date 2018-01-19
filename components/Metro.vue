<template>
  <div class="outer">
    <div class="header">
      {{ name }}
      <strong>
        {{ tempo }}
      </strong>
    </div>
    <div
      v-for="beatElm in beatsArray"
      :key="beatElm"
      class="base"
      @click="clickElm(beatElm)"
      :style="flashStyle(beat == beatElm)" />
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
      beat: 0,
      beatsArray: [0, 1, 2, 3]
    };
  },
  computed: {
    oneTime() {
      return 60000.0 / this.tempo;
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
  methods: {
    flash() {
      // 0, 1, 2, 3, 0, 1, 2, 3, 0...
      if (this.beat > 2) {
        this.beat = 0;
      } else {
        this.beat++;
      }
    },
    clickElm(elm) {
      /* eslint-disable indent */
      // [FIXME] prettier auto fix indent
      switch (elm) {
        case 0:
          this.tempo -= 5;
          break;
        case 1:
          this.tempo -= 1;
          break;
        case 2:
          this.tempo += 1;
          break;
        case 3:
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
}
.base {
  width: 25%;
  float: left;
  height: 100%;
  border: 1px solid #59c944;
  cursor: pointer;
}
.outer {
  clear: both;
  height: 100px;
  border-bottom: 2px solid #59c944;
}
</style>
