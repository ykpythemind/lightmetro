<template>
  <section class="container">
    <div>
      <h1 class="title">
        lightmetro
      </h1>
      <div class="main">
        <Metro
          v-for="metro in metros"
          :key="metro.name"
          :initial-tempo="metro.tempo"
          :name="metro.name"
          :color="metro.color"
        />
      </div>
      <div class="footer">
        <div style="text-align: center; ">
          <AddButton @event="add" />
        </div>
        <br>
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Help</a>
        <a
          href="https://github.com/ykpythemind/lightmetro"
          target="_blank"
          class="button--green">GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue';
import Metro from '~/components/Metro.vue';
import AddButton from '~/components/AddButton.vue';

export default {
  components: {
    AppLogo,
    Metro,
    AddButton
  },
  data() {
    return {
      metros: [
        { tempo: 100, name: 'hoge', color: '#880e0e' },
        { tempo: 120, name: 'fuga', color: '#b2c130' },
        { tempo: 180, name: 'piyo', color: '#1d4fa2' }
      ]
    };
  },
  methods: {
    add() {
      this.metros.push({ tempo: 140, name: 'new', color: '#be1c1c' });
    }
  }
};
</script>

<style>
.container {
  min-height: 100vh;
  width: 100%;
  text-align: center;
}

.main {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.title {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 80px;
  letter-spacing: 1px;
}

.footer {
  margin-top: 40px;
}
</style>
