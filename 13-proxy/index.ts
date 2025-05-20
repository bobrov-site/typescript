//написать proxy, который будет отправлять запросы через отдельный класс API
// на https://dummyjson.com/products/1
// если id продукта меньше 10 и возвращать ошибку если больше

interface IProductAPI {
    getProductById(id: number): Promise<IProduct> | never;
}

interface IProduct {
    id: number
    title: string
    description: string
    category: string
    price: number
    discountPercentage: number
    //...
}

class API implements IProductAPI {
    private products: IProduct[] = []
    async getProductById(id: number): Promise<IProduct> | never {
        return fetch(`https://dummyjson.com/products/${id}`).then(res => res.json())
    }
}

class ProductProxy implements IProductAPI {
    constructor(private api: API, private idProduct: number) {

    }

    async getProductById(id: number): Promise<IProduct> | never {
        console.log(this.idProduct < 10)
        if (this.idProduct < 10) {
            return this.api.getProductById(id)
        }
        else {
            console.log('throw')
            throw new Error("Product not found")
        }
        
    }
}

const api = new API()
const id = 11
const productProxy = new ProductProxy(new API(), id)
async function run () {
try {
    const ok = await productProxy.getProductById(id) // ok
    return ok

}
catch (e: unknown) {
    if (e instanceof Error) {
        console.log(e.message)
    }
}
}

run() 