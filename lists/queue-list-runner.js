const QL = require('./queue-list');
const QueueList = QL.QueueList;
const enqueue = QL.enqueue;
const forEach = QL.forEach;
const first = QL.first;
const last = QL.last;
const dequeue = QL.dequeue;


function printBook(book) {
    console.log(`Book name: "${book}"`);
}

function createBookList() {
    if (arguments.length === 0) {
        return null;
    }

    let products = QueueList(arguments[0]);
    let productIndex = 1;

    while (productIndex < arguments.length) {
        products = enqueue(products, arguments[productIndex]);
        productIndex++;
    }

    return products;
}

function run() {
    const bible = 'The Holy Bible';
    const aladin = 'Aladin';
    const faultInStars = 'The fault is in our stars';
    const gatsby = 'The great Gatsby';

    let bookList = createBookList(gatsby, bible, faultInStars, aladin);

    console.log('\n\nPRINTING LIST: ');
    forEach(bookList, printBook);
    console.log('\nPrinting the first book: ');
    printBook(first(bookList));
    console.log('\nPrinting the last book: ');
    printBook(last(bookList));

    bookList = dequeue(bookList);

    console.log('\n\nPRINTING LIST WITHOUT THE GREAT GATSBY: ');
    forEach(bookList, printBook);
    console.log('\nPrinting the first book: ');
    printBook(first(bookList));
    console.log('\nPrinting the last book: ');
    printBook(last(bookList));

    bookList = dequeue(bookList);

    console.log('\n\nPRINTING LIST WITHOUT THE HOLY BIBLE: ');
    forEach(bookList, printBook);
    console.log('\nPrinting the first book: ');
    printBook(first(bookList));
    console.log('\nPrinting the last book: ');
    printBook(last(bookList));

    bookList = dequeue(bookList, faultInStars);

    console.log('\n\nPRINTING LIST WITHOUT THE FAULT IS IN OUR STARS: ');
    forEach(bookList, printBook);
    console.log('\nPrinting the first book: ');
    printBook(first(bookList));
    console.log('\nPrinting the last book: ');
    printBook(last(bookList));
}

module.exports = {
    run: run,
};