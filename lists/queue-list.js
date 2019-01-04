function first(firstNode) {
    return firstNode.book;
}

function last(firstNode) {
    let currentList = firstNode;

    while (currentList.next !== null) {
        currentList = currentList.next;
    }

    return currentList.book;
}

function enqueue(firstNode, book) {
    let currentList = firstNode;
    while (currentList.next !== null) {
        currentList = currentList.next;
    }

    currentList.next = QueueList(book);

    return firstNode;
}

function dequeue(firstNode) {
    const nextNode = firstNode.next;
    firstNode.next = null;
    firstNode = nextNode;
    return firstNode;
}

function forEach(firstNode, fn) {
    let currentList = firstNode;
    while (currentList !== null && !!fn && typeof fn === 'function') {
        fn(currentList.book);
        currentList = currentList.next;
    }
}

function QueueList(book) {
    const linkedList = {
        book: book,
        next: null,
    };

    return linkedList;
}


module.exports = {
    QueueList: QueueList,
    enqueue: enqueue,
    dequeue: dequeue,
    last: last,
    first: first,
    forEach: forEach,
};