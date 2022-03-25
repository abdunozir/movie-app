var offcanvasBody = document.querySelector('.offcanvas-body');
var likeSpan = document.querySelector('#like-span');

// liked cards function
let likedCardsContainer = '';
let likedarr = [];
let likedarrIndex = 0;

function slikedCard(e) {
  // console.log(e.target.id);
  movies.forEach((item) => {
    if (item.youtubeId == e.target.id) {
      likedarr.push(item.youtubeId);
    }
    // ikkimarta bosishni oldini olish
    likedarr = likedarr.filter((value, index) => {
      return likedarr.indexOf(value) === index;
      // console.log(value, index);
    });
  });

  movies.forEach((el) => {
    if (likedarr[likedarrIndex] == el.youtubeId) {
      likedCardsContainer = `
        <div class="d-flex align-items-center justify-content-left gap-2 w-100 mt-2">
       <img class="w-25" src=${el.youtubePoster} alt="" />
       <div class"w-75">
         <p class="liked-movie-name"><a href="${el.imdbPage}" style="margin-bottom:0;" class=" h4">${el.title} </a></p>
         <p class="card-text d-flex align-items-center " style="margin-top:0;">
           <i class="bi text-warning bi-star-fill"></i>${el.imdbRating}
           <span class=" d-flex align-items-center m-2"><i class='bx bx-globe' ></i> ${el.language}</span><span>#${el.year}</span>
           </p>
       </div>
       </div>
       `;
      likeIconColor = 'red';
      offcanvasBody.innerHTML += likedCardsContainer;
      likedarrIndex++;
    }
    likedarr.forEach((index) => {
      if (index == e.target.id) {
      }
    });
  });
}

// <div class="liked-card-image"></div>
