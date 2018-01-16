<template>
  <div
    class="outer"
    @click="tempo += 5"
  >
    <div
      class="header"
      style="background-color: #555; color: #eee;">
      {{ name }}
      {{ tempo }}
    </div>
    <div
      class="left-side"
      :style="{backgroundColor: on ? color : '#fff'}" />
    <div
      class="right-side"
      :style="{backgroundColor: on ? '#fff' : color }" />
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
      timer: null
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
      this.newTimer();
    }
  },
  mounted() {
    this.newTimer(this.flash);
  },
  methods: {
    flash() {
      this.on = !this.on;
    },
    newTimer() {
      this.timer = setInterval(this.flash, 60000.0 / this.tempo);
    }
  }
};
</script>

<style scoped>
.on {
  background-color: #555;
}
.outer {
  clear: both;
  height: 100px;
  border-bottom: 2px solid #eeeeee;
}
.left-side {
  float: left;
  width: 50%;
  height: 100%;
  border-right: 1px dotted #eeeeee;
}
.right-side {
  float: right;
  width: 50%;
  height: 100%;
}
</style>
