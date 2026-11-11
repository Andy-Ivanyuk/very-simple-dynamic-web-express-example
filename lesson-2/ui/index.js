const listEl = document.querySelector("#product-list");

function productCard(product) {
  const card = document.createElement("a");
  card.className = "product";
  card.href = product.url;

  const image = document.createElement("img");
  image.src = product.image;
  image.alt = product.title;

  const title = document.createElement("h3");
  title.textContent = product.title;

  const author = document.createElement("p");
  author.className = "product__author";
  author.textContent = product.author;

  const price = document.createElement("p");
  price.className = "product__price";
  price.textContent = `${product.price} ₴`;

  card.append(image, title, author, price);
  return card;
}

async function load() {
  const response = await fetch("/api/products");
  const products = await response.json();

  listEl.replaceChildren(...products.map(productCard));
}

load();
