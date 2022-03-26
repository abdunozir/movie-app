var offcanvasBody = document.querySelector('.offcanvas-body');
var likeSpan = document.querySelector('.like-span');

// liked cards variables
let likedCardsContainer = '';
let likedcard = [];

function removeFromMarkedMovies(id) {
  const selector = `div[data-markedId="${id}"]`;
  const markedMovie = document.querySelector(selector);
  markedMovie.remove();
}

function addToMarkedMovies(id) {
  movies.forEach((el) => {
    if (el.youtubeId == id) {
      likedCardsContainer = `
        <div data-markedId="${el.youtubeId}" class="d-flex align-items-center justify-content-left gap-2 w-100 mt-2">
          <img class="w-25" src=${el.youtubePoster} alt="" />
          <div class"w-75">
            <p class="liked-movie-name"><a href="${el.imdbPage}" style="margin-bottom:0;" class=" h4">${el.title} </a></p> 
            <p class="card-text d-flex align-items-center " style="margin-top:0;">
            <i class="bi text-warning bi-star-fill"></i>${el.imdbRating}
            <span class=" d-flex align-items-center m-2"><i class='bx bx-globe' ></i> ${el.language}</span>
            <span style="color:red;"  onclick='slikedCard(event)' ><i style="color:red;" id="${el.youtubeId}" class='bx bxs-heart bxs-heart-card' ></i></span>
            </p>
          </div>
       </div>
       `;
      offcanvasBody.innerHTML += likedCardsContainer;
    }
  });
}

// heat button click funcion
function slikedCard(e) {
  // add liked list
  movies.forEach((item) => {
    if (item.youtubeId == e.target.id) {
      if (likedcard.indexOf(item.youtubeId) === -1) {
        // not liked, lets add to liked
        likedcard.push(item.youtubeId);
        addToMarkedMovies(item.youtubeId);
        // like color make red
        e.target.classList.add('like-span');
      } else {
        // already liked, remove from list
        likedcard.splice(likedcard.indexOf(item.youtubeId), 1);
        removeFromMarkedMovies(item.youtubeId);
        // like color make red
        e.target.classList.remove('like-span');
      }
      console.log(likedcard);
    }
  });
}
