const vm = new Vue({
  el: "#root",
  data: {
    number: null,
    pari: [],
    dispari: [],
    url: "https://flynn.boolean.careers/exercises/api/random/int",
  },
  methods: {
    fetchNumber: function () {
      axios.get(this.url).then((e) => {
        e.data.response % 2 == 0
          ? this.pari.push(e.data.response)
          : this.dispari.push(e.data.response);
      });
    },
  },
});

const vm2 = new Vue({
  el: "#root2",
  data: {
    message: "",
    url: "https://flynn.boolean.careers/exercises/api/random/name",
    invitati: [],
    userName: "",
  },
  mounted() {
    for (let i = 0; i < 10; i++) {
      axios.get(this.url).then((e) => {
        this.invitati.push(e.data.response);
      });
    }
  },
});
