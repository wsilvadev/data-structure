const SL = require('./stack-list');
const StackList = SL.StackList;
const push = SL.push;
const forEach = SL.forEach;
const top = SL.top;
const bottom = SL.bottom;
const pop = SL.pop;


function printBook(book) {
    console.log(`Book name: "${book}"`);
}

function createBookList() {
    if (arguments.length === 0) {
        return null;
    }

    let products = StackList(arguments[0]);
    let productIndex = 1;

    while (productIndex < arguments.length) {
        products = push(products, arguments[productIndex]);
        productIndex++;
    }

    return products;
}

function run() {
    const bible = 'The Holy Bible';
    const aladin = 'Aladin';
    const faultInStars = 'The fault is in our stars';
    const gatsby = 'The great Gatsby';

    let bookList = createBookList(aladin, faultInStars, bible, gatsby);

    console.log('\n\nPRINTING LIST: ');
    forEach(bookList, printBook);
    console.log('\nPrinting the top book: ');
    printBook(top(bookList));
    console.log('\nPrinting the bottom book: ');
    printBook(bottom(bookList));

    bookList = pop(bookList);

    console.log('\n\nPRINTING LIST WITHOUT THE GREAT GATSBY: ');
    forEach(bookList, printBook);
    console.log('\nPrinting the top book: ');
    printBook(top(bookList));
    console.log('\nPrinting the bottom book: ');
    printBook(bottom(bookList));

    bookList = pop(bookList);

    console.log('\n\nPRINTING LIST WITHOUT THE HOLY BIBLE: ');
    forEach(bookList, printBook);
    console.log('\nPrinting the top book: ');
    printBook(top(bookList));
    console.log('\nPrinting the bottom book: ');
    printBook(bottom(bookList));

    bookList = pop(bookList, faultInStars);

    console.log('\n\nPRINTING LIST WITHOUT THE FAULT IS IN OUR STARS: ');
    forEach(bookList, printBook);
    console.log('\nPrinting the top book: ');
    printBook(top(bookList));
    console.log('\nPrinting the bottom book: ');
    printBook(bottom(bookList));
}

module.exports = {
    run: run,
};