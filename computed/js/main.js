const app = Vue.createApp({
  data: () => ({
    message: "Hello Vue3",
    basePrice: 100,
  }),
  computed: { //()不要, キャッシュあり
    reversedMessage: function() {
      return this.message.split("").reverse().join("")
    },
    taxIncludedPrice: {
      get: function() {
        return this.basePrice * 1.1
      },
      set: function(value) {
        this.basePrice = value / 1.1
      }
    },
    computedNumber: function() { 
      console.log("computed");
      return Math.random();
    }
  },
  methods: { //()必要, キャッシュなし
    reversedMessageMethod: function() {
      return this.message.split("").reverse().join("")
    },
    methodNumber: function() {
      console.log("method");
      return Math.random();
    }
  }
});
app.mount('#app');