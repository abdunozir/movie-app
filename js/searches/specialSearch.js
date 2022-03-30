const searchFormControlInput1 = document.querySelector(
  '#searchFormControlInput1'
);
const searchFormControlInput2 = document.querySelector(
  '#searchFormControlInput2'
);
const searchFormControlInput3 = document.querySelector(
  '#searchFormControlInput3'
);
const searchSelection = document.querySelector('#searchSelection');
const container_searchresalt1 = document.querySelector(
  '.container-searchresalt1'
);
const SPS_search_field_panel1 = document.querySelector('.search-field-panel1');
// special search select option here
// SPS "means special search"
let SPS_SelectionOptions = [];
function specialSearchOption() {
  movies.forEach((item) => {
    item.categories.forEach((CategoryItem) => {
      if (SPS_SelectionOptions.indexOf(CategoryItem) === -1) {
        SPS_SelectionOptions.push(CategoryItem);
      }
    });
  });
  SPS_SelectionOptions.forEach((item) => {
    let searchSelectionOptions = document.createElement('option');
    searchSelectionOptions.value = item;
    searchSelectionOptions.innerText = item;
    searchSelection.add(searchSelectionOptions);
  });
}
specialSearchOption();

// search result
let checkedEl = [];
let checkedEl2 = [];
let checkedElFinall = [];
let SPS_searchResultCard = '';
// Search as category function
function searchAsCategory() {
  //   category check function here
  if (searchSelection.value !== 'All') {
    checkedEl.forEach((checked11) => {
      for (let i = 0; i <= checked11.categories.length; i++) {
        if (checked11.categories[i] == searchSelection.value) {
          checkedEl2.push(checked11);
        }
      }
    });
  } else {
    checkedEl2 = checkedEl;
  }
}

// year function to search
function yearCheck() {
  if (searchFormControlInput3.value == '') {
    searchFormControlInput3.value = 2020;
  }

  checkedEl = movies.filter((el) => {
    if (
      el.year >= parseInt(searchFormControlInput2.value) &&
      el.year <= parseInt(searchFormControlInput3.value)
    ) {
      return el;
    }
  });
}

// SEARCH AS NAME
function searchName() {
  checkedEl2.filter((item) => {
    let it_title = item.title.toLowerCase();
    if (it_title.includes(searchFormControlInput1.value.toLowerCase())) {
      checkedElFinall.push(item);
    }
  });
}

function innerHTMLfunctionForFinalResult(item) {
  SPS_searchResultCard += `
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

  //   console.log(SPS_search_field_panel1.innerHTML);
  SPS_search_field_panel1.innerHTML = SPS_searchResultCard;

  container_searchresalt1.style.display = 'block';
}

function SPS_finalFunction() {
  if (checkedElFinall.length !== 0) {
    checkedElFinall.forEach((item) => {
      innerHTMLfunctionForFinalResult(item);
    });
  } else {
    SPS_search_field_panel1.innerHTML = `
    <h1>Opsss <i class="bi bi-emoji-frown"></i> \n Nothing found </h1>
    `;
  }
}

SPS_searchResultCard = '';

// SPS_searchResultCard = '';

// when button clicked
function SPS_button() {
  // yaar check function here
  yearCheck();

  //   search as category function
  searchAsCategory();

  //   search as name
  searchName();

  //   final function result
  SPS_finalFunction();
}

function SPS_searchResultClose() {
  container_searchresalt1.style.display = 'none';
  searchFormControlInput1.value = '';
  searchFormControlInput2.value = '';
  searchFormControlInput3.value = '';
  // searchSelection.value = '';
}

// PREVENT DEFAULT FUNCTION
function func(e) {
  e.preventDefault();
}
