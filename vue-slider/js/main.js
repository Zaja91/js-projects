const vm = new Vue({
  el: "#root",
  data: {
    imgNames: ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"],
    currentId: 0,
  },
  methods: {
    next: function () {
      if (this.currentId == this.imgNames.length - 1) {
        this.currentId = 0;
      } else {
        this.currentId += 1;
      }
    },
    prev: function () {
      if (this.currentId === 0) {
        this.currentId = this.imgNames.length - 1;
      } else {
        this.currentId -= 1;
      }
    },
  },
});
