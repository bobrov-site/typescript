interface ICarServiceTodo {
    cars: number
}

class CarServiceTodo implements ICarServiceTodo {
    @Max(2000)
    cars = 1000
}

function Max(max: number) {
    return (target: Object, propertyKey: string | symbol) => {
        let value: number
        const getter = function() {
            return value
        }

        const setter = function(newValue: number) {
            if (newValue > max) {
                throw new Error(`must be less than ${max}`)
            }
            value = newValue
        }

        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter,
        })
    }
}



