const oneSliderNumer = document.querySelectorAll('.one');
const insliderImage = document.querySelector('.inslider-image');
const hero_muvie_about = document.querySelector('.hero_muvie_about');

//  in hreo slider image about object
let hero_movie = {};
hero_movie.name = 'john Wick 3:';
hero_movie.familia = 'Prabellum';
hero_movie.text =
  "John Wick is on the run after killing a member of theinternational assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.";

//   onclick function to change the image of slider
oneSliderNumer.forEach((item) => {
  item.addEventListener('click', () => {
    const currentCorousel = document.querySelector('.hero-slider');
    currentCorousel.classList.remove('hero-slider');

    item.classList.add('hero-slider');
    let m = 400;

    // if else statement of slider
    if (item.innerHTML == '2') {
      hero_movie.name = 'birinchi';
      hero_movie.familia = 'SLIDER';
      (hero_movie.text =
        'A recovering alcoholic and recently converted Mormon, Arthur "Killer" Kane, of the rock band The New York Dolls, is given a chance at reuniting with his band after 30 years.'),
        (m = 200);
    } else if (item.innerHTML == '3') {
      hero_movie.name = 'ikkichi';
      hero_movie.familia = 'SLIDER';
      (hero_movie.text =
        'A recovering alcoholic and recently converted Mormon, Arthur "Killer" Kane, of the rock band The New York Dolls, is given a chance at reuniting with his band after 30 years.'),
        (m = 0);
    } else if (item.innerHTML == '4') {
      hero_movie.name = 'uchinchi';
      hero_movie.familia = 'SLIDER';
      (hero_movie.text =
        'A recovering alcoholic and recently converted Mormon, Arthur "Killer" Kane, of the rock band The New York Dolls, is given a chance at reuniting with his band after 30 years.'),
        (m = -200);
    } else if (item.innerHTML == '5') {
      hero_movie.name = "to'rtinchi";
      hero_movie.familia = 'SLIDER';
      (hero_movie.text =
        'A recovering alcoholic and recently converted Mormon, Arthur "Killer" Kane, of the rock band The New York Dolls, is given a chance at reuniting with his band after 30 years.'),
        (m = -400);
    } else {
      hero_movie.name = 'john Wick 3:';
      hero_movie.familia = 'Prabellum';
      hero_movie.text =
        "John Wick is on the run after killing a member of theinternational assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.";
      m = 400;
    }
    insliderImage.setAttribute('style', `margin-top:${m}vh;`);
    render();
  });
  // here slider image about text

  function render() {
    hero_muvie_about.innerHTML = `
  <h6 class="d-flex flex-column prabellum fw-bold">
  <span>${hero_movie.name}</span><span>${hero_movie.familia}</span>
  </h6>
  <p class="card-text d-flex align-items-center text-white">
  <i class="bi text-warning bi-star-fill"></i> 8.5
  <span class="d-flex align-items-center m-2"
    ><i class="bx bx-globe"></i> ENGLISH
  </span>
  </p>
  <h6
  class="fw-500  text-white"
  style="font-size: 14px; line-height: 18px"
  >
  ${hero_movie.text}
  </h6>
  <a
  href="#"
  class="btn btn-danger d-flex align-items-center justify-content-center gap-1"
  style="font-size: 15px;"
  ><i class="bx bx-play" style="font-size: 12px"></i
  ><span>WATCH TRAILER</span></a
  >
  `;
  }

  render();
});

// oneSliderNumer.forEach((el) => {
//   if (item.classList[1] == el.classList[1]) {
//   } else if (el.classList[1] == 'hero-slider') {
//     el.classList.remove('hero-slider');
//   }
// });
