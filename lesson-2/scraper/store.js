const fs = require('node:fs/promises');

const OUTPUT = '../server/data/products.json';

async function saveProducts(products) {
    await fs.writeFile(OUTPUT, JSON.stringify(products, null, 2));
    console.log('saved', products.length, 'items');
}

module.exports = { saveProducts }