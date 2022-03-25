var modal = document.querySelector('.modal-container');

// modal about more
let isOpenModal = false;
let modal_content = '';
function modalOpen(e) {
  movies.filter((item) => {
    if (item.youtubeId === e.target.id) {
      modal_content = `<div class="modal-content">
     <div
       class="modal-top d-flex align-items-center justify-content-space-between w-100"
     >
       <span>${item.title}</span>
       <button onclick="closeModal()"  class="btn btn-close"></button>
     </div>
     <div class="modal-body-container">
       <div class="strailer-modal">
       <a target="_blank" href=${item.imdbPage}>
         <img
         src=${item.youtubePoster}
         class="card-img-top"
         alt="muvie image"
              />
       </a>
     </div>
       <div class="modal-about"> <p class="card-text d-flex align-items-center " style="margin-bottom:0;">
       <i class="bi text-warning bi-star-fill"></i>${item.imdbRating} 
       <span class=" d-flex align-items-center m-2"><i class='bx bx-globe' ></i> ${item.language} </span>
       </p>
       <p style="margin-bottom:0;">${item.summary}</p>
       <p class="card-text d-flex align-items-center fw-bold">
       #${item.categories[1]}
       </p>
       </div>
     </div>
     </div>`;
    }
  });
  modal.style.display = 'flex';
  modal.innerHTML = modal_content;

  isOpenModal = !isOpenModal;
}
function closeModal() {
  if (isOpenModal) {
    modal.style.display = 'none';
    isOpenModal = !isOpenModal;
  }
}
