import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

let modal;

const galleryMarkup = galleryItems.map(({preview, original, description}) =>
  `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
).join('');

galleryContainer.insertAdjacentHTML('afterbegin', galleryMarkup);

galleryContainer.addEventListener('click', onImgClick);

function onImgClick(event) {
  event.preventDefault();
  
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }

  const bigImg = event.target.dataset.source;

  modal = basicLightbox.create(
    `<img src="${bigImg}" width="1280" height="855">`
    );

  modal.show();

  window.addEventListener('keydown', onModalClose);
}

function onModalClose(event) {
  if (event.code === 'Escape') {
    modal.close();
    window.removeEventListener('keydown', onModalClose);
  }
}