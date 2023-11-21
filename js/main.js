"use.strict";
//! funzioni

const createItem = () => {
  const fragment = document.createDocumentFragment();
  imgArray.forEach((element, index) => {
    const item = document.createElement("div");
    item.classList.add("item");
    if (index === 0) {
      item.classList.add("active");
    }
    item.innerHTML = `<img src="${element.src}" alt="${element.alt}">`;
    fragment.append(item);
  });

  return fragment;
};

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

//! codice
//*elementi html
const imagesContainer = document.querySelector(".items");
const thumbnailsContainer = document.querySelector(".thumbnails");

//*variabili
const imgArray = [
  {
    alt: "Immagine 1",
    src: "./img/img1.jpg",
    title: "Immagine 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    alt: "Immaggine 2",
    src: "./img/img2.jpg",
    title: "Immagine 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    alt: "Immaggine 3",
    src: "./img/img3.jpg",
    title: "Immagine 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    alt: "Immaggine 4",
    src: "./img/img4.jpg",
    title: "Immagine 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    alt: "Immaggine 5",
    src: "./img/img5.jpg",
    title: "Immagine 5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

imagesContainer.append(createItem());
thumbnailsContainer.append(createThumnail());
