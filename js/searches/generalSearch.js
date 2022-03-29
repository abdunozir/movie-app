const generalSearchInput = document.querySelector('.top-search-input');
const generalSearchInput1 = document.querySelector('.top-search-input1');
const search_field_panel = document.querySelector('.search-field-panel');
const container_searchresalt = document.querySelector(
  '.container-searchresalt'
);
// general filter function to all
function generalSearchFunction(inputclass) {
  let searchResultCard = '';
  if (inputclass == 'top-search-input1') {
    movies.filter((item) => {
      if (
        // Search algorithm
        item.title
          .toLowerCase()
          .includes(generalSearchInput1.value.toLowerCase())
      ) {
        searchResultCard += `
        <div class="card m-2" style="width: 18rem">
          <div class="cardimg">
          <div class="trailar_like container p-2 d-flex align-items-center justify-content-space-between"> 
          <a class="badge" title="Tap to watch trailer"  data-bs-toggle="tooltip" data-bs-placement="top" style="text-decoration:none;" href=${item.imdbPage}>Watch trailer</a>
          <span  onclick='slikedCard(event)' ><i id="${item.youtubeId}" class=' bx bxs-heart bxs-heart-card'></i></span>
          </div>
            <img
              src=${item.youtubePoster}
              class="card-img-top"
              alt="muvie image"
            />
          </div>
          <div class="card-body">
          <p class="card-text d-flex align-items-center runtime-p">
          <i class='bx bxs-calendar'></i> ${item.year} : <i class='bx bx-alarm' ></i> ${item.runtime} 
            </p>
            <h5 class="card-title">${item.title}</h5>
            <p class="card-text d-flex align-items-center ">
            <i class="bi text-warning bi-star-fill"></i>${item.imdbRating} 
            <span class=" d-flex align-items-center m-2"><i class='bx bx-globe' ></i> ${item.language} </span>
            </p>
            <p class="card-text ">
           ${item.categories[0]}, ${item.category}
            </p>
            <button onclick="modalOpen(event)" id=${item.youtubeId} class="btn btn-primary">More info</button>
          </div>
        </div>
     `;
      }
    });
  } else {
    movies.filter((item) => {
      if (
        // Search algorithm
        item.title
          .toLowerCase()
          .includes(generalSearchInput.value.toLowerCase())
      ) {
        searchResultCard += `
        <div class="card m-2" style="width: 18rem">
          <div class="cardimg">
          <div class="trailar_like container p-2 d-flex align-items-center justify-content-space-between"> 
          <a class="badge" title="Tap to watch trailer"  data-bs-toggle="tooltip" data-bs-placement="top" style="text-decoration:none;" href=${item.imdbPage}>Watch trailer</a>
          <span  onclick='slikedCard(event)' ><i id="${item.youtubeId}" class=' bx bxs-heart bxs-heart-card'></i></span>
          </div>
            <img
              src=${item.youtubePoster}
              class="card-img-top"
              alt="muvie image"
            />
          </div>
          <div class="card-body">
          <p class="card-text d-flex align-items-center runtime-p">
          <i class='bx bxs-calendar'></i> ${item.year} : <i class='bx bx-alarm' ></i> ${item.runtime} 
            </p>
            <h5 class="card-title">${item.title}</h5>
            <p class="card-text d-flex align-items-center ">
            <i class="bi text-warning bi-star-fill"></i>${item.imdbRating} 
            <span class=" d-flex align-items-center m-2"><i class='bx bx-globe' ></i> ${item.language} </span>
            </p>
            <p class="card-text ">
           ${item.categories[0]}, ${item.category}
            </p>
            <button onclick="modalOpen(event)" id=${item.youtubeId} class="btn btn-primary">More info</button>
          </div>
        </div>
     `;
      }
    });
  }

  // if not found
  if (searchResultCard !== '') {
    search_field_panel.innerHTML = searchResultCard;
    container_searchresalt.style.display = 'block';
  } else {
    search_field_panel.innerHTML =
      '<h1>Opsss <i class="bi bi-emoji-frown"></i> \n Nothing found </h1>';
    container_searchresalt.style.display = 'block';
  }
}

function generalSearchSystem() {
  generalSearchFunction();
}

function searchResultClose() {
  container_searchresalt.style.display = 'none';
  generalSearchInput.value = '';
  generalSearchInput1.value = '';
}

function preSub(e) {
  e.preventDefault();
}

generalSearchInput.addEventListener('keyup', (e) => {
  if (e.keyCode == 13) {
    generalSearchFunction();
  }
});
generalSearchInput1.addEventListener('keyup', (e) => {
  if (e.keyCode == 13) {
    console.log(e.target.classList[1]);
    generalSearchFunction(e.target.classList[1]);
  }
});
