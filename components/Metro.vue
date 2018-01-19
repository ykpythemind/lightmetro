<template>
  <div
    class="outer"
    @click="tempo += 5"
  >
    <div class="header">
      {{ name }}
      {{ tempo }}
    </div>
    <div
      v-for="beatElm in beatsArray"
      :key="beatElm"
      class="base"
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
    flashStyle(state) {
      return { backgroundColor: state ? this.color : '#FFFFFF' };
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
  background-color: #555;
  color: #eee;
}
.base {
  width: 25%;
  float: left;
  height: 100%;
  border: 1px solid #eee;
}
.outer {
  clear: both;
  height: 100px;
  border-bottom: 2px solid #eeeeee;
}
</style>
