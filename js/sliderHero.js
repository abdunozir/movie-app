const slider_image = document.querySelector('.slider-image');
const hero_muvie_about = document.querySelector('.hero_muvie_about');
let one = document.querySelectorAll('.one');
let hero_sliderARR = [
  {
    name: 'Jeyms Bond agent 007 Kvant Tuhfasi ',
    imdb: 7.5,
    lang: 'English',
    summary:
      'James Bond is a British literary and film character. He is often depicted as a peerless spy, notorious womanizer, and masculine icon.',
    link: 'http://uzmovi.com/tarjima-kinolar/1785-agent-007-jeyms-bond-kvant-tuhfasi.html',
    img: `https://cambridge.ua/app/uploads/2021/10/agent-007-i-krasivyj-britanskij-akczent-v-filmah-pro-dzhejmsa-bonda.jpg`,
  },
  {
    name: 'Otamdan qolgan dalalar',
    imdb: 10.0,
    lang: 'Uzbek',
    summary:
      "O'zbek millatini ustidan savet davlati tomonidan qilingan adolatsizliklar!",
    link: 'https://www.youtube.com/watch?v=-Dok2YxhCW4',
    img: `https://i.mycdn.me/videoPreview?id=692910688816&type=32&idx=14&tkn=egafj30o5nFyphmHwtVjfzfWgAI&fn=external_8`,
  },
  {
    name: `Умар Ибн Хаттоб / Umar Ibn Xattob Uzbek o'zbek tilida barcha qismlar `,
    imdb: 5.9,
    lang: 'Uzbek',
    summary: `Мен учун энг севимли киши хатоларимни кўрсатган инсондир. Мен учун энг афзал инсон адолатга зид иш таклиф қилинганида, манфаатли бўлишига қарамасдан, рад эта олган инсондир.`,
    link: 'http://uzmovi.com/serial/695-umar-ibn-hattob-1-30-qism-umar-ibn-xattob-uzbek-ozbek-tilida-barcha-qismlar.html',
    img: `https://zamin.uz/uploads/posts/2018-03/1522079665_180121213516_600x400.jpg`,
  },
  {
    name: 'Aka koreya filmi premeyra',
    imdb: 7.2,
    lang: 'Uzbek',
    summary:
      'Показаны результаты по запросу Aka koreya filmi premyera haqida Искать вместо этого Aka koreya filmi premeyra haqida',
    link: 'http://uzmovi.com/tarjima-kinolar/4354-aka-koreya-filmi-premeyra.html',
    img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNZ3GQddC42452ybAWfKj_AtbvQJk44uFGDg&usqp=CAU`,
  },
  {
    name: 'SHaytanat',
    imdb: 7.2,
    lang: 'Uzbek',
    summary: `O'zbek zabon filmlar orasida o'zgacha o'ringa ega film!`,
    link: 'https://www.youtube.com/watch?v=AsthRnnwvD4',
    img: `https://xabar.uz/static/crop/1/0/920__95_108429798.jpg`,
  },
];

let carList = document.querySelector('.carousel-inner');

let img1 = `
    <div><img src=${hero_sliderARR[0].img} alt="film image"></div>
      `;

let txtx = `
      <div class="hero1">
        <h2 class="hero__title1 mb-3">${hero_sliderARR[0].name}</h2>
        <div class="hero-film__about1 mb-3">
          <div class="hero__imdb1 "><p class="hero__imdb-text"> ${hero_sliderARR[0].lang}</p></div>
          <div class="hero__rating d-flex align-items-center"> <i class="bx bx-star"></i><span>95%</span></div>
        </div>
        <p class="hero__summary ">${hero_sliderARR[0].summary}</p>
        <a href="${hero_sliderARR[0].link}" class="btn btn-danger hero__link"><i class='bx bx-play-circle' ></i>Watch trailer</a>
      </div>`;

function carusels(inh) {
  // let carousel = document.createElement('div');
  // carousel.className = `carousel-item carusel-${index}`;
  // console.log(inh);
  img1 = `
    <div><img src=${hero_sliderARR[inh].img} alt="film image"></div>
      `;

  txtx = `
      <div class="hero1">
        <h2 class="hero__title1 mb-3">${hero_sliderARR[inh].name}</h2>
        <div class="hero-film__about1 mb-3">
          <div class="hero__imdb1 "><p class="hero__imdb-text"> ${hero_sliderARR[inh].lang}</p></div>
          <div class="hero__rating d-flex align-items-center"> <i class="bx bx-star"></i><span>95%</span></div>
        </div>
        <p class="hero__summary ">${hero_sliderARR[inh].summary}</p>
        <a href="${hero_sliderARR[inh].link}" class="btn btn-danger hero__link"><i class='bx bx-play-circle' ></i>Watch trailer</a>
      </div>`;
  // carList.appendChild(carousel);

  slider_image.innerHTML = img1;
  hero_muvie_about.innerHTML = txtx;
}
slider_image.innerHTML = img1;
hero_muvie_about.innerHTML = txtx;
let t = 0;

setInterval(() => {
  // carusels(t);
  if (t == 5) {
    t = 0;
  }
  hero_sliderARR[t];
  one.forEach((item) => {
    if (item.innerHTML - 1 == t) {
      item.classList.add('hero-slider');
    } else {
      item.classList.remove('hero-slider');
    }
  });

  carusels(t);
  t++;
}, 4000);

one.forEach((item) => {
  item.addEventListener('click', (el1) => {
    let heroslider = document.querySelector('.hero-slider');
    heroslider.classList.remove('hero-slider');
    el1.target.classList.add('hero-slider');
    t = el1.target.innerHTML;
    t = parseInt(t) - 1;
    carusels(t);
  });
});
