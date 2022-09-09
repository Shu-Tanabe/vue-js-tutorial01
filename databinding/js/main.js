const app = Vue.createApp({
  data: () => ({
    isLarge: true,
    hasError: false,
    largeClass: "large",
    dangerClass: "text-danger",
    classObject: {
      "large": true,
      "text-danger": true
    },
    largeClassObject: {
      "large": true,
      "bg-gray": true
    },
    dangerClassObject: {
      "text-danger": true
    },
    isLarge: true,
    color: "blue",
    fontSize: 36,
    styleObject: {
      color: "blue",
      fontSize: "48px",
    }
  }),
});
app.mount('#app');