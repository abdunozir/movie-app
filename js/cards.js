let cardsContainer = document.getElementById('cards-container');
let pegnition_slider_container = document.querySelector(
  '.pegnition-slider-container'
);
let morebtn = document.querySelectorAll('.morebtn');

// MOVIE COUNT
let total_movies = 0;
movies.forEach((element) => {
  total_movies++;
});

let movies_per_page = 30;
let page_count = total_movies / movies_per_page;
let nex1 = 0;
function paginationPaint(current_page = 1) {
  nex1 = current_page;
  let liItems = '';
  let start_page = current_page - 2 <= 0 ? 1 : current_page - 2;
  pegnition_slider_container.innerHTML = '';
  if (current_page + 2 > page_count) {
    start_page -= current_page + 2 - page_count;
  }

  for (let index = start_page; index <= page_count; index++) {
    if (index > start_page + 4) {
      break;
    }

    liItems += `<span class="morebtn btn" onclick='paginationPaint(${index})' >${index}</span>`;
    showmoreCards(current_page);
  }
  pegnition_slider_container.innerHTML = liItems;
}

paginationPaint();

function nex() {
  if (nex1 !== page_count) {
    nex1++;
    paginationPaint(nex1);
  } else {
    nex1 == page_count;
  }
}

function pre() {
  if (nex1 !== 0) {
    paginationPaint(nex1);
    nex1--;
  } else {
    nex1 = 1;
  }
}

// show cards here
function showmoreCards(index) {
  let cards = '';
  for (let i = 0; i <= 30 * index; i++) {
    cards += ` <div class="card m-2" style="width: 18rem">
            <div class="cardimg">
            <div class="trailar_like container p-2 d-flex align-items-center justify-content-space-between"> 
            <a class="badge" title="Tap to watch trailer"  data-bs-toggle="tooltip" data-bs-placement="top" style="text-decoration:none;" href=${movies[i].imdbPage}>Watch trailer</a>
            <span  onclick='slikedCard(event)' ><i id="${movies[i].youtubeId}" class=' bx bxs-heart bxs-heart-card'></i></span>
            </div>
              <img
              onclick="modalOpen(event)"
              id=${movies[i].youtubeId}

              
                src=${movies[i].youtubePoster}
                class="card-img-top"
                alt="muvie image"
              />
            </div>
            <div class="card-body">
            <p class="card-text d-flex align-items-center runtime-p">
            <i class='bx bxs-calendar'></i> ${movies[i].year} : <i class='bx bx-alarm' ></i> ${movies[i].runtime} 
              </p>
              <h5 class="card-title">${movies[i].title}</h5>
              <p class="card-text d-flex align-items-center ">
              <i class="bi text-warning bi-star-fill"></i>${movies[i].imdbRating} 
              <span class=" d-flex align-items-center m-2"><i class='bx bx-globe' ></i> ${movies[i].language} </span>
              </p>
              <p class="card-text ">
             ${movies[i].categories[0]}
              </p>
              <button onclick="modalOpen(event)" id=${movies[i].youtubeId} class="btn btn-primary">More info</button>
            </div>
          </div>
       `;
  }
  cardsContainer.innerHTML = cards;
}
