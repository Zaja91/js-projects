const vm = new Vue({
  el: "#root",
  data: {
    userInput: "",
    inputCollection: [],
  },
  methods: {
    addElement: function () {
      if (this.userInput !== "") this.inputCollection.push(this.userInput);
    },
  },
});
