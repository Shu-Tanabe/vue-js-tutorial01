const app = Vue.createApp({
  data: () => ({
    counter: 0,
    message: "",
    onceMessage: ""
  }),
  methods: {
    clickHandler: function($event, message) {
      this.message = message;
      console.log($event);
    },
    clickHandlerOnce: function() {
      this.message = new Date().toLocaleTimeString();
    }
  }
});
app.mount('#app');