"use.strict";

//! funzioni
//creazione descrizione dell' immagine
const createTextImg = (title) => {
  const item = document.createElement("div");
  item.classList.add("img-text");
  item.innerHTML = `<h3>${title.title}</h3>
  <p>
  ${title.description}
  </p>`;

  return item;
};

//creazione del div.item
const createItem = () => {
  const fragment = document.createDocumentFragment();
  imgArray.forEach((element, index) => {
    const item = document.createElement("div");
    item.classList.add("item");
    if (index === 0) {
      item.classList.add("active");
    }
    item.innerHTML = `<img src="${element.src}" alt="${element.alt}">`;
    item.append(createTextImg(element));
    fragment.append(item);
  });

  return fragment;
};

//creazione del div nelle thumbnails
const createThumnail = () => {
  const fragment = document.createDocumentFragment();
  imgArray.forEach((element, index) => {
    const item = document.createElement("div");

    if (index === 0) {
      item.classList.add("thumbnail-active");
    }
    item.innerHTML = `<img src="${element.src}" alt="${element.alt}">`;
    fragment.append(item);
  });

  return fragment;
};

// evento per la prossima immagine
function nextImage() {
  images[counter].classList.remove("active"); //immagine principale
  imagesAll[counter].classList.remove("thumbnail-active"); //immagine thumbnail

  if (counter === Number(images.length) - 1) {
    counter = 0;
  } else {
    counter++;
  }

  images[counter].classList.add("active"); //immagine principale
  imagesAll[counter].classList.add("thumbnail-active"); //immagine thumbnail
}
// evento per la immagine precedente
function prevImage() {
  images[counter].classList.remove("active"); //immagine principale
  imagesAll[counter].classList.remove("thumbnail-active"); //immagine thumbnail

  if (counter === 0) {
    counter = images.length - 1;
  } else {
    counter--;
  }

  images[counter].classList.add("active"); //immagine principale
  imagesAll[counter].classList.add("thumbnail-active"); //immagine thumbnail
}

//! codice
//*elementi html
const imagesContainer = document.querySelector(".items");
const thumbnailsContainer = document.querySelector(".thumbnails");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const stop = document.querySelector(".stop");
const start = document.querySelector(".start");

//*variabili
let counter = 0;
const imgArray = [
  {
    alt: "Immagine 1",
    src: "./img/img1.jpg",
    title: "Uomo sul Lago",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    alt: "Immaggine 2",
    src: "./img/img2.jpg",
    title: "Paesino sul Lago",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    alt: "Immaggine 3",
    src: "./img/img3.jpg",
    title: "Londra",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    alt: "Immaggine 4",
    src: "./img/img4.jpg",
    title: "Città",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    alt: "Immaggine 5",
    src: "./img/img5.jpg",
    title: "Caraibi",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

// aggiungo le img e le thumnail ai loro contenitori html
imagesContainer.append(createItem());
thumbnailsContainer.append(createThumnail());

//inizializzo una variabile che raccoglie tutte le mie immagini .items (simile ad un array)
const images = document.querySelectorAll(".item");
//inizializzo una variabile che raccoglie tutte le mie immagini di .all
const imagesAll = document.querySelectorAll(".thumbnails div");

//! evento click sulle thumbnail
for (let i = 0; i < imagesAll.length; i++) {
  imagesAll[i].addEventListener("click", function () {
    for (let j = 0; j < imagesAll.length; j++) {
      if (j !== i) {
        images[j].classList.remove("active");
        imagesAll[j].classList.remove("thumbnail-active");
      }
    }
    images[i].classList.add("active");
    imagesAll[i].classList.add("thumbnail-active");
    counter = i;
  });
}

//!eventi bottoni al click e evento iniziale
next.addEventListener("click", nextImage);
prev.addEventListener("click", prevImage);

let startEvent = setInterval(nextImage, 1000);

start.addEventListener("click", function () {
  clearInterval(startEvent);
  startEvent = setInterval(nextImage, 1000);
});

stop.addEventListener("click", function () {
  clearInterval(startEvent);
});
