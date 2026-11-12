const { saveProducts } = require("./store");
const { JSDOM } = require('jsdom');

const SITE = "https://vivat.com.ua";
const PAGE_URL = `${SITE}/category/ukrainska-proza/`;

async function scrape() { 
const params = new URLSearchParams({
    page: 2,
    filter: "product_status_is_v-naiavnosti",
  });

  const response = await fetch(`${PAGE_URL}?${params}`);
  const html = await response.text();

  const dom = new JSDOM(html);
  const document = dom.window.document;

  const cards = document.querySelectorAll("div:has(> .icons)");
  const products = [...cards].map(toProduct);
  saveProducts(products)
  console.log(products[0]);

}
function toProduct(card) {
  const link = card.querySelector("a.title");
  const source = card.querySelector("source");

  return {
    title: link.textContent,
    author: card.querySelector(".author").textContent,
    price: Number(card.querySelector("p:has(+ span)").textContent),
    image: SITE + source.getAttribute("srcset"),
    url: SITE + link.getAttribute("href"),
  };
}

scrape();
