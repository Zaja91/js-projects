const vm = new Vue({
  el: "#root",
  data: {
    selectedGenre: "All",
    albums: [],
    url: "https://flynn.boolean.careers/exercises/api/array/music",
  },
  mounted() {
    axios.get(this.url).then((r) => {
      this.albums = r.data.response;
    });
  },
  computed: {
    filteredAlbums() {
      if (this.selectedGenre == "All") {
        return this.albums;
      } else {
        return this.albums.filter((album) => album.genre == this.selectedGenre);
      }
    },
  },
});
