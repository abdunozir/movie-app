let cardsContainer = document.getElementById('cards-container');
let morebtn = document.querySelectorAll('.morebtn');
let muvie_count = 0;
let more = 1;
morebtn.forEach((item) => {
  item.addEventListener('click', (e) => {
    let im = document.querySelector('.btn-danger1');
    im.classList.remove('btn-danger1');

    if (e.target.innerHTML == 'Next') {
      im.classList.remove('btn-danger1');
      e.target.classList.add('btn-danger1');
      if (more <= 1882.9333333333334) {
        more++;
      }
      showmoreCards();
    } else if (e.target.innerHTML == 'Pre') {
      im.classList.remove('btn-danger1');
      e.target.classList.add('btn-danger1');
      if (more !== 1) {
        more--;
      }
      showmoreCards();
    } else {
      im.classList.remove('btn-danger1');

      e.target.classList.add('btn-danger1');
      more = parseInt(e.target.innerHTML);
      showmoreCards();
    }
  });
});

// show 30 cards here
function showmoreCards() {
  let cards = '';
  for (let i = 0; i <= 30 * more; i++) {
    muvie_count += 1;
    let category = movies[i].categories[1];
    if (movies[i].categories[1] == 'undefined') {
      category = '';
    }
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
             ${movies[i].categories[0]}, ${category}
              </p>
              <button onclick="modalOpen(event)" id=${movies[i].youtubeId} class="btn btn-primary">More info</button>
            </div>
          </div>
       `;
  }
  cardsContainer.innerHTML = cards;
}

if (more == 1) {
  showmoreCards();
}

// for slider cadr
let main__cardContainer = document.querySelector('.main__cardContainer');
let mscard = '';
for (let i = 0; i <= 8; i++) {
  mscard += ` <div class="card m-2" style="width: 18rem">
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
             ${movies[i].categories[0]}, ${category}
              </p>
              <button onclick="modalOpen(event)" id=${movies[i].youtubeId} class="btn btn-primary">More info</button>
            </div>
          </div>
       `;
}
main__cardContainer.innerHTML = mscard;
