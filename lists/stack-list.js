function top(topNode) {
    return topNode.book;
}

function bottom(topNode) {
    let currentList = topNode;

    while (currentList.below !== null) {
        currentList = currentList.below;
    }

    return currentList.book;
}

function push(topNode, book) {
    const belowNode = topNode;
    topNode = StackList(book);
    topNode.below = belowNode;

    return topNode;
}

function pop(topNode) {
    const belowNode = topNode.below;
    topNode.below = null;
    topNode = belowNode;
    return topNode;
}

function forEach(topNode, fn) {
    let currentList = topNode;
    while (currentList !== null && !!fn && typeof fn === 'function') {
        fn(currentList.book);
        currentList = currentList.below;
    }
}

function StackList(book) {
    const linkedList = {
        book: book,
        below: null,
    };

    return linkedList;
}


module.exports = {
    StackList: StackList,
    push: push,
    pop: pop,
    bottom: bottom,
    top: top,
    forEach: forEach,
};