const LL = require('./lists/linked-list');
const LinkedList = LL.LinkedList;
const add = LL.add;
const forEach = LL.forEach;
const first = LL.first;
const last = LL.last;
const remove = LL.remove;

function createProduct(name, price) {
    return { name: name, price: price };
}

const notebook = createProduct('HP Probook 430 G2', 1500);
const fork = createProduct('Garfo em português', 1.4);
const plate = createProduct('Prato', 2.3);
const knife = createProduct('Faca de mesa', 4.2);

function createProductList() {
    if (arguments.length === 0) {
        return null;
    }

    let products = LinkedList(arguments[0]);
    let productIndex = 1;

    while (productIndex < arguments.length) {
        products = add(products, arguments[productIndex]);
        productIndex++;
    }

    return products;
}



function printProduct(product) {
    console.log(`Product name: ${product.name}, price: ${product.price}`);
}

let productList = createProductList(notebook, fork, plate, knife);

console.log('\n\nPRINTING LIST: ');
forEach(productList, printProduct);
console.log('\nPrinting the first product: ');
printProduct(first(productList));
console.log('\nPrinting the last product: ');
printProduct(last(productList));

const listWithoutNotebook = remove(productList, notebook);

console.log('\n\nPRINTING LIST WITHOUT NOTEBOOK: ');
forEach(listWithoutNotebook, printProduct);
console.log('\nPrinting the first product: ');
printProduct(first(listWithoutNotebook));
console.log('\nPrinting the last product: ');
printProduct(last(listWithoutNotebook));


productList = createProductList(notebook, fork, plate, knife);

const listWithoutFork = remove(productList, fork);

console.log('\n\nPRINTING LIST WITHOUT FORK: ');
forEach(listWithoutFork, printProduct);
console.log('\nPrinting the first product: ');
printProduct(first(listWithoutFork));
console.log('\nPrinting the last product: ');
printProduct(last(listWithoutFork));


productList = createProductList(notebook, fork, plate, knife);

const listWithoutKnife = remove(productList, knife);

console.log('\n\nPRINTING LIST WITHOUT KNIFE: ');
forEach(listWithoutKnife, printProduct);
console.log('\nPrinting the first product: ');
printProduct(first(listWithoutKnife));
console.log('\nPrinting the last product: ');
printProduct(last(listWithoutKnife));

