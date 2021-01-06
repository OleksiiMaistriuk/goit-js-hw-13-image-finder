import './styles.css';
import '../node_modules/material-design-icons/iconfont/material-icons.css';
import count from './count.json';
// import galleryTemplates from '../templates/gallery.hbs';
import photoCardTemplates from '../templates/photo-card.hbs';
// import searchFormTemplates from '../templates/search-form.hbs';

const refs = {
  photoCardConteiner: document.querySelector('.photo-card'),
  searchForm: document.querySelector('#search-form'),
};

console.log(refs.searchForm);
refs.searchForm.addEventListener('submit', event => {
  event.preventDefault();
  console.log();
});

// const debounceInput = event => {
//   fetchImages(event.target.value).then(updateArticlesMurkup);
// };

// const photoCard = photoCardTemplates(fetchImages());

function fetchImages(searchQuery, pageNumber) {
  return fetch(
    `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${pageNumber}&per_page=12&key=16958018-5870f5be4b9a0ed4e53bb3835`,
  )
    .then(response => response.json())
    .then(({ hits }) => {
      console.log(hits);
      const markup = photoCardTemplates(hits);
      console.log(markup);
      refs.photoCardConteiner.insertAdjacentHTML('beforeend', markup);
    })
    .catch(error => console.log(error));
}
fetchImages('poland', 2);
