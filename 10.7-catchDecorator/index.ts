interface ICarService {
    cars: number
    getCarsNumber() : number | never
}

class CarService implements ICarService {
    cars = 99
    @Catch()
    getCarsNumber(): number | never {
        throw new Error('message error')
    }
}

function Catch(rethrow: boolean = false) {
    return (
        target: Object,
        propertyKey: string | symbol,
        descriptor: PropertyDescriptor
    ) => {
        const oldValue = descriptor.value
        console.log(typeof oldValue)
        descriptor.value = () => {
            try {
                oldValue()
                console.log('success')
            }
            catch (e: unknown) {
                if (e instanceof Error) {
                    console.log('error', e.message)
                }
                if (rethrow) {
                    throw e
                }
            }
        }
    }
}

const carService = new CarService()

carService.getCarsNumber()