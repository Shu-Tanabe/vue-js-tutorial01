const app = Vue.createApp({
  data: () => ({
    items: null,
    keyword: "",
    message: ""
  }),
  methods: {
    getAns: function() {
      if(this.keyword === "") {
        this.items = null;
        return;
      }
      this.message = "loading...";
      const vm = this;
      const params = { page: 1, per_page: 20, query: this.keyword };
      axios.get("https://qiita.com/api/v2/items", { params })
      .then(function(res){
        vm.items = res.data;
      })
      .catch(function(err) {
        vm.message = "Error:" + error;
      })
      .finally(function() {
        vm.message = "";
      });
    }
  },
  mounted: function() {
    // this.keyword = "JavaScript";
    // this.getAns();
    this.debouncedGetAnswer = _.debounce(this.getAns, 1000);
  },
  watch: {
    keyword: function(newkwd, oldkwd) {
      this.message = "typing ..."
      this.debouncedGetAnswer();
    }
  }
});
app.mount('#app');