const menuItems = [
  {
    name: "Бешармамк",
    price: 8.99,
    description: "Беш бармак даамду тамак койдун эти менен +быжы",
    img: "https://lh4.googleusercontent.com/proxy/MU5dtIC8wQEnkTNnJJHrzltIxRr7fRouUWBfizOStjxic4aaoOIsq-nOJabM8le71-5qVBPv5HGGlTDkIGIIz1pimZM7hLJjll4YCNE3J6rEbfr8BOKDOEu6MrieXSVaphZAUAcEllBlQgw5nh5uBphKk_2Tu2YhzMCh",
  },
  {
    name: "Борщ",
    price: 12.99,
    description: "Юорщ из гоядины даамду тамак жээп кор ",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSizw-LkFmJ4u5sFCDULK41b_dSJdWpDcet5Q&s",
  },
  {
    name: "Плов",
    price: 7.99,
    description: "Плов жылкынын эти",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy5M4fjUjJ8-6y6J4S2sxx6aLIrkN5hfnJIA&s",
  },
  {
    name: "Лагман",
    price: 7.5,
    description: "Лагман топостун эди",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXHIk7VseufVHKe1Aib0jNqBY719FTuXtbj-XfsJ75Tdzz6BebfVl0JDFJCnVPYLCAZrc&usqp=CAU",
  },

  {
    name: "Манты",
    price: 7.99,
    description: "Манты койдун эди 5ш",
    img: "https://avesta.tj/wp-content/uploads/2023/11/manti1-0-0-0-0-1599800240.jpg",
  },
  {
    name: "Курдак",
    price: 7.5,
    description: "Курдак койдун эди",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgATwaIFoLgUpNPkgjgU6XZLzl5rwny5mzErKeWtS7naDA4DcWIoj99BQEU6nTJidlMTA&usqp=CAU",
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
