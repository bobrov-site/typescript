function exampleFunction (a: number): boolean {
    return a > 0
}

class SomeUserClass {
    @AllowFunc(exampleFunction)
    age: number = 30
}

function AllowFunc<T extends (...args: any[]) => any>(func: T) {
    return (
        target: Object,
        propertyKey: string | symbol
    ) => {
        let value: number;
        
        Object.defineProperty(target, propertyKey, {
            get: () => value,
            set: (newValue: number) => {
                if (func(newValue)) {
                    value = newValue;
                    console.info('nice')
                } else {
                    throw new Error('Function is not allowed');
                }
            }
        });
    }
}

const user = new SomeUserClass()

user.age = 30