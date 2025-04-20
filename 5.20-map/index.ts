type Primitive = string | number | boolean

type Collection = [Primitive, Primitive]

class MyHashMap {
    collections: Collection[] = []
    set (key: Primitive, value: Primitive) {
        this.collections.push([key, value])
    }

    get (key: Primitive) {
        return this.collections.find(c => c[0] === key)?.[1]
    }

    delete (key: Primitive) {
        this.collections = this.collections.filter(c => c[0] !== key)
    }

    clear () {
        this.collections = []
    }
}


const map = new MyHashMap()

map.set(1, 'value')
map.set(1, 'new value')
const value = map.get(1)
console.log(value)