const app = Vue.createApp({
  data: () => ({
    message: "Hello Vue3",
    checked: false,
    colors: [],
    color: "",
    selected: "",
    selectedMulti: [],
    lazyMessage: "",
    trimMessage: "",
    age: 0
  })
});
app.mount('#app');