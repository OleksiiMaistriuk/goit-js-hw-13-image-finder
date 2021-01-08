import './styles.css';
import '../node_modules/material-design-icons/iconfont/material-icons.css';
import apiService from './apiService';
import photoCardTemplates from '../templates/photo-card.hbs';

const refs = {
  photoCardConteiner: document.querySelector('.photo-card'),
  searchForm: document.querySelector('#search-form'),
  scrollContainer: document.querySelector('.js-scroll'),
  loadMoreButton: document.querySelector('.js-button'),
};

refs.searchForm.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  apiService.query = form.elements.query.value;
  // refs.loadMoreButton.classList.add('is-hidden');
  if (apiService.query === '') {
    return;
  }
  refs.photoCardConteiner.innerHTML = '';
  form.reset();
  apiService.resetPage();
  // apiService.fetchImages().then(updateArticlesMurkup);
  // refs.loadMoreButton.classList.remove('is-hidden');
  onScroll.observe(refs.scrollContainer);
});

function updateArticlesMurkup(hits) {
  const markup = photoCardTemplates(hits);
  refs.photoCardConteiner.insertAdjacentHTML('beforeend', markup);
}

// refs.loadMoreButton.addEventListener('click', () => {
//   apiService.fetchImages().then(updateArticlesMurkup);
//   skroller();
// });
// function skroller() {
//   setTimeout(() => {
//     window.scrollTo({
//       top:
//         document.documentElement.offsetHeight -
//         document.documentElement.offsetWidth,

//       behavior: 'smooth',
//     });
//   }, 400);
// }

const options = {
  rootMargin: '150px',
};
const onScroll = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      apiService.fetchImages().then(updateArticlesMurkup);
      console.log(entry.target);
    }
  });
}, options);
