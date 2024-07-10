const menuItems = [
  {
    name: "Салат азиатский с мидиями и кальмарами",
    price: 8.99,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem delectus facere magni velit illum sequi voluptatum dolor illo ab quas. Fugiat quos consequatur similique doloribus, architecto voluptas ut cum sapiente?",
    img: "https://sitandeat.ru/upload/resize_cache/iblock/9d4/1200_1200_2/a7r45dxizi73ce1o8ndvyx3ccvtvuku6.JPG",
  },
  {
    name: "Салат Блондинка",
    price: 12.99,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem delectus facere magni velit illum sequi voluptatum dolor illo ab quas. Fugiat quos consequatur similique doloribus, architecto voluptas ut cum sapiente? ",
    img: "https://sitandeat.ru/upload/iblock/2af/2v6h89oudmomls76jp1wj5dszceo7dww.JPG",
  },
  {
    name: "Цезарь с семгой",
    price: 7.99,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem delectus facere magni velit illum sequi voluptatum dolor illo ab quas. Fugiat quos consequatur similique doloribus, architecto voluptas ut cum sapiente?",
    img: "https://sitandeat.ru/upload/resize_cache/iblock/66d/1200_1200_2/68cz3imfrls9zr7vjv05ah3rtrqw4oxu.jpg",
  },
  {
    name: "Щетка",
    price: 7.5,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem delectus facere magni velit illum sequi voluptatum dolor illo ab quas. Fugiat quos consequatur similique doloribus, architecto voluptas ut cum sapiente?",
    img: "https://sitandeat.ru/upload/resize_cache/iblock/4bf/1200_1200_2/m9d1fj0rx19gm6vpmpurwx43gj405odv.jpg",
  },

  {
    name: "Столичный с курицей",
    price: 7.99,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem delectus facere magni velit illum sequi voluptatum dolor illo ab quas. Fugiat quos consequatur similique doloribus, architecto voluptas ut cum sapiente?",
    img: "https://sitandeat.ru/upload/iblock/fda/6pyjssdgu2s971bimgdbcuxipg4u3hr4.JPG",
  },
  {
    name: "Свекла с черносливом и грецким орехом",
    price: 7.5,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem delectus facere magni velit illum sequi voluptatum dolor illo ab quas. Fugiat quos consequatur similique doloribus, architecto voluptas ut cum sapiente?",
    img: "https://sitandeat.ru/upload/resize_cache/iblock/478/1200_1200_2/j3z3tzz8zn2dqwfyh6eu8skwwd0g46yo.JPG",
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
