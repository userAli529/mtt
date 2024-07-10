const menuItems = [
  {
    name: "Мини Шаурма",
    price: 8.99,
    description: "шаурма  с миясом",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiUFxqeTB-Sxp63lfa4EPn3lUwY3a0QS1OGg&s",
  },
  {
    name: "Ход дог",
    price: 12.99,
    description: "ход дог",
    img: "https://kulinarnayamozaika.ru/wp-content/uploads/2020/06/hot-dog-min.jpg",
  },
  {
    name: "Классика Шаурма",
    price: 7.99,
    description: "Шаурма  мясом",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiUFxqeTB-Sxp63lfa4EPn3lUwY3a0QS1OGg&s",
  },
  {
    name: "Мини Бургер",
    price: 7.5,
    description: "бургер мини",
    img: "https://cdn-bgdlb.nitrocdn.com/ScfbKmHkXloHIuZKookRgAbkURQAauLO/assets/static/optimized/rev-30049aa/wp-content/uploads/chto-est-i-pit.jpg",
  },
  {
    name: "2x Бургеркинг",
    price: 7.5,
    description: "Delicious burger with lettuce, tomato, and cheese.",
    img: "https://cdn-bgdlb.nitrocdn.com/ScfbKmHkXloHIuZKookRgAbkURQAauLO/assets/static/optimized/rev-30049aa/wp-content/uploads/chto-est-i-pit.jpg",
  },
];

const menuContainer = document.querySelector(".container-box");

menuItems.forEach((item) => {
  const movieDiv = document.createElement("div");
  movieDiv.className = "movie";

  const img = document.createElement("img");
  img.src = item.img;
  img.alt = item.name;

  const movieInfoDiv = document.createElement("div");
  movieInfoDiv.className = "movie-info";

  const h3 = document.createElement("h3");
  h3.textContent = item.name;

  const span = document.createElement("span");
  span.className = "red";
  span.textContent = `$${item.price.toFixed(2)}`;

  const overviewDiv = document.createElement("div");
  overviewDiv.className = "overview";

  const overviewH3 = document.createElement("h3");
  overviewH3.textContent = item.name;

  const overviewText = document.createElement("p");
  overviewText.textContent = item.description;

  movieInfoDiv.appendChild(h3);
  movieInfoDiv.appendChild(span);

  overviewDiv.appendChild(overviewH3);
  overviewDiv.appendChild(overviewText);

  movieDiv.appendChild(img);
  movieDiv.appendChild(movieInfoDiv);
  movieDiv.appendChild(overviewDiv);

  menuContainer.appendChild(movieDiv);
});
