# Carosello Array Objects

![Thumbnail](/readme-img/thumbnail.jpeg)

_HTML+css+js_

Dato un array di oggetti letterali con:

- url dell’immagine
- titolo
- descrizione
  Creare un carosello come nella foto allegata.

## Svolgimento

L' esercizio è stato svolto prendendo come base [array carousel](https://github.com/CaldatoLuca/js-array-carousel), di conseguenza le metodica usata è pressochè identica.

Le differenze maggiori si ritrovano nel modo in cui i dati sono stati forniti e alla loro manipolazione.

In questo caso, infatti, le immagini sono state inserite nel dom tramite un array di oggetti (che ha anche permesso l' inserimento di una descrizione dell' immagine stessa).

```js
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
```

Nel prossimo codice è presente il metodo `.forEach` degli array, grazie al quale è possibile 'sostituire' in maniera ottimizzata il classico ciclo for.

```js
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
```
