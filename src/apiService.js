export default {
  searchQuery: '',
  pageNumber: 1,

  fetchImages() {
    return fetch(
      `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.pageNumber}&per_page=12&key=16958018-5870f5be4b9a0ed4e53bb3835`,
    )
      .then(response => response.json())
      .then(({ hits }) => {
        this.incrementPage();
        return hits;
      })
      .catch(error => console.log(error));
  },
  resetPage() {
    this.pageNumber = 1;
  },
  incrementPage() {
    this.pageNumber += 1;
  },
  get query() {
    return this.searchQuery;
  },
  set query(value) {
    this.searchQuery = value;
  },
};
