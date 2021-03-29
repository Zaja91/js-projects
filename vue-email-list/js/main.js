const vm = new Vue({
  el: "#root",
  data: {
    mails: [],
    url: "https://flynn.boolean.careers/exercises/api/random/mail",
  },
  created: function () {
    for (let i = 0; i < 10; i++) {
      axios.get(this.url).then((result) => {
        this.mails.push(result.data.response);
      });
    }
  },
});
