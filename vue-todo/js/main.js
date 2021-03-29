const vm = new Vue({
  el: "#root",
  data: {
    userInput: "",
    elList: [],
    indexOfEl: 0,
    el: {},
  },
  methods: {
    addElement: function () {
      this.elList.push({ input: this.userInput, hasClass: false });
      console.log(this.elList);
    },
    removeEl: function (index) {
      this.elList.splice(index, 1);
    },
    toggleClass: function (str) {
      if (str.hasClass == false) {
        str.hasClass = true;
      } else if (str.hasClass == true) {
        str.hasClass = false;
      }
      return str.hasClass;
    },
  },
});
