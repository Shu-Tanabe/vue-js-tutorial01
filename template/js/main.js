const app = Vue.createApp({
  data: () => ({
    message: "Hello VueJs",
    htmlMessage: "Hello <span style=\"color:red;\">VueJs</span>",
    number: 100,
    ok: true,
    url: "https://www.google.co.jp"
  }),
  methods: {
    clickHandler: function(event) {
      this.message = this.message.split("").reverse().join("")
    }
  }
});
app.mount('#app');