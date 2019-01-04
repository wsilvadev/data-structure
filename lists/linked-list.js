function first(firstNode) {
    return firstNode.product;
}

function last(firstNode) {
    let currentList = firstNode;

    while (currentList.next !== null) {
        currentList = currentList.next;
    }

    return currentList.product;
}

function add(firstNode, product) {
    let currentList = firstNode;
    while (currentList.next !== null) {
        currentList = currentList.next;
    }

    currentList.next = LinkedList(product);

    return firstNode;
}

function remove(firstNode, product) {

    let nextNode = firstNode.next;

    if (firstNode.product === product) {
        firstNode.next = null;
        firstNode = nextNode;

        return firstNode;
    }

    let currentNode = firstNode;

    while (nextNode !== null && nextNode.product !== product) {
        currentNode = nextNode;
        nextNode = nextNode.next;
    }

    if (nextNode !== null) {
        const nodeToRemove = nextNode;
        const nodeToStay = nodeToRemove.next;
        nodeToRemove.next = null;
        currentNode.next = nodeToStay;
    }

    return firstNode;
}

function forEach(firstNode, fn) {
    let currentList = firstNode;
    while (currentList !== null && !!fn && typeof fn === 'function') {
        fn(currentList.product);
        currentList = currentList.next;
    }
}

function LinkedList(product) {
    const linkedList = {
        product: product,
        next: null,
    };

    return linkedList;
}


module.exports = {
    LinkedList: LinkedList,
    add: add,
    remove: remove,
    first: first,
    last: last,
    forEach: forEach,
};