const { saveProducts } = require("./store");

const SITE = 'https://vivat.com.ua';
const API = 'https://vivat.com.ua/_next/data/4yuoaqFmN6ILX9A6rPSL2/uk/category/klasychna-ukrainska-proza.json?code=klasychna-ukrainska-proza';


async function scrape() {
    const res = await fetch(API);
    const data = await res.json();
    const products = data.pageProps.products.map(item => toProduct(item));

    saveProducts(products)
}

function toProduct(scrapeItem) {
    return {
        url: `${SITE}/product/${scrapeItem.code}`,
        title: scrapeItem.title,
        author: scrapeItem.author.join(', '),
        image: `${SITE}/${scrapeItem.image}`,
        price: scrapeItem.price.payableAmount+100,
    }
} 

scrape();