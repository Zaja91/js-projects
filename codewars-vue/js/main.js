// Rules :
// Clean Code rules for functions
// Use only Vim commands
// For every exercise display a different card with component

const vm = new Vue({
  el: "#root",
  data: {
    cardOneInput: "",
    result: 0,
  },
  methods: {
    isBiggerThanTen: function() {

    },

    calculate: function() {

        return this.result
    },

    calcDigitalRoot: function () {
        calculate();
        if (isBiggerThanTen()) {
            calculate()
        }
    },
  },
});
