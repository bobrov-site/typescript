// реализовать паттерн iterator для массива объектов вида {id: 1, date: '01-01-2023, title: 'test}
// с возможностью обхдоа объекта как по дате, так и по id

class Item {
    constructor(public id: number, public date: string, public title: string) {}
}

class ItemList {
    private items: Item[] = []

    sortById() {
        this.items = this.items.sort((a, b) => a.id - b.id)
    }
    
    sortByDate() {
        this.items = this.items.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    }

    addItem(item: Item) {
        this.items.push(item)
    }

    getItems() {
        return this.items
    }

    count() {
        return this.items.length
    }

    getIdIterator() {
        return new IdIterator(this) 
    }

    getDateIterator() {
        return new DateIterator(this)
    }
}

interface IIterator<T> {
    current(): T | undefined
    next(): T | undefined
    prev(): T | undefined
    index(): number
}

class IdIterator implements IIterator<Item> {
    private position: number = 0
    private items: ItemList

    constructor(items: ItemList) {
        items.sortById()
        this.items = items
    }

    current(): Item | undefined {
        return this.items.getItems()[this.position]
    }
    next(): Item | undefined {
        return this.items.getItems()[++this.position]
    }
    prev(): Item | undefined {
        return this.items.getItems()[--this.position]
    }
    index(): number {
        return this.position
    }
    
}

class DateIterator implements IIterator<Item> {
    private position: number = 0
    private items: ItemList

    constructor(items: ItemList) {
        items.sortByDate()
        this.items = items
    }

    current(): Item | undefined {
        return this.items.getItems()[this.position]
    }
    next(): Item | undefined {
        return this.items.getItems()[++this.position]
    }
    prev(): Item | undefined {
        return this.items.getItems()[--this.position]
    }
    index(): number {
        return this.position
    }
}

const itemList = new ItemList()

itemList.addItem(new Item(1, '01-01-2023', 'test'))
itemList.addItem(new Item(2, '02-01-2023', 'test2'))
itemList.addItem(new Item(3, '03-01-2023', 'test3'))

const idIterator = itemList.getIdIterator()
const dateIterator = itemList.getDateIterator()

console.log(idIterator.current())