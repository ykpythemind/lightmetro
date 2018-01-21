<template>
  <section class="container">
    <div>
      <h1 class="title">
        lightmetro
      </h1>
      <div class="main">
        <Metro
          v-for="metro in metros"
          :key="metro.id"
          :tempo="metro.tempo"
          :name="metro.name"
          :color="metro.color"
          :id="metro.id"
          @setTempo="setTempo"
        />
      </div>
      <div class="footer">
        <div
          style="text-align: center;"
        >
          <AddButton
            @event="add"
          />
          <AddButton
            @event="del"
            :positive="false"
          />
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
      <div style="text-align: right; margin-top: 1rem;">
        <a
          class="button--mini"
          @click.prevent="clearStorageData"
          href="#"
        >
          Clear Saved Data
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue';
import Metro from '~/components/Metro.vue';
import AddButton from '~/components/AddButton.vue';

const colorStack = [
  '#44e622',
  '#be1c1c',
  '#0ef7a3',
  '#e87018',
  '#e7eb2e',
  '#3e6de9'
];

const initialData = [{ tempo: 100, name: 'hoge', color: '#c1186e', id: 0 }];

export default {
  components: {
    AppLogo,
    Metro,
    AddButton
  },
  data() {
    return {
      metros: initialData
    };
  },
  watch: {
    metros() {
      this.save();
    }
  },
  mounted() {
    this.load();
  },
  methods: {
    add() {
      const newData = {
        tempo: 120,
        name: 'new',
        color: colorStack.pop() || '#b96992',
        id: this.metros.length
      };
      this.metros.push(newData);
    },
    del() {
      if (this.metros.length < 2) {
        return;
      }
      const old = this.metros.pop();
      colorStack.push(old.color);
    },
    setTempo(plus, id) {
      this.metros[id].tempo += plus;
    },
    save() {
      localStorage.setItem('key', JSON.stringify(this.metros));
    },
    load() {
      const rawData = localStorage.getItem('key');
      if (rawData) {
        try {
          this.metros = JSON.parse(rawData);
        } catch (e) {
          console.error('parse error', e); // eslint-disable-line no-console
          this.metros = initialData;
        }
      }
    },
    clearStorageData() {
      const result = window.confirm('clear data?');
      if (result) {
        localStorage.clear();
        this.metros = initialData;
      }
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
  margin-top: 5px;
  margin-bottom: 1rem;
}

.title {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 60px;
  letter-spacing: 1px;
}

.footer {
  margin-top: 40px;
}
</style>
