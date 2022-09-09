const app = Vue.createApp({
  data: () => ({
    km: 0,
    m: 0,
    firstName: "",
    lastName: "",
    fulName: "",
    colors: [
      { name: "red"},
      { name: "green"},
      { name: "blue"},
      
    ]
  }),
  // watch: {
  //   km: function(value) {
  //     console.log(value);
  //     this.km = value
  //     this.m = value * 1000
  //   },
  //   m: function(value) {
  //     this.km = value / 1000
  //   },
  //   firstName: function(value) {
  //     this.fullName = value + " " + this.lastName
  //     return this.fullName;
  //   },
  //   lastName: function(value) {
  //     this.fullName = this.firstName + " " + value;
  //     return this.fullName;
  //   }
  // },
  watch: {
    colors: {
      handler: function(newVal, oldVal) {
        console.log("Updated");
      },
      deep: true
    }
  },
  methods: {
    onClick: function(event) {
      this.colors[1].name = "white"
    }
  },
  computed: {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
});
app.mount('#app');