class List<T> {
    items: T[]

    constructor(items: T[]) {
        this.items = items
    }

    addItem(item: T) {
        this.items.push(item);
    }
}

const list = new List<number>([1,2,3])
// list.addItem('s') // error

list.addItem(4) // ok

class DoubleList<E> extends List<E> {
    constructor(items: E[]) {
        super(items)
    }

    double() {
        this.items = [...this.items, ...this.items]
    }
}

const doubleList = new DoubleList<number>([1,2,3])
doubleList.double()
doubleList.items // [1,2,3,1,2,3]