type DeliveryType = 'home' | 'pickup'

class Delivery {
    date: Date
    constructor(date: Date) {
        this.date = date
    }
}

class HomeDelivery extends Delivery {
    address: string
    constructor(date: Date, address: string) {
        super(date)
        this.address = address
    }
}

class PickupDelivery extends Delivery {
    idShop: string
    constructor(date: Date, idShop: string) {
        super(date)
        this.idShop = idShop
    }
}

class Product {
    id: string
    name: string
    price: number

    constructor(id: string, name: string, price: number) {
        this.id = id
        this.name = name
        this.price = price
    }
}


class Cart {
    private products: Product[] = []
    private delivery: Delivery | null = null

    addProduct(product: Product) {
        this.products.push(product)
    }

    removeProduct(id: string) {
        this.products = this.products.filter(product => product.id !== id)
    }

    getTotalPrice() {
        return this.products.reduce((acc, product) => acc + product.price, 0)
    }

    setDelivery(delivery: Delivery) {
        this.delivery = delivery
    }

    checkout() {
        if (!this.delivery || this.products.length === 0) {
            throw new Error('Cart is empty')
        }
        return alert(`Total price: ${this.getTotalPrice()}\nDelivery: ${this.delivery}`)
    }
    
}

const cart1 = new Cart()
const cart2 = new Cart()
const product1 = new Product('1', 'Product 1', 100)
const product2 = new Product('2', 'Product 2', 200)
const delivery1 = new HomeDelivery(new Date(), 'street pushkina')
const delivery2 = new PickupDelivery(new Date(), '123')
cart1.addProduct(product1)
cart1.addProduct(product2)
cart1.setDelivery(delivery1)
const totalPrice = cart1.getTotalPrice()
cart1.checkout()
cart2.addProduct(product1)
cart2.setDelivery(delivery2)
cart2.checkout()

