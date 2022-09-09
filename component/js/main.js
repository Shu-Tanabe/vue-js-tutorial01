const GutenMorgenComponent = {
  template: "<p>Guten Morgen!</p>"
};

const buttonCounter = {
  template: "<div><span>count: </span><button v-on:click='countUp'>{{count}}</button></div>",
  data: () => ({
    count: 0
  }),
  methods: {
    countUp: function(event) {
      this.count++;
    }
  },
}

const app = Vue.createApp({
  data: () => ({
  }),
  components: {
    // コンポーネント名はハイフンを1つ以上含むケバブケース
    "guten-morgen-component": GutenMorgenComponent,
    "button-counter": buttonCounter
  }
});

app.component("hello-component", {
  template: '<p>Hello!</p>'
});

app.mount('#app');