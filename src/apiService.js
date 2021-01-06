export default function fetchImages(searchQuery, pageNumber) {
  return fetch(
    `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${pageNumber}&per_page=12&key=16958018-5870f5be4b9a0ed4e53bb3835`,
  )
    .then(response => response.json())
    .then(data => console.log(data));
}
