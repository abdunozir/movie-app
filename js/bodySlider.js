let body_slider_container = document.querySelector('.body-slider-container');

// random value array of movies
let bodySliderCardsArr = [];
let bodySliderCard = ' ';

// getting random value of movies array
for (let i = 0; i <= movies.length; i++) {
  let rnd = Math.floor(Math.random() * movies.length);

  if (bodySliderCardsArr.length < 8) {
    bodySliderCardsArr.push(movies[rnd]);
  }
}

// displaying cards on
function randomsliderCards(arr) {
  arr.forEach((item) => {
    bodySliderCard += ` <div class="card m-2" style="width: 18rem">
  <div class="cardimg">
  <div class="trailar_like container p-2 d-flex align-items-center justify-content-space-between">
  <a class="badge" title="Tap to watch trailer"  data-bs-toggle="tooltip" data-bs-placement="top" style="text-decoration:none;" href=${item.imdbPage}>Watch trailer</a>
  <span  onclick='slikedCard(event)' ><i id="${item.youtubeId}" class=' bx bxs-heart bxs-heart-card'></i></span>
  </div>
    <img
    onclick="modalOpen(event)"
    id=${item.youtubeId}

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
   ${item.categories[0]}
    </p>
    <button onclick="modalOpen(event)" id=${item.youtubeId} class="btn btn-primary">More info</button>
  </div>
</div>
`;
  });
  body_slider_container.innerHTML = bodySliderCard;
  bodySliderCard = '';
}

randomsliderCards(bodySliderCardsArr);
let slider_move = 0;

let sinovchiarr = [];
function bodyrighttarr() {
  if (slider_move > 40) {
    sinovchiarr.push(bodySliderCardsArr.shift());
    bodySliderCardsArr.push(sinovchiarr.shift());
    randomsliderCards(bodySliderCardsArr);
    // body_slider_container.children[0].shift();
  } else {
    console.log(slider_move);
    slider_move += 20;
  }
  body_slider_container.setAttribute(
    'style',
    `margin-left:-${slider_move}rem;transition:All 0.5s;`
  );
}

// ===========
function bodyleftarr() {
  body_slider_container.setAttribute(
    'style',
    `margin-left:-${slider_move}rem;`
  );

  if (slider_move == 0) {
    sinovchiarr.push(bodySliderCardsArr.pop());
    bodySliderCardsArr.unshift(sinovchiarr.shift());
    randomsliderCards(bodySliderCardsArr);
    body_slider_container.children[7].shift();
  } else {
    slider_move -= 20;
  }
}
